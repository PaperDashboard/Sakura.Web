<template>
    <div :style="{ height : height , width : width }"></div>
</template>

<script>
import { mapGetters } from 'vuex';
import echarts from 'echarts';
import 'echarts/theme/macarons';

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
                    text: '流量使用',
                    left: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                series: [{
                    name: 'Traffic',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [{
                        value: this.profile.traffic.used,
                        name: '已用流量',
                    }, {
                        value: this.profile.traffic.free,
                        name: '未用流量',
                    }],
                    roseType: 'radius',
                    animationEasing: 'cubicInOut',
                    animationDuration: 2600,
                }],
            });
        },
    },
};
</script>
