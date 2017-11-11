<template>
    <div class="login-container">
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :xs="2" :sm="4" :md="4" :lg="6" :xl="6"></el-col>
            <el-col :xs="14" :sm="10" :md="10" :lg="6" :xl="6">
                <div class="grid-content full-width">

                    <div id="login-model">
                        <el-card class="box-card">
                            <h3 class="center">Login in Sakura</h3>
                            <el-form autoComplete="on" ref="loginForm" label-position="left" label-width="0px" class="card-box">
                                <el-form-item prop="username">
                                    <el-input placeholder="Input Email Address" v-model="email">
                                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                    </el-input>
                                </el-form-item>
                                <el-form-item prop="password">
                                    <el-input placeholder="Input Password" type="password" v-model="password">
                                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                    </el-input>
                                </el-form-item>
                                <el-form-item class="center">
                                    <el-button type="primary" :loading="this.loginLoading" @click="loginTo">Login</el-button>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </div>
                </div>
            </el-col>
            <el-col :xs="2" :sm="4" :md="4" :lg="6" :xl="6"></el-col>
        </el-row>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

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
                        title: 'Login',
                        message: 'Login sucess',
                    });
                }).catch((err) => {
                    this.loginLoading = false;
                    this.$notify.error({
                        title: 'Error',
                        message: err.response && err.response.data.error
                            ? err.response.data.error
                            : err.message,
                    });
                });
            },
            ...mapActions('auth', ['login']),
        },
    };
</script>

<style scoped>
    .login-container {
        min-height: 100vh;
        background-color: #2d3a4b;
    }
    .full-width {
        width: 100%;
    }
    #login-model {
        margin-top: 30vh;
        height: 100px;
    }
    .center {
        text-align: center;
    }
</style>
