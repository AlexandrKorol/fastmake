import React, { useEffect, useState } from "react"
import { CategoryItem  } from "../components/_index"
import { getCategories } from '../configuration/app'

function CatalogPage() {
    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const response = await getCategories();
          setCategory(response.data);
        };
    
        fetchData();
    }, []);

    return (
        <div className="content-inner">
            <div className="list__item">
                {
                    category && category.map(item => 
                        <CategoryItem 
                            key={ item.id }
                            image={ item.thumbnail }
                            title={ item.label }
                        />
                    )
                }
            </div>
        </div>
    )
}

export default CatalogPage