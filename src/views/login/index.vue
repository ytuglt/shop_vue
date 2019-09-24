<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
            <div class="title-container">
                <h3 class="title">管理员登陆</h3>
            </div>

            <el-form-item prop="username">

            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name:'Login',

    }

</script>

<style>

</style>
