<!--
 * @Author: xiaotian
 * @Date: 2022-06-23 12:01:28
 * @LastEditors: xiaotian
 * @LastEditTime: 2022-06-27 15:53:30
 * @Description: 
-->


# 问题介绍
我们在vue项目中经常会遇到以下这种需求，在data选项中定义了对象，在函数中绑定了对象属性，结果视图不会更新

```javascript
data() {
  return {
    object: {}
  }
}

methods: {
  updateObject: function () {
    this.object[exp] = '实例数据'
  }
}
//vue视图不会相应更新
```
会产生这种情况是因为首先，只有注册在data中的数据才会响应更新，其次是data中注册的引用类型数据`对象、数据`等只是浅层注册，并不会对其属性进行响应式注册

# 解决办法
1. 对于简单的数据更新，我们可以使用`$set`方法
```javascript
methods: {
  updateObject: function () {
    this.$set(this.object, exp, '实例数据')
  }
}
```

2. 对于复杂的数据更新，我们可以使用通过定义一个缓存数据，通过`computed`做间接响应更新
```javascript
data() {
  return {
    object: {},
    temp: {}
  }
}

methods: {
  updateObject: function () {
    this.object[exp] = '实例数据'
  }
}

computed: {
  temp: {
    get: function() {
      return this.object[exp];
    }
  }
}
//vue视图不会相应更新
```


