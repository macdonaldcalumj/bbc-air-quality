import { mount } from "@vue/test-utils";
import CityInfo from "@/components/CityInfo";

test("test mounting component", () => {
  const wrapper = mount(
    CityInfo, {
      mocks: {
      $t: () => {}
    }
  });

  expect(wrapper).toMatchSnapshot()
})

test("test selecting city", async () => {
  const cities = [
    {
      name: "A",
      aqi: "91 PM2.5",
      cig: 4,
    },
    {
      name: "B",
      aqi: "61 PM2.5",
      cig: 3
    },
  ];

  const wrapper = mount(CityInfo, {
    propsData: {
      title: "Select your city",
      cities: cities,
    },
    mocks: {
      $t: () => {},
    },
  });

  expect(wrapper).toMatchSnapshot();
  
  await wrapper.setData({ selectedCity: cities[0] })

  expect(wrapper).toMatchSnapshot()
});
