<template>
  <div class="adduser">
          <h1>添加用户</h1>
          <form v-on:submit="addUser">
            <h3>用户信息</h3>
            <label>姓名</label>
            <input type="text" placeholder="name" v-model="users.name"/><br/>
            <label>电话号码</label>
            <input type="text" placeholder="phone" v-model="users.phone"/><br/>
            <label>电子邮箱</label>
            <input type="text" placeholder="email" v-model="users.email"/><br/>
            <label>年龄</label>
            <input type="text" placeholder="age" v-model="users.age"/><br/>
            <label>公司</label>
            <input type="text" placeholder="commpanyId" v-model="users.commpanyId"/><br/>
            <label>地址</label>
            <input type="text" placeholder="address" v-model="users.address"/><br/>
            <button type="submit">提交</button>
          </form>
  </div>
</template>

<script>
  export default {
    name: 'adduser',
    data () {
      return {
          users:{}
      }
    },
    methods:{
      addUser(e){
       var  newuser={
         name:this.users.name,
         phone:this.users.phone,
         email:this.users.email,
         age:this.users.age,
         companyId:this.users.companyId,
         address:this.users.address
       }
        this.$http.post("http://localhost:3000/user",newuser)
          .then(function (data) {
               // console.log(data);
            this.$router.push({path:"/",query:{alert:'用户添加成功!!!'}})
          })
        e.preventDefault()
        e.preventDefault()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
