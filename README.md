#### 使用方式
通过v-animated传入以写好动画的class，建议配合animate.css
（暂不支持刚进入页面时候以出现在可是区域的节点动画）

#### 使用方式


```
//main.js
import animated from 'animated'

Vue.use(animated);


//index.vue
<div v-animated="'animated bounceIn'"></div>
```


