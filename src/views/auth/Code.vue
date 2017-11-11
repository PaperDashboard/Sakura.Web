<template>
    <div>
        <headers></headers>
        <div id="wapper">
            <div class="container">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{ $t("auth.code.title") }}</span>
                    </div>
                    <div>
                        <el-table
                            stripe
                            v-loading="loading"
                            :data="tableData"
                            class="full-width">
                            <el-table-column
                                prop="date"
                                :label="$t('auth.code.date')"
                                width="220"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="code"
                                :label="$t('auth.code.code')"
                            >
                            </el-table-column>
                            <el-table-column
                                fixed="right"
                                :label="$t('auth.code.action')"
                                width="70">
                                <template slot-scope="scope">
                                    <el-button @click="accessCode(scope.row.code)" type="text" size="small">
                                        {{ $t('auth.code.access') }}
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import Headers from '@/components/common/Headers';
    import { codes } from '@/api/auth';

    export default {
        data() {
            return {
                loading: true,
                tableData: [],
            };
        },
        components: {
            Headers,
        },
        methods: {
            accessCode(code) {
                this.$router.push({
                    name: 'RegisterWithCode',
                    params: {
                        id: code,
                    },
                });
            },
        },
        mounted() {
            codes().then((resp) => {
                this.tableData = resp.data.codes;
                this.loading = false;
            });
        },
    };
</script>

<style>
    .container {
        padding-top: 16px;
        padding-right: 4vw;
        padding-left: 4vw;
    }
    .full-width {
        width: 100%;
    }
</style>


<style scoped>
    #wapper {
        min-height: calc(100vh - 48px - 56px);
    }
</style>
