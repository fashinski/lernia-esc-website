# [Esc] Hacker Escape Rooms - Eli Fadi 261019

My responsive homepage for **A2 inlämning 2** at Lernia.

[Open the live homepage](https://fashinski.github.io/lernia-esc-website/)

The page follows the supplied Figma design and Richard’s instructions from Lessons 8 and 9. It uses HTML and plain CSS, with separate files for the page, styling and assets.

## What is included

- Mobile and desktop layouts, with flexible sizes in between.
- Three challenge cards that scroll horizontally on smaller screens.
- One customer quote on mobile and two on wider screens.
- Original photo crops, logo and stars from the supplied Figma file.
- Local Roboto fonts, keyboard focus styles and a skip link.

This is a static homepage. The booking links lead to sections on the page. There is no booking system, payment flow or JavaScript in this assignment.

## Run locally

Open the project folder in VS Code. Right-click `index.html` and choose **Open with Live Server**.

There are no npm packages to install and no build command. You can also open `index.html` directly in a browser.

## Files

- `index.html` — page content and structure.
- `style.css` — shared styles, mobile layout and media queries.
- `assets/images/` — supplied photos and SVG artwork.
- `assets/fonts/` — local font files and their licences.
- `REPORT.md` — my explanation of the tools and structure.


## Checks

I checked the page at 320, 375, 480, 768, 800, 1024, 1280 and 1440 pixels wide. The card row scrolls on smaller screens, and keyboard navigation can reach the booking link on the third card. The rest of the page stays within the viewport.

## Design source

[Figma design supplied for this assignment](https://www.figma.com/design/jcYLE3G4BeEfZQdsNYUBKH/-Esc--Escape-Rooms--Copy-?node-id=0-1)

The photos and artwork belong to their original owners and are included for this course assignment. Roboto is distributed under the SIL Open Font License; the licence is included in `assets/fonts/`.
