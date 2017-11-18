<template>
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
                width="100">
                <template slot-scope="scope">
                    <el-button @click="accessCode(scope.row.code)" type="text" size="small">
                        {{ $t('auth.code.send') }}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getInviteCodes } from '@/api/dashboard';

export default {
    props: ['datas'],
    data() {
        return {
            loading: true,
            tableData: [],
        };
    },
    async mounted() {
        const codes = await getInviteCodes();
        this.tableData = codes.data.codes;
        this.loading = false;
    },
    watch: {
        // eslint-disable-next-line
        datas: function (newData) {
            console.log(this);
            this.tableData = this.tableData.concat(newData);
        },
    },
};
</script>
