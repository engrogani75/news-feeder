import { useContext, useEffect, useRef, useState } from "react";
import useDebounce from "./useDebounce";
import { SearchContext } from "../context/index.js";

const useSearch = () => {
  const [searchOpen, setSearchOpen] =useState(false)
  const { searchValue, setSearchValue } = useContext(SearchContext)
  const inputRef = useRef(null)



  // toggle search input
  const toggleSearch = () => {
    setSearchOpen((Open) => !Open)
  }


  const handleOutsideClick = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setSearchOpen(false)
    }
  }


  useEffect(() => {
    if (searchOpen) {
      document.addEventListener('click', handleOutsideClick)
    } else {
      document.removeEventListener('click', handleOutsideClick)
    }

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [searchOpen])

  const handleChange = (e) => {
    const value = e.target.value
    searchNews(value)
  }

  const searchNews = useDebounce((value) => {
    setSearchValue(value)
  }, 500)

  return {
    searchValue,
    toggleSearch,
    inputRef,
    searchOpen,
    handleChange,
    searchNews,
  }



}

export default useSearch