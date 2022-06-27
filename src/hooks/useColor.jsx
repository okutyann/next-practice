import { useEffect } from 'react'


export const useColor = () => {
    useEffect(() => {
      document.body.style.backgroundColor = 'lightblue';
      return () => {
        document.body.style.backgroundColor = 'lightpink';
      }
    }, []);
  }