import { getGifs } from '../../src/helpers/getGifs';

describe('Tests on helpers/getGifs()', () => { 
    
    test('should return an array of 10 GIFs for the given search term', async () => {
        
        const searchTerm = 'Titan';
        const gifs = await getGifs(searchTerm);

        // console.log(gifs);

        expect(Array.isArray(gifs)).toBe(true);
        expect(gifs.length).toBe(10);

        gifs.forEach(gif => {
            expect(gif).toEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            });
        });
    });

    test('should handle empty search results', async () => {
        const searchTerm = 'NonExistentTerm';
        const gifs = await getGifs(searchTerm);

        expect(Array.isArray(gifs)).toBe(true);
        expect(gifs.length).toBe(0);
    });
    
});
