<script>
import DisplayDetail from "@/components/molecules/DisplayDetail.vue"
import { mapActions, mapState } from "vuex";

export default {
    name: "ContentDetail",
    components: {
        DisplayDetail
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
    <section>
        <div style="display: flex;">
            <div class="img-content">
                <DisplayDetail />
            </div>
            <div class="head">
                <h1>{{ detailData.results.title }}</h1>
            </div>
        </div>
        <div>
            <p style="color: gray;">{{ detailData.results.date }} | by {{ detailData.results.author }}</p>
            <p>{{ detailData.results.content[2] }}</p>
            <p>{{ detailData.results.content[3] }}</p>
            <p>{{ detailData.results.content[5] }}</p>
            <p>{{ detailData.results.content[6] }}</p>
        </div>
    </section>
</template>

<style scoped lang="scss">
.img-content {
    width: 35em;
    overflow: hidden;
    margin: 10px 0px 10px 0px;
}

.head {
    display: flex;
    align-items: center;
    font-size: x-large;
    width: 35em;
    text-shadow: 1px 1px 4px gray;
}
</style>