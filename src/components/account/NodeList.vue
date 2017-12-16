<template>
    <div>
        <el-collapse accordion>
            <el-collapse-item v-for="(item, index) of nodeList" v-bind:key="index">
                <template slot="title">
                    <i class="header-icon el-icon-info"></i> {{ item.name }}
                </template>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import { getNodeList } from '@/api/user/node';

export default {
    data() {
        return {
            loadding: true,
            nodeList: [],
        };
    },
    async mounted() {
        const data = await getNodeList();
        this.nodeList = data.data.nodes;
    },
};
</script>
