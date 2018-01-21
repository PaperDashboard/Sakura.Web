<template>
    <div id="index">
        <headers :disable-export="true"></headers>
        <div id="backend-image">

        </div>
        <div id="detail">
            <h1>{{ $t('index.welcome') }}</h1>
            <p>{{ $t('index.descp') }}</p>
        </div>
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
        background-image: url("//area.sinaapp.com/bingImg");
        background-size: cover;
    }

    #detail {
        color: lightcyan;
        text-shadow: 1px 1px 6px black;
        text-align: center;
        position: absolute; left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        /* line-height: 10px; */
    }
    #detail > * {
        margin-top: 0px;
        margin-bottom: 0px;
    }

</style>

