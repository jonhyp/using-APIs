import { ApiCards } from "./ApiCards";

export function Home() {
  return (
    <div className="container mx-auto flex justify-center py-12">
      <div className="container">
        <div className="container">
          <h2 className="text-center font-extrabold font-serif tracking-tight text-gray-900 text-[2.5rem]">
            Choose your API
          </h2>
          <p className="text-center font-serif text-[1.25rem text-xl text-gray-500]">
            There are some awesome APIs to try
          </p>
        </div>
        <ApiCards />
      </div>
    </div>
  );
}
