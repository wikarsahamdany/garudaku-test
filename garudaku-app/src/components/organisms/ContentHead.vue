<script>
import TextOp from '../molecules/TextOp.vue';
import { mapActions, mapState } from 'vuex';

export default {
    name: "ContentHead",
    components: {
        TextOp,
    },
    data() {
        return {

        }
    },
    mounted() {

    },
}
</script>

<template>
    <section>
        <hr>
        <div class="headDiv">
            <TextOp />
        </div>
        <hr>
        <div>
            <!-- <vue-marquee-slider id="marquee-slider" :speed="20000" :width="200" :space="5" :paused="true">
                    <img v-for="marq in marqueeData" :key="marq.id" :src="marq.thumb" alt="pix">
            </vue-marquee-slider> -->

        </div>
    </section>
</template>

<style scoped lang="scss">
.headDiv {
    display: flex;
    text-align: center;
    justify-content: center;

}

hr{
    border: solid 2px rgb(255, 0, 0);
    margin: 0px 200px;
}

img{
    width: 10em;
}
</style>