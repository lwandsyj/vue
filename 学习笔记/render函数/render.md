1.render(createElement)

2.createElement(tag,property,children)
  tag: 元素名称或组件名称
  property: html 特性（attr),属性（props) 事件（on) 样式（class,style）
  children: 文本节点或者子元素或者子元素集合

3.property:可选
   attrs:{} 普通的 HTML 特性,例如：id，type,
   props:{} 自定义组件要传递的属性
   domProps:{} DOM 属性，比如 innerHTML
   on:{
      click:'' //事件
   },
   slot: vue 组件slot 插槽
   class: // 与 `v-bind:class` 的 API 相同，
           // 接受一个字符串、对象或字符串和对象组成的数组
      'class': {
          foo: true,
          bar: false
        },
   style:与 `v-bind:style` 的 API 相同，
           // 接受一个字符串、对象，或对象组成的数组
   ref:
   key:
   nativeOn:  //仅用于组件，用于监听原生事件，而不是组件内部使用
              // `vm.$emit` 触发的事件。


4.子组件
可以是一个文本：createElement('h','aaa')  ===><h>aaa</h>
可以是子元素
createElement('div'[
      createElement('span','1'),
       createElement('span','1'),
])