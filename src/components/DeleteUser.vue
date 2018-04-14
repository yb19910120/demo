<template>
  <div class="deleteuser">
           <button><router-link to="/">返回</router-link></button>
           <h1>
             {{users.name}}
             <span>
               <router-link  v-bind:to="'/edit/'+users.id">编辑</router-link>
               <button v-on:click="deleteUser(users.id)">删除</button>
             </span>
           </h1>
           <div>{{users.phone}}</div>
           <div> {{users.email}}</div>
           <div> {{users.age}}</div>
           <div> {{users.companyId}}</div>
           <div> {{users.address}}</div>
  </div>
</template>

<script>
  export default {
    name: 'deleteuser',
    data () {
      return {
           users:''
      }
    },
    methods:{
      feachCustmers(id){
        this.$http.get("http://localhost:3000/user/"+id)
          .then(function (data) {
            //console.log(data);
            this.users = data.body
          })

      },
      deleteUser(id){
        this.$http.delete("http://localhost:3000/user/"+id)
              .then(function () {
                this.$router.push({path:'/',query:{alert:'删除成功！！！'}})
              })
      }
    },
    created(){
      this.feachCustmers(this.$route.params.id)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deleteuser div{
  margin-top: 10px;
  border-bottom: 1px solid;
  border-top:1px  solid;
}

  a{
    font: 20px bold 微软雅黑 Light;
  }
  span{
    float: right;
  }
</style>
