import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BASE_URL: "https://the-lazy-media-api.vercel.app/api",
    newsData: [],
    marqueeData: [],
    detailData: {}
  },
  getters: {},
  mutations: {
    updateNewsData(state, data) {
      state.newsData = data;
    },
    updateMarqueeData(state, data) {
      state.marqueeData = data;
    },
    updateDetail(state, data){
      state.detailData = data
    }
  },
  actions: {
    async getNews(context) {
      try {
        const { data } = await axios.get(`${context.state.BASE_URL}/games`);

        console.log("masok tes")


        context.commit("updateNewsData", data);
      } catch (err) {
        console.log(err, "Disiniii");
      }
    },

    async getMarqueeContent(context) {
      try {
        const { data } = await axios.get(`${context.state.BASE_URL}/games/e-sport/?page=1`);

        console.log("masokk");

        context.commit("updateMarqueeData", data);
      } catch (err) {
        console.log(err);
      }
    },

    async handleDetail(context, key){
      try {
        const {data} = await axios.get(`${context.state.BASE_URL}/detail/${key}`);

        context.commit("updateDetail", data)


        router.push(`/detail/${key}`)
      } catch (err) {
        console.log(err)
      }
    }

  },
  modules: {},
});
