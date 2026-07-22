import React from 'react';

/**
 * Small inline source citation. Renders a very small superscript link placed
 * at the end of a cited or quoted claim to credit the source. Use inline,
 * immediately after the fact being cited (even mid-paragraph).
 *
 * @param {string} href      Source URL
 * @param {string} label     Short source name shown in the superscript (e.g. "BBB", "Google")
 * @param {boolean} nofollow When true, adds rel=nofollow. Leave false (default) for the
 *                           business's own authoritative profiles (BBB, ISA, Google Business)
 *                           so they pass a signal and reinforce the entity/sameAs graph; set
 *                           true only for untrusted or third-party sources.
 */
const Cite = ({ href, label, nofollow = false }) => (
  <sup className="whitespace-nowrap">
    <a
      href={href}
      target="_blank"
      rel={`noopener noreferrer${nofollow ? ' nofollow' : ''}`}
      title={`Source: ${label}`}
      className="text-[0.6em] font-medium text-current/60 hover:text-[#D4AF37] underline decoration-dotted underline-offset-2 ml-0.5"
    >
      [{label}]
    </a>
  </sup>
);

export default Cite;
