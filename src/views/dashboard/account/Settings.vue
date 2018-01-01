<template>
    <div>
        <br>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('dashboard.settings.form.title') }}</span>
            </div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item :label="$t('dashboard.settings.form.link-password')">
                    <el-input v-model="form.linkPassword"></el-input>
                </el-form-item>
                <el-form-item :label="$t('dashboard.settings.form.method')">
                    <el-select v-model="form.method" style="width: 100%">
                        <el-option
                            v-for="item in METHODS"
                            :key="item"
                            :label="item"
                            :value="item"
                            >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('dashboard.settings.form.protocol')">
                    <el-select v-model="form.protocol" style="width: 100%">
                        <el-option
                            v-for="item in PROTOCOL"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item :label="$t('dashboard.settings.form.obfs')">
                    <el-select v-model="form.obfs" style="width: 100%">
                        <el-option
                            v-for="item in OBFS"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="saveSettings">{{ $t('dashboard.settings.form.save') }}</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { updateSettings } from '@/api/user/settings';
    import shadowsocksr from '@/defs/shadowsocksr';

    export default {
        data() {
            return {
                form: {
                    linkPassword: '',
                },
            };
        },
        methods: {
            async saveSettings() {
                try {
                    const res = await updateSettings(this.form);
                    if (res.data.status === 'success') {
                        this.$notify.info({
                            title: this.$t('dashboard.settings.notify.success-title'),
                            message: this.$t('dashboard.settings.notify.success-message'),
                        });
                    }
                } catch (err) {
                    this.$notify.error({
                        title: this.$t('dashboard.settings.notify.error-title'),
                        message: err.response && err.response.data.error
                                    ? this.$t(err.response.data.error)
                                    : this.$t(err.message),
                    });
                }
            },
        },
        computed: {
            ...mapGetters('auth', ['profile']),
            ...shadowsocksr,
        },
        mounted() {
            this.form = this.profile;
        },
    };
</script>
