<template>
    <div>
        <br>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>用户设定</span>
            </div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="链接密码">
                    <el-input v-model="form.linkPassword"></el-input>
                </el-form-item>
                <el-form-item label="加密">
                    <el-input v-model="form.method"></el-input>
                </el-form-item>
                <el-form-item label="协议">
                    <el-input v-model="form.protocol"></el-input>
                </el-form-item>
                <el-form-item label="混淆方式">
                    <el-input v-model="form.obfs"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="saveSettings">保存设定</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { updateSettings } from '@/api/user/settings';

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
                            title: '操作成功',
                            message: '配置已保存',
                        });
                    }
                } catch (err) {
                    this.$notify.error({
                        title: '操作失败',
                        message: err.response && err.response.data.error
                                    ? this.$t(err.response.data.error)
                                    : this.$t(err.message),
                    });
                }
            },
        },
        computed: {
            ...mapGetters('auth', ['profile']),
        },
        mounted() {
            this.form = this.profile;
        },
    };
</script>
