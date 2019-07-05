1.props 类似于HTML 组件中属性，实现父组件向子组件传值.

2.父组件通过props 向子组件传值，子组件通过事件向父组件传值.
  <child :a='a'  @change="change" />
     methods:{
        change(data){
           console.log('子组件向父组件传递值为 %j',data)
        }
     }

   子组件：
     props:{
       a:{
         required:true,
         default:'',
         type:String,
         validator(value){
           return value;
         }
       }
     },
     methods:{
        change(){
          this.$emit('change',{a:1});//这里的change就是父元素调用时要用的事件名称。
        }
     }
3.prop 大小写的问题
   驼峰,   转为小写-   myName===>my-name

4.数据流和 .sync 修饰符
数据通过prop 从父级组件传递到子组件中，当父级组件中的数据更新时，传递给子组件的prop 也会更新
，但是你不可以修改子组件中的prop,这就是所谓的单向下行绑定，防止子组件会在无意中改变父组件的状态。

然而有时候双向绑定在某些情况下也会有用。如果要使用双向绑定，可以使用修饰符.sync来修饰。
<count-form :a.sync="a" />
可以在子组件count-form 中更改prop 中a 的值

5.当使用自定义组件时，如果传递的非prop 值，例如；id,class 等则会添加到组件的根元素上
比如：A组件定义：
   <div>
     <p>a 组件</p>
   <div>
   调用A组件：
     <A class="abc"/>
     解析完为
        <div class="abc"><p>a 组件</p></div>