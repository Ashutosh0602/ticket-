import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Summary.css";

const Summary = () => {
  const param = useParams();

  // setting data
  const [data, setdata] = useState(null);

  //   fetching data using external api
  useEffect(() => {
    let api = fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, []);

  console.log(data?.[0]);
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
            <button className="button">Book</button>
          </div>
        </div>
      </div>
      <div className="form">hello world</div>
    </main>
  );
};
export default Summary;
