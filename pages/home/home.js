// pages/home/home.js
Page({
  data:{
    name: 'Coderwhy',
    age: 18,
    students:[
      {name:'zs' , age:20},
      {name: 'ls', age:18},
      { name: 'ww', age: 23 }
    ],
    counter: 0

  },
  handlebtnClick(){

    //1.coutner确实发生了变化但是界面不会刷新
    // this.data.counter += 1
    // console.log(this.data.counter)


    // 2. this.setData()
    this.setData({
      counter:this.data.counter+1
    })
    //console.log('按钮发生了反应')
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})