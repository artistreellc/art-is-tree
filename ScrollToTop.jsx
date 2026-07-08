import { useLocation } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useLayoutEffect(() => {
    const prev = prevPathname.current;
    prevPathname.current = pathname;
    const prevTop = prev.split('/')[1];
    const newTop = pathname.split('/')[1];
    if (prevTop !== newTop) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;