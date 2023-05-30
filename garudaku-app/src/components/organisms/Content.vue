<script>
import store from '@/store';
import { mapActions, mapState } from 'vuex';
import Card from '../molecules/Card.vue';

export default {
    name: "Content",
    components: {
        Card
    },
    data() {
        return {

        }

    },
    mounted() {
        this.newsData
    },
    computed: {
        ...mapState(['newsData'])
    },
    methods: {
        ...mapActions(['getNews'])
    }
}
</script>

<template>
    <div class="content-grid">
        <Card v-for="(contentData, index) in newsData" :key="contentData.id" :contentData="contentData" :index="index" />
    </div>
</template>

<style scoped lang="scss">
.content-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 2em 0em 2em 0em;
}
</style>