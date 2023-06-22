import { useState } from 'react';
import { AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        //setCategories(cat => [...cat, 'Apex']);
    }
  
    return (
      <>
        {/* Tittle */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory = { event => onAddCategory(event)}
        />

        {/* Gif List */}
          
        {
            categories.map( (category) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            ))
        }

        

      </>
  )
}
