<template>
    <div>
        <headers></headers>
        <div id="wapper">
            <el-row type="flex" class="row-bg" justify="space-between">
                <el-col class="hidden-sm-and-down" :span="6">
                    <side-bar>
                    </side-bar>
                </el-col>
                <el-col :sm="24" :md="17">
                    <router-view></router-view>
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
    #wapper {
        min-height: calc(100vh - 48px - 84px);
        padding-bottom: 12px;
    }
    @media only screen and (max-width:991px) {
        #wapper {
            padding-left: 2vw;
        }
    }
</style>
