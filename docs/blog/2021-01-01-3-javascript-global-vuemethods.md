<!--
 * @Author: xiaotian
 * @Date: 2022-06-23 12:01:28
 * @LastEditors: xiaotian
 * @LastEditTime: 2022-06-27 15:49:21
 * @Description: 
-->
# 3种定义Vue全局函数的方法
## 1、将方法挂载到 vue.prototype

缺点：调用方法时控制台没有提示

```javascript
//定义方法文件
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default wait

//在项目入口文件配置（main.js)
import {wait} from '@/global.js'
Object.keys(global).forEach((key) => {
  Vue.prototype[`$${key}`] = global[key];
})

//使用
mounted() {
  this.$wait(1000)
}
```

## 2、将方法定义到 mixins（混合）中

优点：调用方法时控制台会有调用提示

```javascript
//定义方法文件
export const mixins = {
  methods: {
    wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};


//在项目入口文件配置（main.js)
import {mixins} from '@/global.js'
Vue.minin(mixins)

//使用
mounted() {
  this.wait(1000)
}
```

## 3、使用 pluin

Vue.use 的实现并没有实现挂载函数，本质还是通过 vue.prototype 进行挂载

```javascript
//定义方法文件
function wait(ms) = {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const plugin = {
  install: function(Vue) {
    Vue.prototype.$wait = wait;
  }
}


//在项目入口文件配置（main.js)
import {plugin} from '@/global.js'
Vue.use(plugin)

//使用
mounted() {
  this.$wait(1000)
}
```
