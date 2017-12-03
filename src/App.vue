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
import { Loading } from 'element-ui';
import { mapGetters } from 'vuex';

const loading = Loading.service({ fullscreen: true });

export default {
    name: 'app',
    components: {
        Footers,
    },
    computed: {
        ...mapGetters('loadstate', ['loaded']),
    },
    watch: {
        // eslint-disable-next-line
        loaded: function (val) {
            if (val) {
                loading.close();
            }
        },
    },
};
</script>

<style>
    body {
        margin-left: 0px;
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        font-family: 'Roboto'
    }
</style>
