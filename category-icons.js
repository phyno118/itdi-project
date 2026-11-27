"use strict";

// Original rounded line icons for ITDI. Shared 48-unit canvas and 2.6-unit stroke.
const categoryIcons = [
  // Logo and branding: fountain pen nib.
  '<path d="m24 7 14 18-14 16L10 25Z" fill="#E7F4EE"/><circle cx="24" cy="24" r="4" fill="#fff"/><path d="M24 28v12M18 8h12"/>',
  // Editorial: open book.
  '<path d="M24 12Q15 6 7 10v27q9-3 17 3 8-6 17-3V10q-8-4-17 2Z"/><path d="M24 12v28M12 17h6m-6 7h6m-6 7h6"/><rect x="30" y="16" width="6" height="9" rx="2" fill="#E7F4EE"/><path d="M30 31h6"/>',
  // E-commerce: shopping bag.
  '<path d="M11 18h26l3 18a5 5 0 0 1-5 6H13a5 5 0 0 1-5-6Z"/><path d="M17 19v-6a7 7 0 0 1 14 0v6"/><path d="m18 30 4 4 8-8"/>',
  // Web and UI: rounded browser.
  '<rect x="6" y="9" width="36" height="29" rx="7"/><path d="M7 18h34"/><path d="M13 13.5h.01m5 0h.01" stroke-width="3"/><rect x="12" y="24" width="10" height="8" rx="2" fill="#E7F4EE"/><path d="M28 25h7m-7 6h5"/>',
  // Advertising: megaphone.
  '<path d="M14 18h7L36 9v27l-15-9h-7Z" fill="#E7F4EE"/><rect x="7" y="18" width="7" height="9" rx="3" fill="#fff"/><path d="m17 28 4 11h7l-4-10M41 13l2-2m-2 12h3m-3 10 2 2"/>',
  // Packaging: three faces of a box.
  '<path d="m8 15 16-8 16 8v19l-16 9-16-9Z"/><path d="m8 15 16 9 16-9M24 24v19"/><path d="m16 11 16 9v10l-6 3V23L10 15" fill="#E7F4EE"/>',
  // Illustration: soft character face.
  '<path d="M12 17Q7 4 13 5q6 0 7 10m8 0q1-10 7-10 6-1 1 12" fill="#E7F4EE"/><rect x="8" y="14" width="32" height="27" rx="13" fill="#fff"/><path d="M18 25h.01m12 0h.01" stroke-width="4"/><path d="M18 32q6 7 12 0"/>',
  // 3D: a sphere with curved meridians.
  '<circle cx="24" cy="24" r="17"/><ellipse cx="24" cy="24" rx="8" ry="17" fill="#E7F4EE"/><path d="M8 20q16 9 32 0M8 28q16 9 32 0"/>',
  // Industrial: product silhouette and dial.
  '<rect x="13" y="6" width="22" height="36" rx="10"/><rect x="18" y="12" width="12" height="9" rx="3" fill="#E7F4EE"/><circle cx="24" cy="31" r="5"/><path d="M24 28v3l2 1"/>',
  // Interiors: house.
  '<path d="M6 23 20 9q4-4 8 0l14 14"/><path d="M11 20v17a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V20"/><path d="M20 41V29a4 4 0 0 1 8 0v12" fill="#E7F4EE"/>',
  // Signage: rounded sign and stand.
  '<rect x="6" y="9" width="36" height="24" rx="7"/><path d="M14 17h20m-20 8h12M24 34v8m-9 0h18"/>',
  // Fashion: shirt.
  '<path d="m16 8-10 8 6 10 6-4v19h12V22l6 4 6-10-10-8q-8 7-16 0Z"/><path d="M19 10q5 6 10 0"/><rect x="22" y="26" width="5" height="6" rx="2" fill="#E7F4EE"/>',
  // Motion: clapperboard.
  '<rect x="7" y="9" width="34" height="31" rx="7"/><path d="M8 19h32M15 10l5 8m6-8 5 8"/><path d="m20 25 10 5-10 5Z" fill="#E7F4EE"/>',
  // Presentations: chart on a slide.
  '<rect x="7" y="8" width="34" height="25" rx="5"/><path d="M24 34v8m-9 0 9-8 9 8"/><path d="M15 26v-6m9 6V15m9 11V12"/>',
  // Specialist: brush.
  '<path d="m19 25 15-16a4 4 0 0 1 6 6L24 30Z" fill="#E7F4EE"/><path d="m28 16 6 6M20 25q-8-2-10 7-1 6-4 8 15 4 18-8 1-4-4-7Z"/>',
  // All categories.
  '<rect x="8" y="8" width="12" height="12" rx="4"/><rect x="28" y="8" width="12" height="12" rx="4" fill="#E7F4EE"/><rect x="8" y="28" width="12" height="12" rx="4" fill="#E7F4EE"/><rect x="28" y="28" width="12" height="12" rx="4"/>'
];

function categoryIllustration(index) {
  return '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48" aria-hidden="true" focusable="false">' +
    '<g fill="none" stroke="#27B597" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">' + categoryIcons[index] + '</g></svg>';
}
