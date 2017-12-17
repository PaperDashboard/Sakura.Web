<template>
    <div>
        <el-collapse accordion>
            <el-collapse-item v-for="(item, index) of nodeList" v-bind:key="index">
                <template slot="title">
                    <i class="material-icons node-info-icon header-icon">check</i>
                    {{ item.name }}
                </template>
                <h1 style="margin-top: 0px;">节点信息</h1>
                <p>地址: <el-tag size="small">{{ item.address }}</el-tag></p>
                <p>流量比例: <el-tag size="small">{{ item.rate }}</el-tag></p>
                <p>单端口多用户列表:
                    <el-tag class="port-tag" v-for="(port, index) of item.signalPort" v-bind:key="index">
                        {{ port }}
                    </el-tag>
                </p>
                <node-qrcode></node-qrcode>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import NodeQrcode from '@/components/account/NodeQrcode';
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
    components: {
        NodeQrcode,
    },
};
</script>

<style scoped>
    .node-info-icon {
        vertical-align: middle;
        padding-right: 8px;
    }
    .port-tag {
        margin-right: 8px;
    }
</style>
