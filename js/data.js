var data = new Vue (
  {
    el: '#app',
    data: {
      quote1: '五大訴求',
      quote2: '缺一不可',
      db: [
        {
          date: '27/7/2019',
          event: [
            {
              name: '西環暴力清場',
              img: 'https://placeimg.com/1040/780',
              source: '立場新聞'
            },
            {
              name: '元朗白衣人恐怖襲擊',
              img: 'https://picsum.photos/1040/780',
              source: '立場新聞'
            }
          ]
        },{
          date: '28/7/2019',
          event: [
            {
              name: '開開心心早放工',
              img: 'https://placeimg.com/1040/780',
              source: '立場新聞'
            }
          ]
        }
      ]
    }
  }
)
