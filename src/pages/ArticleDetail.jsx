import React from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail() {
  const { id } = useParams();
  const article = JSON.parse(localStorage.getItem('articles'))[id];

  return (
    <div className="mx-auto p-4 lg:w-[60%] md:w-[60%]">
      <img src={article.urlToImage} alt={article.title} className="w-full h-96 object-cover mb-4" />
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail;
