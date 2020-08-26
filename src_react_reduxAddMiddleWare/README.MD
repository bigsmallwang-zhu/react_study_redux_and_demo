###react-redux包含redux文件夹下边的四个文件  

1、有UI组件
- 只负责UI的呈现，不带有任何业务逻辑
- 通过prop接收数据
- 不使用redux的API
- 一般保存在components文件夹下

2、容器组件
+ 负责管理数据和业务逻辑，不负责ui的呈现
+ 使用Redux API
+ 一般保存在containers文件夹下

`Provider`组件是将store对象传到其子组件当中

connect(
  mapStateoProp,
  `mapDispatchToProps`
  `这个参数就是将自己创建的action交给react-redux去dispatch`
)(UI组件)

redux默认不支持异步操作，异步操作需要异步中间件(`redux-thunk`)
###对store.js操作
>1、在文件夹中的`redux`包中引出`applyMiddleware`
>2、createStore当中使用applyMiddleware(thunk)
>3、在action.js中创建异步action构造器
>4、在app.jsx组件当中引用给异步action构造器，connect中传入然后子组件props就有该异步操作方法