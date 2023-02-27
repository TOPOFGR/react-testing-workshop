import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Mocked from ".";

describe('<Mocked/>', () => { 

    beforeEach(() => {
        jest.resetAllMocks();
    });
    
    it('should render without crashing', () => { 
        const onSubmit = jest.fn();

        const { asFragment } = render(<Mocked onSubmit={onSubmit}/>);


        expect(asFragment()).toMatchSnapshot();

     });
    
    it('should render the correct text', () => { 
        const onSubmit = jest.fn();

        render(<Mocked onSubmit={onSubmit}/>);

        const title = screen.getByText('Mocked component');

        expect(title).toBeInTheDocument();

     });
    
    it('should call the onSubmit function', () => { 
        const onSubmit = jest.fn();

        render(<Mocked onSubmit={onSubmit}/>);

        const input = screen.getByRole('textbox');
        
        userEvent.type(input, 'Hello');
        
        const button = screen.getByRole('button', { name: /Save/i });

        userEvent.click(button);

        expect(onSubmit).toHaveBeenCalledTimes(1);

     });
 })