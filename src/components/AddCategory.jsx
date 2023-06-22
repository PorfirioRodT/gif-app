import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');    

    const onInputChange = ({target}) => {
        //console.log(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const trimmedInput = inputValue.trim();
        
        if(trimmedInput.length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(trimmedInput);
    }

    return (
        <form onSubmit={ onSubmit }>

            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange= { onInputChange }
            />

        </form>
    ) 
}
