import { useState } from "react";
import { boredAPI } from "../services/api";

export function BoredAPI() {
  const [activity, setActivity] = useState<string>();

  async function getActivity() {
    const response = await boredAPI.get("");
    setActivity(response.data.activity);
  }

  return (
    <div className="container mx-auto flex justify-center py-12">
      <div className="container">
        <div className="container">
          <h2 className="text-center font-extrabold font-serif tracking-tight text-gray-900 text-[2rem]">
            Bored API
          </h2>
        </div>
        <div>
          <button
            className="mt-14 mx-auto flex justify-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={getActivity}
          >
            Click here and find something to do!!
          </button>
          {!activity ? (
            <p className="mt-14 text-center font-serif text-[1.25rem text-xl text-gray-500]"></p>
          ) : (
            <p className="mt-14 text-center font-serif text-[1.25rem text-xl text-gray-500]">
              {activity}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
