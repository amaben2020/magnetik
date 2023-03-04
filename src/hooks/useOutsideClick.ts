import { MutableRefObject, useEffect, useState } from "react";

const useOutsideClick = (dropdownRef: MutableRefObject<any>) => {
  const [isActive, setIsActive] = useState(null);

  const handleClick = (index: number) => {
    if (index > 0 && index <= 2) {
      setIsActive(index);
    }
  };

  useEffect(() => {
    const onClick = (e: any) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(null);
      }
    };

    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive]);

  return { isActive, setIsActive, handleClick };
};

export default useOutsideClick;
