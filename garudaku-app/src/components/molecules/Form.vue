<script>
export default {
    name: "Form",
    props: ["closeModal"],
    data() {
        return {
        contentData: {
            imgUrl: "",
            judul: ""
        }
        }
    },
    methods: {
        handleSubmit(){
            this.$emit("handleSubmit" , this.contentData)
            this.closeModal()
        }
    }
}
</script>

<template>
    <div class="main-box" data-aos="fade-up">
        <form @submit.prevent="handleSubmit">
            <input name="name" type="text" class="feedback-input" placeholder="ImageUrl" v-model="contentData.imgUrl" />
            <input name="name" type="text" class="feedback-input" placeholder="Judul" v-model="contentData.judul" />
            <input type="submit" value="SUBMIT" />
            <button type="button" @click.prevent="closeModal">Cancel</button>
        </form>
    </div>
</template>

<style scoped>
.main-box {
    width: 98vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
}


form {
    max-width: 420px;
    margin: 50px auto;
    background-color: rgb(255, 255, 255);
    padding: 40px 60px;
    border-radius: 15px;
}

.feedback-input {
    color: black;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid #cc6666;
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
}

button {
    color: black;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid #cc6666;
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
    margin-top: 10px;
    transition: .2s;
}

button:hover {
    color: rgb(255, 255, 255);
    background-color: #cc6666;
}

.feedback-input:focus {
    border: 2px solid #cc4949;
}

textarea {
    height: 150px;
    line-height: 150%;
    resize: vertical;
}

[type="submit"] {
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    width: 100%;
    background: #cc6666;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: white;
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin-top: -4px;
    font-weight: 700;
}

[type="submit"]:hover {
    background: #cc4949;
}
</style>