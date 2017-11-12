<template>
    <div>
        <el-col>
            <h5></h5>
            <el-menu default-active="2">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="material-icons material-icons-in-menu">account_circle</i>
                        <span @click="$router.push({ name: 'DashboardIndex' })">{{ $t('sidebar.user.name') }}</span>
                    </template>
                    <el-menu-item index="1-1">
                        <i class="material-icons material-icons-in-menu">home</i>
                        <span>{{ $t('sidebar.user.index') }}</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="material-icons material-icons-in-menu">storage</i>
                    <span slot="title">{{ $t('sidebar.node.name') }}</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="material-icons material-icons-in-menu">shopping_cart</i>
                    <span slot="title">{{ $t('sidebar.store.name') }}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </div>
</template>

<style scoped>
    .material-icons-in-menu {
        margin-right: 5px;
        font-size: 18px;
        width: 24px;
        text-align: center;
    }

</style>
