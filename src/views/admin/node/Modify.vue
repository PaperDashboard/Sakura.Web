<template>
    <div id="wapper">
        <br>
        <el-card>
            <div slot="header" class="clearfix">
                <span>{{ $t('admin.node.create.title') }}</span>
            </div>
            <el-form label-width="150px" :rules="rules" status-icon ref="form" :model="form">
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

                <el-form-item>
                    <el-button @click="onHandOut" type="primary">
                        {{ $t('admin.node.create.submit') }}
                    </el-button>
                    <el-button @click="$router.push({ name: 'AdminNodeLIst' })">
                        {{ $t('static.cancel') }}
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import { getNodeTypes, nodeKindToType } from '@/utils/node';

    export default {
        data() {
            return {
                nodeType: getNodeTypes(),
                type: 'create',
                form: {
                    name: '',
                    address: '',
                    enable: true,
                    kind: 0,
                    rate: 1,
                    level: 0,
                    port: 443,
                },
                rules: {
                    name: [
                        { required: true, message: '请输入节点名称' },
                    ],
                    address: [
                        { required: true, message: '请输入节点地址' },
                    ],
                    level: [
                        { required: true, message: '请输入节点等级' },
                        { type: 'number', message: '节点等级必须为数字值' },
                    ],
                    rate: [
                        { required: true, message: '请输入流量比例' },
                        { type: 'number', message: '流量比例必须为数字值' },
                    ],
                    port: [
                        { required: true, message: '请输入链接端口' },
                        { type: 'number', message: '链接端口必须为数字值' },
                    ],
                },
            };
        },
        methods: {
            nodeKindToType,
            onHandOut() {
                // Fixme: Debug
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.$notify.info({
                            message: this.form,
                        });
                    } else {
                        this.$notify.error({
                            message: this.form,
                        });
                    }
                });
            },
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
</style>
