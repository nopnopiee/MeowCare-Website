import React from "react";
import { Link, useParams } from "react-router-dom";
import { newsDatas } from "../data/data";

function NewsPage() {
  const { id } = useParams();

  const news = newsDatas.find((news) => news.id === parseInt(id));

  const threeNews = newsDatas.slice(0, 3);

  const keywords = news.keyword.split(",");

  console.log(keywords);

  return (
    <div className='mx-20 my-20 font-montserrat'>
      <div className='relative'>
        <img
          src={news.newsImage}
          alt={news.newsTitle}
          className='w-full h-full object-cover'
        />
        <h1
          className='absolute bottom-0 left-0 p-8 text-[#D03692F2] font-bold text-center text-shadow text-[50px]'
          dangerouslySetInnerHTML={{ __html: news.newsTitle }}
        />
        <p className='text-[#1E1E1E]'>Penulis: {news.writer}</p>
      </div>
      <div className='grid gap-10 md:grid-cols-1 lg:grid-cols-2 lg:mx-10'>
        <div className='mt-10 flex flex-col justify-between'>
          <p dangerouslySetInnerHTML={{ __html: news.news }} className="text-[15px]" />
          <div className='grid grid-cols-2 gap-5'>
            {keywords.map((keyword) => (
              <div className='bg-[#F7EEDD] w-[200px] h-[40px] flex items-center justify-center rounded-[20px]'>
                <p className='text-center text-[12px]'>{keyword}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='grid gap-5 lg:grid-cols-1 sm:grid-cols-2 md:mt-10 sm:mt-10 ml-auto'>
          {threeNews.map((news) => (
            <Link to={`/news/${news.id}`}>
              <div
                key={news.id}
                className='w-full max-w-[400px] h-full shadow-md rounded-[10px] flex flex-col hover:cursor-pointer'
              >
                <img
                  src={news.newsImage}
                  alt={news.newsTitle}
                  className='w-full h-[200px] object-cover rounded-t-[10px]'
                />
                <div className='flex-grow bg-[#F1D7B9] flex items-center justify-center p-4'>
                  <p
                    className='text-center font-semibold'
                    dangerouslySetInnerHTML={{ __html: news.newsTitle }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
