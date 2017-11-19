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
                stripe
            >
                <el-table-column
                    prop="_id"
                    :label="$t('admin.node.list.node-id')"
                    width="220"
                >
                </el-table-column>
                <el-table-column
                    prop="kind"
                    :label="$t('admin.node.list.node-type')"
                    :filters="[{ text: 'Shadowsocks', value: '0' }, { text: 'Anyconnect', value: '1' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end"
                    width="150"
                >
                    <template slot-scope="scope">
                        <el-tag
                            close-transition
                        >
                            {{ nodeKindToType(scope.row.kind) }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    :label="$t('admin.node.list.node-name')"
                    width="200"
                >
                </el-table-column>
                <el-table-column
                    prop="used"
                    :label="$t('admin.node.list.node-used')"
                >
                    <template slot-scope="scope">
                        <div class="cell">
                            {{ beaufifyTraffic(scope.row.used) }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    fixed="right"
                    :label="$t('admin.node.list.node-opt')"
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
    import { nodeKindToType } from '@/utils/node';
    import { beaufifyTraffic } from '@/utils/traffic';

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
        methods: {
            nodeKindToType,
            beaufifyTraffic,
            filterTag(value, row) {
                return String(row.kind) === String(value);
            },
        },
    };
</script>
