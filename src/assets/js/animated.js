export default {
  install (Vue) {
    Vue.directive('animated', {
      bind : function (el) {
          el.style.opacity = 0;
      },
      inserted: function (el , binding) {
        let scroll = ()=> {
          let rect = el.getBoundingClientRect();
          let isCheck = window && (rect.top < window.innerHeight && rect.bottom > 0) &&
            (rect.left < window.innerWidth && rect.right > 0);

          if(isCheck && el.className.indexOf(binding.value.className) === -1){
                el.style.opacity = 1;
                el.className += binding.value.className;
          }
        };
        scroll();
        window.addEventListener('scroll',scroll);
      }
    });
  }
}
