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
  ]
});


export default (state = defaultState, action) => {
  switch (action.type) {
    // case constants.SEARCH_BLUR :
    //   return state.set('focused', false);
    default :
      return state
  }
}