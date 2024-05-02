<template>
    <div>
        <v-text-field v-model="user.id" label="아이디"></v-text-field>
        <v-text-field v-model="user.password" label="패스워드" type = "password"></v-text-field>

        <div class="text-center"> 
            <v-btn color="primary" @click="submit">로그인</v-btn>
            <v-btn to="/join">회원가입</v-btn>
        </div>
    </div>
</template>

<script>
 export default {
    data() {
        return {
            user: {
                id: "",
                password: ""
            }
        }
    }, 
    methods: {
        submit() {
            //TODO: 폼 검증 생략
            this.$axios.post("/user/login", this.user)
            .then(response => {
                    if (response.data.result=="success") {
                        this.$store.commit("setLoginUser",response.data.user)
                        alert("로그인되었습니다.")
                        this.$router.push("/")
                        return
                    }
                    alert(response.data.message)
                })
        }
    }
 }

</script>