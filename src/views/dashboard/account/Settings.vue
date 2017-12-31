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
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                form: {
                    linkPassword: '',
                },
            };
        },
        computed: {
            ...mapGetters('auth', ['profile']),
        },
        mounted() {
            this.form = this.profile;
        },
    };
</script>
