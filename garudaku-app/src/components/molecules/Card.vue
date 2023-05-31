<script>
import { mapActions, mapState } from 'vuex';


export default {
    props: ['contentData', 'index'],
    name: "Card",
    methods: {
        ...mapActions(["handleDetail"]),
        async getDetail(key) {
            this.$router.push(`/detail/${key}`)
            this.handleDetail(key)
        }
    }
}
</script>

<template>
        <div @click.prevent="getDetail(contentData.key)" class="card">
            <div class="card-image"> <img :src="contentData.thumb" alt="pic"></div>
            <div class="category"> {{ contentData.tag }} </div>
            <div class="heading"> {{ contentData.title }}
                <div class="author"> By : <span class="name">{{ contentData.author }}</span> {{ contentData.time }}</div>
            </div>
        </div>
</template>

<style scoped lang="scss">
.card {
    width: 240px;
    height: 274px;
    background: rgb(227, 227, 227);
    padding: .4em;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    text-decoration-style: none;
    transition: .2s;
    box-shadow: 1px 1px 5px gray;
    color: rgb(88, 87, 87);

}

.card-image {
    background-color: rgb(236, 236, 236);
    width: 100%;
    height: 60%;
    border-radius: 6px 6px 0 0;
    transition: .2s;

    img {
        width: 100%;
        border-radius: 5px 5px 0px 0px;
    }
}



.card:hover {
    .card-image {
        transform: scaleX(1.03) scaleY(1.05);
    }

    background-color: rgb(194, 30, 30);
    color: white;

    .category {
        color: rgb(255, 120, 120);
    }
}

.category {
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 600;
    padding: 10px 7px 0;
    color: rgb(67, 67, 255);
}

.category:hover {
    cursor: pointer;
}

.heading {
    font-weight: 600;
    padding: 7px;
    font-size: small;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.heading:hover {
    cursor: pointer;
}

.author {
    font-weight: 400;
    font-size: 11px;
    display: flex;
    align-items: center;
}

.name {
    font-weight: 600;
}

.name:hover {
    cursor: pointer;
}
</style>