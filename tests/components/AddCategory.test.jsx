import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test on <AddCategory />', () => { 
    
    test('should change the value of the text box', () => { 
        render(<AddCategory onNewCategory={ () => {} }/>);

        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: {value: 'Eren Jaeger'}} );

        expect( input.value ).toBe('Eren Jaeger');
        // screen.debug();
     });


    test('should call onNewCategory if the input has a value', () => { 

        const inputValue = 'Eren Jaeger';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}} );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        // screen.debug();

        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
     });

    test('should not call onNewCategory if the input is empty', () => { 

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
       
     });
 });