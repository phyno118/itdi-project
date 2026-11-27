"use strict";

// Original rounded line icons for ITDI. Shared 48-unit canvas and 2.6-unit stroke.
const categoryIcons = [
  // Logo and branding: fountain pen nib.
  '<path d="M22 9q2-3 4 0l11 14q2 2 0 4L26 39q-2 2-4 0L11 27q-2-2 0-4Z" fill="#E7F4EE"/><circle cx="24" cy="24" r="4" fill="#fff"/><path d="M24 28v11"/>',
  // Editorial: open book.
  '<path d="M24 12Q16 7 9 9q-2 0-2 3v23q0 2 2 2 8-2 15 3 7-5 15-3 2 0 2-2V12q0-3-2-3-7-2-15 3Z"/><path d="M24 12v28M12 17h6m-6 7h6m-6 7h6"/><rect x="30" y="16" width="6" height="9" rx="2" fill="#E7F4EE"/><path d="M30 31h6"/>',
  // E-commerce: shopping bag.
  '<path d="M13 18h22q2 0 2 2l3 16a5 5 0 0 1-5 6H13a5 5 0 0 1-5-6l3-16q0-2 2-2Z"/><path d="M17 18v-5a7 7 0 0 1 14 0v5"/><path d="m18 30 4 4 8-8"/>',
  // Web and UI: rounded browser.
  '<rect x="6" y="9" width="36" height="29" rx="7"/><path d="M7 18h34"/><path d="M13 13.5h.01m5 0h.01" stroke-width="3"/><rect x="12" y="24" width="10" height="8" rx="2" fill="#E7F4EE"/><path d="M28 25h7m-7 6h5"/>',
  // Advertising: megaphone.
  '<path d="m18 28 3 9q1 2 3 2h2q2 0 1-2l-3-9"/><path d="M14 18h7L33 11q3-2 3 1v21q0 3-3 1l-12-7h-7Z" fill="#E7F4EE"/><rect x="7" y="18" width="7" height="9" rx="3" fill="#fff"/><path d="M41 13l2-2m-2 12h3m-3 10 2 2"/>',
  // Packaging: three faces of a box.
  '<path d="M22 8q2-1 4 0l12 6q2 1 2 3v15q0 2-2 3l-12 7q-2 1-4 0l-12-7q-2-1-2-3V17q0-2 2-3Z"/><path d="m9 16 15 8 15-8M24 24v18m-8-31 16 9v9"/>',
  // Illustration: soft character face.
  '<path d="M12 17Q7 4 13 5q6 0 7 10m8 0q1-10 7-10 6-1 1 12" fill="#E7F4EE"/><rect x="8" y="14" width="32" height="27" rx="13" fill="#fff"/><path d="M18 25h.01m12 0h.01" stroke-width="4"/><path d="M18 32q6 7 12 0"/>',
  // 3D: a sphere with curved meridians.
  '<circle cx="24" cy="24" r="17"/><ellipse cx="24" cy="24" rx="8" ry="17" fill="#E7F4EE"/><path d="M8 20q16 9 32 0M8 28q16 9 32 0"/>',
  // Industrial: product silhouette and dial.
  '<rect x="13" y="6" width="22" height="36" rx="10"/><rect x="18" y="12" width="12" height="9" rx="3" fill="#E7F4EE"/><circle cx="24" cy="31" r="5"/><path d="M24 28v3l2 1"/>',
  // Interiors: house.
  '<path d="m10 20 10-11q4-4 8 0l10 11q2 2 2 4v12q0 5-5 5H13q-5 0-5-5V24q0-2 2-4Z"/><path d="M20 41V29a4 4 0 0 1 8 0v12" fill="#E7F4EE"/>',
  // Signage: rounded sign and stand.
  '<rect x="6" y="9" width="36" height="24" rx="7"/><path d="M14 17h20m-20 8h12M24 34v8m-9 0h18"/>',
  // Fashion: shirt.
  '<path d="M18 10q6 6 12 0 1-1 3 0l7 5q2 1 1 3l-4 6q-1 2-3 1v13q0 3-3 3H17q-3 0-3-3V25q-2 1-3-1l-4-6q-1-2 1-3l7-5q2-1 3 0Z"/><path d="M25 25h5v4q0 3-2.5 3T25 29Z" fill="#E7F4EE"/>',
  // Motion: clapperboard.
  '<rect x="7" y="9" width="34" height="31" rx="7"/><path d="M8 19h32M15 10l5 8m6-8 5 8"/><path d="M20 27q0-2 2-1l7 3q2 1 0 2l-7 3q-2 1-2-1Z" fill="#E7F4EE"/>',
  // Presentations: chart on a slide.
  '<rect x="7" y="8" width="34" height="25" rx="5"/><path d="M24 34v7m-8 0 8-7 8 7"/><path d="M15 26v-6m9 6V15m9 11V12"/>',
  // Specialist: brush.
  '<path d="m19 25 15-16a4 4 0 0 1 6 6L24 30Z" fill="#E7F4EE"/><path d="m28 16 6 6"/><path d="M20 25q-8-2-10 7-.6 4-2 6-1 2 1 2 12 2 15-8 1-4-4-7Z" fill="#fff"/>',
  // All categories.
  '<rect x="8" y="8" width="12" height="12" rx="4"/><rect x="28" y="8" width="12" height="12" rx="4" fill="#E7F4EE"/><rect x="8" y="28" width="12" height="12" rx="4" fill="#E7F4EE"/><rect x="28" y="28" width="12" height="12" rx="4"/>'
];

function categoryIllustration(index) {
  return '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48" aria-hidden="true" focusable="false">' +
    '<g fill="none" stroke="#27B597" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">' + categoryIcons[index] + '</g></svg>';
}
