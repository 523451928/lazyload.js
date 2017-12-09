# lazyload.js
native js write image lazyload
## 查看demo
```
git clone https://github.com/523451928/lazyload.js.git
cd lazyload.js
npm install
npm run dev
```

## lazyload 使用方法 
```
new Lazyload(document.querySelectorAll('img'), {
    error: 'http://upload-images.jianshu.io/error.jpg',
    loading: 'https://timgsa.baidu.com/timg?loading.jpg',
    elm:elm,            //需要懒加载的图片数组
    src:"imgsrc",       //默认给图片地址的属性
    threshold:100,	    //提前加载距离
    opa:0.3,		        //图片初始透明度
    isBg:false,         //是否为背景图
    delay: 500,         //节流时间
    hasLoadingImg:false  //是否有loading图片 为true 当图片全部加载完成之后不会移除事件绑定
})
```

| Option | Description |
| ----- | ----- |
| error | String(default '') 加载错误的error图片 |
| loading | String(default '') 未加载之前的loading图片 |
| src | String(default 'imgsrc') 默认给图片地址的属性 |
| threshold | Number(default 100) 提前加载距离 |
| opa | Number(default 0.3) 未加载之前的图片透明度 |
| isBg | Bollean (default false) 是否为背景图 |
| delay | Number(default 500) 节流时间|
| hasLoadingImg | Bollean(default false) 是否有loading图片 为true 当图片全部加载完成之后不会移除事件绑定|
