import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = () => {
        //console.log('Apex');
        setCategories(['Apex', ...categories]);
        //setCategories(cat => [...cat, 'Apex']);
    }
  
    return (
      <>
        {/* Tittle */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory/>

        {/* Gif List */}
        <button aria-label="btn-add" onClick={onAddCategory}> Agregar </button>
        <ol>
            
            {categories.map( category => {
                    return <li key = { category }>{ category }</li>
                })
            }

        </ol>

            {/* Gif Item */}


      </>
  )
}
