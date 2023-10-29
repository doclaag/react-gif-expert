import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe("Test on <GifGrid />", () => {
    
    const category = 'Shingeky'

    test('should show loading initially', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category}/>);

        expect( screen.getByText('Loading...') );
        expect( screen.getByText( category ) );
     });

    test('should show items when images are loaded with useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Test',
                url: 'https://localhost/test.jpg'
            },
            {
                id: '123',
                title: 'Test 2',
                url: 'https://localhost/test2.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category}/>);

        // Verify the number of elements in the grid
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});
