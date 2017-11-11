<template>
    <div id="footer-bar">
        <div id="item-on-left">
            <p @click="$router.push({ name: 'Index' })">{{ $t("static.name") }}</p>
        </div>
        <div id="item-on-center">
            <p>Hello, World</p>
        </div>
        <div id="item-on-right">
            <a href="https://github.com/PaperDashboard/Sakura.Web">
                <img id="github-icon" src="~assets/github.png">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
    };
</script>


<style scoped>
    #footer-bar {
        max-width: 100vw;
        min-height: 48px;
        background-color: #e4e4e4;
        color: #777;
        display: flex;
        font-size: 13px;
        align-items: center;
        justify-content: space-between;
    }
    #item-on-left {
        padding-left: 16px;
    }
    #item-on-right {
        padding-right: 16px;
    }
    #github-icon {
        width:24px;
        height: 24px;
    }
</style>
