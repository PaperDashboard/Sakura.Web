<template>
    <div>
        <el-col>
            <h5></h5>
            <el-menu>
                <el-menu-item index="1">
                    <i class="material-icons material-icons-in-menu">assessment</i>
                    <span slot="title">{{ $t('sidebar.index') }}</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="material-icons material-icons-in-menu">storage</i>
                    <span slot="title">{{ $t('sidebar.node.name') }}</span>
                    </template>
                    <el-menu-item index="2-1" @click="$router.push({ name: 'AdminNodeLIst' })">
                        <i class="material-icons material-icons-in-menu">list</i>
                        <span>{{ $t('sidebar.node.list') }}</span>
                    </el-menu-item>
                </el-submenu>
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
