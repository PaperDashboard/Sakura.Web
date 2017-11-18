<template>
    <div>
        <el-col>
            <h5></h5>
            <el-menu>
                <el-menu-item index="1">
                    <i class="material-icons material-icons-in-menu">assessment</i>
                    <span slot="title">{{ $t('sidebar.index') }}</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="material-icons material-icons-in-menu">storage</i>
                    <span slot="title">{{ $t('sidebar.node.name') }}</span>
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
