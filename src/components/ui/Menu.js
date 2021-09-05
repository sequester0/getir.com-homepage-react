import { useState, useEffect } from 'react';
import { Collapse } from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size';
import { IoIosArrowDown } from 'react-icons/io';

function Menu({ title, items }) {

    const [isOpen, setIsOpen] = useState();

    const windowWidth = useWindowWidth();

    const toggleCollapse = () => {
        if (windowWidth <= 768) {
            setIsOpen(!isOpen);
        }
    }

    useEffect((isOpen) => {
        if (isOpen && windowWidth <= 768) {
            setIsOpen(false);
        }
        if (!isOpen && windowWidth > 768) {
            setIsOpen(true);
        }
    }, [windowWidth])

    return (
        <section>
            <nav className="grid select-none gap-y-2 md:gap-y-4">
                <h6 onClick={toggleCollapse} className="flex items-center justify-between text-lg text-primary-brand-color">
                    {title}
                    <button className="grid w-6 h-6 rounded-lg bg-purple-50 place-items-center md:hidden">
                        <span className={`transition-all transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                            <IoIosArrowDown size={15} />
                        </span>
                    </button>
                </h6>
                <Collapse isOpened={isOpen}>
                    <nav>
                        <ul className="grid gap-y-1 md:gap-y-2">
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
                </Collapse>
            </nav>
        </section>
    )
}

export default Menu;
