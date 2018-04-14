<template>
  <div id="app">
    <nav class="navbar">
      <a class="navbar-brand" href="#">用户管理系统</a>
      <ul class="nav">
            <li class="active"><router-link to="/">主页</router-link></li>
            <li class="active"><router-link to="/About">关于我们</router-link></li>
          </ul>
      <li class="nav2"><router-link to="/Adduser">添加用户</router-link></li>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
.navbar{
  height: 50px;
  background: #00C1B3;
  position: relative;
  padding-left: 20%;
  padding-right: 30%;
}
  a{
    text-decoration: none;
    font: 18px/50px bold 微软雅黑 Light;
  }
  a:hover{
    color: rosybrown;
  }
  ul{

    display: flex;
    position: absolute;
    left: 30%;
    top: 0px;
  }
  li{
    list-style: none;
    margin-left: 20px;
  }
.nav2{
  float: right;
}
</style>
