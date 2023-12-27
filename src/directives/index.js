import { useIntersectionObserver } from "@vueuse/core";

export  const lazyPlugin={
    install(app){

         app.directive("img-load", (el, binding) => {
            const {stop} =  useIntersectionObserver(el, ([{ isIntersecting }]) => {
              console.log("图片加载?", isIntersecting);
              el.src = binding.value;
              stop()
            });
          });
    }
}