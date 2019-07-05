1.混入：可以在多个组件之间横向复用代码
 假如有多个组件，组件间很多代码是共同的，
  （1） 每个组件编写重复代码
   (2)  抽取公共代码带util 中
  （3）mixin

2.混入
   import userMixin from './userMixin'
   mixins:[userMixin]

3.混合对象和组件的合并
 (1) 生命周期函数
    混入对象的生命周期和组件的会组合成一个数组，都会执行
    混入对象的钩子将在组件自身钩子之前调用。
（2）data,props,computed,methods,components,directives 中组件中的属性会覆盖混入对象中名称相同的属性。
  两个对象键名冲突时，取组件对象的键值对。组件对象的值优先。
   例如：组件和混入对象方法中都有log方法，调用时会只调用组件中的方法
   data中的属性会深入遍历
   比如：
     mixin 中data中
       persion: {
               btnAdd:true,
               btnEdit:false
             }
     引用mixin 的组件中：
         persion: {
                 btnAdd:false,
               }
     组件中的btnAdd 会覆盖mixin 中的btnAdd，并把btnEdit 保留。
     数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先
 (3) 混入对象中存在，组件中不存在的属性，会合并到组件中。
    比如：
       mixin 中方法中定义write 方法，而引用组件中没有，混入以后，组件中可以调用write 方法。
       而write 方法中同样可以调用this.

