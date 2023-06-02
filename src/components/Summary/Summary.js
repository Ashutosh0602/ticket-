import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Summary.css";

const Summary = () => {
  const param = useParams();

  // setting data
  const [data, setdata] = useState(null);
  const [active, setactive] = useState("none");

  //   fetching data using external api
  useEffect(() => {
    let api = fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, []);

  return (
    <main className="summary_main">
      <div className="summary_main_cont">
        <div className="img_cont">
          <img
            className="summary_img"
            src={`${data?.[param["id"] - 1]["show"]["image"]["original"]}`}
          />
        </div>
        <div className="data_cont">
          <div className="name">
            <span>{data?.[param["id"] - 1]["show"]["name"]}</span>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <div className="small">Status:</div>
              <div>{data?.[param["id"] - 1]["show"]["status"]}</div>
            </div>
            <div>
              <div className="small">Language:</div>
              <div>{data?.[param["id"] - 1]["show"]["language"]}</div>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <div className="small">Genre:</div>
              <div>
                {data?.[param["id"] - 1]["show"]["genres"].map((e) => {
                  return <span>{e + " "}</span>;
                })}
              </div>
            </div>
            <div>
              <div className="small">Type:</div>
              <div>{data?.[param["id"] - 1]["show"]["type"]}</div>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <div className="small">Country:</div>
              <div>
                {data?.[param["id"] - 1]["show"]["network"]["country"]["name"]}
              </div>
            </div>
            <div>
              <div className="small">Network:</div>

              <div>
                {data?.[param["id"] - 1]["show"]["network"]["name"]}
                <span>
                  <a
                    href={
                      data?.[param["id"] - 1]["show"]["network"]["officialSite"]
                    }
                  >
                    🔗
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="small">Summary</div>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.[param["id"] - 1]["show"]["summary"],
              }}
            ></div>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <div className="large">Runtime</div>
              <div className="extra_large">
                {data?.[param["id"] - 1]["show"]["runtime"]}
              </div>
            </div>
            <div>
              <div className="large">Rating</div>
              <div className="extra_large">
                ⭐️{data?.[param["id"] - 1]["show"]["rating"]["average"]}
              </div>
            </div>
          </div>
          <div>
            <button className="button" onClick={() => setactive("block")}>
              Book
            </button>
          </div>
        </div>
      </div>
      <div className="form" style={{ display: active }}>
        <div className="form_cont">
          <div className="cancel">
            <span onClick={() => setactive("none")}>⛌</span>
          </div>
          <div className="center_name">
            <span>{data?.[param["id"] - 1]["show"]["name"]}</span>
          </div>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Date
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="date"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                />
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  State
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Zip
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="90210"
                />
              </div>
            </div>
            <button class="mt-6 bg-green-500 hover:bg-darkgreen-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Summary;
