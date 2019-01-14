export default {
  install (Vue) {
    Vue.directive('animated', {
      inserted: function (el , binding) {
        let scroll = ()=> {
          let rect = el.getBoundingClientRect();
          let isCheck = window && (rect.top < window.innerHeight && rect.bottom > 0) &&
            (rect.left < window.innerWidth && rect.right > 0);

          if(isCheck && el.className.indexOf(binding.value) === -1){
            el.className += binding.value;
          }
        }
        scroll();
        window.addEventListener('scroll',scroll);
      }
    });
  }
}
