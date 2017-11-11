<template>
    <full-screen>
        <div id="reg-model">
            <el-card class="box-card">
                <h3 class="center">{{ $t("auth.register.title") }}</h3>
                <el-form autoComplete="on" ref="regForm" label-position="left" label-width="0px" class="card-box">
                    <el-form-item prop="username">
                        <el-input :placeholder="$t('auth.register.input-username')" v-model="username">
                            <i slot="prefix" class="mdl-icon-input material-icons el-input__icon">account_circle</i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="username">
                        <el-input :placeholder="$t('auth.register.input-email')" v-model="email">
                            <i slot="prefix" class="mdl-icon-input material-icons el-input__icon">mail</i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="username">
                        <el-input :placeholder="$t('auth.register.input-password')" type="password" v-model="password">
                            <i slot="prefix" class="mdl-icon-input material-icons el-input__icon">lock</i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="username">
                        <el-input :placeholder="$t('auth.register.input-invite')" v-model="inviteCode">
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
    </full-screen>
</template>

<script>
    import FullScreen from '@/components/FullScreen';
    import { register as R } from '@/api/auth';

    export default {
        data() {
            return {
                username: '',
                password: '',
                email: '',
                inviteCode: this.$route.params.id,
                loading: false,
            };
        },
        methods: {
            registerTo() {
                this.loginLoading = true;
                R(this.email, this.password, this.username, this.inviteCode)
                    .then(() => {
                        this.loginLoading = false;
                        this.$notify.info({
                            title: this.$t('auth.register.register'),
                            message: this.$t('auth.register.register-success'),
                        });
                    }).catch((err) => {
                        this.loginLoading = false;
                        this.$notify.error({
                            title: this.$t('auth.register.register'),
                            message: err.response && err.response.data.error
                                ? err.response.data.error
                                : err.message,
                        });
                    });
            },
        },
        components: {
            FullScreen,
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
