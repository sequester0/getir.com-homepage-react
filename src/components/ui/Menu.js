function Menu({ title, items }) {
    return (
        <section>
            <nav className="grid gap-y-4">
                <h6 className="text-lg text-primary-brand-color">{title}</h6>
                <nav>
                    <ul className="grid gap-y-2">
                        {
                            items.map((item, key) => (
                                <li key={key}>
                                    <a href="http://localhost:3000" className="text-sm text-gray-600 transition-all transform hover:text-base">
                                        {item.title}    
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </nav>
        </section>
    )
}

export default Menu;
