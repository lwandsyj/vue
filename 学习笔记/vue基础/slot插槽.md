1.插槽允许输入HTML,或者其他组件，字符串等等
  <A>
     <div></div>
     <p></p>
  </A>
  A组件的定义
  <template>
     <div>
       <slot></slot>
     </div>
  </template>
  slot 占位符，在A组件中间定义的HTML元素会在slot 定义位置上显示
2.名称用于区分不同位置
<template>
     <div>
       <slot></slot>
       <div class="footer">
         <slot name="footer"></slot>
       </div>
     </div>
  </template>
  使用
  <A>
    <div>ssss</div>
    <div slot="footer"></footer>//显示在footer 下面
  </A>

3.slot 有且仅能只有一个default (默认内容),可以有多个具名插槽，

4.作用域插槽 slot-scope
  <template>
       <div>
         <slot :user="user"></slot>
         <div class="footer">
           <slot name="footer"></slot>
         </div>
       </div>
    </template>
    使用时：
      <A slot-scope="user">
         <p> {{user.name}}</p>
      </A>

5.$slots
  (1) this.$slots.default: 默认插槽
  (2) this.$slots.name: 名为name 的插槽
