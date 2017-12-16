<template>
    <div id="login-model">
        <el-card class="box-card">
            <h3 class="center">{{ $t("auth.login.title") }}</h3>
            <el-form autoComplete="on" ref="loginForm" label-position="left" label-width="0px" class="card-box" :rules="rules" status-icon :model="form">
                <el-form-item prop="email">
                    <el-input :placeholder="$t('auth.login.input-email')" v-model="form.email">
                        <i slot="prefix" class="mdl-icon-input material-icons el-input__icon">mail</i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input :placeholder="$t('auth.login.input-password')" type="password" v-model="form.password">
                        <i slot="prefix" class="mdl-icon-input material-icons el-input__icon">lock</i>
                    </el-input>
                </el-form-item>
                <el-form-item class="center">
                    <el-button type="primary" :loading="this.loginLoading" @click="loginTo">
                        {{ $t("auth.login.submit") }}
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                rules: {
                    email: [
                        { required: true, message: this.$t('auth.error.non-input-email') },
                    ],
                    password: [
                        { required: true, message: this.$t('auth.error.non-input-password') },
                    ],
                },
                loginLoading: false,
            };
        },
        methods: {
            loginTo() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.loginLoading = true;
                        this.login(this.form).then(() => {
                            this.loginLoading = false;
                            this.$notify.info({
                                title: this.$t('auth.login.login'),
                                message: this.$t('auth.login.login-success'),
                            });
                            setTimeout(() => {
                                this.$router.push('/');
                            }, 2000);
                        }).catch((err) => {
                            this.loginLoading = false;
                            this.$notify.error({
                                title: this.$t('auth.login.login'),
                                message: err.response && err.response.data.error
                                    ? this.$t(err.response.data.error)
                                    : err.message,
                            });
                        });
                    }
                });
            },
            ...mapActions('auth', ['login']),
        },
    };
</script>


<style scoped>
    #login-model {
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
