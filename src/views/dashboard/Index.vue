<template>
    <div id="wapper">
        <br>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('sidebar.user.index') }}</span>
            </div>
            <div id="content-index">
                <signup>
                </signup>
                <hr>
                <div id="graph-index" class="card-index">
                    <div class="text">
                        <span>{{ $t('dashboard.index.graph.title') }}</span>
                        <traffic-chart>
                        </traffic-chart>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import Signup from '@/components/dashboard/Signup';
import TrafficChart from '@/components/dashboard/TrafficChart';

export default {
    components: {
        Signup,
        TrafficChart,
    },
};
</script>


<style scoped>
    h1 {
        margin-top: 0px;
    }

    #wapper {
        padding-right: 4vw;
        padding-top: 4px;
    }
    #content-index > hr {
        color: #e6ebf5;
        background-color: #e6ebf5;
        height:1px;
        border-width:0;
    }
    .card-index > .text {
        line-height: 0.7;
        color: #777;
        font-size: 13px;
    }
    .card-index > .text > span {
        color: #555;
        font-size: 17px;
        /* line-height: */
    }
    #graph-index {
        padding-top: 0.7em;
    }
</style>
