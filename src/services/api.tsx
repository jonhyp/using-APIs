import axios from "axios";

export const boredAPI = axios.create({
  baseURL: "http://www.boredapi.com/api/activity/",
});
export const deckOfCardsAPI = axios.create({
  baseURL: "https://deckofcardsapi.com/api/deck",
});
