import { useState, useEffect } from 'react';
import categoryData from 'api/categories.json';
import Category from 'components/ui/Category';

function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // request
        setCategories(categoryData);
    }, [])

    return (
        <div className="py-6 bg-white drop-shadow-md max-h-[309px]">
            <div className="container mx-auto px-36">
                <h3 className="mb-2 text-sm font-semibold text-gray-800">Kategoriler</h3>
                <div className="grid grid-cols-10 gap-5">
                    {
                        categories && categories.map((category, index) => <Category key={index} category={category} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories;
