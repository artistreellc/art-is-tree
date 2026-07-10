import { useLocation } from 'react-router-dom';
import { useLayoutEffect, useEffect, useRef } from 'react';

// useLayoutEffect warns during SSR ("does nothing on the server"); fall back to
// useEffect there. This scroll reset is a client-only concern, so behavior is
// identical in the browser — it just silences the prerender-time warning.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useIsomorphicLayoutEffect(() => {
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