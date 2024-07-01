import { useEffect, useRef } from "react"

const useDebounce = (cb, delay) =>{
  const timeRefId = useRef(null)
  
  const debounceCallback = (...args) => {
    if (timeRefId.current) {
      clearTimeout(timeRefId.current)
    }

    timeRefId.current = setTimeout(() => {
      cb(...args)
    }, delay)

  }


  useEffect(() =>{
    return () => {
      if (timeRefId.current) {
        clearTimeout(timeRefId.current)
      }
    }
  }, [])

  return debounceCallback
}

export default useDebounce