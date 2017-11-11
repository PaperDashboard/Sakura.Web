<template>
<el-menu id="header-navbar">
    <el-menu-item :index="'1'" class="navbar-item" @click="$router.push('/')">
        {{ $t("static.name") }}
    </el-menu-item>
    <div id="container-left" >
        <div v-if="profile._id">
            <el-menu-item :index="'2'" class="navbar-item">
                {{ profile.username }}
                <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link">
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>用户面板</el-dropdown-item>
                    <el-dropdown-item divided>登出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </el-menu-item>
        </div>
        <div v-if="!profile._id" class="flex-display">
            <el-menu-item :index="'2'" class="navbar-item" @click="$router.push({ name: 'Login' })">
                {{ $t("static.login") }}
            </el-menu-item>
            <el-menu-item :index="'3'" class="navbar-item" @click="$router.push({ name: 'Register' })">
                {{ $t("static.register") }}
            </el-menu-item>
        </div>
    </div>
</el-menu>

</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters('auth', ['profile']),
        },
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
        background-color: #f2f2f2;
        border-right-width: 0px;
    }

    .navbar-item {
        color: black;
    }

    .full-width {
        width: 100%;
    }

    .flex-display {
        display: flex;
    }

</style>
