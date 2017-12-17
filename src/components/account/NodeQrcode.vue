<template>
    <div id="qrcode" v-loading="loading">

    </div>
</template>

<script>
export default {
    props: {
        node_id: {
            type: String,
            required: true,
        },
        isSinglePort: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            loading: true,
        };
    },
    async mounted() {

    },
};
</script>

<style scoped>
    #qrcode {
        height: 256px;
        width: 256px;
    }
</style>
