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
                    <td>{{ board.writeDate }}</td>
                </tr>
            </tbody>
        </table>
        <div class="text-right">
            <v-btn color="primary" variant="outliend" @click="moveWrite">글쓰기</v-btn>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return { // 변수를 선언하는 영역
            name: "홍길동",
            age: 20,
            arr:[
                {name: "홍길동", age: 18},
                {name: "김정수", age: 30},
                {name: "이영희", age: 40}
            ],
            boardList:[
                {   no:1,
                    title:"제목1",
                    viewCount:100,
                    writer:"홍길동",
                    writeDate:"2021-01-01"    
                },
                {   no:2,
                    title:"제목2",
                    viewCount:101,
                    writer:"홍길동2",
                    writeDate:"2021-01-01"    
                },
                {   no:3,
                    title:"제목3",
                    viewCount:103,
                    writer:"홍길동3",
                    writeDate:"2021-01-01"    
                },
            ]
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
    methods: {
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