import {mount} from '@vue/test-utils';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';

describe('Button.vue', () => {
  it('应该有settings图标', () => {
    const wrapper = mount(Button, {
      propsData: {icon: 'settings'}
    });
    const icon = wrapper.findComponent(Icon).vm.$el.querySelector('use');
    expect(icon?.getAttribute('xlink:href')).toEqual('#settings');

    wrapper.destroy();
  });


});