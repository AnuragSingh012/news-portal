import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article, index, large }) => (
  <div
    className={`border shadow-xl p-4 rounded-lg ${
      large ? "lg:flex lg:col-span-2 xl:col-span-2" : "lg:col-span-1 xl:col-span-1"
    }`}
  >
    <img
      src={article.urlToImage}
      alt={article.title}
      className={`${
        large ? "lg:h-[100%] lg:w-[50%] object-cover rounded" : "w-full h-48 object-cover mb-4 rounded"
      }`}
    />
    <div className={large && 'lg:px-6'}>
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-700 mb-4">{article.description}</p>

      <Link to={`/article/${index}`} className="text-blue-500 font-semibold">
        Read more
      </Link>
    </div>
  </div>
);

export default ArticleCard;
