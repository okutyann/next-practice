
import { useCallback, useState } from 'react'

export const useCounter = () => {
    const [count, setFoo] = useState(1);
    const [isShow, setIsShow] = useState(true);
    const handleClick = useCallback(() => {
      if (count < 10) {
        setFoo(count => count + 1)
      }
    }, [count]);
    const handleDisply = useCallback(() => {
      setIsShow((prevIsShow) => !prevIsShow);
    },[]);
    return {count , isShow , handleClick , handleDisply }
  };