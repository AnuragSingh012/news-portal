import axios from 'axios';

const API_KEY = 'ac32099cf39f4e2389837e90a7bf6a8a';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        apiKey: API_KEY,
        category: category,
        page: page,
        pageSize: 10,
        country: 'us'
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const searchArticles = async (query, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        apiKey: API_KEY,
        q: query,
        page: page,
        pageSize: 10,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching articles:', error);
    throw error;
  }
};
