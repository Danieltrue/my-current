import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
 
* {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
 }
  :root {
    --font-size: 20px;
    --font-color: #212121;
    --font-footer: #777777;
    --c1: #000000;
    --c2: #5800ff;
    --c3: #E900FF;
    --c4: #FFC600;
    --c1-09: #eee6ff;
    --c5: #f5f5f5;
    --brand-clr: var(--c2);
    --brand-clr-09: var(--c1-09);
    --monospace: "Space Mono",monospace;
    --serif: "Playfair Display",serif;
    --font-sans: "Rubik", sans-serif;
    --font-sans-inter: "Inter", sans-serif;
    --font-sans-serif: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --border-clr: #eee;
}

  .row {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  main.row {
    margin-top: 10px;
  }

  .article-menu {
    main {
      display: grid;
      grid-template-columns:repeat(3,1fr);
     }
    & > h3 {
    font-family: var(--serif);
    margin-bottom: 20px;
  }
}

.read {
  width: 150px;
  background-color: transparent;
  display: flex;
  font-size: 100%;
  padding: 0.4rem 0.8rem;
  border: 0;
  color: var(--brand-clr);
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}



 @media screen and (max-width: 1000px) {
    & {
      .article-menu {
          main {
            display: grid;
            grid-template-columns:repeat(2,1fr);
          
        }
      }
    }
 }

 @media screen and (max-width: 780px) {
    & {
      .article-menu {
          main {
            display: grid;
            grid-template-columns:repeat(1,1fr);
          
        }
      }
    }
 }


  html {
    font-family: var(--font-sans-inter);
    text-rendering:optimizeLegibility ;
    font-weight: 300;
    color: var(--font-color);
  }

  body {
    overflow-x: hidden;
  }
  
  a {
    color: var(--font-color);
    text-decoration: none;
  }

  .category-p {
    display: flex ;
  }

  .welcome {
    height: 270px;
    margin-bottom: 3rem;
    overflow: hidden;
    display: flex;
    justify-content:center ;
    align-items:center ;
    
    img {
      object-fit: cover;
    }
  }

  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}


main {
  display: block;
}



h1 {
  font-size: 2em;
  margin: 0.67em 0;
}



hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}


pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}



a {
  background-color: transparent;
}



abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}



b,
strong {
  font-weight: bolder;
}



code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}



small {
  font-size: 80%;
}


sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}



img {
  border-style: none;
}



button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}



legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}



::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`

export default Global
