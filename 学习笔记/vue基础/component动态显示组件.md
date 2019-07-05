1.动态显示组件，用于类似tab 标签，显示不同的组件。

<component is='componentName'></component>
componentName---引入要显示组件的名称

import Test from './test.vue'
import Test2 from './test2.vue'
 components:{
      Test,Test2
 },
 data(){
       return {
         com:'Test'
       }
 },
 change(){
    this.com=this.com=='Test'?'Test2':'Test'
    //切换组件
 }
  <component :is="com"></component>
  <button @click="change">change</button>