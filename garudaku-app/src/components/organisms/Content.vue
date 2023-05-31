<script>
import { mapActions, mapState } from 'vuex';
import Card from '../molecules/Card.vue';

export default {
    name: "Content",
    components: {
        Card
    },
    data() {
        return {
            loading: false // Variabel loading untuk menampilkan indikator loading
        }
    },
    mounted() {
        this.fetchNewsData(); // Panggil metode fetchNewsData saat komponen dimuat
    },
    computed: {
        ...mapState(['newsData'])
    },
    methods: {
        ...mapActions(['getNews']),
        async fetchNewsData() {
            this.loading = true;
            await this.getNews();
            this.loading = false;
        }
    }
}
</script>

<template>
    <div class="content-grid">
        <div v-if="loading" class="loading"><svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg></div>
        <Card data-aos="fade-in" v-for="(contentData, index) in newsData" :key="contentData.id" :contentData="contentData" :index="index" />
    </div>
</template>

<style scoped lang="scss">
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    height: 100px;
    position: absolute;
    top: 400px;
    z-index: -1;
}

svg {
    width: 6.25em;
    transform-origin: center;
    animation: rotate4 2s linear infinite;
}

circle {
    fill: none;
    stroke: hsl(214, 97%, 59%);
    stroke-width: 5;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash4 {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
    }

    100% {
        stroke-dashoffset: -125px;
    }
}


.content-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 2em 0em 9em 0em;
}
</style>
