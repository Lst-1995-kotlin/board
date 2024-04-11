<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td>글번호</td>
                    <td>제목</td>
                    <td>조회수</td>
                    <td>작성자</td>
                    <td>작성일</td>
                </tr>

            </thead>
            <tbody>
                <tr v-for="board in boardList" @click="moveView(board)">
                    <td>{{ board.no }}</td>
                    <td>{{ board.title }}</td>
                    <td>{{ board.viewCount }}</td>
                    <td>{{ board.writer }}</td>
                    <td>{{ formattedWriteDate(board.writeDate) }}</td>
                </tr>
            </tbody>
        </table>

        <v-pagination :length="totalPage" @update:modelValue="updatePage"></v-pagination>

        <div class="text-right">
            <v-btn color="primary" variant="outliend" @click="moveWrite">글쓰기</v-btn>
        </div>
    </div>
</template>
<script>

import moment from "moment"

export default{
    data(){
        return {
            page: 1,
            totalPage:0,
            boardList:[]
        }
    },
    computed:{
        ageSum() {
            let sum=0;
            for(let i=0;i<this.arr.length;i++) {
                sum += this.arr[i].age
            }
            return sum
        }
    },
    mounted() {
        this.getBoardList()
    },
    methods: {
        formattedWriteDate(date) {
            return moment(date).format("YYYY-MM-DD HH:mm:ss")
        },
        updatePage(page) {
            this.page = page
            this.getBoardList();
        },
        getBoardList() {
            this.$axios.post("/board/list", {page: this.page})
            .then((response) => {
                this.boardList = response.data.boardList;
                this.totalPage = response.data.totalPage;
            })
        },
        addPerson() {
            this.arr.push({
                name: this.name, 
                age: this.age
            })
        },
        moveWrite() {
            this.$router.push("/write");
        },
        moveView(board) {
            this.$router.push("/view/" + board.no)
        }
    }
}
</script>

<style lang="less">
@line-color:#999;
.red{
    color: red;
}
table{
    width:100%;
    border-collapse: collapse;
    tr:hover{
        cursor: pointer;

        &:hover{
            background-color: #f0f0f0;
        }

    }
    th,td{
        border-bottom: 1px solid @line-color;
    }
}

</style>