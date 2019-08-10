Page({

  data:{
    post:[
    {
        name: "Leo",
        time: "2019年8月1日",
        title: "这是博客的小程序移植版",
        count: "100+",
        content: "这是本人的测试小程序，很多代码都是网上查的。还没想好主题",
        postId: 0
    },
    {
      name: "Leo",
      time: "2019年8月1日",
      title: "里面空空如也",
      count: "100+",
      content: "测试",
      postId: 1
  },
  {
    name: "Leo",
    time: "2019年8月1日",
    title: "里面空空如也",
    count: "100+",
    content: "测试",
    postId: 2
  },
  ]
},

  onLoad:function(options){
   var postId = options.id;
   this.setData({
     posts:this.data.post[postId]
   })
 }


})