<script>
import { mapActions, mapState } from 'vuex';
import Content from '../organisms/Content.vue';
import ContentHead from '../organisms/ContentHead.vue';
import Header from '../organisms/Header.vue';
import Detail from './Detail.vue';

export default {
    name: "Home",
    components: {
        Content,
        Header,
        ContentHead

    },
    data() {
        return {

        }
    },
    created() {
        this.$store.dispatch('getNews')
    },
    computed: {
        ...mapState(["showDetail"])
    },
    methods: {
        ...mapActions(["handleDetail"])
    }

}
</script>

<template>
    <section>
        <Header data-aos="fade-left" data-aos-delay="500" />
        <Detail v-if="showDetail" />
        <ContentHead data-aos="fade-right" data-aos-duration="1000"/>
        <Content />
    </section>
</template >

<style scoped>
section{overflow-x: hidden;}
</style>
        