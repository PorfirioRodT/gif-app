import { renderHook, waitFor } from "@testing-library/react";
import { UseFetchGifs } from "../../src/hooks/UseFetchGifs";

describe('Test in useFetchGifs Hook', () => {  

    test('should return the initial state', () => { 

        const { result } = renderHook( () => UseFetchGifs('Apex') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('should return an images array and isLoading in false', async() => { 

        const { result } = renderHook( () => UseFetchGifs('Apex') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        // const { images, isLoading } = result.current;

    });

});