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
                    <el-dropdown-item><span>{{ $t('static.dashboard') }}</span></el-dropdown-item>
                    <el-dropdown-item divided>
                        <span @click="promiseLogout">{{ $t('auth.logout.logout') }}</span>
                    </el-dropdown-item>
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
            <el-menu-item :index="'4'" class="navbar-item" @click="$router.push({ name: 'Code' })">
                {{ $t("static.code") }}
            </el-menu-item>
        </div>
    </div>
</el-menu>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { Loading } from 'element-ui';

    export default {

        computed: {
            ...mapGetters('auth', ['profile']),
        },
        methods: {
            ...mapActions('auth', ['logout']),
            promiseLogout() {
                const loading = Loading.service({ fullscreen: true });

                this.logout().then(() => {
                    loading.close();
                    this.logOuting = false;
                    this.$router.push({ name: 'Index' });
                });
            },
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
