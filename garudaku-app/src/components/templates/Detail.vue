<script>
import { mapActions } from 'vuex';
import Button from '../atoms/Button.vue';
import Logo from '../atoms/Logo.vue';
import Form from '../molecules/Form.vue';
import ContentDetail from '../organisms/ContentDetail.vue';
import Swal from 'sweetalert2'

export default {
    name: "Detail",
    components: {
        ContentDetail,
        Button,
        Logo,
        Form
    },
    data() {
        return {
            showModal: false,
            contentData: {
                imgUrl: "",
                judul: ""
            }
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            if (this.showModal) {
                this.showModal = false
            }
        },
        async handleSubmit(data) {
            this.contentData = {
                imgUrl: data.imgUrl,
                judul: data.judul
            }

            Swal.fire({
                position: 'center',
                title: 'I cant hit server :)',
                timer: 6000,
                backdrop: false
            })
        },

    }
}
</script>

<template>
    <div>
        <Logo />
        <Form v-if="showModal === true" :closeModal="closeModal" @handleSubmit="handleSubmit" />
        <div class="main">

            <Button />

            <button @click.prevent="openModal" class="main-button">Edit</button>
            <ContentDetail :contentData="contentData" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.main {
    margin-left: 5em;
    margin-right: 5em;
    letter-spacing: 0.2px;
    margin-bottom: 50px;
    z-index: -1;
}

.main-button {
    margin-left: 5px;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
}

.main-button:hover,
.main-button:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
}

.main-button:hover {
    transform: translateY(-1px);
}

.main-button:active {
    background-color: #F0F0F1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
}
</style>