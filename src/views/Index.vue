<template>
    <div id="index">

    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        computed: {

        },
        methods: {
            ...mapActions('auth', ['login']),
        },
        mounted() {
            this.login({ username: 'ello', password: 'Hel' });
            // this.login();
        },
    };
</script>
