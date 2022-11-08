<template>
    <div class="register">
        <div class="login">
            <div class="login-box">
                <h1>注册</h1>
                <div class="input-box">
                    <div class="input-text">
                        <span class='iconfont icon-mine'></span>
                        <input type="text" placeholder="用户名" v-model="username">
                    </div>
                    <div class="input-text">
                        <span class='iconfont icon-lock'></span>
                        <input type="password" placeholder="密码" v-model="password">
                    </div>
                    <div class="input-text">
                        <span class='iconfont icon-lock'></span>
                        <input type="password" placeholder="确认密码" v-model="confirmPassword">
                    </div>
                    <div class="input-btn" @click="register">
                        注册
                    </div>
                    <div class="sign-up">
                        已有账户？<a href="javascript:;" @click="toLogin">立即登录</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            users: JSON.parse(localStorage.getItem('users')) || [],
            username: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        toLogin() {
            this.$router.push('login')
        },
        register() {
            if (this.username.trim() == '' || this.password.trim() == '') return alert('请输入完整')
            if (this.password != this.confirmPassword) { alert('两次输入的密码不一致'); this.password = ''; this.confirmPassword = ''; return }
            let users = localStorage.users
            users = users ? JSON.parse(users) : []
            for (const user of users) {
                if (user.username === this.username) {
                    alert('此账户已存在')
                    this.username = ''
                    this.password = ''
                    this.confirmPassword = ''
                    return
                }
            }
            users.push({
                username: this.username,
                password: this.password,
                tasks: [{
                    id: 1,
                    title: "欢迎使用本产品",
                    finished: true
                }]
            })
            localStorage.users = JSON.stringify(users)
            if (confirm('注册成功，是否立即跳转至登陆页面？'))
                this.$router.push('login')
        }
    }
}

</script>

<style lang="css" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: lightgray;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
}

.login-box {
    display: flex;
    justify-content: center;
    align-content: space-around;
    flex-wrap: wrap;
    width: 600px;
    height: 400px;
    background-color: rgba(0, 0, 0, .32);
    border: 10px;
    padding: 20px 50px;
    border-radius: 20px;
}

.login-box h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 30px;
}

.login-box .input-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transform: translateY(-35px);
}

.login-box .input-box .input-text {
    width: 100%;
    display: flex;
    justify-content: center;
}

.login-box .input-box .input-text span {
    color: white;
    font-size: 18px;
    margin-top: 20px;
}

.login-box .input-box .input-text input {
    border: 0;
    padding: 6px;
    border-bottom: 1px solid white;
    background-color: lightgrey;
    border-radius: 1vh;
    color: #fff;
    margin-top: 20px;
}

.login-box .input-box .input-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    width: 145px;
    height: 25px;
    color: #fff;
    background: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
    border-radius: 25px;
    cursor: pointer;
}

.login-box .input-box .sign-up {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    color: white;
    font-size: 15px;
}

.login-box .input-box .sign-up a {
    color: #3498db;
    text-decoration: none;
    cursor: pointer;
}
</style>