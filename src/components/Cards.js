import { useState, useEffect } from "react";
import cardsData from 'api/cards.json';

function Cards() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData);
    }, []);

    return (
        <div className="grid grid-cols-3 mt-6 gap-x-4">
            {cards.length && cards.map(card => (
                <div className="grid items-center text-center bg-white rounded-lg shadow-md p-14 justify-items-center">
                    <img className="w-[150px] h-[150px] mb-6" src={card.image} alt="" />
                    <h6 className="text-lg font-semibold text-primary-brand-color">{card.title}</h6>
                    <p className="mt-2 text-sm font-normal text-cards-txt">{card.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Cards;
