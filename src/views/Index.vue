<template>
    <div id="index">
        <headers></headers>
        <div id="backend-image"></div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Headers from '@/components/common/Headers';

    export default {
        computed: {

        },
        methods: {
            ...mapActions('auth', ['login']),
        },
        mounted() {
        },
        components: {
            Headers,
        },
    };
</script>

<style scoped>
    #backend-image {
        min-height: calc(100vh - 56px);
        background-image: url("http://area.sinaapp.com/bingImg");
        background-size: cover;
    }
</style>

