import './main.css'
import greeter from './js/Greeter'
import LazyLoad from './js/lazyload'
new LazyLoad('img',{
  src: 'data-src'
})
document.querySelector("#root").appendChild(greeter());
