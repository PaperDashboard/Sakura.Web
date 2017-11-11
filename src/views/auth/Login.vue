<template>
    <full-screen>
        <div id="login-model">
            <el-card class="box-card">
                <h3 class="center">{{ $t("auth.login.title") }}</h3>
                <el-form autoComplete="on" ref="loginForm" label-position="left" label-width="0px" class="card-box">
                    <el-form-item prop="username">
                        <el-input :placeholder="$t('auth.login.input-email')" v-model="email">
                            <i slot="prefix" class="mdl-icon-input material-icons el-input__icon">mail</i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input :placeholder="$t('auth.login.input-password')" type="password" v-model="password">
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
    </full-screen>
</template>

<script>
    import { mapActions } from 'vuex';
    import FullScreen from '@/components/FullScreen';

    export default {
        data() {
            return {
                email: '',
                password: '',
                loginLoading: false,
            };
        },
        methods: {
            loginTo() {
                this.loginLoading = true;
                this.login({
                    email: this.email,
                    password: this.password,
                }).then(() => {
                    this.loginLoading = false;
                    this.$notify.info({
                        title: this.$t('auth.login.login'),
                        message: this.$t('auth.login.login-success'),
                    });
                    setTimeout(() => {
                        this.$router.push('/');
                    }, 1000);
                }).catch((err) => {
                    this.loginLoading = false;
                    this.$notify.error({
                        title: this.$t('auth.login.login'),
                        message: err.response && err.response.data.error
                            ? err.response.data.error
                            : err.message,
                    });
                });
            },
            ...mapActions('auth', ['login']),
        },
        components: {
            FullScreen,
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
