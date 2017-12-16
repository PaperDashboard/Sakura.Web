<template>
    <div>
        <el-collapse accordion>
            <el-collapse-item v-for="(item, index) of nodeList" v-bind:key="index">
                <template slot="title">
                    <i class="material-icons node-info-icon header-icon">check</i>
                    {{ item.name }}
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

<style scoped>
    .node-info-icon {
        vertical-align: middle;
        padding-right: 8px;
    }
</style>
