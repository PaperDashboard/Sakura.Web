<template>
    <div id="app">
        <!-- <Headers></Headers> -->

        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <Footers></Footers>
    </div>
</template>

<script>
import Footers from 'components/common/Footers';

export default {
    name: 'app',
    components: {
        Footers,
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
