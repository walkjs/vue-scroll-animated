export default {
    install(Vue) {
      Vue.directive('animated', {
        bind(el) {
            el.style.opacity = 0;
        },
        inserted(el , binding) {
          const scroll = () => {
            const rect = el.getBoundingClientRect();
            const isCheck = window
                         && (rect.top < window.innerHeight
                         && rect.bottom > 0)
                         && (rect.left < window.innerWidth
                         && rect.right > 0);

            if(isCheck && el.className.indexOf(binding.value.className) === -1) {
                  el.style.opacity = 1;
                  el.className += binding.value.className;
            }
          };
          scroll();

          window.addEventListener('scroll', scroll, true);
        },
        unbind(el) {
          window.removeEventListener('scroll', scroll, true);
        }
      });
    }
  }
