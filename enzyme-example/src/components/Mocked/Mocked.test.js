import { render, mount } from 'enzyme';

import Mocked from ".";

describe('<Mocked/>', () => { 

    const onSubmit = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
    });
    
    it('should render without crashing', () => { 
        const view = render(<Mocked onSubmit={onSubmit}/>);

        expect(view).toMatchSnapshot();

     });
    
    it('should render the correct text', () => { 
        const wrapper = mount(<Mocked onSubmit={onSubmit}/>);

        const title = wrapper.find('div');

        expect(title).toHaveLength(1);

     });
    
    it('should call the onSubmit function', () => { 
        const wrapper = mount(<Mocked onSubmit={onSubmit}/>);

        const input = wrapper.find('input');
        const form = wrapper.find('form');

        input.simulate('change', { target: { value: 'Hello' } })

        form.simulate('submit');

        expect(onSubmit).toHaveBeenCalledTimes(1);

     });
 })