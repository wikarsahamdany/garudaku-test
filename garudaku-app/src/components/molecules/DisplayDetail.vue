<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: "DisplayDetail",
    created() {

    },
    computed: {
        ...mapState(["detailData"])
    },
    methods: {
        ...mapActions(["handleDetail"])
    }
}
</script>

<template>
    <img :src="detailData.results.content[0]" alt="pix" />
</template>

<style scoped>
img {
    width: 500px;
    border-radius: 10px;
}
</style>