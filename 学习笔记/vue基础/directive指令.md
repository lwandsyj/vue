1.全局指令和局部指令
   (1)全局
      Vue.directive()
   (2)局部
2.指令钩子函数
 bind(el,binding){
      //指令绑定到元素时被调用,只调用一次，
      //指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
 },
 inserted(){
   // 绑定的元素添加到父节点时被调用,
   //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
 },
 update(){
   //指令绑定的元素更新时
 },
 componentUpdate(){
//指令所在组件的 VNode 及其子 VNode 全部更新后调用
 },
 unbind(){
 //只调用一次，指令与元素解绑时调用。
 }
3.参数：
   (1)el：指令所绑定的元素，可以用来直接操作 DOM 。
   (2)binding：一个对象，包含以下属性
       [1]name：指令名，不包括 v- 前缀。
       [2]value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
       [3]oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
       [4]expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
       [5]arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
       [6]modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }

   (3)vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
   (4）oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
   除了 el 之外，其它参数都应该是只读的，切勿进行修改。
   如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。
