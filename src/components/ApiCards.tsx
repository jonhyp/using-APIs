import { ArrowArcRight } from "phosphor-react";
import { Link } from "react-router-dom";

export const features = [
  {
    name: "Bored API",
    description: `The Bored API helps you find things to do when you're bored! There are fields like the number of participants, activity type, and more that help you narrow down your results.`,
    icon: ArrowArcRight,
    link: "/bored-api",
  },
  {
    name: "Deck of cards",
    description: "An api to return cards from a deck.",
    icon: ArrowArcRight,
    link: "/deck-of-cards",
  },
  {
    name: "API TheMealDB",
    description:
      "Its an open online database of food meal recipes. There are many other sites online but none offered a nice API, so I wrote one myself",
    icon: ArrowArcRight,
    link: "/the-meal-db",
  },
];

export function ApiCards() {
  return (
    <dl className="grid grid-cols-2 pl-8 py-12 gap-4">
      {features.map((feature) => (
        <div key={feature.name} className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <Link to={feature.link}>
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
              {feature.name}
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            {feature.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}
