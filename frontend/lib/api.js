import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api'

export const getArticles = async (page) => {
  const res = await fetch(`${API_URL}/article/?page=${page}`, {
    cache: 'no-store',
    next: { revalidate: 0 }
  });

  
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  
  return res.json();
}

export const getArticleBySlug = async (slug) =>{
    const res = await fetch(`${API_URL}/article/${slug}/`,{
    cache: 'no-store',
    next: { revalidate: 0 }
  });

    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
    }

    return res.json();
}