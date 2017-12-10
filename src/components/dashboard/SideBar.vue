<template>
    <div>
        <el-col>
            <h5></h5>
            <el-menu>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="material-icons material-icons-in-menu">account_circle</i>
                        <span @click="$router.push({ name: 'DashboardIndex' })">{{ $t('sidebar.user.name') }}</span>
                    </template>
                    <el-menu-item index="1-1" @click="$router.push({ name: 'DashboardIndex' })">
                        <i class="material-icons material-icons-in-menu">home</i>
                        <span>{{ $t('sidebar.user.index') }}</span>
                    </el-menu-item>
                    <el-menu-item index="1-2" @click="$router.push({ name: 'UserInvite' })">
                        <i class="material-icons material-icons-in-menu">loyalty</i>
                        <span>{{ $t('sidebar.user.invite') }}</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="material-icons material-icons-in-menu">storage</i>
                        <span slot="title">{{ $t('sidebar.node.name') }}</span>
                    </template>
                    <el-menu-item index="1-1" @click="$router.push({ name: 'UserNodeList' })">
                        <i class="material-icons material-icons-in-menu">home</i>
                        <span>{{ $t('sidebar.node.list') }}</span>
                    </el-menu-item>
                </el-submenu>
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
