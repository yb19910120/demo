<template>
  <div class="custmers">
      <alert   v-if="alert"  v-bind:msg="alert"></alert>
      <input type="text" placeholder="搜索" v-model="entertext"/>
     <h1>用户管理</h1>
    <table border="2">
           <thead>
                     <tr bgcolor="#f5f5dc">
                       <th>姓名</th>
                       <th>电话号码</th>
                       <th>电子邮箱</th>
                       <th>年龄</th>
                       <th>公司</th>
                       <th>地址</th>
                       <th></th>
                     </tr>
           </thead>
           <tbody>
                     <tr v-for="user in filterBy(users,entertext)">
                           <td>{{user.name}}</td>
                           <td>{{user.phone}}</td>
                           <td>{{user.email}}</td>
                           <td>{{user.age}}</td>
                           <td>{{user.companyId}}</td>
                           <td>{{user.address}}</td>
                            <td><router-link v-bind:to="'/user/'+user.id">详情</router-link></td>
                     </tr>
           </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from './Alert'
  export default {
    name: 'custmers',
    data () {
      return {
         users:[],
         alert:'',
         entertext:''
      }
    },
    methods:{

      feachCustmers(){
        this.$http.get("http://localhost:3000/user")
          .then(function (data) {
            this.users = data.body
          })

      },
      filterBy(users,value){
        return users.filter(function (user) {//遍历users
          return user.name.match(value)//匹配user.name中是否含有value
        })
       /*return users.forEach(function (user) {
         return user.name.match(value)
        })*/
      }
    },
    created(){
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert
      }

      this.feachCustmers()
    },
    components:{
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
 width: 800px;
  min-height: 25px;
  line-height: 25px;
  text-align: center;
  border-color:#b6ff00;
  border-collapse: collapse;
}
</style>
