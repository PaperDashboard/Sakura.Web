<template>
    <div id="reg-model">
        <el-card class="box-card">
            <h3 class="center">{{ $t("auth.register.title") }}</h3>
            <el-form autoComplete="on" ref="regForm" label-position="left" label-width="0px" class="card-box" :rules="rules" status-icon :model="form">
                <el-form-item prop="username">
                    <el-input :placeholder="$t('auth.register.input-username')" v-model="form.username">
                        <i slot="prefix" class="mdl-icon-input material-icons el-input__icon">account_circle</i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input :placeholder="$t('auth.register.input-email')" v-model="form.email">
                        <i slot="prefix" class="mdl-icon-input material-icons el-input__icon">mail</i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input :placeholder="$t('auth.register.input-password')" type="password" v-model="form.password">
                        <i slot="prefix" class="mdl-icon-input material-icons el-input__icon">lock</i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="inviteCode">
                    <el-input :placeholder="$t('auth.register.input-invite')" v-model="form.inviteCode">
                        <i slot="prefix" class="mdl-icon-input material-icons el-input__icon">record_voice_over</i>
                    </el-input>
                </el-form-item>
                <el-form-item class="center">
                    <el-button type="primary" :loading="this.loading" @click="registerTo">
                        {{ $t("auth.login.submit") }}
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import { register as R } from '@/api/auth';

    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    email: '',
                    inviteCode: this.$route.params.id,
                },
                rules: {
                    username: [
                        { required: true, message: this.$t('auth.error.non-input-username') },
                    ],
                    email: [
                        { required: true, message: this.$t('auth.error.non-input-email') },
                    ],
                    password: [
                        { required: true, message: this.$t('auth.error.non-input-password') },
                    ],
                    inviteCode: [
                        { required: true, message: this.$t('auth.error.non-input-invite') },
                    ],
                },
                loading: false,
            };
        },
        methods: {
            registerTo() {
                this.$refs.regForm.validate((valid) => {
                    if (valid) {
                        this.loginLoading = true;
                        R(this.form.email, this.form.password, this.form.username, this.form.inviteCode)
                            .then(() => {
                                this.loginLoading = false;
                                this.$notify.info({
                                    title: this.$t('auth.register.register'),
                                    message: this.$t('auth.register.register-success'),
                                });
                                setTimeout(() => {
                                    this.$router.push({ name: 'Login' });
                                }, 2000);
                            }).catch((err) => {
                                this.loginLoading = false;
                                this.$notify.error({
                                    title: this.$t('auth.register.register'),
                                    message: err.response && err.response.data.error
                                        ? err.response.data.error
                                        : err.message,
                                });
                            });
                    }
                });
            },
        },
    };
</script>

<style scoped>
    #reg-model {
        margin-top: 15vh;
        height: 100px;
    }
    .center {
        text-align: center;
    }
</style>

<style>
    .mdl-icon-input {
        font-size: 16px;
        padding-top: 2px;
    }
</style>
