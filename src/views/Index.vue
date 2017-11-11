<template>
    <div id="index">
        <headers></headers>
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
