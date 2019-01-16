# vue-scroll-animated
vue-scroll-animated is an scroll animation directive for vue
## Demo
[example](https://walkjs.github.io/vue-scroll-animated)

## How to use
通过v-animated指令传入动画的class (可以配合animate.css使用~)

以animate.css为例

```
//main.js

import animated from 'animated'
Vue.use(animated);


//index.vue

<div v-animated="{className : 'animated bounceIn'}"></div>


//app.vue

<style>
    @import animate.css;
</style>


```


