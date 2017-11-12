<template>
    <div class="card-index">
        <div class="text">
            <span>{{ $t('dashboard.signup.title') }}</span>
            <p>{{ $t('dashboard.signup.line1') }}</p>
            <p>{{ $t('dashboard.signup.line2') }}</p>
            <el-button @click="signupNow" :disabled="!canSignup || signed">{{ $t('dashboard.signup.submit') }}</el-button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { isToday } from '@/utils/date';

export default {
    data() {
        return {
            signed: false,
        };
    },
    methods: {
        ...mapActions('auth', ['signup']),
        signupNow() {
            this.signup().then(() => {
                this.signed = true;
                this.$notify.info({
                    title: this.$t('dashboard.signup.name'),
                    message: this.$t('dashboard.signup.signup-success'),
                });
            }).catch((err) => {
                this.$notify.info({
                    title: this.$t('dashboard.signup.name'),
                    message: err.response && err.response.data.error
                        ? err.response.data.error
                        : err.message,
                });
            });
        },
    },
    computed: {
        ...mapGetters('auth', ['profile']),
        canSignup() {
            return !isToday(this.profile.lastSignup);
        },
    },
};
</script>

<style>
    .card-index > .text {
        line-height: 0.7;
        color: #777;
        font-size: 13px;
    }
    .card-index > .text > span {
        color: #555;
        font-size: 17px;
        /* line-height: */
    }
</style>
