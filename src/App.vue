<template>
    <div id="app">
        <!-- <Headers></Headers> -->

        <router-view>
            <router-view solt="model" name="model">
            </router-view>
        </router-view>
        <Footers></Footers>
    </div>
</template>

<script>
import Footers from 'components/common/Footers';
import { mapActions } from 'vuex';
import { isLogin } from '@/utils/user';

export default {
    name: 'app',
    components: {
        Footers,
    },
    methods: {
        ...mapActions('auth', ['getInfo']),
    },
    mounted() {
        if (isLogin()) {
            this.getInfo();
        }
    },
};
</script>

<style>
    body {
        margin-left: 0px;
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
    }
</style>
