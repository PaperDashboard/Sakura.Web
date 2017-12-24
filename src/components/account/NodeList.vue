<template>
    <div>
        <el-collapse accordion>
            <el-collapse-item v-for="(item, index) of nodeList" v-bind:key="index">
                <template slot="title">
                    <i class="material-icons node-info-icon header-icon">check</i>
                    {{ item.name }}
                </template>
                <h1 style="margin-top: 0px;">{{ $t('dashboard.node.list.name') }}</h1>
                <p>{{ $t('dashboard.node.list.address') }}: <el-tag size="small">{{ item.address }}</el-tag></p>
                <p>{{ $t('dashboard.node.list.rate') }}: <el-tag size="small">{{ item.rate }}</el-tag></p>
                <p>{{ $t('dashboard.node.list.signalPort') }}:
                    <el-tag class="port-tag" v-for="(port, index) of item.signalPort" v-bind:key="index">
                        {{ port }}
                    </el-tag>
                </p>
                <p>{{ $t('dashboard.node.list.phone-import') }}: <a class="better-a-tag" :href="item.link">{{ $t('dashboard.node.list.node-link') }}</a></p>
                <p>{{ $t('dashboard.node.list.qrcode') }}</p>
                <qrcode :value="item.link"/>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import { getNodeList } from '@/api/user/node';
import qrcode from '@xkeshi/vue-qrcode';

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
        qrcode,
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
    .better-a-tag {
        color: #444;
        text-decoration: none;
    }
</style>
