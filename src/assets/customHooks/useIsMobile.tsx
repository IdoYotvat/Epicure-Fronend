import { useEffect, useMemo, useState } from "react";

const DEFAULT_MOBILE_WIDTH = 376

export const useIsMobile = (mobileWidth = DEFAULT_MOBILE_WIDTH) => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return useMemo(() => {
      return width < mobileWidth;
    }, [mobileWidth, width]);
  };