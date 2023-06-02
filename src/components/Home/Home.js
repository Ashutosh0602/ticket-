import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Home = () => {
  // setting data
  const [data, setdata] = useState(null);

  //   fetching data using external api
  useEffect(() => {
    let api = fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, []);
  //   console.log(data);

  //   Setting image position
  function Image({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
      <section>
        {/* <div>hello asdfakjsdfiobanwjsfbouawbfjlasbhjfbashdbfuasbudliwold</div> */}
        <div>
          <NavLink to={`/summary/${id}`}>
            <div ref={ref}>
              <img
                className="cover_img"
                src={`${data[id - 1]["show"]["image"]["medium"]}`}
              />
            </div>
          </NavLink>
        </div>
        <motion.h2 style={{ y }}>{`#0${id}`}</motion.h2>
      </section>
    );
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {data?.map((e, id) => {
        return <Image id={id + 1} />;
        // console.log(id);
      })}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
};

export default Home;
