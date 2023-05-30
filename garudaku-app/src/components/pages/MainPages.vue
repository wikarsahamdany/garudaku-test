<script>
import Detail from "../templates/Detail.vue";
import Home from "../templates/Home.vue";

export default {
    name: "MainPages",
    components: {
    Home,
    Detail
}
}
</script>

<template>
    <div>
        <!-- <video autoplay muted loop id="myVideo">
            <source src="../../assets/images/Anime Japanese Sunset Live Wallpaper.mp4" type="video/mp4">
        </video> -->
        <Home class="main" v-if="$route.path === '/home' || '/'" />
        <Detail class="main" v-if="$route.path === '/detail/:year/:month/:day/:slug'" />
    </div>
</template>

<style scoped lang="scss">

#myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100vw;
    z-index: -1;
    filter: blur(8px) brightness(1.5)
}
</style>