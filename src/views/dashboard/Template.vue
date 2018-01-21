<template>
    <div>
        <headers :disable-export="false" @toggleNavbar="showNav"></headers>
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
                <transition name="fade">
                    <div v-if="showNavbar">
                        <div class="phone-active">
                            <side-bar></side-bar>
                        </div>
                        <div class="shadow-screen" @click="showNav"></div>
                    </div>
                </transition>
            </el-row>
        </div>
    </div>
</template>

<script>
import Headers from '@/components/common/Headers';
import SideBar from '@/components/dashboard/SideBar';
import 'element-ui/lib/theme-chalk/display.css';

export default {
    data() {
        return {
            showNavbar: false,
        };
    },
    components: {
        Headers,
        SideBar,
    },
    methods: {
        showNav() {
            this.showNavbar = !this.showNavbar;
        },
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

    .phone-active {
        height: 100%;
        position: fixed;
        width: 230px;
        left: 0px;
        top:0px;
        background-color: #fff;
        z-index: 6;
        /* display: none; */
    }
    .shadow-screen {
        background-color: rgba(0, 0, 0, 0.3);
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        overflow: hidden;
        z-index: 5;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0
    }
</style>
