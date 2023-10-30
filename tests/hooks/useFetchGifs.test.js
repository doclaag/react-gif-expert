import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test on useFetchGifs', () => {
   
    test('should return initial state', () => {
        
        const { result } = renderHook(() => useFetchGifs('Attack on Titan'));

        // console.log(result);

        const { images, isLoading } = result.current;

        expect(images).toEqual([]);
        expect(isLoading).toBe(true);
    });

    test('should return an array of gifs and isLoading false', async () => {
        const { result } = renderHook(() => useFetchGifs('Attack on Titan'));

        await waitFor(
            () => {
                const { images, isLoading } = result.current;

                expect(images.length).toBeGreaterThan(0);
                expect(isLoading).toBe(false);
            },
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
