import { useEffect, useState } from "react";
import NewArrival from "../NewArrival/NewArrival";

const NewArrivals = () => {
    const [card, setCard] = useState([])

    useEffect( () => {
        fetch('cardinfo.json')
        .then(ref => ref.json())
        .then(data => setCard(data))
    },[])
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-center mt-10">NEW ARRIVALS: {card.length}</h1>
        <div className="grid grid-cols-5 gap-6 items-center justify-center mt-10">
            {
                card.map(card => <NewArrival key={card.id} card={card}></NewArrival>)
            }
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
