import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { ldJson, generateCanonicalUrl } from '@/utils/seoHelpers';

/**
 * HowTo schema for an ordered, on-page procedure.
 *
 * Feed it the same array the page renders, so the markup cannot drift away
 * from the visible steps — schema that describes steps a visitor cannot see
 * is the kind of mismatch that earns a structured-data penalty.
 *
 * @param {string}   name  - what the reader is accomplishing
 * @param {object[]} steps - [{ title, text }] in the order they are performed
 */
const HowToSchema = ({ name, description, steps = [] }) => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  if (!steps || steps.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    ...(description ? { "description": description } : {}),
    "url": currentUrl,
    // No per-step `url`. A step URL is meant to deep-link to that step, and
    // the rendered list carries no element ids — pointing at #step-N would
    // claim an anchor that does not exist.
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "text": s.text
    }))
  };

  return (
    <Head>
      <script type="application/ld+json">
        {ldJson(schema)}
      </script>
    </Head>
  );
};

export default HowToSchema;
