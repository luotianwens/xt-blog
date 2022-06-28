# javascript 基础知识点

![javascript笔记](/_media/course-content.png)

## 常用 ES6 特性

    let, const class, extends, super, arrow functions, template string, destructuring, default and import, rest arguments

## 数组

- 数组遍历

```javascript
for (let ele of arr) {
  console.log(ele);
}
```

- 数组 map

```javascript
var arr = [1, 2, 3, 4];
var mappedArr = arr.map((ele) => ele * 2);
```

- 数组 reduce

```javascript
var arr = [1, 2, 3, 4];
var result = arr.reduce((previous, current) => previous + current, 0);
```

- 数组过滤

```javascript
var arr = [1, 2, 3, 4, 5, 6];
var filteredArr = arr.filter((item) => item > 4);
```

- 数组测试

```javascript
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.every((item) => item > 2);
console.log(result); //false

var resultSome = arr.some((item) => item > 7);
console.log(resultSome); //true
```

- destructuring 操作符（解构）

```javascript
var arr = [1, 2, 3];
var [a, b, c] = arr; //a=1; b=2; c=3
var [, f] = arr; //f=2
```

- rest 操作符

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var [a, b, ...rest] = arr;
console.log(a, b, rest); //1; 2; [3, 4, 5, 6, 7, 8]
```

## 对象

- 遍历对象属性

```javascript
console.log(Object.keys(employee));

for (key in employee) {
  console.log(key);
}
```

- getters 和 setters

```javascript
var person = {
  firstName: '三',
  lastName: '张',
  get fullName() {
    return this.lastName + this.firstName;
  },
  set fullName(fullName) {
    let [lastName, firstName] = fullName.split(',');
    this.lastName = lastName;
    this.firstName = firstName;
  },
};
```

- spread 操作符

```javascript
var post = {
  id: 1,
  title: '标题1',
  content: '这是内容',
};

var postClone = { ...post };
console.log(postClone); //object{id:1, title:"标题1", content:"这是内容"}

var post2 = {
  ...post,
  author: '小天',
};

var arr = [1, 2, 3];
var arrClone = [...arr];

var arr2 = [...arr, 4, 5, 6];

function savePost(id, title, content) {
  console.log('保存了文章：', id, title, content);
}

savePost(...[2, '标题', '内容内容']);
```

## 面向对象编程

- 类的创建

```javascript
class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  signIn() {
    console.log(this.name + '打卡上班');
  }

  get info() {
    return this.name + ' ' + this.position;
  }

  set info(info) {
    let [name, position] = info.split(' ');
    this.name = name;
    this.position = position;
  }
}

//继承
class Manager extends Employee {
  constructor(name, position, dept) {
    super(name, position);
    this.dept = dept;
  }

  signIn() {
    super.signIn();
    console.log('额外信息：经理打卡');
  }
}
```

- 静态属性和方法

```javascript
class Page {
  static count = 0;
  static increaseViewCount() {
    Page.count++;
  }
}

var page = new Page();
//访问
console.log(Page.count);
console.log(Page.increaseViewCount());
```

## String

- 裁切

```javascript
console.log(str.slice(0, 4));
```

- 拼接

```javascript
console.log(str1 + str2);
console.log(str1.concat(str2));
```

- 模板字符串（new）

```javascript
var longStr = `Lorem ipsum dolor sit amet consectetur 
adipisicing elit. Quos aliquam laboriosam 
        nisi cupiditate eaque ${variales} ratione labore, 
          odit iusto facere sequi quod at maxime 
aliquid. Expedita quas odio enim a consequuntur.`;
```

- 字符串匹配

```javascript
var str = `This str contains 123 
CAPITALIZED letters and _-&^% symbols`;

console.log(/T/.test(str));
//特殊字符匹配
console.log(str.match(/Th.s/g));
```

- 匹配字数

```javascript
var str = `This str contains 123 CAPITALIZED letters and _-&^% symbols`;
console.log(str.match(/This.*/g));
console.log(str.match(/T+/g));
console.log(str.match(/t?/g));

console.log(str.match(/t{2}/g));
console.log(str.match(/\d{1,}/g));
```

- 字符串替换

```javascript
var str = 'Tish 1is 2an 3apple';
console.log(str.replace(/\d+/g, ''));

var html = `<span>hello</span><div> world</div>`;
console.log(html.replace(/<[^>]*>([^<>]*)<\/[^>]*>/g, '$1'));

var tags = 'html, css, javascript';
console.log(tags.split(', '));

var str = 'This  | is , an  & apple';
console.log(str.split(/\W+/g));
```

## 内置对象

- set

```javascript
var set = new Set();
set.add(1);
set.add(3);
set.add(5);

set.forEach((value) => {
  console.log(value);
});

set.delete(3);
```

- map

```javascript
var map = new Map();

var objKey = { key: 2 };

map.set(1, '值1');
map.set(objKey, '值2');
map.set('key 3', '值3');

console.log(map.get(1));
console.log(map.get(objKey));
console.log(map.get('key 3'));

console.log(map.has('key 3'));

map.forEach((value, key) => {
  console.log(key, value);
});

var iterator = map.entries();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (let [key, value] of map) {
  console.log(key, value);
}

map.delete(1);
console.log(map);
```

## 异常处理

```javascript
try {
  // var emp = undefined;
  // console.log(emp.name);
} catch (err) {
  console.error('错误已处理');
} finally {
  console.log('总会执行');
}

console.log('这行会执行');

// throw
console.clear();

class ApiError extends Error {
  constructor(url, ...params) {
    super(...params);
    this.url = url;
    this.name = 'ApiError';
  }
}

function fetchData() {
  console.log('获取数据....');
  // console.log(a);
  throw new ApiError('/post', '404');
}

try {
  fetchData();
} catch (e) {
  if (e instanceof ReferenceError) {
    console.log('程序异常...');
  } else if (e instanceof ApiError) {
    console.log('API 异常');
  }
}
```

## Promise

```javascript
var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('执行失败');
  }, 2000);
});

promise.then((value) => console.log(value));
promise.catch((error) => console.log(error));
console.log('在 Promise 之前执行');
```

## async await

```javascript
async function async1() {
  let result2 = await async2();
  try {
    let result3 = await async3();
  } catch (e) {
    console.log(e);
  }

  console.log(result2);
}

async function async2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

async function async3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('执行出错');
    }, 500);
  });
}
```

- 重写 promise 实例

```javascript
fetch('coffee.jpg')
  .then((response) => response.blob())
  .then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.log(
      'There has been a problem with your fetch operation: ' + e.message
    );
  });

async function myFetch() {
  let response = await fetch('coffee.jpg');
  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch().catch((e) => {
  console.log(
    'There has been a problem with your fetch operation: ' + e.message
  );
});
```
