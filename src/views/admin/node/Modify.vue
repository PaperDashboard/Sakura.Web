<template>
    <div id="wapper">
        <br>
        <el-card>
            <div slot="header" class="clearfix">
                <span>{{ $t('admin.node.create.title') }}</span>
            </div>
            <el-form label-width="120px" :rules="rules" status-icon ref="form" :model="form">
                <el-form-item :label="$t('admin.node.create.form.name')" prop="name">
                    <el-input
                        :placeholder="$t('admin.node.create.form.placeholder-name')"
                        v-model="form.name">
                    </el-input>
                </el-form-item>

                <el-form-item :label="$t('admin.node.create.form.address')" prop="address">
                    <el-input
                        :placeholder="$t('admin.node.create.form.placeholder-address')"
                        v-model="form.address">
                    </el-input>
                </el-form-item>

                <el-form-item :label="$t('admin.node.create.form.type')">
                    <el-radio-group v-model="form.kind">
                        <el-radio-button
                            v-for="(thisType, index) in nodeType"
                            :key="index"
                            :label="thisType">
                            {{ nodeKindToType(thisType) }}
                        </el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <el-form-item :label="$t('admin.node.create.form.enable')">
                    <el-switch v-model="form.enable"></el-switch>
                </el-form-item>

                <el-form-item :label="$t('admin.node.create.form.only-signal-port')">
                    <el-switch v-model="form.onlySignalPort"></el-switch>
                </el-form-item>

                <el-form-item :label="$t('admin.node.create.form.rate')" prop="rate">
                    <el-input
                        :placeholder="$t('admin.node.create.form.placeholder-rate')"
                        v-model.number="form.rate">
                    </el-input>
                </el-form-item>

                <el-form-item :label="$t('admin.node.create.form.level')" prop="level">
                    <el-input
                        :placeholder="$t('admin.node.create.form.placeholder-level')"
                        v-model.number="form.level">
                    </el-input>
                </el-form-item>


                <transition name="fade">
                    <el-form-item :label="$t('admin.node.create.form.port')" v-if="form.kind === 1" prop="port">
                        <el-input
                            :placeholder="$t('admin.node.create.form.placeholder-port')"
                            v-model.number="form.port">
                        </el-input>
                    </el-form-item>
                </transition>

                <transition-group v-if="form.kind === 0" name="fade">
                    <el-form-item
                        v-for="(port, index) in form.signalPort"
                        :key="port.key"
                        :prop="'signalPort.' + index + '.value'"
                        :label="$t('admin.node.create.form.signal-port')"
                        :rules="[
                            { type: 'integer', message: $t('admin.node.create.form.error.non-number') },
                            // { min: 0, max: 65565, message: '端口大小错误', trigger: 'blur,change' }
                        ]">
                            <div class="fluxItem">
                                <el-input class="portItem" v-model.number="port.value"></el-input>
                                <el-button @click.prevent="removePort(port)">{{ $t('static.delete') }}</el-button>
                            </div>
                    </el-form-item>
                </transition-group>

                <transition v-if="form.kind === 0" name="fade">
                    <el-form-item>
                        <el-button @click="addPort">{{ $t("admin.node.create.form.create-signal-port") }}</el-button>
                    </el-form-item>
                </transition>


                <el-form-item :label="$t('admin.node.create.form.detail')" prop="detail">
                    <el-input type="textarea" v-model="form.detail"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button @click="onHandOut" type="primary">
                        {{ $t('admin.node.create.submit') }}
                    </el-button>
                    <el-button v-if="edit_mode" @click="destory" type="danger">
                        {{ $t('admin.node.create.destory') }}
                    </el-button>
                    <el-button @click="$router.push({ name: 'AdminNodeList' })">
                        {{ $t('static.cancel') }}
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import { getNodeTypes, nodeKindToType } from '@/utils/node';
    import { create, getInfo, destory, update } from '@/api/admin/node';

    export default {
        data() {
            return {
                nodeType: getNodeTypes(),
                type: 'create',
                loading: false,
                edit_mode: false,
                form: {
                    name: '',
                    address: '',
                    enable: true,
                    kind: 0,
                    rate: 1,
                    level: 0,
                    port: 443,
                    detail: '',
                    onlySignalPort: false,
                    signalPort: [{
                        value: '',
                        key: Date.now(),
                    }],
                },
                rules: {
                    name: [
                        { required: true, message: this.$t('admin.node.create.form.error.non-name') },
                    ],
                    address: [
                        { required: true, message: this.$t('admin.node.create.form.error.non-address') },
                    ],
                    level: [
                        { required: true, message: this.$t('admin.node.create.form.error.non-level') },
                        { type: 'number', message: this.$t('admin.node.create.form.error.number-level') },
                    ],
                    rate: [
                        { required: true, message: this.$t('admin.node.create.form.error.non-rate') },
                        { type: 'number', message: this.$t('admin.node.create.form.error.number-rate') },
                    ],
                    port: [
                        { required: true, message: this.$t('admin.node.create.form.error.non-port') },
                        { type: 'number', message: this.$t('admin.node.create.form.error.number-port') },
                    ],
                },
            };
        },
        methods: {
            nodeKindToType,
            async onHandOut() {
                const status = await this.$refs.form.validate();
                if (status) {
                    this.loading = true;
                    // Deep Copy node infomation, to bypass the vaule watch
                    const postData = Object.assign({}, this.form);
                    postData.signalPort = postData.signalPort.map(item => item.value);
                    const localeBase = this.edit_mode ? 'admin.node.edit' : 'admin.node.create';
                    try {
                        if (this.edit_mode) {
                            const nodeId = this.$route.params.id;
                            await update(nodeId, postData);
                        } else {
                            await create(postData);
                        }
                        this.$notify.info({
                            title: this.$t(`${localeBase}.message-title`),
                            message: this.$t(`${localeBase}.success`),
                        });
                        setTimeout(() => {
                            this.$router.push({ name: 'AdminNodeList' });
                        }, 2000);
                    } catch (err) {
                        this.$notify.error({
                            title: this.$t(`${localeBase}.message-title`),
                            message: err.response && err.response.data.error
                                ? err.response.data.error
                                : err.message,
                        });
                    } finally {
                        this.loading = false;
                    }
                }
            },
            addPort() {
                this.form.signalPort.push({
                    value: '',
                    key: Date.now(),
                });
            },
            removePort(port) {
                const index = this.form.signalPort.indexOf(port);
                if (index !== -1) {
                    this.form.signalPort.splice(index, 1);
                }
            },
            async destory() {
                const nodeId = this.$route.params.id;
                await destory(nodeId);
                this.$notify.info({
                    title: this.$t('admin.node.delete.message-title'),
                    message: this.$t('admin.node.delete.success'),
                });
                this.$router.push({ name: 'AdminNodeList' });
            },
        },
        mounted() {
            if (this.$route.params.id) {
                this.loading = true;
                this.edit_mode = true;
                const nodeId = this.$route.params.id;
                getInfo(nodeId).then((resp) => {
                    const node = resp.data.node;
                    // eslint-disable-next-line
                    node.signalPort = node.signalPort.map((item) => {
                        return {
                            value: item,
                            key: Date.now(),
                        };
                    });
                    Object.assign(this.form, node);
                    this.loading = false;
                }).catch(() => {
                    this.loading = false;
                });
            }
        },
    };
</script>


<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0
    }

    .portItem {
        margin-right: 24px;
    }

    .fluxItem {
        display: flex;
    }

</style>
