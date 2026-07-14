import { useLocation } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useLayoutEffect(() => {
    const prev = prevPathname.current;
    prevPathname.current = pathname;
    // Scroll to top on ANY route change (not just top-segment changes) so
    // e.g. /services/tree-removal -> /services/tree-trimming doesn't land the
    // new page scrolled halfway down. No scroll on initial mount (prev === pathname).
    if (prev !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;