function Category({ category: {id, title, image} }) {
    return (
        <a href="http://localhost:3000" className="flex flex-col items-center justify-center p-4 transition-colors rounded group hover:bg-purple-50">
            <img src={image} className="object-cover w-12 h-12 border border-gray-200 rounded-lg" alt={title} />
            <span className="block mt-2 text-sm font-semibold tracking-tight text-gray-700 transition-colors group-hover:text-primary-brand-color whitespace-nowrap">{title}</span>
        </a>
    )
}

export default Category;