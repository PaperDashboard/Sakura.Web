<template>
    <div>
        <headers></headers>
        <div id="wapper" class="dashboard-wapper">
            <el-row type="flex" class="row-bg" justify="space-between">
                <el-col class="hidden-sm-and-down" :span="6">
                    <side-bar>
                    </side-bar>
                </el-col>
                <el-col :sm="24" :md="17">
                    <div id="router-view">
                    <router-view></router-view>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import Headers from '@/components/common/Headers';
import SideBar from '@/components/dashboard/SideBar';
import 'element-ui/lib/theme-chalk/display.css';

export default {
    components: {
        Headers,
        SideBar,
    },
};
</script>

<style scoped>
    .dashboard-wapper {
        padding-bottom: 12px;
    }
    @media only screen and (max-width:991px) {
        .dashboard-wapper {
            padding-left: 2vw;
        }
    }
    .dashboard-wapper {
        min-height: calc(100vh - 48px - 68px);
    }

    #router-view {
        padding-right: 4vw;
        padding-top: 4px;
    }
</style>
