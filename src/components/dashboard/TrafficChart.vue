<template>
    <div :style="{ height : height , width : width }"></div>
</template>

<script>
import { mapGetters } from 'vuex';
import echarts from 'echarts';
import 'echarts/theme/macarons';
import { beaufifyTraffic } from '@/utils/traffic';

export default {
    props: {
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '300px',
        },
    },
    computed: {
        ...mapGetters('auth', ['profile']),
    },
    data() {
        return {
            chart: null,
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.chart = echarts.init(this.$el, 'macarons');
            this.chart.setOption({
                title: {
                    text: this.$t('dashboard.index.graph.graph-title'),
                    left: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: origin => `${origin.seriesName} <br/> ${origin.name}: ${beaufifyTraffic(origin.value)} (${origin.percent}%)`,
                },
                series: [{
                    name: this.$t('dashboard.index.graph.traffic'),
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [{
                        value: this.profile.traffic.used,
                        name: this.$t('dashboard.index.graph.used-traffic'),
                    }, {
                        value: this.profile.traffic.free,
                        name: this.$t('dashboard.index.graph.unuse-traffic'),
                    }],
                    roseType: 'radius',
                    animationEasing: 'cubicInOut',
                    animationDuration: 2600,
                    stillShowZeroSum: true,
                }],
            });
        },
    },
};
</script>
