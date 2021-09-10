import { mount } from "@vue/test-utils";
import TextBlock from '@/components/TextBlock'

test("test mounting component", () => {
  const wrapper = mount(TextBlock)

  expect(wrapper).toMatchSnapshot()
})

test("test props", async () => {
  const wrapper = mount(TextBlock,
    {
      propsData: {
        paragraphs: ['a']
      }
    }
  )

  expect(wrapper).toMatchSnapshot();
  
  await wrapper.setProps({ paragraphs: ['a', 'b'] })

  expect(wrapper).toMatchSnapshot()
});
