<script>
import DisplayDetail from "@/components/molecules/DisplayDetail.vue";
import { mapActions, mapState } from "vuex";
import CKEditor from 'ckeditor4-vue';

export default {
    name: "ContentDetail",
    props: ["contentData"],
    components: {
        DisplayDetail,
        CKEditor
    },
    computed: {
        ...mapState(["detailData"])
    },
    methods: {
        ...mapActions(["handleDetail"]),
        saveContent(data) {
            this.editorData = data;
            this.showEditor = false;
        },
        cancelContent() {
            this.showEditor = false
        },
        removePTag(html) {
            return html.replace(/<p>/g, "").replace(/<\/p>/g, "");
        }
    },
    data() {
        return {
            editorData: "Edit Isi berita!",
            showEditor: false,
        };
    },
    created() {

        CKEDITOR.on('instanceReady', (ev) => {
            const editor = ev.editor;
            editor.dataProcessor.htmlFilter.addRules({
                elements: {
                    p: (element) => {
                        return this.removePTag(element.getOuterHtml());
                    }
                }
            });
        });
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
        <div >
            <p style="color: gray;">{{ detailData.results.date }} | by {{ detailData.results.author }}</p>
            <div v-if="showEditor">
                <ckeditor v-model="editorData"></ckeditor>
                <button @click.prevent="saveContent(editorData)">Save</button>
                <button @click.prevent="cancelContent">Cancel</button>
            </div>
            <div v-else>
                <div v-html="removePTag(editorData)"></div>
                <button class="editBot" @click.prevent="showEditor = true">Edit</button>
            </div>
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

.editBot{
    padding: 10px 30px;
    font-weight: 600;
}

.head {
    display: flex;
    align-items: center;
    font-size: x-large;
    width: 35em;
    text-shadow: 1px 1px 4px gray;
}
</style>
