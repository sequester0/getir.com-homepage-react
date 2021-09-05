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
        <div className="py-6 bg-white drop-shadow-md">
            <div className="container mx-auto">
                <h3 className="px-4 mb-2 text-sm font-semibold text-gray-800 md:px-0">Kategoriler</h3>
                <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
                    {
                        categories && categories.map((category, index) => <Category key={index} category={category} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories;
