<template>
    <div id="wapper">
        <br>
        <el-card>
            <div slot="header" class="clearfix">
                <span>{{ $t('sidebar.node.list') }}</span>
            </div>
            <node-list />
        </el-card>
    </div>
</template>

<script>
import NodeList from '@/components/account/NodeList';

export default {
    components: {
        NodeList,
    },
};
</script>


<style>

</style>
