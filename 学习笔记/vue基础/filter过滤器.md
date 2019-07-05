1.使用过滤器解决重复的工作,过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数
  (1){{ product | formatFilter }}

  (2){{ message | filterA | filterB }}
  filterA 被定义为接收单个参数的过滤器函数，表达式 message 的值将作为参数传入到函数中。
  然后继续调用同样被定义为接收单个参数的过滤器函数 filterB，
  将 filterA 的结果传递到 filterB 中。

  (3) 过滤器是函数，可以接受参数
     {{ message | filterA('arg1', arg2) }}

2.局部过滤器和全局过滤器
   （1）局部过滤器，在组件中定义
      filters:{
        filterA(value,o){
          return ''
        }
      }
      过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数,后面的可以使用参数
      必输有返回值
   （2）全局过滤器,整个应用中所有组件可以使用
        Vue.filter('name',function(val,params){
           return
        })
3.过滤器是一个纯函数，不能使用this,如果要访问其他数据，可以使用参数。

4.小技巧
   用对象方法的形式定义过滤器
     obj={
        filterA(val){
           return
        }
     }
     Object.keys(obj).forEach(key=>{
        Vue.filter(key,obj[key])
     })
5.在组件中其他地方调用filters 中的方法
   this.$options.filters.filterA()
