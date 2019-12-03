
# loading-directive

## 介绍
自定义vue-loading指令，通过安装导入即可使用

## 使用方式
npm install loading-directive --save

引入后在 main.js中导入
```
'import loading from 'loading-directive'
vue.use(loading)
```

然后在项目中你所需loading的根元素上
```
v-loading=true
```