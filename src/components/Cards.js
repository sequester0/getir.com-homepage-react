import { useState, useEffect } from "react";
import cardsData from 'api/cards.json';

function Cards() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData);
    }, []);

    return (
        <div className="grid gap-4 px-4 mt-0 md:mt-6 md:grid-cols-2 lg:grid-cols-3 md:px-0">
            {cards.length && cards.map(card => (
                <div className="grid items-center text-center bg-white shadow-md md:rounded-lg p-14 justify-items-center">
                    <img className="w-[150px] h-[150px] mb-6" src={card.image} alt="" />
                    <h6 className="text-lg font-semibold text-primary-brand-color">{card.title}</h6>
                    <p className="mt-2 font-normal md:text-sm text-cards-txt">{card.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Cards;
