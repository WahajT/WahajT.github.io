/**
 * Generates static social + icon images from an SVG template using sharp
 * (already a dependency via Astro). Run with: npm run og
 *
 * Outputs:
 *   public/og/default.png      1200×630  — Open Graph / Twitter card
 *   public/apple-touch-icon.png 180×180
 *   public/favicon-32.png / favicon-16.png
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = resolve(root, 'public');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const NAME = esc('Wahaj Tahir');
const ROLE = esc('SDET & DevOps Engineer');
const TAG = esc('Test automation · CI/CD · Mobile device diagnostics');
const SITE = esc('wahajt.github.io');

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0c0b10"/>
      <stop offset="1" stop-color="#171227"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="8" fill="#b491ec"/>
  <g font-family="Inter, -apple-system, Segoe UI, Roboto, sans-serif">
    <text x="80" y="150" fill="#b491ec" font-size="30" font-weight="600" letter-spacing="6">PORTFOLIO</text>
    <text x="78" y="300" fill="#ececf0" font-size="104" font-weight="700">${NAME}</text>
    <text x="80" y="370" fill="#b491ec" font-size="46" font-weight="600">${ROLE}</text>
    <text x="80" y="470" fill="#a6a6b2" font-size="30" font-weight="400">${TAG}</text>
    <text x="80" y="560" fill="#7c7c88" font-size="26" font-weight="500">${SITE}</text>
  </g>
</svg>`;

const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#7338cf"/>
  <path d="M14 18h7l4.4 20L30 18h6l4.6 20L45 18h5L43.5 46h-7l-4.7-19.6L27.2 46h-7L14 18Z" fill="#fff"/>
</svg>`;

await mkdir(resolve(pub, 'og'), { recursive: true });

await sharp(Buffer.from(ogSvg)).png().toFile(resolve(pub, 'og/default.png'));
await sharp(Buffer.from(iconSvg)).resize(180, 180).png().toFile(resolve(pub, 'apple-touch-icon.png'));
await sharp(Buffer.from(iconSvg)).resize(32, 32).png().toFile(resolve(pub, 'favicon-32.png'));
await sharp(Buffer.from(iconSvg)).resize(16, 16).png().toFile(resolve(pub, 'favicon-16.png'));

console.log('✓ generated og/default.png, apple-touch-icon.png, favicon-32/16.png');
