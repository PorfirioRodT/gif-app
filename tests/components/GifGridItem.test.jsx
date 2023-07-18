import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem";


describe('Tests in <GifGridItem />', () => { 

    const title = 'Apex';
    const url = 'https://apexlegends.com/wraithcalva.jpg';
    
    test('Should match with the snapshot', () => { 

        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

    test('should show the image and with the url and the correct ALT', () => { 

        render(<GifGridItem title={ title } url={ url }/>);
        //screen.debug();
        //expect(screen.getByRole('img').src ).toBe(url);
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(alt);

    });

    test('should show the title in the component', () => { 

        render(<GifGridItem title={ title }/>)
        expect(screen.getByText(title)).toBeTruthy();

    });

})