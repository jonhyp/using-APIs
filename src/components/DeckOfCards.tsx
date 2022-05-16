import { useEffect, useState } from "react";
import { deckOfCardsAPI } from "../services/api";

export function DeckOfCards() {
  const [cards, setCards] = useState<string>();

  async function getCards() {
    const { data } = await deckOfCardsAPI.get("/new/shuffle/?deck_count=1");
    const responseCards = await deckOfCardsAPI.get(
      `/${data.deck_id}/draw/?count=1`
    );
    setCards(responseCards.data.cards[0].images.svg);
  }

  return (
    <div className="container mx-auto flex justify-center py-12">
      <div className="container">
        <div className="container">
          <h2 className=" text-center font-extrabold font-serif tracking-tight text-gray-900 text-[2rem]">
            Deck Of Cards API
          </h2>
        </div>
        <div>
          <button
            className="container mc-auto absolute mt-10 py-10  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={getCards}
          >
            Click here get a random card!!
          </button>
          {!cards ? (
            <img src="" alt="" />
          ) : (
            <img className="mx-auto" src={cards} alt="card" />
          )}
        </div>
      </div>
    </div>
  );
}
