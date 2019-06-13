// 为了防止state被改变 immutable 对象 设置为不能 被改变
import { fromJS } from  'immutable';

const defaultState = fromJS({
  topicList: [
    {
    id: 1,
    title: '社会热点',
    imgUrl: '//upload-images.jianshu.io/upload_images/2903481-ec0391f930d3944d.PNG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: 'DEEPIN',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/17744323-b8e9f8c53849e311.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 3,
      title: '广告',
      imgUrl: 'https://oimageb2.ydstatic.com/image?id=6730783280712305022&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
    },
    {
      id: 4,
      title: '关于简书',
      imgUrl: '//upload-images.jianshu.io/upload_images/15476082-6903fd5d5d72a84f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
  ],
  articleList: [{
    "id": 1,
    "title": "胡歌12年后首谈车祸",
    "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
    "imgUrl": "https://upload-images.jianshu.io/upload_images/17744323-b8e9f8c53849e311.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }, {
    "id": 2,
    "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
    "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
    "imgUrl": "//upload-images.jianshu.io/upload_images/2903481-ec0391f930d3944d.PNG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }, {
    "id": 3,
    "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
    "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
    "imgUrl": "//upload-images.jianshu.io/upload_images/2903481-ec0391f930d3944d.PNG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }, {
    "id": 4,
    "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
    "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
    "imgUrl": "//upload-images.jianshu.io/upload_images/15476082-6903fd5d5d72a84f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }],
  recommendList: [{
    "id": 1,
    "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
  }, {
    "id": 2,
    "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
  }]
});


export default (state = defaultState, action) => {
  switch (action.type) {
    // case constants.SEARCH_BLUR :
    //   return state.set('focused', false);
    default :
      return state
  }
}