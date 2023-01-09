<template>
  <router-view />
</template>

<style>
/* Reset CSS */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
input,
textarea {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  box-sizing: border-box;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Separately */
html {
  font-family: "Roboto", serif;
  font-size: 18px;
  line-height: 1.5;
  color: #000;
  background: #fff;
}
.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;
}
a,
button {
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn_primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  min-height: 50px;
  min-width: 120px;
  padding: 10px 20px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
  border: 2px solid #000;
  border-radius: 10px;
}
.btn_primary:not(.disabled):hover {
  background: #000;
  color: #fff;
}
.btn_primary.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.btn_back {
  font-weight: 700;
  text-decoration: underline;
}
.btn_back:hover {
  color: darkgreen;
}

/* Spacing */
.margin-bottom-80px {
  margin-bottom: 80px;
}
.margin-bottom-40px {
  margin-bottom: 40px;
}
.margin-bottom-20px {
  margin-bottom: 20px;
}

/* CSS Class */
.d-flex {
  display: flex;
}
.d-block {
  display: block;
}
.jc-center {
  justify-content: center;
}
.fl-center-v {
  display: flex;
  align-items: center;
}
.fl-center-h {
  display: flex;
  justify-content: center;
}
.fl-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-cover > img,
.image-contain > img {
  display: block;
  width: 100%;
  height: 100%;
}
.image-cover > img {
  object-fit: cover;
  object-position: center;
}
.image-contain > img {
  object-fit: contain;
}
.ps-relative {
  position: relative;
}
.ps-absolute {
  position: absolute;
}
.t0 {
  top: 0;
}
.r0 {
  right: 0;
}
.txt_center {
  text-align: center;
}

/* Grid */
.flex-grid {
  --grid-gap-x: 30px;
  --grid-gap-y: 30px;
  --grid-col: 3;

  /* calculate new width */
  --grid-gap-x-total: calc(var(--grid-gap-x) * (var(--grid-col) - 1));
  --grid-space-each: calc(var(--grid-gap-x-total) / var(--grid-col));

  display: flex;
  flex-wrap: wrap;
  gap: var(--grid-gap-y) var(--grid-gap-x);
}
.flex-grid > * {
  width: calc(100% / var(--grid-col) - var(--grid-space-each));
}
@media only screen and (max-width: 767px) {
  .flex-grid {
    --grid-col: 2;
  }
}
@media only screen and (max-width: 480px) {
  .flex-grid {
    --grid-col: 1;
  }
}

nav,
footer {
  min-height: 80px;
  background: linear-gradient(to bottom, skyblue, mediumturquoise);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
