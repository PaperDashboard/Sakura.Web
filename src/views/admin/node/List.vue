<template>
    <div id="wapper">
        <br>
        <el-card>
            <div slot="header" class="clearfix">
                <span>{{ $t('admin.node.list.title') }}</span>
                <el-button style="float: right; padding: 3px 0" type="text">
                    {{ $t('admin.node.list.create') }}
                </el-button>
            </div>
            <el-table
                :data="nodes"
                style="width: 100%"
                v-loading="loading"
            >
                <el-table-column
                    prop="_id"
                    label="Node ID"
                    width="220"
                >
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="Node Name"
                    width="200"
                >
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="Node Type"
                >
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="75"
                >
                    <template slot-scope="scope">
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    import { getNodeList } from '@/api/admin/node';

    export default {
        data() {
            return {
                nodes: [],
                loading: true,
            };
        },
        async mounted() {
            const ret = await getNodeList();
            this.nodes = ret.data.nodes;
            this.loading = false;
        },
    };
</script>
