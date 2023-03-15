import { render, mount } from 'enzyme';

import App from "./App";

// jest.mock("./components/Mocked");

describe("App", () => {
  test("renders without crashing", () => {
    const view = render(<App />);

    expect(view).toMatchSnapshot();
  });

  test("renders learn react link", () => {
    const wrapper = mount(<App />);

    const linkElement = wrapper.find('a');

    expect(linkElement).toHaveLength(1);
  });
});
