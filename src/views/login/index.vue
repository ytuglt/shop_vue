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

<style type="text/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .title-container {
        position: relative;

        .title {
            text-align: center;
            font-size: 26px;
            color: $light_gray;
        }

    }
}
</style>
