Page({


  detail:function(event){
    var postId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+postId,
    })
  },


  data: {

  },

  onLoad: function (options) {
    var posts_content = [{
      name: "Leo",
      time: "2019年8月1日",
      title: "这是博客的小程序移植版",
      count: "100+",
      content: "点击查看具体内容",
      postId:0
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
    }
    ];
    this.setData({
      posts: posts_content
    });
  }
})


  


    

