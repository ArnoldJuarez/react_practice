import { fireEvent, render ,screen} from '@testing-library/react'; 
import { CounterApp } from '../src/CounterApp';

describe('Prueba de CounterApp', () => { 

    const initialValue = 10;


    test('Debe hacer un match con el snapshot', () => { 

        const { container } = render( <CounterApp value={initialValue}/> );
        expect( container ).toMatchSnapshot();
    });


    test('Debe de mostrar un valor inicial de 100', () => { 
    
            render( <CounterApp value={100}/> );
            expect(screen.getByText(100)).toBeTruthy();
    
            //expect( screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
    
    });

    test('Debe de incrementar con el boton +1', () => { 

        render( <CounterApp value={initialValue}/> );
        fireEvent.click(  screen.getByText('+1')); //esta lanzando el evento
        expect( screen.getByText('11')).toBeTruthy();
     });

     test('Debe de decrementar con el boton -1', () => { 

        render( <CounterApp value={initialValue}/> );
        fireEvent.click(  screen.getByText('-1')); //esta lanzando el evento
        //screen.debug();
        expect( screen.getByText('9')).toBeTruthy();
     });


     test('Debe de resetear el codigo', () => { 

        render( <CounterApp value={initialValue}/> );
        fireEvent.click(  screen.getByText('+1'));
        fireEvent.click(  screen.getByText('+1'));
        fireEvent.click(  screen.getByText('+1'));
        fireEvent.click( screen.getByRole('button',{name: 'btn-reset'}));

        expect( screen.getByText(initialValue)).toBeTruthy();
     });


 });