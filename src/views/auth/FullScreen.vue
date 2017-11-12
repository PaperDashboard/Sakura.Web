<template>
    <div class="login-container">
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :xs="2" :sm="4" :md="4" :lg="6" :xl="6"></el-col>
            <el-col :xs="14" :sm="10" :md="10" :lg="6" :xl="6">
                <div class="grid-content full-width">
                    <router-view></router-view>
                </div>
            </el-col>
            <el-col :xs="2" :sm="4" :md="4" :lg="6" :xl="6"></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
    };
</script>

<style scoped>
    .login-container {
        min-height: calc(100vh - 48px);
        background-color: #2d3a4b;
    }
    .full-width {
        width: 100%;
    }
    .center {
        text-align: center;
    }
</style>
