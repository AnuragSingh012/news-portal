import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticles, searchArticles } from "../api/newsApi";
import ArticleCard from "../components/ArticleCard";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchArticles(category, page);
        setArticles(data.articles);
        localStorage.setItem("articles", JSON.stringify(data.articles));
      } catch (error) {
        setError("Error fetching articles");
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, [category, page]);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchArticles(query, page);
      setArticles(data.articles);
      localStorage.setItem("articles", JSON.stringify(data.articles));
    } catch (error) {
      setError("Error searching articles");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen font-bold text-4xl">
        Loading...
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <Link path="/">
        <div>
          <h1 className="font-bold text-xl py-4">News App</h1>
        </div>
      </Link>
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <SearchBar handleSearch={handleSearch} />
        <CategoryFilter category={category} setCategory={setCategory} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            article={article}
            index={index}
            large={index === 0}
          />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
