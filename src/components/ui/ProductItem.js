import { FiPlus } from 'react-icons/fi';

function ProductItem({product}) {
    return (
        <div className="relative flex flex-col items-center p-4 text-sm font-semibold text-center bg-white gap-y-1">
            <button className="absolute flex items-center justify-center w-8 h-8 transition-colors bg-white border border-gray-200 rounded-lg top-3 right-3 drop-shadow-md hover:bg-gray-100">
                <FiPlus size={16} className="text-primary-brand-color"/>
            </button>
            <img src={product.image} alt={product.title} />
            <div className="text-primary-brand-color">{product.price}</div>
            <div className="text-gray-800">{product.title}</div>
            <div className="text-gray-500 !font-normal">{product.alt}</div>
        </div>
    )
}

export default ProductItem;
