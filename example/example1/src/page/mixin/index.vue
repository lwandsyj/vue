<template>
    <div>
      mixin
      <button @click="log">log</button>
      <button @click="write">this</button>
      <button @click="test">this</button>
      <button @click="($event)=>{test4($event,444)}">this</button>
      <a href="#/css" target="_blank">tiao</a>
      <div class="test">
      <a v-for="(item,index) in ts" v-test>kddd{{index}}</a>
      </div>
    </div>
</template>
<script>
  import PersionMixin from './persion.mixin'
  export default {
    mixins:[PersionMixin],
    data(){
      return {
        ts:[1],
        persion: {
          btnAdd:false,
        }
      }
    },
    methods:{
      log(){
        console.log('this is index log')
      },
      test(){
        console.log(this.persion.btnEdit)
      },
      test4(e,v){
        alert(v)
      }
    },
    directives:{
      test:{
        bind(el,binding){
          console.log('bind')
        },
        inserted(el,binding){
          console.log('inserted')
        }
      }
    },
    created(){
      sessionStorage.id=1111;
      console.log(this.$route)
    }
  }
</script>
