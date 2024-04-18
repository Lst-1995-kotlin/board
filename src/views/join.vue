
<template>
    <div>
        <v-text-field v-model="user.id" label="아이디"></v-text-field>
        <v-text-field v-model="user.name" label="이름"></v-text-field>
        <v-text-field v-model="user.password" label="패스워드" type="password"></v-text-field>
        <v-text-field v-model="user.passwordConfirm" label="패스워드 확인" type="password"></v-text-field>
    </div>

    <div class="text-center">
        <v-btn color="primary" @click="submit">가입</v-btn> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    id: "",
                    name: "",
                    password: "",
                    passwordConfirm: ""
                }
            }
        }, 
        methods: {
            submit() {
                this.$axios.post("/user/join", this.user)
                .then(response => {
                    if (response.data.result=="success") {
                        alert("가입되었습니다.")
                        this.$route.push("/login")
                        return
                    }
                    alert(response.data.message)
                })
            }
        }
    }
</script>