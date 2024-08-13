import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import NewsCard from "../component/newsCard";
import Footer from "../component/footer";

export default function News() {
  let count = 0;
  let [news, setNews] = useState([]);
  useEffect(() => {
    console.log(import.meta.env.VITE_NEWS_API_KEY);
    const fetchData = async () => {
      await axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`
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
      <div className=" flex flex-wrap mt-32 justify-around  gap-y-14 gap-x-14 mb-11">
        {news.map((data) => {
          count++;
          return (
            <div key={count} className="h-[450px] ">
              <NewsCard data={data}></NewsCard>
            </div>
          );
        })}
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}
