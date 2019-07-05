<template>
  <div class="hello">
    <template v-for="(item,index) in list" >
      {{index}}</template>
    <div v-for="value in obj">{{key}}-{{value}}-{{index}}</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        list:[
          1,2,3,4
        ],
        obj:{
          id:1,
          age:3,
          name:'zz'
        }
      }
    },
    methods: {
      ss(){}
    },
    filters: {
      map(){
        console.log('111')
      }
    },
    created() {
      this.$options.filters.map()
      console.log(this.$options.filters.map)
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
