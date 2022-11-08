<template>
    <div class="login">
        <div class="login-box">
            <h1>登陆</h1>
            <div class="input-box">
                <div class="input-text">
                    <span class='iconfont icon-mine'></span>
                    <input type="text" placeholder="用户名" v-model="username">
                </div>
                <div class="input-text">
                    <span class='iconfont icon-lock'></span>
                    <input type="password" placeholder="密码" v-model="password">
                </div>
                <div class="input-btn" @click="login">
                    登陆
                </div>
                <div class="sign-up">
                    还没账户？<a href="javascript:;" @click="toRegister">立即注册</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            users: JSON.parse(localStorage.getItem('users')) || [],
            username: '',
            password: ''
        }
    },
    methods: {
        toRegister() {
            this.$router.push('register')
        },
        login() {
            let pass = false
            this.users.forEach(user => {
                if (user.username == this.username && user.password == this.password) {
                    return pass = true
                }
            })
            if (pass) {
                this.$router.push({
                    name: 'todolist',
                    query: {
                        username: this.username,
                        password: this.password
                    }
                })
            } else {
                alert('账号或者密码错误');
                this.password = ''
            }
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
