<template>
    <v-text-field ref="title" v-model="board.title" label="제목" ></v-text-field>
    <v-text-field ref="wirter" v-model="board.writer" label="작성자" ></v-text-field>
    <v-textarea ref="content" v-model="board.content" label="내용" ></v-textarea >
    <div class="text-center">
        <v-btn color="primary" @click="submit"> 작성</v-btn>
    </div>
</template>

<script>

    export default{
        data(){
            return { // 여기는 초기 뷰를 셋팅할 때 사용할 객체.
                board:{
                    title:"",
                    writer:"",
                    content:""
                }
            }
        },
        methods: {
            submit() {
                console.log(this.board);
                if(this.board.title == "") {
                    alert("제목을 입력하세요");
                    this.$refs.title.focus();
                    return;
                }
                if(this.board.wirter == "") {
                    alert("작성자를 입력하세요");
                    this.$refs.writer.focus();
                    return;
                }
                if(this.board.content == "") {
                    alert("내용을 입력하세요");
                    this.$refs.content.focus();
                    return;
                }
                
                //TODO: 서버로 데이터 전송
                this.$axios.post("/board/write", this.board)
                .then (response => {
                    alert("글이 작성되었습니다.")
                    this.$router.push("/view/" + response.data.no)
                })
            }
        }
    }
</script>

<style>
</style>
