import { useState, useEffect } from 'react';
import Products from 'api/products.json';
import ProductItem from 'components/ui/ProductItem';

function Favourites() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products);
    }, [])

    return (
        <div>
            <h3 className="mb-2 text-sm font-semibold text-gray-800">Favoriler</h3>
            <div className="grid grid-cols-8 gap-0.1 overflow-hidden rounded-lg">
                {
                    products.length && products.map((product, index) => <ProductItem key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default Favourites;
