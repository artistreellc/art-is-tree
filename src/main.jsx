import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from '@/routes';
import '@/index.css';

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    if (!isClient) return;

    // Domain safety-net redirect (legacy host -> canonical domain).
    const hostname = window.location.hostname;
    if (hostname === 'artistreeofva.com' || hostname === 'www.artistreeofva.com') {
      window.location.replace(
        'https://artistreevabeach.com' + window.location.pathname + window.location.search
      );
    }
  }
);
