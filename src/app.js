import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './buttonGroup.vue'
Vue.component('v5-button', Button)
Vue.component('v5-icon', Icon)
Vue.component('v5-button-group', ButtonGroup)
new Vue({
  el: '#app',
  data() {
    return {
      message: 'vue',
      loadingCtl: false,
      loadingCtl2: true,
      loadingCtl3: false
    }
  }
})
// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  // console.log(Constructor)
  const vm = new Constructor({
    propsData: {
      v5icon: 'settings'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  console.log(useElement)
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-settings')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  // console.log(Constructor)
  const vm = new Constructor({
    propsData: {
      v5icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  console.log(useElement)
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  // console.log(Constructor)
  const vm = new Constructor({
    propsData: {
      v5icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  // console.log(Constructor)
  const vm = new Constructor({
    propsData: {
      v5icon: 'settings',
      v5IconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  // console.log(Constructor)
  const vm = new Constructor({
    propsData: {
      v5icon: 'settings'
    }
  })
  vm.$mount()
  let spy = chai.spy(function () { console.log(1) })
  // vm.$on('click', function () {
  //   console.log(1)
  //   expect(1).to.eq(1)
  // })
  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}