
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getArticles = async (page = 1, search ='') => {

  let url = `${API_URL}/article/?page=${page}`;
 
  if (search){
    url +=`&search=${encodeURIComponent(search)}`
  }

   const res = await fetch(url, {
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