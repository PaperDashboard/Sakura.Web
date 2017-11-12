<template>
    <div id="wapper">
        <div class="container">
        <el-row :gutter="10">
            <el-col :sm="24" :md="12">
                <div class="grid-content bg-purple">
                    <img src="~assets/404.png" alt="404" style="width: 100%">
                </div>
            </el-col>
            <el-col :sm="24" :md="12">
                <el-card class="box-card">
                    <div id="message-404">
                        <h1>OOPS!</h1>
                        <p>{{ $t('error.404.desc') }}</p>
                        <el-button @click="$router.push({ name: 'Index' })" type="primary">{{ $t('static.index') }}</el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
    #wapper {
        min-height: calc(100vh - 48px);
        background:#f0f2f5;
        padding-right: 4vw;
        padding-left: 4vw;
    }

    .container {
        padding-top: 4vh;
        padding-right: 4vw;
        padding-left: 4vw;
    }

    #message-404 > h1{
        font-size: 32px;
        color: #1482f0;

    }
</style>
