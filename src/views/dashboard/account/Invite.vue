<template>
    <div id="wapper">
        <br>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('dashboard.invite.title') }}</span>
            </div>
            <el-alert
                title=""
                type="warning"
                :closable="false"
                show-icon
            >

                <div v-html="$t('dashboard.invite.pre-text')"></div>
            </el-alert>
            <br>
            <el-badge :value="profile.inviteNumber" class="item">
                <el-button
                    @click="createCodes"
                    :disabled="!ableToCreateCode"
                    :loading="loading"
                >
                    {{ $t('dashboard.invite.create') }}
                </el-button>
            </el-badge>
            <user-invite-tabel :datas="datas">
            </user-invite-tabel>
        </el-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserInviteTabel from '@/components/account/UserInviteTabel';
import { createInviteCode } from '@/api/dashboard';

export default {
    data() {
        return {
            datas: [],
            loading: false,
        };
    },
    computed: {
        ...mapGetters('auth', ['profile']),
        ableToCreateCode() {
            return !(this.profile.inviteNumber === 0 || this.profile.inviteNumber === undefined);
        },
    },
    components: {
        UserInviteTabel,
    },
    methods: {
        async createCodes() {
            this.profile.inviteNumber = 0;
            try {
                const ret = await createInviteCode();
                this.loading = false;
                this.datas = ret.data.codes;
                this.$notify.info({
                    title: this.$t('dashboard.invite.name'),
                    message: this.$t('dashboard.invite.create-success'),
                });
            } catch (err) {
                this.$notify.error({
                    title: this.$t('dashboard.invite.name'),
                    message: err.response && err.response.data.error
                        ? err.response.data.error
                        : err.message,
                });
            }
        },
    },
};
</script>

<style scoped>

</style>

<style>
</style>
