import OperationButtons from '@/components/OperationButtons';
import { mount } from '@vue/test-utils';

describe('OperationButtons', () => {
  test('If Validation Object is not empty "yes Please" button should not render', () => {
    const wrapper = mount(OperationButtons, {
      propsData: {
        classify: [],
        validator: {},
        isImage: [],
        dogsImages: [],
        foundBreed: {},
      },
    });
    expect(wrapper.find('button').exists()).toBe(false);
  });
  test('If Validation Object is empty "yes Please" button should be visible', async () => {
    const wrapper = mount(OperationButtons, {
      propsData: {
        classify: ['golden', 'retriever'],
        validator: {},
        isImage: ['samoyed'],
        dogsImages: [],
        foundBreed: {},
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.find('button').exists()).toBe(true);
  });
  test('If there are errors "yes Please" button should NOT be visible', async () => {
    const wrapper = mount(OperationButtons, {
      propsData: {
        classify: ['golden', 'retriever'],
        validator: { breed: 'Sorry we can not find a match for your image' },
        isImage: ['samoyed'],
        dogsImages: [],
        foundBreed: {},
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.find('button').exists()).toBe(false);
  });
});
