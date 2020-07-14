import { mount} from '@vue/test-utils'
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('Button.vue', ()=>{
  it('应该有settings图标', ()=>{
    const wrapper = mount(Button, {
      propsData: {icon: 'settings'}
    })
   const icon = wrapper.findComponent(Icon).vm.$el.querySelector('use')

 // @typescript-eslint/ban-ts-ignore
    expect(icon?.getAttribute('xlink:href')).toEqual('#settings')

    wrapper.destroy()
  })


})