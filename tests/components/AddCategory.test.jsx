import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test in <AddCategory /> ', () => { 

    test('should change the value of the inputTextBox', () => { 

        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Apex'} });

        expect(input.value).toBe('Apex');

        //screen.debug();

    });

    test('should call onNewCategory if the input has a value', () => { 

        const inputValue =  'Apex';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue} });
        fireEvent.submit(form);
        //screen.debug();

        expect( input.value ).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith( inputValue );

    });

    test('should not called onNewCategory if the input is empty/null', () => { 

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

    });
 
});