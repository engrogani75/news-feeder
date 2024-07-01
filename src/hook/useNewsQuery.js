import { useState, useEffect } from 'react';
import { INITIAL_CATEGORY } from '../utils/data';

const useNewsQuery = (search) => {
  const [news, setNews] = useState({
    date: {},
    message: ''
  });

  const baseUrl = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false)
  
  //  const [loading, setLoading] = useState({
  //   state: false,
  //   message: ""
  // })

  const [error, setError] = useState(false)

  const [categories, setCategories] = useState(INITIAL_CATEGORY)


  // const fetchUrl = `${baseUrl}top-headlines?category=${category.toLowerCase()}`

  // const fetchUrl = `${baseUrl}top-headlines?category=${categories.toLocaleLowerCase()}`


   const fetchUrl = search
   ? `${baseUrl}search?q=${search}`
   : `${baseUrl}top-headlines?category=${categories.toLowerCase()}`



  useEffect(() => {
    const fetchNews = async () => {

      
      try {
        setLoading(true)
        const response = await fetch(fetchUrl);

        if (!response.ok) {
          const errorMsg = `New fatching faild ${response.status}`
          throw new Error(errorMsg)
        }

        const data = await response.json()
        setNews((preData) => ({ ...preData, data}))
      } 
      
      
      catch (err) {
        setError(err);
      }

      finally{
        setLoading(false);
      }
      
    }

    let ingone = false
    if (!ingone) {
      fetchNews()
    }

    return () => (ingone = true)
  }, [categories, fetchUrl]);

  return { news, setNews, loading, error, categories, setCategories };
};

export default useNewsQuery;