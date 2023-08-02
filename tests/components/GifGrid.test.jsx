import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { UseFetchGifs } from '../../src/hooks/UseFetchGifs';

jest.mock('../../src/hooks/UseFetchGifs');

describe('Test in <GifGrid/> Component', () => { 

    const category = 'Apex';
    
    test('should show the loading', () => {
        
        UseFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/> );
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText( category ));

    });

    test('should show the items when the useFetchGifs load the images', () => { 
    
        const gifs = [
            { 
                id: 'ABC',
                title: 'As easy',
                url: 'https://localhost/as123.jpg'
            },
            { 
                id: '123',
                title: 'Apex',
                url: 'https://localhost/WraithCalva.jpg'
            },
        ];

        UseFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category }/> );
        //screen.debug();

        expect( screen.getAllByRole('img').length ).toBe( 2 )
    
    });

});