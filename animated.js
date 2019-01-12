export default {
  install (Vue) {
    Vue.directive('animated', {
      bind: function (el , binding) {
        let scroll = ()=>{
          let rect = el.getBoundingClientRect();
          //判断进入可视区域
          let isCheck = (typeof window !== 'undefined') && (rect.top < window.innerHeight && rect.bottom > 0) &&
            (rect.left < window.innerWidth && rect.right > 0);

          if(isCheck && el.className.indexOf(binding.value) === -1){
            el.className += binding.value;
          }
        };
        window.addEventListener('scroll',scroll);
      }
    });
  }
}
