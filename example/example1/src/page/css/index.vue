<template>
    <div  class="h200 border">
      <component :is="com"></component>
      <button @click="change">change</button>
    </div>
</template>
<script>
  import Test from './test.vue'
  import Test2 from './test2.vue'
  export default {
    components:{
      Test,Test2
    },
    data(){
      return {
        one:'red',
        border:'border',
        com:'Test'
      }
    },
    methods:{
      change(){
        this.com=this.com=='Test'?'Test2':'Test'
      }
    },
    created(){

      alert(sessionStorage.id)
    },
    watch:{
      '$route.query.id'(val,OldVal){
        console.log(val)
      }
    }
  }
</script>
<style>
  .red{
    background: red;
  }
  .border{
    border:1px solid red;
  }
  .h200{
    height: 200px;
  }
</style>
