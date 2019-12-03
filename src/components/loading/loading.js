
import Vue from 'vue';
import Loading from './loading.vue'

const Mask = Vue.extend(Loading);

const directive = () => {
    const toggleLoading = (el, binding) => {
        if (binding.value) {
            Vue.nextTick(() => {
                el.style.position = 'relative';
                el.appendChild(el.mask);
            })
        } else {
            //移除节点
            el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
            el.instance && el.instance.$destroy();
        }
    };

    Vue.directive('loading', {
        bind(el, binding) {
            const mask = new Mask({
                el: document.createElement('div'),
                data() { } //用于添加自定义参数
            });
            el.instance = mask;
            el.mask = mask.$el;
            toggleLoading(el, binding)
        },

        update(el, binding) {

            if (binding.oldValue !== binding.value) {
                toggleLoading(el, binding);
            }
        },

        componentUpdated(el, binding) {
            toggleLoading(el, binding);
        },

        unbind(el) {
            el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
            el.instance && el.instance.$destroy();
        }
    })
}

export default directive