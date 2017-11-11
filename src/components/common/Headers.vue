<template>
<el-menu id="header-navbar">
    <el-menu-item class="navbar-item" @click="$router.push('/')">
        Main
    </el-menu-item>
    <div id="container-left">
        <el-menu-item class="navbar-item" @click="$router.push('/')">
            User
        </el-menu-item>
    </div>
</el-menu>

</template>

<script>
    export default {

    };
</script>


<style scoped>
    #container-left {
        right: 0px;
        position: absolute;
    }

    #header-navbar {
        position: relative;
        display: flex;
        background-color: teal;
    }

    .navbar-item {
        color: black;
    }
</style>
