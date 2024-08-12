import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import NewsCard from "../component/newsCard";

export default function News() {
  let count = 0;
  let [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=6b260cd3cffc43b6b6065180daef30be "
        )
        .then((res) => {
          console.log(res.data.articles);
          setNews(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <h1 className="mt-24 ml-16 text-5xl font-serif underline ">
        Explore what is happening in your country
      </h1>
      <div className=" flex flex-wrap mt-32 justify-around">
        {news.map((data) => {
          count++;
          return (
            <div key={count}>
              <NewsCard data={data}></NewsCard>
            </div>
          );
        })}
      </div>
    </>
  );
}
