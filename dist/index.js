'use strict';

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

___$insertStyle("@charset \"UTF-8\";\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\n/* BOX-SIZING ##################*/\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\n*:focus {\n  outline: none;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.bg-color-primary {\n  background-color: var(--primary) !important;\n  color: white;\n}\n\n.primary-color {\n  color: var(--primary) !important;\n}\n\n.bg-color-secondary {\n  background-color: var(--secondary) !important;\n  color: white;\n}\n\n.secondary-color {\n  color: var(--secondary) !important;\n}\n\n.bg-color-gray1 {\n  background-color: var(--gray1) !important;\n  color: white;\n}\n\n.gray1-color {\n  color: var(--gray1) !important;\n}\n\n.bg-color-gray2 {\n  background-color: var(--gray2) !important;\n  color: white;\n}\n\n.gray2-color {\n  color: var(--gray2) !important;\n}\n\n.bg-color-gray3 {\n  background-color: var(--gray3) !important;\n  color: white;\n}\n\n.gray3-color {\n  color: var(--gray3) !important;\n}\n\n.bg-color-gray4 {\n  background-color: var(--gray4) !important;\n  color: white;\n}\n\n.gray4-color {\n  color: var(--gray4) !important;\n}\n\n.bg-color-text {\n  background-color: var(--text) !important;\n  color: white;\n}\n\n.text-color {\n  color: var(--text) !important;\n}\n\n.bg-color-text-dark {\n  background-color: var(--text-dark) !important;\n  color: white;\n}\n\n.text-dark-color {\n  color: var(--text-dark) !important;\n}\n\n.bg-color-danger {\n  background-color: var(--danger) !important;\n  color: white;\n}\n\n.danger-color {\n  color: var(--danger) !important;\n}\n\n.bg-color-warning {\n  background-color: var(--warning) !important;\n  color: white;\n}\n\n.warning-color {\n  color: var(--warning) !important;\n}\n\n.bg-color-success {\n  background-color: var(--success) !important;\n  color: white;\n}\n\n.success-color {\n  color: var(--success) !important;\n}\n\n.bg-color-info {\n  background-color: var(--info) !important;\n  color: white;\n}\n\n.info-color {\n  color: var(--info) !important;\n}\n\n.bg-color-gray1 {\n  color: var(--text-dark);\n}\n\n.bg-color-gray2 {\n  color: var(--text-dark);\n}\n\n.bg-color-gray3 {\n  color: var(--text-dark);\n}\n\n.bg-color-gray4 {\n  color: var(--text-dark);\n}\n\n:root {\n  --primary: #1abff3;\n  --secondary: #FF7C60;\n  --gray1: #edf0f4;\n  --gray2: #dee2eb;\n  --gray3: #d2d7e2;\n  --gray4: #999fb0;\n  --text: #5e677d;\n  --text-dark: #253359;\n  --danger: #ff2168;\n  --warning: #ffcf78;\n  --success: #05e4d7;\n  --info: #1969E1;\n  --light: white,\n  --bg: #f4f3fa ;\n}\n\n.m-0 {\n  margin: 0 0 !important;\n}\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0 {\n  margin-left: 0 !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-h {\n  margin: 0.5rem 0.5rem !important;\n}\n\n.mx-h {\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important;\n}\n\n.my-h {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.mt-h {\n  margin-top: 0.5rem !important;\n}\n\n.mr-h {\n  margin-right: 0.5rem !important;\n}\n\n.mb-h {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-h {\n  margin-left: 0.5rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-1 {\n  margin: 1rem 1rem !important;\n}\n\n.mx-1 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n.my-1 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.mt-1 {\n  margin-top: 1rem !important;\n}\n\n.mr-1 {\n  margin-right: 1rem !important;\n}\n\n.mb-1 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-1 {\n  margin-left: 1rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-2 {\n  margin: 1.5rem 1.5rem !important;\n}\n\n.mx-2 {\n  margin-left: 1.5rem !important;\n  margin-right: 1.5rem !important;\n}\n\n.my-2 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.mt-2 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-2 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-2 {\n  margin-left: 1.5rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-3 {\n  margin: 2rem 2rem !important;\n}\n\n.mx-3 {\n  margin-left: 2rem !important;\n  margin-right: 2rem !important;\n}\n\n.my-3 {\n  margin-top: 2rem !important;\n  margin-bottom: 2rem !important;\n}\n\n.mt-3 {\n  margin-top: 2rem !important;\n}\n\n.mr-3 {\n  margin-right: 2rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 2rem !important;\n}\n\n.ml-3 {\n  margin-left: 2rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-4 {\n  margin: 3.5rem 3.5rem !important;\n}\n\n.mx-4 {\n  margin-left: 3.5rem !important;\n  margin-right: 3.5rem !important;\n}\n\n.my-4 {\n  margin-top: 3.5rem !important;\n  margin-bottom: 3.5rem !important;\n}\n\n.mt-4 {\n  margin-top: 3.5rem !important;\n}\n\n.mr-4 {\n  margin-right: 3.5rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 3.5rem !important;\n}\n\n.ml-4 {\n  margin-left: 3.5rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-5 {\n  margin: 4rem 4rem !important;\n}\n\n.mx-5 {\n  margin-left: 4rem !important;\n  margin-right: 4rem !important;\n}\n\n.my-5 {\n  margin-top: 4rem !important;\n  margin-bottom: 4rem !important;\n}\n\n.mt-5 {\n  margin-top: 4rem !important;\n}\n\n.mr-5 {\n  margin-right: 4rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 4rem !important;\n}\n\n.ml-5 {\n  margin-left: 4rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-6 {\n  margin: 4.5rem 4.5rem !important;\n}\n\n.mx-6 {\n  margin-left: 4.5rem !important;\n  margin-right: 4.5rem !important;\n}\n\n.my-6 {\n  margin-top: 4.5rem !important;\n  margin-bottom: 4.5rem !important;\n}\n\n.mt-6 {\n  margin-top: 4.5rem !important;\n}\n\n.mr-6 {\n  margin-right: 4.5rem !important;\n}\n\n.mb-6 {\n  margin-bottom: 4.5rem !important;\n}\n\n.ml-6 {\n  margin-left: 4.5rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-7 {\n  margin: 5rem 5rem !important;\n}\n\n.mx-7 {\n  margin-left: 5rem !important;\n  margin-right: 5rem !important;\n}\n\n.my-7 {\n  margin-top: 5rem !important;\n  margin-bottom: 5rem !important;\n}\n\n.mt-7 {\n  margin-top: 5rem !important;\n}\n\n.mr-7 {\n  margin-right: 5rem !important;\n}\n\n.mb-7 {\n  margin-bottom: 5rem !important;\n}\n\n.ml-7 {\n  margin-left: 5rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-8 {\n  margin: 5.5rem 5.5rem !important;\n}\n\n.mx-8 {\n  margin-left: 5.5rem !important;\n  margin-right: 5.5rem !important;\n}\n\n.my-8 {\n  margin-top: 5.5rem !important;\n  margin-bottom: 5.5rem !important;\n}\n\n.mt-8 {\n  margin-top: 5.5rem !important;\n}\n\n.mr-8 {\n  margin-right: 5.5rem !important;\n}\n\n.mb-8 {\n  margin-bottom: 5.5rem !important;\n}\n\n.ml-8 {\n  margin-left: 5.5rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-9 {\n  margin: 6rem 6rem !important;\n}\n\n.mx-9 {\n  margin-left: 6rem !important;\n  margin-right: 6rem !important;\n}\n\n.my-9 {\n  margin-top: 6rem !important;\n  margin-bottom: 6rem !important;\n}\n\n.mt-9 {\n  margin-top: 6rem !important;\n}\n\n.mr-9 {\n  margin-right: 6rem !important;\n}\n\n.mb-9 {\n  margin-bottom: 6rem !important;\n}\n\n.ml-9 {\n  margin-left: 6rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-10 {\n  margin: 7rem 7rem !important;\n}\n\n.mx-10 {\n  margin-left: 7rem !important;\n  margin-right: 7rem !important;\n}\n\n.my-10 {\n  margin-top: 7rem !important;\n  margin-bottom: 7rem !important;\n}\n\n.mt-10 {\n  margin-top: 7rem !important;\n}\n\n.mr-10 {\n  margin-right: 7rem !important;\n}\n\n.mb-10 {\n  margin-bottom: 7rem !important;\n}\n\n.ml-10 {\n  margin-left: 7rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.p-0 {\n  padding: 0 0 !important;\n}\n\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0 {\n  padding-left: 0 !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\n.p-h {\n  padding: 0.5rem 0.5rem !important;\n}\n\n.px-h {\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important;\n}\n\n.py-h {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.pt-h {\n  padding-top: 0.5rem !important;\n}\n\n.pr-h {\n  padding-right: 0.5rem !important;\n}\n\n.pb-h {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-h {\n  padding-left: 0.5rem !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\n.p-1 {\n  padding: 1rem 1rem !important;\n}\n\n.px-1 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n.py-1 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.pt-1 {\n  padding-top: 1rem !important;\n}\n\n.pr-1 {\n  padding-right: 1rem !important;\n}\n\n.pb-1 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-1 {\n  padding-left: 1rem !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\n.p-2 {\n  padding: 1.5rem 1.5rem !important;\n}\n\n.px-2 {\n  padding-left: 1.5rem !important;\n  padding-right: 1.5rem !important;\n}\n\n.py-2 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.pt-2 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-2 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-2 {\n  padding-left: 1.5rem !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\n.p-3 {\n  padding: 2rem 2rem !important;\n}\n\n.px-3 {\n  padding-left: 2rem !important;\n  padding-right: 2rem !important;\n}\n\n.py-3 {\n  padding-top: 2rem !important;\n  padding-bottom: 2rem !important;\n}\n\n.pt-3 {\n  padding-top: 2rem !important;\n}\n\n.pr-3 {\n  padding-right: 2rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 2rem !important;\n}\n\n.pl-3 {\n  padding-left: 2rem !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\n.p-4 {\n  padding: 3.5rem 3.5rem !important;\n}\n\n.px-4 {\n  padding-left: 3.5rem !important;\n  padding-right: 3.5rem !important;\n}\n\n.py-4 {\n  padding-top: 3.5rem !important;\n  padding-bottom: 3.5rem !important;\n}\n\n.pt-4 {\n  padding-top: 3.5rem !important;\n}\n\n.pr-4 {\n  padding-right: 3.5rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 3.5rem !important;\n}\n\n.pl-4 {\n  padding-left: 3.5rem !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\n.p-5 {\n  padding: 4rem 4rem !important;\n}\n\n.px-5 {\n  padding-left: 4rem !important;\n  padding-right: 4rem !important;\n}\n\n.py-5 {\n  padding-top: 4rem !important;\n  padding-bottom: 4rem !important;\n}\n\n.pt-5 {\n  padding-top: 4rem !important;\n}\n\n.pr-5 {\n  padding-right: 4rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 4rem !important;\n}\n\n.pl-5 {\n  padding-left: 4rem !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\n.p-6 {\n  padding: 4.5rem 4.5rem !important;\n}\n\n.px-6 {\n  padding-left: 4.5rem !important;\n  padding-right: 4.5rem !important;\n}\n\n.py-6 {\n  padding-top: 4.5rem !important;\n  padding-bottom: 4.5rem !important;\n}\n\n.pt-6 {\n  padding-top: 4.5rem !important;\n}\n\n.pr-6 {\n  padding-right: 4.5rem !important;\n}\n\n.pb-6 {\n  padding-bottom: 4.5rem !important;\n}\n\n.pl-6 {\n  padding-left: 4.5rem !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\n.p-7 {\n  padding: 5rem 5rem !important;\n}\n\n.px-7 {\n  padding-left: 5rem !important;\n  padding-right: 5rem !important;\n}\n\n.py-7 {\n  padding-top: 5rem !important;\n  padding-bottom: 5rem !important;\n}\n\n.pt-7 {\n  padding-top: 5rem !important;\n}\n\n.pr-7 {\n  padding-right: 5rem !important;\n}\n\n.pb-7 {\n  padding-bottom: 5rem !important;\n}\n\n.pl-7 {\n  padding-left: 5rem !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\n.p-8 {\n  padding: 5.5rem 5.5rem !important;\n}\n\n.px-8 {\n  padding-left: 5.5rem !important;\n  padding-right: 5.5rem !important;\n}\n\n.py-8 {\n  padding-top: 5.5rem !important;\n  padding-bottom: 5.5rem !important;\n}\n\n.pt-8 {\n  padding-top: 5.5rem !important;\n}\n\n.pr-8 {\n  padding-right: 5.5rem !important;\n}\n\n.pb-8 {\n  padding-bottom: 5.5rem !important;\n}\n\n.pl-8 {\n  padding-left: 5.5rem !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\n.p-9 {\n  padding: 6rem 6rem !important;\n}\n\n.px-9 {\n  padding-left: 6rem !important;\n  padding-right: 6rem !important;\n}\n\n.py-9 {\n  padding-top: 6rem !important;\n  padding-bottom: 6rem !important;\n}\n\n.pt-9 {\n  padding-top: 6rem !important;\n}\n\n.pr-9 {\n  padding-right: 6rem !important;\n}\n\n.pb-9 {\n  padding-bottom: 6rem !important;\n}\n\n.pl-9 {\n  padding-left: 6rem !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\n.p-10 {\n  padding: 7rem 7rem !important;\n}\n\n.px-10 {\n  padding-left: 7rem !important;\n  padding-right: 7rem !important;\n}\n\n.py-10 {\n  padding-top: 7rem !important;\n  padding-bottom: 7rem !important;\n}\n\n.pt-10 {\n  padding-top: 7rem !important;\n}\n\n.pr-10 {\n  padding-right: 7rem !important;\n}\n\n.pb-10 {\n  padding-bottom: 7rem !important;\n}\n\n.pl-10 {\n  padding-left: 7rem !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.px-auto {\n  padding-right: auto !important;\n  padding-left: auto !important;\n}\n\nhtml {\n  font-size: 14px;\n}\n\nhtml,\nbody {\n  font-family: \"Source Sans Pro\";\n  font-weight: normal;\n  line-height: 1.7;\n  color: #5e677d;\n}\n\nbutton,\ninput,\nselect,\ntextarea,\ntd {\n  font-family: \"Source Sans Pro\";\n  line-height: 1.1;\n}\n\nh1,\n.h1 {\n  font-size: 3rem;\n  font-weight: 200;\n  line-height: 1.1;\n}\n\nh2,\n.h2 {\n  font-size: 2.5714rem;\n  font-weight: 300;\n  line-height: 1.1;\n}\n\nh3,\n.headline,\n.h3 {\n  font-size: 2.1429rem;\n  font-weight: 400;\n  line-height: 1.1;\n}\n\nh4,\n.h4 {\n  font-size: 1.7143rem;\n  font-weight: 400;\n  line-height: 1.1;\n}\n\nh5,\n.h5 {\n  font-size: 1.2857rem;\n  font-weight: 400;\n  line-height: 1.1;\n}\n\nh6,\n.h6 {\n  font-size: 1.1429rem;\n  font-weight: 600;\n  line-height: 1.1;\n}\n\nsmall,\n.caption {\n  font-size: 0.9286rem;\n  font-family: \"Source Sans Pro\";\n  font-weight: normal;\n}\n\np {\n  margin-top: 1rem;\n  line-height: 1.7;\n}\n\n.text-right {\n  text-align: right !important;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-none {\n  text-transform: none !important;\n}\n\n.text-italic {\n  font-style: italic !important;\n}\n\n.text-color-default {\n  color: #5e677d !important;\n}\n\n.text-color-primary {\n  color: #1abff3 !important;\n}\n\n.text-color-red,\n.text-color-danger {\n  color: #ff2168 !important;\n}\n\n.text-color-green,\n.text-color-success {\n  color: #05e4d7 !important;\n}\n\n.text-color-yellow {\n  color: #ffcf78 !important;\n}\n\n.text-color-coral,\n.text-color-warning {\n  color: #ff7c60 !important;\n}\n\n.text-color-blue,\n.text-color-info {\n  color: #1969E1 !important;\n}\n\n.text-color-gray1 {\n  color: #edf0f4 !important;\n}\n\n.text-color-gray2 {\n  color: #dee2eb !important;\n}\n\n.text-color-gray3 {\n  color: #d2d7e2 !important;\n}\n\n.text-color-gray4 {\n  color: #999fb0 !important;\n}\n\n/*####################################################\nTITLE\n####################################################*/\n.title-group {\n  display: flex;\n  box-shadow: inset 0 -6px 0 #ffffff;\n}\n.title-group .title {\n  cursor: pointer;\n}\n.title-group .title:hover:after {\n  background-color: #1abff3;\n  width: 100px;\n}\n\n.title {\n  font-size: 1.6rem;\n  color: #5e677d;\n  cursor: default;\n  text-decoration: none;\n  line-height: 1.5;\n}\n.title:after {\n  content: \"\";\n  display: block;\n  height: 6px;\n  width: 80px;\n  margin-top: 0.5rem;\n  transition: 0.3s;\n  background-color: #1abff3;\n}\n.title.off {\n  color: #999fb0;\n}\n.title.off:after {\n  background-color: #dee2eb;\n}\n\n/*####################################################\nFONT SIZE CLASSES\n####################################################*/\n.f-size-10 {\n  font-size: 10px !important;\n}\n\n.f-size-11 {\n  font-size: 11px !important;\n}\n\n.f-size-12 {\n  font-size: 12px !important;\n}\n\n.f-size-13 {\n  font-size: 13px !important;\n}\n\n.f-size-14 {\n  font-size: 14px !important;\n}\n\n.f-size-15 {\n  font-size: 15px !important;\n}\n\n.f-size-16 {\n  font-size: 16px !important;\n}\n\n.f-size-17 {\n  font-size: 17px !important;\n}\n\n.f-size-18 {\n  font-size: 18px !important;\n}\n\n.f-size-19 {\n  font-size: 19px !important;\n}\n\n.f-size-20 {\n  font-size: 20px !important;\n}\n\n.f-size-21 {\n  font-size: 21px !important;\n}\n\n.f-size-22 {\n  font-size: 22px !important;\n}\n\n.f-size-23 {\n  font-size: 23px !important;\n}\n\n.f-size-24 {\n  font-size: 24px !important;\n}\n\n/*####################################################\nLINE-HEIGHT\n####################################################*/\n.line-height-0 {\n  line-height: 0 !important;\n}\n\n.line-height-100 {\n  line-height: 1 !important;\n}\n\n.line-height-110 {\n  line-height: 1.1 !important;\n}\n\n.line-height-120 {\n  line-height: 1.2 !important;\n}\n\n.line-height-130 {\n  line-height: 1.3 !important;\n}\n\n.line-height-140 {\n  line-height: 1.4 !important;\n}\n\n.line-height-150 {\n  line-height: 1.5 !important;\n}\n\n/*####################################################\nNUMBER ICONS\n####################################################*/\n.icon-n-1:before {\n  content: \"1\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-2:before {\n  content: \"2\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-3:before {\n  content: \"3\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-4:before {\n  content: \"4\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-5:before {\n  content: \"5\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-6:before {\n  content: \"6\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-7:before {\n  content: \"7\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-8:before {\n  content: \"8\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-9:before {\n  content: \"9\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-10:before {\n  content: \"10\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-11:before {\n  content: \"11\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-12:before {\n  content: \"12\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-13:before {\n  content: \"13\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-14:before {\n  content: \"14\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-15:before {\n  content: \"15\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-16:before {\n  content: \"16\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-17:before {\n  content: \"17\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-18:before {\n  content: \"18\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-19:before {\n  content: \"19\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-20:before {\n  content: \"20\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-21:before {\n  content: \"21\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-22:before {\n  content: \"22\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-23:before {\n  content: \"23\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-24:before {\n  content: \"24\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-25:before {\n  content: \"25\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-26:before {\n  content: \"26\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-27:before {\n  content: \"27\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-28:before {\n  content: \"28\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-29:before {\n  content: \"29\";\n  font-family: \"Source Sans Pro\";\n}\n\n.icon-n-30:before {\n  content: \"30\";\n  font-family: \"Source Sans Pro\";\n}\n\n/*####################################################\nFONT-WEIGHT\n####################################################*/\n.font-weight-200 {\n  font-weight: 200 !important;\n}\n\n.font-weight-300 {\n  font-weight: 300 !important;\n}\n\n.font-weight-400 {\n  font-weight: 400 !important;\n}\n\n.font-weight-600 {\n  font-weight: 600 !important;\n}\n\n.font-weight-700 {\n  font-weight: 700 !important;\n}\n\n.font-weight-900 {\n  font-weight: 900 !important;\n}\n\n.row {\n  box-sizing: border-box;\n  margin: 0 auto;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.row.reverse {\n  flex-direction: row-reverse;\n}\n\n.row.natural-height {\n  align-items: flex-start;\n}\n\n.row.flex-column {\n  flex-direction: column;\n}\n\n.col {\n  box-sizing: border-box;\n  flex-grow: 1;\n  flex-basis: 0;\n  max-width: 100%;\n  padding: 1rem;\n}\n\n.col.reverse {\n  flex-direction: column-reverse;\n}\n\n.first {\n  order: -1;\n}\n\n.last {\n  order: 1;\n}\n\n.align-start {\n  align-self: flex-start;\n}\n\n.align-end {\n  align-self: flex-end;\n}\n\n.align-center {\n  align-self: center;\n}\n\n.align-baseline {\n  align-self: baseline;\n}\n\n.align-stretch {\n  align-self: stretch;\n}\n\n.container {\n  max-width: 90rem;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n.container.xs {\n  max-width: 40rem;\n}\n.container.sm {\n  max-width: 64rem;\n}\n.container.lg {\n  max-width: 120rem;\n}\n.container.fluid {\n  max-width: unset;\n}\n.container > .row {\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n\n.col-xs {\n  box-sizing: border-box;\n  flex-grow: 1;\n  flex-basis: 0;\n  max-width: 100%;\n  padding: 1rem;\n}\n\n.col-xs-1 {\n  box-sizing: border-box;\n  flex-basis: 8.3333333333%;\n  max-width: 8.3333333333%;\n  padding: 1rem;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.3333333333%;\n}\n\n.col-xs-2 {\n  box-sizing: border-box;\n  flex-basis: 16.6666666667%;\n  max-width: 16.6666666667%;\n  padding: 1rem;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.6666666667%;\n}\n\n.col-xs-3 {\n  box-sizing: border-box;\n  flex-basis: 25%;\n  max-width: 25%;\n  padding: 1rem;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-4 {\n  box-sizing: border-box;\n  flex-basis: 33.3333333333%;\n  max-width: 33.3333333333%;\n  padding: 1rem;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.3333333333%;\n}\n\n.col-xs-5 {\n  box-sizing: border-box;\n  flex-basis: 41.6666666667%;\n  max-width: 41.6666666667%;\n  padding: 1rem;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.6666666667%;\n}\n\n.col-xs-6 {\n  box-sizing: border-box;\n  flex-basis: 50%;\n  max-width: 50%;\n  padding: 1rem;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-7 {\n  box-sizing: border-box;\n  flex-basis: 58.3333333333%;\n  max-width: 58.3333333333%;\n  padding: 1rem;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.3333333333%;\n}\n\n.col-xs-8 {\n  box-sizing: border-box;\n  flex-basis: 66.6666666667%;\n  max-width: 66.6666666667%;\n  padding: 1rem;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.6666666667%;\n}\n\n.col-xs-9 {\n  box-sizing: border-box;\n  flex-basis: 75%;\n  max-width: 75%;\n  padding: 1rem;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-10 {\n  box-sizing: border-box;\n  flex-basis: 83.3333333333%;\n  max-width: 83.3333333333%;\n  padding: 1rem;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.3333333333%;\n}\n\n.col-xs-11 {\n  box-sizing: border-box;\n  flex-basis: 91.6666666667%;\n  max-width: 91.6666666667%;\n  padding: 1rem;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.6666666667%;\n}\n\n.col-xs-12 {\n  box-sizing: border-box;\n  flex-basis: 100%;\n  max-width: 100%;\n  padding: 1rem;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n.row.start-xs {\n  justify-content: flex-start;\n}\n\n.row.center-xs {\n  justify-content: center;\n}\n\n.row.end-xs {\n  justify-content: flex-end;\n}\n\n.row.top-xs {\n  align-items: flex-start;\n}\n\n.row.middle-xs {\n  align-items: center;\n}\n\n.row.bottom-xs {\n  align-items: flex-end;\n}\n\n.row.around-xs {\n  justify-content: space-around;\n}\n\n.row.between-xs {\n  justify-content: space-between;\n}\n\n.first-xs {\n  order: -1;\n}\n\n.last-xs {\n  order: 1;\n}\n\n@media only screen and (min-width: 41rem) {\n  .col-sm {\n    box-sizing: border-box;\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n    padding: 1rem;\n  }\n\n  .col-sm-1 {\n    box-sizing: border-box;\n    flex-basis: 8.3333333333%;\n    max-width: 8.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .col-sm-2 {\n    box-sizing: border-box;\n    flex-basis: 16.6666666667%;\n    max-width: 16.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .col-sm-3 {\n    box-sizing: border-box;\n    flex-basis: 25%;\n    max-width: 25%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-4 {\n    box-sizing: border-box;\n    flex-basis: 33.3333333333%;\n    max-width: 33.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .col-sm-5 {\n    box-sizing: border-box;\n    flex-basis: 41.6666666667%;\n    max-width: 41.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .col-sm-6 {\n    box-sizing: border-box;\n    flex-basis: 50%;\n    max-width: 50%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-7 {\n    box-sizing: border-box;\n    flex-basis: 58.3333333333%;\n    max-width: 58.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .col-sm-8 {\n    box-sizing: border-box;\n    flex-basis: 66.6666666667%;\n    max-width: 66.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .col-sm-9 {\n    box-sizing: border-box;\n    flex-basis: 75%;\n    max-width: 75%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-10 {\n    box-sizing: border-box;\n    flex-basis: 83.3333333333%;\n    max-width: 83.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .col-sm-11 {\n    box-sizing: border-box;\n    flex-basis: 91.6666666667%;\n    max-width: 91.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .col-sm-12 {\n    box-sizing: border-box;\n    flex-basis: 100%;\n    max-width: 100%;\n    padding: 1rem;\n  }\n\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n\n  .row.start-sm {\n    justify-content: flex-start;\n  }\n\n  .row.center-sm {\n    justify-content: center;\n  }\n\n  .row.end-sm {\n    justify-content: flex-end;\n  }\n\n  .row.top-sm {\n    align-items: flex-start;\n  }\n\n  .row.middle-sm {\n    align-items: center;\n  }\n\n  .row.bottom-sm {\n    align-items: flex-end;\n  }\n\n  .row.around-sm {\n    justify-content: space-around;\n  }\n\n  .row.between-sm {\n    justify-content: space-between;\n  }\n\n  .first-sm {\n    order: -1;\n  }\n\n  .last-sm {\n    order: 1;\n  }\n}\n@media only screen and (min-width: 65rem) {\n  .col-md {\n    box-sizing: border-box;\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n    padding: 1rem;\n  }\n\n  .col-md-1 {\n    box-sizing: border-box;\n    flex-basis: 8.3333333333%;\n    max-width: 8.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .col-md-2 {\n    box-sizing: border-box;\n    flex-basis: 16.6666666667%;\n    max-width: 16.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .col-md-3 {\n    box-sizing: border-box;\n    flex-basis: 25%;\n    max-width: 25%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-4 {\n    box-sizing: border-box;\n    flex-basis: 33.3333333333%;\n    max-width: 33.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .col-md-5 {\n    box-sizing: border-box;\n    flex-basis: 41.6666666667%;\n    max-width: 41.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .col-md-6 {\n    box-sizing: border-box;\n    flex-basis: 50%;\n    max-width: 50%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-7 {\n    box-sizing: border-box;\n    flex-basis: 58.3333333333%;\n    max-width: 58.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .col-md-8 {\n    box-sizing: border-box;\n    flex-basis: 66.6666666667%;\n    max-width: 66.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .col-md-9 {\n    box-sizing: border-box;\n    flex-basis: 75%;\n    max-width: 75%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-10 {\n    box-sizing: border-box;\n    flex-basis: 83.3333333333%;\n    max-width: 83.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .col-md-11 {\n    box-sizing: border-box;\n    flex-basis: 91.6666666667%;\n    max-width: 91.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .col-md-12 {\n    box-sizing: border-box;\n    flex-basis: 100%;\n    max-width: 100%;\n    padding: 1rem;\n  }\n\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n\n  .row.start-md {\n    justify-content: flex-start;\n  }\n\n  .row.center-md {\n    justify-content: center;\n  }\n\n  .row.end-md {\n    justify-content: flex-end;\n  }\n\n  .row.top-md {\n    align-items: flex-start;\n  }\n\n  .row.middle-md {\n    align-items: center;\n  }\n\n  .row.bottom-md {\n    align-items: flex-end;\n  }\n\n  .row.around-md {\n    justify-content: space-around;\n  }\n\n  .row.between-md {\n    justify-content: space-between;\n  }\n\n  .first-md {\n    order: -1;\n  }\n\n  .last-md {\n    order: 1;\n  }\n}\n@media only screen and (min-width: 91rem) {\n  .col-lg {\n    box-sizing: border-box;\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n    padding: 1rem;\n  }\n\n  .col-lg-1 {\n    box-sizing: border-box;\n    flex-basis: 8.3333333333%;\n    max-width: 8.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .col-lg-2 {\n    box-sizing: border-box;\n    flex-basis: 16.6666666667%;\n    max-width: 16.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .col-lg-3 {\n    box-sizing: border-box;\n    flex-basis: 25%;\n    max-width: 25%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-4 {\n    box-sizing: border-box;\n    flex-basis: 33.3333333333%;\n    max-width: 33.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .col-lg-5 {\n    box-sizing: border-box;\n    flex-basis: 41.6666666667%;\n    max-width: 41.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .col-lg-6 {\n    box-sizing: border-box;\n    flex-basis: 50%;\n    max-width: 50%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-7 {\n    box-sizing: border-box;\n    flex-basis: 58.3333333333%;\n    max-width: 58.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .col-lg-8 {\n    box-sizing: border-box;\n    flex-basis: 66.6666666667%;\n    max-width: 66.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .col-lg-9 {\n    box-sizing: border-box;\n    flex-basis: 75%;\n    max-width: 75%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-10 {\n    box-sizing: border-box;\n    flex-basis: 83.3333333333%;\n    max-width: 83.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .col-lg-11 {\n    box-sizing: border-box;\n    flex-basis: 91.6666666667%;\n    max-width: 91.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .col-lg-12 {\n    box-sizing: border-box;\n    flex-basis: 100%;\n    max-width: 100%;\n    padding: 1rem;\n  }\n\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n\n  .row.start-lg {\n    justify-content: flex-start;\n  }\n\n  .row.center-lg {\n    justify-content: center;\n  }\n\n  .row.end-lg {\n    justify-content: flex-end;\n  }\n\n  .row.top-lg {\n    align-items: flex-start;\n  }\n\n  .row.middle-lg {\n    align-items: center;\n  }\n\n  .row.bottom-lg {\n    align-items: flex-end;\n  }\n\n  .row.around-lg {\n    justify-content: space-around;\n  }\n\n  .row.between-lg {\n    justify-content: space-between;\n  }\n\n  .first-lg {\n    order: -1;\n  }\n\n  .last-lg {\n    order: 1;\n  }\n}\n@media only screen and (min-width: 121rem) {\n  .col-xl {\n    box-sizing: border-box;\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n    padding: 1rem;\n  }\n\n  .col-xl-1 {\n    box-sizing: border-box;\n    flex-basis: 8.3333333333%;\n    max-width: 8.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .col-xl-2 {\n    box-sizing: border-box;\n    flex-basis: 16.6666666667%;\n    max-width: 16.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .col-xl-3 {\n    box-sizing: border-box;\n    flex-basis: 25%;\n    max-width: 25%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-xl-4 {\n    box-sizing: border-box;\n    flex-basis: 33.3333333333%;\n    max-width: 33.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .col-xl-5 {\n    box-sizing: border-box;\n    flex-basis: 41.6666666667%;\n    max-width: 41.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .col-xl-6 {\n    box-sizing: border-box;\n    flex-basis: 50%;\n    max-width: 50%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-xl-7 {\n    box-sizing: border-box;\n    flex-basis: 58.3333333333%;\n    max-width: 58.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .col-xl-8 {\n    box-sizing: border-box;\n    flex-basis: 66.6666666667%;\n    max-width: 66.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .col-xl-9 {\n    box-sizing: border-box;\n    flex-basis: 75%;\n    max-width: 75%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-xl-10 {\n    box-sizing: border-box;\n    flex-basis: 83.3333333333%;\n    max-width: 83.3333333333%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .col-xl-11 {\n    box-sizing: border-box;\n    flex-basis: 91.6666666667%;\n    max-width: 91.6666666667%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .col-xl-12 {\n    box-sizing: border-box;\n    flex-basis: 100%;\n    max-width: 100%;\n    padding: 1rem;\n  }\n\n  .col-xl-offset-12 {\n    margin-left: 100%;\n  }\n\n  .row.start-xl {\n    justify-content: flex-start;\n  }\n\n  .row.center-xl {\n    justify-content: center;\n  }\n\n  .row.end-xl {\n    justify-content: flex-end;\n  }\n\n  .row.top-xl {\n    align-items: flex-start;\n  }\n\n  .row.middle-xl {\n    align-items: center;\n  }\n\n  .row.bottom-xl {\n    align-items: flex-end;\n  }\n\n  .row.around-xl {\n    justify-content: space-around;\n  }\n\n  .row.between-xl {\n    justify-content: space-between;\n  }\n\n  .first-xl {\n    order: -1;\n  }\n\n  .last-xl {\n    order: 1;\n  }\n}\n.col-gutter-lr {\n  padding: 0 1rem;\n}\n\n.col-no-gutter {\n  padding: 0;\n}\n\n.fill-height {\n  height: 100%;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: inline-flex !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-grid {\n  display: grid !important;\n}\n\n.d-inline-grid {\n  display: inline-grid !important;\n}\n\n.flex-grow-0 {\n  flex-grow: 0;\n}\n\n.flex-grow-1 {\n  flex-grow: 1;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n\n.flex-shrink-1 {\n  flex-shrink: 1;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.align-items-start {\n  align-items: flex-start;\n}\n\n.align-items-end {\n  align-items: flex-end;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.flex-direction-column {\n  flex-direction: column;\n}\n\n.flex-direction-row {\n  flex-direction: row;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.b-radius {\n  border-radius: 4px !important;\n}\n\n.b-radius-0 {\n  border-radius: 0px !important;\n}\n\n.opacity-10 {\n  opacity: 0.1;\n}\n\n.opacity-20 {\n  opacity: 0.2;\n}\n\n.opacity-30 {\n  opacity: 0.3;\n}\n\n.opacity-40 {\n  opacity: 0.4;\n}\n\n.opacity-50 {\n  opacity: 0.5;\n}\n\n.opacity-60 {\n  opacity: 0.6;\n}\n\n.opacity-70 {\n  opacity: 0.7;\n}\n\n.opacity-80 {\n  opacity: 0.8;\n}\n\n.opacity-90 {\n  opacity: 0.9;\n}\n\n.opacity-100 {\n  opacity: 1;\n}\n\n.card-container {\n  padding: 3rem 0;\n}\n.card-container-title {\n  text-transform: uppercase;\n  font-size: 1.1429rem;\n  font-weight: 600;\n  color: #999fb0;\n  height: 4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #dee2eb;\n}\n.card-container-title:not(:first-of-type) {\n  margin-top: 5rem;\n}\n.card-container-wrapper {\n  padding: 2rem 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card {\n  border-radius: 6px;\n  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.1);\n  background: #ffffff;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n.card.login {\n  max-width: 400px;\n  margin: 0 auto;\n}\n.card-header {\n  align-items: center;\n  display: flex;\n  border-bottom: 1px solid #dee2eb;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: space-between;\n}\n.card-header .card-data {\n  text-decoration: none;\n  color: #5e677d;\n  flex-grow: 1;\n  transition: 0.3s;\n  padding-right: 0.35rem;\n}\n.card-header .card-data h5 {\n  transition: 0.3s;\n}\n.card-header .card-data:hover h5 {\n  color: #0a8db7;\n}\n.card-header h5 {\n  font-size: 1.15rem;\n  line-height: 1.25;\n  color: #253359;\n}\n.card-header .btn {\n  padding: 12px !important;\n}\n.card-body {\n  flex-grow: 1;\n  padding: 1rem;\n}\n.card-footer {\n  display: flex;\n  border-top: 1px solid #dee2eb;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: space-between;\n}\n.card-footer .btn {\n  padding: 12px !important;\n}\n.card-footer .avatar {\n  margin: 0 4px 0 0;\n}\n.card-header, .card-footer {\n  padding: 1rem 0.5rem;\n}\n.card.w-280 {\n  width: 280px;\n}\n\n.popover {\n  position: relative;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.popover-menu {\n  pointer-events: none;\n  position: absolute;\n  z-index: 9;\n  opacity: 0;\n  visibility: hidden;\n  background-color: #ffffff;\n  border-radius: 4px;\n  padding: 2rem;\n  box-shadow: 0 6px 24px -4px rgba(0, 0, 0, 0.2);\n  margin: 0.5rem 0;\n  transition: 0.3s;\n  transform: translateY(-10px);\n}\n.popover-menu .avatar {\n  background-color: #edf0f4 !important;\n}\n.popover-menu h6, .popover-menu small {\n  white-space: nowrap;\n}\n.popover-menu.sm {\n  padding: 0.5rem 0.8rem;\n}\n.popover:hover > .avatar {\n  box-shadow: 0 0 0 1px #1abff3;\n}\n.popover:hover .popover-menu {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.popover-title:not(:first-child) {\n  margin-top: 0.5rem;\n}\n.popover.right .popover-menu {\n  right: 0;\n}\n.popover.left .popover-menu {\n  left: 0;\n}\n.popover.top .popover-menu {\n  bottom: 100%;\n}\n.popover.bottom .popover-menu {\n  top: 100%;\n}\n\n.btn {\n  background-color: var(--gray2);\n  padding: 0.822rem 1.5rem;\n  font-size: 1rem;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: 0.3s;\n  position: relative;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  margin: 0;\n  text-decoration: none;\n}\n.btn.onlytext {\n  background-color: white;\n  color: var(--gray2);\n}\n.btn.outlined {\n  background-color: white;\n  border-color: var(--gray2);\n  color: var(--gray2);\n}\n.btn.xs {\n  padding: 0.15rem 0.8rem;\n}\n.btn.xs i {\n  font-size: 1rem;\n}\n.btn.sm {\n  padding: 0.3rem 1.2rem;\n}\n.btn.sm i {\n  font-size: 1.1429rem;\n}\n.btn.lg {\n  padding: 0.8rem 1.8rem;\n}\n.btn.lg i {\n  font-size: 1.1429rem;\n}\n.btn-block {\n  width: 100%;\n}\n.btn.rounded {\n  border-radius: 100px;\n}\n.btn.disabled, .btn:disabled {\n  background-color: var(--gray2);\n  cursor: not-allowed;\n}\n.btn.disabled.onlytext, .btn:disabled.onlytext {\n  background-color: white;\n  color: var(--gray2);\n}\n.btn.disabled.outlined, .btn:disabled.outlined {\n  background-color: white;\n  border-color: var(--gray2);\n  color: var(--gray2);\n}\n.btn.loading {\n  text-indent: -99999px;\n}\n.btn.loading:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  animation: rotate 0.5s linear infinite;\n}\n\n.btn-primary {\n  background-color: var(--primary);\n  color: white;\n}\n.btn-primary.onlytext {\n  background-color: white;\n  color: var(--primary);\n}\n.btn-primary.outlined {\n  background-color: white;\n  border-color: var(--primary);\n  color: var(--primary);\n}\n\n.btn-secondary {\n  background-color: var(--secondary);\n  color: white;\n}\n.btn-secondary.onlytext {\n  background-color: white;\n  color: var(--secondary);\n}\n.btn-secondary.outlined {\n  background-color: white;\n  border-color: var(--secondary);\n  color: var(--secondary);\n}\n\n.btn-gray1 {\n  background-color: var(--gray1);\n  color: white;\n}\n.btn-gray1.onlytext {\n  background-color: white;\n  color: var(--gray1);\n}\n.btn-gray1.outlined {\n  background-color: white;\n  border-color: var(--gray1);\n  color: var(--gray1);\n}\n\n.btn-gray2 {\n  background-color: var(--gray2);\n  color: white;\n}\n.btn-gray2.onlytext {\n  background-color: white;\n  color: var(--gray2);\n}\n.btn-gray2.outlined {\n  background-color: white;\n  border-color: var(--gray2);\n  color: var(--gray2);\n}\n\n.btn-gray3 {\n  background-color: var(--gray3);\n  color: white;\n}\n.btn-gray3.onlytext {\n  background-color: white;\n  color: var(--gray3);\n}\n.btn-gray3.outlined {\n  background-color: white;\n  border-color: var(--gray3);\n  color: var(--gray3);\n}\n\n.btn-gray4 {\n  background-color: var(--gray4);\n  color: white;\n}\n.btn-gray4.onlytext {\n  background-color: white;\n  color: var(--gray4);\n}\n.btn-gray4.outlined {\n  background-color: white;\n  border-color: var(--gray4);\n  color: var(--gray4);\n}\n\n.btn-text {\n  background-color: var(--text);\n  color: white;\n}\n.btn-text.onlytext {\n  background-color: white;\n  color: var(--text);\n}\n.btn-text.outlined {\n  background-color: white;\n  border-color: var(--text);\n  color: var(--text);\n}\n\n.btn-text-dark {\n  background-color: var(--text-dark);\n  color: white;\n}\n.btn-text-dark.onlytext {\n  background-color: white;\n  color: var(--text-dark);\n}\n.btn-text-dark.outlined {\n  background-color: white;\n  border-color: var(--text-dark);\n  color: var(--text-dark);\n}\n\n.btn-danger {\n  background-color: var(--danger);\n  color: white;\n}\n.btn-danger.onlytext {\n  background-color: white;\n  color: var(--danger);\n}\n.btn-danger.outlined {\n  background-color: white;\n  border-color: var(--danger);\n  color: var(--danger);\n}\n\n.btn-warning {\n  background-color: var(--warning);\n  color: white;\n}\n.btn-warning.onlytext {\n  background-color: white;\n  color: var(--warning);\n}\n.btn-warning.outlined {\n  background-color: white;\n  border-color: var(--warning);\n  color: var(--warning);\n}\n\n.btn-success {\n  background-color: var(--success);\n  color: white;\n}\n.btn-success.onlytext {\n  background-color: white;\n  color: var(--success);\n}\n.btn-success.outlined {\n  background-color: white;\n  border-color: var(--success);\n  color: var(--success);\n}\n\n.btn-info {\n  background-color: var(--info);\n  color: white;\n}\n.btn-info.onlytext {\n  background-color: white;\n  color: var(--info);\n}\n.btn-info.outlined {\n  background-color: white;\n  border-color: var(--info);\n  color: var(--info);\n}\n\n.btn-gray1 {\n  color: var(--text-dark);\n}\n\n.btn-gray2 {\n  color: var(--text-dark);\n}\n\n.btn-gray3 {\n  color: var(--text-dark);\n}\n\n.btn-gray4 {\n  color: var(--text-dark);\n}\n\n.btn-group {\n  display: inline-flex;\n  align-items: center;\n}\n.btn-group.space > * {\n  margin-left: 0.5rem;\n}\n.btn-group.space > *:first-child {\n  margin: 0;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-group {\n  margin-bottom: 1rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.form-group label {\n  color: var(--gray4);\n}\n.form-group .input-group {\n  display: flex;\n  align-items: center;\n  transition: 0.3s;\n  position: relative;\n}\n.form-group .input-group .input-field {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.form-group .input-group .input-field:after {\n  font-family: \"feather\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  flex-shrink: 0;\n  position: absolute;\n  right: 1rem;\n  transition: 0.3s;\n}\n.form-group .input-group .input-field:first-child .form-control {\n  border-radius: 4px 0 0 4px;\n}\n.form-group .input-group .input-field:last-child .form-control {\n  border-radius: 0 4px 4px 0;\n}\n.form-group .input-group .input-field:only-child .form-control {\n  border-radius: 4px;\n}\n.form-group .input-group .btn {\n  padding: 0.822rem 1rem;\n  font-size: 1rem;\n}\n.form-group .input-group .btn:first-child {\n  border-radius: 4px 0 0 4px;\n}\n.form-group .input-group .btn:only-child {\n  border-radius: 4px;\n}\n.form-group .input-group .btn:last-child {\n  border-radius: 0 4px 4px 0;\n}\n.form-group .input-group .tooltip:last-child > .btn {\n  border-radius: 0 4px 4px 0;\n}\n.form-group .input-group .tooltip:first-child > .btn {\n  border-radius: 4px 0 0 4px;\n}\n.form-group .hint {\n  display: none;\n  font-size: 0.8571rem;\n}\n.form-group .hint.persistent {\n  display: block;\n}\n.form-group.has-error .form-control {\n  color: var(--danger);\n  border: 1px solid var(--danger);\n  caret-color: var(--danger);\n}\n.form-group.has-error .form-control:focus {\n  box-shadow: 0 0 0 3px rgba(var(--danger), 0.2);\n}\n.form-group.has-error label {\n  color: var(--danger);\n}\n.form-group.has-error .hint {\n  display: block;\n  color: var(--danger);\n}\n.form-group.is-success .input-field:after {\n  content: \"\";\n  color: var(--success);\n}\n.form-group.is-success .form-control {\n  padding-right: 3rem;\n  border: 1px solid var(--success);\n  caret-color: var(--success);\n}\n.form-group.is-success .form-control:focus {\n  box-shadow: 0 0 0 3px rgba(var(--success), 0.2);\n}\n.form-group.is-success label {\n  color: var(--text);\n}\n.form-group.is-success .hint {\n  display: none;\n}\n\n.form-control {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  padding: 0 1rem;\n  border: 1px solid var(--gray3);\n  color: var(--text);\n  border-radius: 4px;\n  min-height: 42px;\n  font-size: 1rem;\n  transition: 0.3s;\n  width: 100%;\n  line-height: 1.7;\n  caret-color: var(--primary);\n  margin: 0;\n}\n.form-control::placeholder {\n  color: var(--gray3);\n}\n.form-control::-webkit-input-placeholder {\n  color: var(--gray3);\n}\n.form-control:-ms-input-placeholder {\n  color: var(--gray3);\n}\n.form-control:focus {\n  box-shadow: 0 0 0 3px rgba(var(--primary), 0.2);\n  border: 1px solid var(--primary);\n}\n.form-control-ghost {\n  background: transparent;\n}\n.form-control:disabled {\n  background-color: var(--bg);\n}\n\nselect.form-control {\n  padding: 0 2.8rem 0 1rem;\n  background: url('data:image/svg+xml;charset=UTF-8,<svg width=\"12\" height=\"7\" viewBox=\"0 0 12 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.02734 0.472656C1.875 0.332031 1.69922 0.261719 1.5 0.261719C1.30078 0.261719 1.125 0.337891 0.972656 0.490234C0.832031 0.630859 0.761719 0.800781 0.761719 1C0.761719 1.19922 0.832031 1.375 0.972656 1.52734L5.47266 6.02734C5.625 6.17969 5.80078 6.25586 6 6.25586C6.19922 6.25586 6.375 6.17969 6.52734 6.02734L11.0273 1.52734C11.1328 1.43359 11.2031 1.32227 11.2383 1.19336C11.2734 1.06445 11.2734 0.935547 11.2383 0.806641C11.2031 0.666016 11.1387 0.548828 11.0449 0.455078C10.9512 0.361328 10.834 0.296875 10.6934 0.261719C10.5645 0.226562 10.4355 0.226562 10.3066 0.261719C10.1777 0.296875 10.0664 0.367188 9.97266 0.472656L6 4.44531L2.02734 0.472656Z\" fill=\"%23999fb0\"/></svg>') no-repeat right 1rem center/12px auto var(--light);\n}\nselect.form-control-ghost {\n  background: url('data:image/svg+xml;charset=UTF-8,<svg width=\"12\" height=\"7\" viewBox=\"0 0 12 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.02734 0.472656C1.875 0.332031 1.69922 0.261719 1.5 0.261719C1.30078 0.261719 1.125 0.337891 0.972656 0.490234C0.832031 0.630859 0.761719 0.800781 0.761719 1C0.761719 1.19922 0.832031 1.375 0.972656 1.52734L5.47266 6.02734C5.625 6.17969 5.80078 6.25586 6 6.25586C6.19922 6.25586 6.375 6.17969 6.52734 6.02734L11.0273 1.52734C11.1328 1.43359 11.2031 1.32227 11.2383 1.19336C11.2734 1.06445 11.2734 0.935547 11.2383 0.806641C11.2031 0.666016 11.1387 0.548828 11.0449 0.455078C10.9512 0.361328 10.834 0.296875 10.6934 0.261719C10.5645 0.226562 10.4355 0.226562 10.3066 0.261719C10.1777 0.296875 10.0664 0.367188 9.97266 0.472656L6 4.44531L2.02734 0.472656Z\" fill=\"%23999fb0\"/></svg>') no-repeat right 1rem center/12px auto transparent;\n}\nselect.form-control:required {\n  color: var(--gray4);\n}\nselect.form-control:required:valid {\n  color: var(--text);\n}\nselect.form-control:required option:disabled {\n  color: var(--text);\n}\n\n.checkbox input {\n  display: none;\n}\n.checkbox label {\n  cursor: pointer;\n  display: flex;\n}\n.checkbox label span {\n  display: inline-flex;\n  width: 20px;\n  height: 20px;\n  font-family: feather;\n  font-size: 18px;\n  color: var(--light);\n  box-shadow: inset 0 0 0 2px var(--gray3);\n  border-radius: 4px;\n  transition: 0.3s;\n  margin-right: 0.5rem;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.checkbox label span .icon {\n  display: none;\n}\n.checkbox input:checked + label span {\n  box-shadow: none;\n  background-color: var(--primary);\n  color: #ffffff;\n}\n.checkbox input:checked + label span .icon {\n  display: block;\n}\n.checkbox.primary input:checked + label span {\n  background-color: var(--primary);\n}\n.checkbox.secondary input:checked + label span {\n  background-color: var(--secondary);\n}\n.checkbox.gray1 input:checked + label span {\n  background-color: var(--gray1);\n}\n.checkbox.gray2 input:checked + label span {\n  background-color: var(--gray2);\n}\n.checkbox.gray3 input:checked + label span {\n  background-color: var(--gray3);\n}\n.checkbox.gray4 input:checked + label span {\n  background-color: var(--gray4);\n}\n.checkbox.text input:checked + label span {\n  background-color: var(--text);\n}\n.checkbox.text-dark input:checked + label span {\n  background-color: var(--text-dark);\n}\n.checkbox.danger input:checked + label span {\n  background-color: var(--danger);\n}\n.checkbox.warning input:checked + label span {\n  background-color: var(--warning);\n}\n.checkbox.success input:checked + label span {\n  background-color: var(--success);\n}\n.checkbox.info input:checked + label span {\n  background-color: var(--info);\n}\n.checkbox.gray1 input:checked + label span {\n  color: var(--text-dark);\n}\n.checkbox.gray2 input:checked + label span {\n  color: var(--text-dark);\n}\n.checkbox.gray3 input:checked + label span {\n  color: var(--text-dark);\n}\n.checkbox.gray4 input:checked + label span {\n  color: var(--text-dark);\n}\n\n.radio input {\n  display: none;\n}\n.radio label {\n  cursor: pointer;\n  display: flex;\n}\n.radio label span {\n  display: inline-flex;\n  width: 20px;\n  height: 20px;\n  font-family: feather;\n  font-size: 18px;\n  color: var(--light);\n  box-shadow: inset 0 0 0 2px var(--gray3);\n  border-radius: 10px;\n  transition: 0.3s;\n  margin-right: 0.5rem;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.radio label span .icon {\n  display: none;\n}\n.radio input:checked + label span {\n  box-shadow: none;\n  background-color: var(--primary);\n  color: #ffffff;\n}\n.radio input:checked + label span .icon {\n  display: block;\n}\n.radio.primary input:checked + label span {\n  background-color: var(--primary);\n}\n.radio.secondary input:checked + label span {\n  background-color: var(--secondary);\n}\n.radio.gray1 input:checked + label span {\n  background-color: var(--gray1);\n}\n.radio.gray2 input:checked + label span {\n  background-color: var(--gray2);\n}\n.radio.gray3 input:checked + label span {\n  background-color: var(--gray3);\n}\n.radio.gray4 input:checked + label span {\n  background-color: var(--gray4);\n}\n.radio.text input:checked + label span {\n  background-color: var(--text);\n}\n.radio.text-dark input:checked + label span {\n  background-color: var(--text-dark);\n}\n.radio.danger input:checked + label span {\n  background-color: var(--danger);\n}\n.radio.warning input:checked + label span {\n  background-color: var(--warning);\n}\n.radio.success input:checked + label span {\n  background-color: var(--success);\n}\n.radio.info input:checked + label span {\n  background-color: var(--info);\n}\n.radio.gray1 input:checked + label span {\n  color: var(--text-dark);\n}\n.radio.gray2 input:checked + label span {\n  color: var(--text-dark);\n}\n.radio.gray3 input:checked + label span {\n  color: var(--text-dark);\n}\n.radio.gray4 input:checked + label span {\n  color: var(--text-dark);\n}\n\n.checkbox input:disabled + label span {\n  box-shadow: inset 0 0 0 2px var(--gray1);\n}\n.checkbox input:disabled:checked + label span {\n  background-color: var(--gray1);\n}\n\n.radio input:disabled + label span {\n  box-shadow: inset 0 0 0 2px var(--gray1);\n}\n.radio input:disabled:checked + label span {\n  background-color: var(--gray1);\n}\n\n.divider {\n  position: relative;\n  display: flex;\n  font-size: 0.9286rem;\n  height: 2rem;\n}\n.divider.sm {\n  height: 1rem;\n}\n.divider.line {\n  height: 1px;\n}\n.divider.hr {\n  align-items: center;\n  justify-content: center;\n}\n.divider.hr span {\n  padding: 0 1rem;\n}\n.divider.hr:before {\n  content: \"\";\n  border-top: 1px solid #dee2eb;\n  display: block;\n  flex-grow: 1;\n}\n.divider.hr:after {\n  content: \"\";\n  border-top: 1px solid #dee2eb;\n  display: block;\n  flex-grow: 1;\n}\n.divider.left:before {\n  display: none;\n}\n.divider.right:after {\n  display: none;\n}\n.divider-v {\n  height: 100%;\n  flex-shrink: 0;\n  width: 1px;\n  background-color: #edf0f4;\n  margin: 0.7rem 1rem;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n.tooltip-content {\n  pointer-events: none;\n  position: absolute;\n  opacity: 0;\n  z-index: 100;\n  visibility: hidden;\n  background-color: rgba(37, 51, 89, 0.5);\n  border-radius: 3px;\n  padding: 0.3rem 0.5rem;\n  box-shadow: 0 3px 12px -2px rgba(0, 0, 0, 0.3);\n  margin: 0.5rem 0;\n  transition: 0.3s;\n  transform: translate(-50%, -10px);\n  white-space: nowrap;\n  color: #ffffff;\n  font-size: 12px;\n  left: 50%;\n}\n.tooltip-content:before {\n  content: \"\";\n  display: block;\n  width: 5px;\n  height: 5px;\n  position: absolute;\n  border: 5px solid transparent;\n}\n.tooltip.top .tooltip-content {\n  bottom: 100%;\n}\n.tooltip.top .tooltip-content:before {\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-top: 5px solid rgba(37, 51, 89, 0.35);\n}\n.tooltip.bottom .tooltip-content {\n  top: 100%;\n}\n.tooltip.bottom .tooltip-content:before {\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-bottom: 5px solid rgba(37, 51, 89, 0.45);\n}\n.tooltip:hover .tooltip-content {\n  opacity: 1;\n  visibility: visible;\n  transform: translate(-50%, 0);\n}\n\n.avatar {\n  width: 42px;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f4f3fa;\n  border-radius: 50%;\n  position: relative;\n  transition: 0.3s;\n  flex-shrink: 0;\n}\n.avatar:after {\n  content: attr(data-initials);\n  font-weight: 300;\n  font-size: 1.1429rem;\n  color: inherit;\n}\n.avatar.admin {\n  box-shadow: 0 0 0 1px rgba(26, 191, 243, 0.3);\n}\n.avatar.admin:hover {\n  box-shadow: 0 0 0 1px #1abff3;\n}\n.avatar[data-initials=\"\"] {\n  background: url('data:image/svg+xml;charset=UTF-8,<svg width=\"240\" height=\"240\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"240\" height=\"240\" fill=\"%23E5E9EF\"/><path d=\"M171.21 92.2012C170.255 64.5663 147.576 42.657 119.924 42.657C92.2728 42.657 69.5936 64.5663 68.6389 92.2012L68.5504 94.7611L69.4657 102.966C65.1082 104.86 62.2874 109.42 62.8197 114.394L63.9674 125.119C64.5175 130.259 68.3086 134.336 73.1767 135.406C76.2929 153.301 89.0979 167.587 105.759 173.047L105.76 187.095C72 187.095 45.5767 196.5 45.5767 232.079V240H195.577V232.079C195.577 197.63 168 187.037 134.088 187.037L134.089 173.555C151.399 168.504 164.724 153.808 167.571 135.406C172.439 134.337 176.23 130.259 176.781 125.119L177.928 114.394C177.971 114 177.992 113.603 177.992 113.206C177.992 108.361 174.905 104.236 170.59 102.692L171.298 94.7611L171.21 92.2012Z\" fill=\"white\"/><path d=\"M196 232.052V240H45V232.052C45 200.402 66.5 187.582 98.3549 187.334C98.3539 187.418 98.3533 187.5 98.3533 187.582C98.3533 198.12 108.269 207.328 120.5 207.328C132.731 207.328 142.647 198.12 142.647 187.582L142.645 187.334C172 187.582 196 200.402 196 232.052Z\" fill=\"%23B9C3CE\"/></svg>') no-repeat center/cover #fff;\n}\n.avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  object-position: center;\n}\n.avatar.lg {\n  width: 6.1429rem;\n  height: 6.1429rem;\n}\n.avatar.lg.admin:before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  position: absolute;\n  right: -0.1em;\n  top: -0.1em;\n  border: 0.1em solid white;\n  background: url('data:image/svg+xml;charset=UTF-8,<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" class=\"svg-inline--fa fa-star fa-w-18\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"white\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\"></path></svg>') no-repeat center/1rem 1rem #1abff3;\n  z-index: 1;\n}\n.avatar.lg:after {\n  font-size: 1.8rem;\n  font-weight: 300;\n}\n.avatar.sm {\n  width: 1.7143rem;\n  height: 1.7143rem;\n}\n.avatar.sm:after {\n  font-size: 0.7857rem;\n  font-weight: 400;\n}\n\n.avatar-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 2rem 0;\n}\n.avatar-wrapper .avatar {\n  background-color: #ffffff;\n  margin-right: 0.5rem;\n}\n\n.dropdown {\n  position: relative;\n  cursor: pointer;\n}\n.dropdown .trigger {\n  display: inline-block;\n}\n.dropdown .trigger .btn {\n  box-shadow: 0 0 0 0 transparent;\n}\n.dropdown.active .active-gray {\n  color: #5e677d;\n  background-color: #dee2eb;\n}\n.dropdown.active .active-red {\n  color: white;\n  background-color: #ff2168;\n}\n.dropdown.active .active-green {\n  color: white;\n  background-color: #05e4d7;\n}\n.dropdown.active .active-primary {\n  color: white;\n  background-color: #1abff3;\n}\n.dropdown.active .active-yellow {\n  color: white;\n  background-color: #ffcf78;\n}\n.dropdown.active .active-blue {\n  color: white;\n  background-color: #1969E1;\n}\n.dropdown-content {\n  position: absolute;\n  max-height: 0px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  opacity: 0;\n  z-index: 98;\n  visibility: hidden;\n  background-color: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 6px 24px -4px rgba(0, 0, 0, 0.2);\n  margin: 0.5rem 0;\n  transition: all 0.2s 0s, max-height 0.8s 0.4s;\n  transform: translateY(10px);\n  padding: 0.5rem 0;\n}\n.dropdown-content-item {\n  padding: 0.2rem 2rem 0.2rem 0.5rem;\n  display: flex;\n  align-items: center;\n  transition: 0.3s;\n  white-space: nowrap;\n  font-size: 1rem;\n}\n.dropdown-content-item .dropdown-item-icon {\n  display: flex;\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n  opacity: 0.7;\n  margin-right: 1rem;\n  border-radius: 4px;\n}\n.dropdown-content-item:hover {\n  background-color: #f4f3fa;\n}\n.dropdown-content-item:hover .dropdown-item-icon {\n  opacity: 1;\n}\n.dropdown-content-item.user {\n  padding: 0.5rem 2rem 0.5rem 0.5rem;\n}\n.dropdown-content-item.user .avatar {\n  background-color: #dee2eb;\n}\n.dropdown-content-item.active {\n  background-color: #f4f3fa;\n  color: #5e677d;\n  font-weight: 600;\n}\n.dropdown-content-item.active .avatar {\n  box-shadow: 0 0 0 2px #1abff3;\n}\n.dropdown-content .subheader {\n  padding: 1rem 1.5rem 0.8rem 1.2rem;\n  white-space: nowrap;\n  cursor: default;\n  font-size: 1rem;\n}\n.dropdown.highlight .dropdown-content-item {\n  padding: 0.3rem 2rem 0.3rem 1rem;\n}\n.dropdown.highlight .dropdown-content-item .dropdown-item-icon {\n  background-color: #d2d7e2;\n  width: 38px;\n  height: 38px;\n  opacity: 1;\n  color: #ffffff;\n}\n.dropdown.highlight .dropdown-content-item:hover .dropdown-item-icon {\n  opacity: 1;\n  background-color: #1abff3;\n}\n.dropdown.active .trigger .btn {\n  box-shadow: 0 0 0 3px rgba(26, 191, 243, 0.3);\n}\n.dropdown.active .dropdown-content {\n  max-height: 60vh;\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n  transition: all 0.2s 0s, max-height 0s 0s;\n}\n.dropdown.top .dropdown-content {\n  bottom: 100%;\n}\n.dropdown.right .dropdown-content {\n  right: 0;\n}\n.dropdown.bottom .dropdown-content {\n  top: 100%;\n}\n.dropdown.dense .dropdown-content-item {\n  padding: 0 2rem 0 0.5rem;\n}\n.dropdown.dense .dropdown-content-item .dropdown-item-icon {\n  width: 40px;\n  height: 36px;\n}\n\n.dialog {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(51, 51, 51, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 100;\n}\n.dialog-content {\n  max-height: calc(100vh - 4rem);\n  display: flex;\n  flex-direction: column;\n  transform: translateY(-20px);\n  transition: 0.3s;\n  border-radius: 6px;\n  background-color: #ffffff;\n  position: relative;\n  min-width: 280px;\n  width: 100%;\n  margin: 1rem;\n  box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.5);\n}\n.dialog-content-header {\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2.5rem 4rem 1rem 2rem;\n  z-index: 90;\n  position: relative;\n  flex-shrink: 0;\n}\n.dialog-content-header .close {\n  background-color: transparent;\n  font-size: 1.7143rem;\n  color: #999fb0;\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem;\n}\n.dialog-content-body {\n  padding: 0 2rem;\n  flex-grow: 1;\n}\n.dialog-content-footer {\n  padding: 1rem 2rem 2rem;\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: space-between;\n}\n.dialog-content.xs {\n  max-width: 350px;\n}\n.dialog-content.sm {\n  max-width: 420px;\n}\n.dialog-content.md {\n  max-width: 580px;\n}\n.dialog-content.lg {\n  max-width: 780px;\n}\n.dialog-content.no-footer .dialog-content-footer {\n  display: none;\n}\n.dialog-content.full-preview {\n  max-width: unset;\n  margin: -1rem;\n  max-height: unset;\n  border-radius: 0;\n  box-shadow: none;\n  height: 100vh;\n  transform: translateY(100%);\n  display: flex;\n  flex-direction: column;\n}\n.dialog-content.full-preview .dialog-content-header {\n  padding: 1rem;\n}\n.dialog-content.full-preview .dialog-content-header > * {\n  flex-basis: 0;\n  flex-grow: 1;\n}\n.dialog-content.full-preview .dialog-content-header .close {\n  background-color: transparent;\n  color: #999fb0;\n  position: relative;\n  right: unset;\n  top: unset;\n}\n.dialog-content.full-preview .dialog-content-body {\n  background-color: #5e677d;\n  flex-grow: 1;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: calc(100% - 70px);\n}\n.dialog-content.full-preview .dialog-content-footer {\n  display: none;\n}\n.dialog.scrollable .dialog-content-body {\n  overflow-y: auto;\n}\n.dialog.active {\n  opacity: 1;\n  visibility: visible;\n}\n.dialog.active .dialog-content {\n  transform: translateY(0);\n}\n\n.list-group {\n  padding: 1rem;\n  background-color: #ffffff;\n}\n.list-group .list-item {\n  padding: 1rem 0;\n  flex-wrap: wrap;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #dee2eb;\n}\n.list-group .list-item:last-child {\n  border: none;\n}\n\n.switch input {\n  display: none;\n}\n.switch label {\n  display: block;\n  width: 40px;\n  height: 22px;\n  background-color: var(--gray2);\n  padding: 2px;\n  border-radius: 40px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.switch label:before {\n  content: \"\";\n  display: block;\n  width: 18px;\n  height: 18px;\n  background-color: #ffffff;\n  border-radius: 40px;\n  transform: translateX(0);\n  transition: 0.3s;\n}\n.switch input:checked + label {\n  background-color: var(--primary);\n}\n.switch input:checked + label:before {\n  transform: translateX(100%);\n}\n.switch input:disabled + label {\n  background-color: var(--gray1);\n}\n.switch input:disabled:checked + label {\n  background-color: var(--gray1);\n}\n.switch.primary input:checked + label {\n  background-color: var(--primary);\n}\n.switch.secondary input:checked + label {\n  background-color: var(--secondary);\n}\n.switch.gray1 input:checked + label {\n  background-color: var(--gray1);\n}\n.switch.gray2 input:checked + label {\n  background-color: var(--gray2);\n}\n.switch.gray3 input:checked + label {\n  background-color: var(--gray3);\n}\n.switch.gray4 input:checked + label {\n  background-color: var(--gray4);\n}\n.switch.text input:checked + label {\n  background-color: var(--text);\n}\n.switch.text-dark input:checked + label {\n  background-color: var(--text-dark);\n}\n.switch.danger input:checked + label {\n  background-color: var(--danger);\n}\n.switch.warning input:checked + label {\n  background-color: var(--warning);\n}\n.switch.success input:checked + label {\n  background-color: var(--success);\n}\n.switch.info input:checked + label {\n  background-color: var(--info);\n}\n.switch.gray1 input:checked + label {\n  color: var(--text-dark);\n}\n.switch.gray2 input:checked + label {\n  color: var(--text-dark);\n}\n.switch.gray3 input:checked + label {\n  color: var(--text-dark);\n}\n.switch.gray4 input:checked + label {\n  color: var(--text-dark);\n}\n\n.show {\n  display: block !important;\n}\n\n.row.show {\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.show-xs {\n  display: block !important;\n}\n\n.row.show-xs {\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.hide-xs {\n  display: none !important;\n}\n\n@media only screen and (max-width: 40rem) {\n  .show-xs-only {\n    display: block !important;\n  }\n\n  .row.show-xs-only {\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .hide-xs-only {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 41rem) {\n  .show-sm {\n    display: block !important;\n  }\n\n  .row.show-sm {\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .hide-sm {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 41rem) and (max-width: 64rem) {\n  .show-sm-only {\n    display: block !important;\n  }\n\n  .row.show-sm-only {\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .hide-sm-only {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 65rem) {\n  .show-md {\n    display: block !important;\n  }\n\n  .row.show-md {\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .hide-md {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 65rem) and (max-width: 90rem) {\n  .show-md-only {\n    display: block !important;\n  }\n\n  .row.show-md-only {\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .hide-md-only {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 91rem) {\n  .show-lg {\n    display: block !important;\n  }\n\n  .row.show-lg {\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .hide-lg {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 91rem) and (max-width: 120rem) {\n  .show-lg-only {\n    display: block !important;\n  }\n\n  .row.show-lg-only {\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .hide-lg-only {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 121rem) {\n  .show-xl {\n    display: block !important;\n  }\n\n  .row.show-xl {\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .hide-xl {\n    display: none !important;\n  }\n}\n.snackbar-wrapper {\n  position: fixed;\n  right: 1rem;\n  top: 1rem;\n  max-width: 380px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.snackbar {\n  margin: 0.5rem;\n  border-radius: 8px;\n  display: inline-flex;\n  padding: 0.85rem;\n  padding-left: 0.5rem;\n  background-color: #1abff3;\n  color: white;\n  box-shadow: 0 3px 12px rgba(26, 191, 243, 0.5);\n  transition: 0.5s;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 999;\n  transform: translateY(20px);\n  animation: snackEnter 8s ease forwards;\n}\n.snackbar .btn {\n  background-color: #1abff3;\n  color: white;\n}\n.snackbar .btn:hover {\n  box-shadow: inset 0 0 0 50px rgba(0, 0, 0, 0.1);\n}\n.snackbar.error {\n  background-color: #ff2168;\n  color: white;\n  box-shadow: 0 3px 12px rgba(255, 33, 104, 0.5);\n}\n.snackbar.error .btn {\n  background-color: #ff2168;\n  color: white;\n}\n.snackbar.success, .snackbar.green {\n  background-color: #05e4d7;\n  color: #038079;\n  box-shadow: 0 3px 12px rgba(5, 228, 215, 0.5);\n}\n.snackbar.success .btn, .snackbar.green .btn {\n  background-color: #05e4d7;\n  color: #038079;\n}\n.snackbar.info, .snackbar.blue {\n  background-color: #1969E1;\n  color: white;\n  box-shadow: 0 3px 12px rgba(25, 105, 225, 0.5);\n}\n.snackbar.info .btn, .snackbar.blue .btn {\n  background-color: #1969E1;\n  color: white;\n}\n.snackbar.warning, .snackbar.yellow {\n  background-color: #ffcf78;\n  color: #ab6e00;\n  box-shadow: 0 3px 12px rgba(255, 207, 120, 0.5);\n}\n.snackbar.warning .btn, .snackbar.yellow .btn {\n  background-color: #ffcf78;\n  color: #ab6e00;\n}\n.snackbar-content {\n  padding: 0 0.85rem;\n  line-height: 1.2;\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n}\n.snackbar-content .icon {\n  margin-right: 1rem;\n}\n.snackbar.active {\n  transform: translateY(0);\n  opacity: 1;\n  visibility: visible;\n  animation: none;\n}\n\n@keyframes snackEnter {\n  0% {\n    transform: translateY(20px);\n    opacity: 0;\n    visibility: visible;\n  }\n  5% {\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible;\n  }\n  95% {\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible;\n  }\n  100% {\n    transform: translatex(100px);\n    opacity: 0;\n    visibility: hidden;\n    display: none;\n  }\n}\n.skeleton {\n  opacity: 0.5;\n  background-image: linear-gradient(-90deg, #dee2eb 0%, #ffffff 50%, #dee2eb 100%);\n  background-size: 400% 400%;\n  animation: shimmer 1.2s ease-in-out infinite;\n  margin-bottom: 1rem;\n}\n.skeleton.circle {\n  width: 1.7143rem;\n  height: 1.7143rem;\n  border-radius: 50%;\n}\n.skeleton.rect {\n  width: 100%;\n  height: 70px;\n}\n.skeleton.text {\n  width: 100%;\n  height: 12px;\n  border-radius: 4px;\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: 0% 0%;\n  }\n  100% {\n    background-position: -135% 0%;\n  }\n}\n.badge {\n  display: inline-flex;\n  padding: 0 0.5rem;\n  font-size: 1rem;\n  border-radius: 2rem;\n  background-color: #dee2eb;\n  color: #5e677d;\n  min-width: 24px;\n  line-height: 24px;\n  justify-content: center;\n  box-sizing: border-box;\n  flex-grow: 0;\n  line-height: 1;\n}\n.badge.ghost {\n  min-width: 26px;\n  line-height: 24px;\n  background: transparent;\n}\n.badge.sm {\n  min-width: 20px;\n  font-size: 0.875rem;\n  padding: 0 0.2rem;\n}\n.badge-primary {\n  background-color: var(--primary);\n  color: white;\n}\n.badge-secondary {\n  background-color: var(--secondary);\n  color: white;\n}\n.badge-gray1 {\n  background-color: var(--gray1);\n  color: white;\n}\n.badge-gray2 {\n  background-color: var(--gray2);\n  color: white;\n}\n.badge-gray3 {\n  background-color: var(--gray3);\n  color: white;\n}\n.badge-gray4 {\n  background-color: var(--gray4);\n  color: white;\n}\n.badge-text {\n  background-color: var(--text);\n  color: white;\n}\n.badge-text-dark {\n  background-color: var(--text-dark);\n  color: white;\n}\n.badge-danger {\n  background-color: var(--danger);\n  color: white;\n}\n.badge-warning {\n  background-color: var(--warning);\n  color: white;\n}\n.badge-success {\n  background-color: var(--success);\n  color: white;\n}\n.badge-info {\n  background-color: var(--info);\n  color: white;\n}\n.badge-gray1 {\n  color: var(--text-dark);\n}\n.badge-gray2 {\n  color: var(--text-dark);\n}\n.badge-gray3 {\n  color: var(--text-dark);\n}\n.badge-gray4 {\n  color: var(--text-dark);\n}");

var texts = {
    'predefined': 'Esse eh um texto predefinido',
    'welcome': 'Bem vindo(a)! {0}',
    "errorEmail": 'Email inválido!',
    "errorPassword": 'Senha inválida!',
    "errorLenghtField": "O campo {0} deve conter entre {1} e {2} caracteres",
    "errorRequiredField": "O campo {0} é obrigatorio!",
    "errorConection": 'Ocorreu um erro inexperado!',
    "notFound": 'Não foi possivel encontrar {0}',
    "404": "Página não encontrada"
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

function text(key, params) {

    if (params || params === 0) {

        var _key = texts[key];

        if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) !== 'object') {
            _key = _key.replace('{0}', params);
        } else {
            for (var i = 0; i < params.length; i++) {
                _key = _key.replace('{' + i + '}', params[i]);
            }
        }

        return _key;
    } else {
        return texts[key];
    }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var Avatar = function (_Component) {
  inherits(Avatar, _Component);

  function Avatar() {
    classCallCheck(this, Avatar);
    return possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
  }

  createClass(Avatar, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var color = this.props.color ? 'bg-color-' + this.props.color : '';
      var size = this.props.size ? '' + this.props.size : '';

      var liClasses = classnames((_classNames = {
        'avatar': true
      }, defineProperty(_classNames, color, this.props.color), defineProperty(_classNames, size, size), _classNames));

      var liStyles = _extends({
        backgroundColor: this.props.customColor
      }, this.props.style);

      if (this.props.children) {
        return React__default.createElement(
          'div',
          { className: liClasses, style: liStyles },
          this.props.children
        );
      } else {
        return React__default.createElement('div', { className: liClasses, 'data-initials': this.props.initials, style: liStyles });
      }
    }
  }]);
  return Avatar;
}(React.Component);

Avatar.defaultProps = {
  size: 'md',
  initials: ''
};

var Badge = function (_Component) {
  inherits(Badge, _Component);

  function Badge() {
    classCallCheck(this, Badge);
    return possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
  }

  createClass(Badge, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var color = this.props.color ? 'badge-' + this.props.color : '';
      var size = this.props.size ? '' + this.props.size : '';

      var liClasses = classnames((_classNames = {
        'badge': true
      }, defineProperty(_classNames, color, this.props.color), defineProperty(_classNames, size, size), defineProperty(_classNames, this.props.className, this.props.className), _classNames));

      return React__default.createElement(
        'div',
        { className: liClasses,
          id: this.props.id },
        this.props.label
      );
    }
  }]);
  return Badge;
}(React.Component);

var Button = function (_Component) {
  inherits(Button, _Component);

  function Button() {
    classCallCheck(this, Button);
    return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  createClass(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var color = this.props.color ? 'btn-' + this.props.color : '';
      var size = this.props.size ? '' + this.props.size : '';
      var variant = this.props.variant ? '' + this.props.variant : '';

      var liClasses = classnames((_classNames = {
        'btn': true
      }, defineProperty(_classNames, color, this.props.color), defineProperty(_classNames, size, size), defineProperty(_classNames, variant, variant), defineProperty(_classNames, 'loading', this.props.loading), _classNames));

      if (!this.props.href) {
        return React__default.createElement(
          'button',
          { onClick: this.props.onClick, className: liClasses, disabled: this.props.disabled },
          this.props.children
        );
      } else {
        return React__default.createElement(
          'a',
          { href: this.props.href, className: liClasses, disabled: this.props.disabled },
          this.props.children
        );
      }
    }
  }]);
  return Button;
}(React.Component);

var feather = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(typeof self !== 'undefined' ? self : commonjsGlobal, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/icons.json":
/*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":"<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"></polyline>","airplay":"<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path><polygon points=\"12 15 17 21 7 21 12 15\"></polygon>","alert-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","align-center":"<line x1=\"18\" y1=\"10\" x2=\"6\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"18\" y1=\"18\" x2=\"6\" y2=\"18\"></line>","align-justify":"<line x1=\"21\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-left":"<line x1=\"17\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-right":"<line x1=\"21\" y1=\"10\" x2=\"7\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"7\" y2=\"18\"></line>","anchor":"<circle cx=\"12\" cy=\"5\" r=\"3\"></circle><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"8\"></line><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"></path>","aperture":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>","archive":"<polyline points=\"21 8 21 21 3 21 3 8\"></polyline><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"></rect><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"></line>","arrow-down-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>","arrow-down-left":"<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\"></line><polyline points=\"17 17 7 17 7 7\"></polyline>","arrow-down-right":"<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\"></line><polyline points=\"17 7 17 17 7 17\"></polyline>","arrow-down":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline>","arrow-left-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line>","arrow-left":"<line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline>","arrow-right-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","arrow-right":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline>","arrow-up-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line>","arrow-up-left":"<line x1=\"17\" y1=\"17\" x2=\"7\" y2=\"7\"></line><polyline points=\"7 17 7 7 17 7\"></polyline>","arrow-up-right":"<line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline>","arrow-up":"<line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline>","at-sign":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path>","award":"<circle cx=\"12\" cy=\"8\" r=\"7\"></circle><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"></polyline>","bar-chart-2":"<line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>","bar-chart":"<line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"10\"></line><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"16\"></line>","battery-charging":"<path d=\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\"></path><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line><polyline points=\"11 6 7 12 13 12 9 18\"></polyline>","battery":"<rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"></rect><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line>","bell-off":"<path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path><path d=\"M18.63 13A17.89 17.89 0 0 1 18 8\"></path><path d=\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\"></path><path d=\"M18 8a6 6 0 0 0-9.33-5\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","bell":"<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path>","bluetooth":"<polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\"></polyline>","bold":"<path d=\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path><path d=\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path>","book-open":"<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>","book":"<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"></path><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"></path>","bookmark":"<path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path>","box":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","briefcase":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>","calendar":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>","camera-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\"></path>","camera":"<path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path><circle cx=\"12\" cy=\"13\" r=\"4\"></circle>","cast":"<path d=\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"></path><line x1=\"2\" y1=\"20\" x2=\"2.01\" y2=\"20\"></line>","check-circle":"<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline>","check-square":"<polyline points=\"9 11 12 14 22 4\"></polyline><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"></path>","check":"<polyline points=\"20 6 9 17 4 12\"></polyline>","chevron-down":"<polyline points=\"6 9 12 15 18 9\"></polyline>","chevron-left":"<polyline points=\"15 18 9 12 15 6\"></polyline>","chevron-right":"<polyline points=\"9 18 15 12 9 6\"></polyline>","chevron-up":"<polyline points=\"18 15 12 9 6 15\"></polyline>","chevrons-down":"<polyline points=\"7 13 12 18 17 13\"></polyline><polyline points=\"7 6 12 11 17 6\"></polyline>","chevrons-left":"<polyline points=\"11 17 6 12 11 7\"></polyline><polyline points=\"18 17 13 12 18 7\"></polyline>","chevrons-right":"<polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline>","chevrons-up":"<polyline points=\"17 11 12 6 7 11\"></polyline><polyline points=\"17 18 12 13 7 18\"></polyline>","chrome":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"21.17\" y1=\"8\" x2=\"12\" y2=\"8\"></line><line x1=\"3.95\" y1=\"6.06\" x2=\"8.54\" y2=\"14\"></line><line x1=\"10.88\" y1=\"21.94\" x2=\"15.46\" y2=\"14\"></line>","circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","clipboard":"<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"></rect>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>","cloud-drizzle":"<line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-lightning":"<path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path><polyline points=\"13 11 9 17 15 17 11 23\"></polyline>","cloud-off":"<path d=\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","cloud-rain":"<line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"21\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"23\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-snow":"<path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"></path><line x1=\"8\" y1=\"16\" x2=\"8.01\" y2=\"16\"></line><line x1=\"8\" y1=\"20\" x2=\"8.01\" y2=\"20\"></line><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line><line x1=\"12\" y1=\"22\" x2=\"12.01\" y2=\"22\"></line><line x1=\"16\" y1=\"16\" x2=\"16.01\" y2=\"16\"></line><line x1=\"16\" y1=\"20\" x2=\"16.01\" y2=\"20\"></line>","cloud":"<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"></path>","code":"<polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline>","codepen":"<polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"></polygon><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"15.5\"></line><polyline points=\"22 8.5 12 15.5 2 8.5\"></polyline><polyline points=\"2 15.5 12 8.5 22 15.5\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"8.5\"></line>","codesandbox":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"7.5 4.21 12 6.81 16.5 4.21\"></polyline><polyline points=\"7.5 19.79 7.5 14.6 3 12\"></polyline><polyline points=\"21 12 16.5 14.6 16.5 19.79\"></polyline><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","coffee":"<path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"></path><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"></path><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"></line><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"></line>","columns":"<path d=\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\"></path>","command":"<path d=\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\"></path>","compass":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon>","copy":"<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>","corner-down-left":"<polyline points=\"9 10 4 15 9 20\"></polyline><path d=\"M20 4v7a4 4 0 0 1-4 4H4\"></path>","corner-down-right":"<polyline points=\"15 10 20 15 15 20\"></polyline><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"></path>","corner-left-down":"<polyline points=\"14 15 9 20 4 15\"></polyline><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"></path>","corner-left-up":"<polyline points=\"14 9 9 4 4 9\"></polyline><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"></path>","corner-right-down":"<polyline points=\"10 15 15 20 20 15\"></polyline><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path>","corner-right-up":"<polyline points=\"10 9 15 4 20 9\"></polyline><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path>","corner-up-left":"<polyline points=\"9 14 4 9 9 4\"></polyline><path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"></path>","corner-up-right":"<polyline points=\"15 14 20 9 15 4\"></polyline><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"></path>","cpu":"<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"></rect><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect><line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"></line><line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"></line><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"></line><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"></line><line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"></line><line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"></line><line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"></line><line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"></line>","credit-card":"<rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line>","crop":"<path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path><path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>","crosshair":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"></line><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"></line><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"></line>","database":"<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path>","delete":"<path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path><line x1=\"18\" y1=\"9\" x2=\"12\" y2=\"15\"></line><line x1=\"12\" y1=\"9\" x2=\"18\" y2=\"15\"></line>","disc":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","divide-circle":"<line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","divide-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>","divide":"<circle cx=\"12\" cy=\"6\" r=\"2\"></circle><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><circle cx=\"12\" cy=\"18\" r=\"2\"></circle>","dollar-sign":"<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path>","download-cloud":"<polyline points=\"8 17 12 21 16 17\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\"></path>","download":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line>","dribbble":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32\"></path>","droplet":"<path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path>","edit-2":"<path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"></path>","edit-3":"<path d=\"M12 20h9\"></path><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"></path>","edit":"<path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path>","external-link":"<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>","eye-off":"<path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","eye":"<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","facebook":"<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>","fast-forward":"<polygon points=\"13 19 22 12 13 5 13 19\"></polygon><polygon points=\"2 19 11 12 2 5 2 19\"></polygon>","feather":"<path d=\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\"></path><line x1=\"16\" y1=\"8\" x2=\"2\" y2=\"22\"></line><line x1=\"17.5\" y1=\"15\" x2=\"9\" y2=\"15\"></line>","figma":"<path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path>","file-minus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-plus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"></line><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-text":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline>","file":"<path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline>","film":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>","filter":"<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>","flag":"<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"></line>","folder-minus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder-plus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"></line><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path>","framer":"<path d=\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\"></path>","frown":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","gift":"<polyline points=\"20 12 20 22 4 22 4 12\"></polyline><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"></rect><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"></line><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path><path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>","git-branch":"<line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"15\"></line><circle cx=\"18\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M18 9a9 9 0 0 1-9 9\"></path>","git-commit":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"1.05\" y1=\"12\" x2=\"7\" y2=\"12\"></line><line x1=\"17.01\" y1=\"12\" x2=\"22.96\" y2=\"12\"></line>","git-merge":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M6 21V9a9 9 0 0 0 9 9\"></path>","git-pull-request":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"></path><line x1=\"6\" y1=\"9\" x2=\"6\" y2=\"21\"></line>","github":"<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>","gitlab":"<path d=\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\"></path>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path>","grid":"<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect>","hard-drive":"<line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\"></line><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path><line x1=\"6\" y1=\"16\" x2=\"6.01\" y2=\"16\"></line><line x1=\"10\" y1=\"16\" x2=\"10.01\" y2=\"16\"></line>","hash":"<line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"></line><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"></line><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"></line><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"></line>","headphones":"<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"></path><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"></path>","heart":"<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>","help-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","hexagon":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path>","home":"<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline>","image":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle><polyline points=\"21 15 16 10 5 21\"></polyline>","inbox":"<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>","info":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line>","instagram":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>","italic":"<line x1=\"19\" y1=\"4\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"20\" x2=\"5\" y2=\"20\"></line><line x1=\"15\" y1=\"4\" x2=\"9\" y2=\"20\"></line>","key":"<path d=\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\"></path>","layers":"<polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline>","layout":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line>","life-buoy":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"9.17\" y2=\"9.17\"></line><line x1=\"14.83\" y1=\"14.83\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"19.07\" y2=\"4.93\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"18.36\" y2=\"5.64\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"9.17\" y2=\"14.83\"></line>","link-2":"<path d=\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\"></path><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>","linkedin":"<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>","list":"<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line>","loader":"<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line>","lock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>","log-in":"<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></path><polyline points=\"10 17 15 12 10 7\"></polyline><line x1=\"15\" y1=\"12\" x2=\"3\" y2=\"12\"></line>","log-out":"<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line>","mail":"<path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline>","map-pin":"<path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>","map":"<polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"></polygon><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"></line><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"></line>","maximize-2":"<polyline points=\"15 3 21 3 21 9\"></polyline><polyline points=\"9 21 3 21 3 15\"></polyline><line x1=\"21\" y1=\"3\" x2=\"14\" y2=\"10\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","maximize":"<path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"></path>","meh":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"15\" x2=\"16\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","menu":"<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>","message-circle":"<path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>","message-square":"<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>","mic-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"></path><path d=\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","mic":"<path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"></path><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","minimize-2":"<polyline points=\"4 14 10 14 10 20\"></polyline><polyline points=\"20 10 14 10 14 4\"></polyline><line x1=\"14\" y1=\"10\" x2=\"21\" y2=\"3\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","minimize":"<path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"></path>","minus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","monitor":"<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>","moon":"<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>","more-horizontal":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle>","more-vertical":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle>","mouse-pointer":"<path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path><path d=\"M13 13l6 6\"></path>","move":"<polyline points=\"5 9 2 12 5 15\"></polyline><polyline points=\"9 5 12 2 15 5\"></polyline><polyline points=\"15 19 12 22 9 19\"></polyline><polyline points=\"19 9 22 12 19 15\"></polyline><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"></line>","music":"<path d=\"M9 18V5l12-2v13\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><circle cx=\"18\" cy=\"16\" r=\"3\"></circle>","navigation-2":"<polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon>","navigation":"<polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon>","octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon>","package":"<line x1=\"16.5\" y1=\"9.4\" x2=\"7.5\" y2=\"4.21\"></line><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","paperclip":"<path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"></path>","pause-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"10\" y1=\"15\" x2=\"10\" y2=\"9\"></line><line x1=\"14\" y1=\"15\" x2=\"14\" y2=\"9\"></line>","pause":"<rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>","pen-tool":"<path d=\"M12 19l7-7 3 3-7 7-3-3z\"></path><path d=\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\"></path><path d=\"M2 2l7.586 7.586\"></path><circle cx=\"11\" cy=\"11\" r=\"2\"></circle>","percent":"<line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"></line><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle>","phone-call":"<path d=\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-forwarded":"<polyline points=\"19 1 23 5 19 9\"></polyline><line x1=\"15\" y1=\"5\" x2=\"23\" y2=\"5\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-incoming":"<polyline points=\"16 2 16 8 22 8\"></polyline><line x1=\"23\" y1=\"1\" x2=\"16\" y2=\"8\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-missed":"<line x1=\"23\" y1=\"1\" x2=\"17\" y2=\"7\"></line><line x1=\"17\" y1=\"1\" x2=\"23\" y2=\"7\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-off":"<path d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\"></path><line x1=\"23\" y1=\"1\" x2=\"1\" y2=\"23\"></line>","phone-outgoing":"<polyline points=\"23 7 23 1 17 1\"></polyline><line x1=\"16\" y1=\"8\" x2=\"23\" y2=\"1\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone":"<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","pie-chart":"<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path><path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path>","play-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"10 8 16 12 10 16 10 8\"></polygon>","play":"<polygon points=\"5 3 19 12 5 21 5 3\"></polygon>","plus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","pocket":"<path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\"></path><polyline points=\"8 10 12 14 16 10\"></polyline>","power":"<path d=\"M18.36 6.64a9 9 0 1 1-12.73 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"12\"></line>","printer":"<polyline points=\"6 9 6 2 18 2 18 9\"></polyline><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect>","radio":"<circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\"></path>","refresh-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><polyline points=\"23 20 23 14 17 14\"></polyline><path d=\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\"></path>","refresh-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><polyline points=\"1 20 1 14 7 14\"></polyline><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"></path>","repeat":"<polyline points=\"17 1 21 5 17 9\"></polyline><path d=\"M3 11V9a4 4 0 0 1 4-4h14\"></path><polyline points=\"7 23 3 19 7 15\"></polyline><path d=\"M21 13v2a4 4 0 0 1-4 4H3\"></path>","rewind":"<polygon points=\"11 19 2 12 11 5 11 19\"></polygon><polygon points=\"22 19 13 12 22 5 22 19\"></polygon>","rotate-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><path d=\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\"></path>","rotate-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path>","rss":"<path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle>","save":"<path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><polyline points=\"17 21 17 13 7 13 7 21\"></polyline><polyline points=\"7 3 7 8 15 8\"></polyline>","scissors":"<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"></line><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"></line><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"></line>","search":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>","send":"<line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"></line><polygon points=\"22 2 15 22 11 13 2 9 22 2\"></polygon>","server":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"></line><line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"></line>","settings":"<circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path>","share-2":"<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>","share":"<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path><polyline points=\"16 6 12 2 8 6\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"></line>","shield-off":"<path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"></path><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","shield":"<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path>","shopping-bag":"<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path>","shopping-cart":"<circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>","shuffle":"<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>","sidebar":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"></line>","skip-back":"<polygon points=\"19 20 9 12 19 4 19 20\"></polygon><line x1=\"5\" y1=\"19\" x2=\"5\" y2=\"5\"></line>","skip-forward":"<polygon points=\"5 4 15 12 5 20 5 4\"></polygon><line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>","slack":"<path d=\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z\"></path><path d=\"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path><path d=\"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z\"></path><path d=\"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z\"></path><path d=\"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z\"></path><path d=\"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path><path d=\"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z\"></path><path d=\"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z\"></path>","slash":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"></line>","sliders":"<line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"></line><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"></line><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"></line><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"></line><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"></line><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"></line><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"></line>","smartphone":"<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","smile":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","speaker":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><circle cx=\"12\" cy=\"14\" r=\"4\"></circle><line x1=\"12\" y1=\"6\" x2=\"12.01\" y2=\"6\"></line>","square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>","star":"<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>","stop-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>","sun":"<circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>","sunrise":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"9\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"8 6 12 2 16 6\"></polyline>","sunset":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"2\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"16 5 12 9 8 5\"></polyline>","tablet":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","tag":"<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"></line>","target":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>","terminal":"<polyline points=\"4 17 10 11 4 5\"></polyline><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"></line>","thermometer":"<path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"></path>","thumbs-down":"<path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\"></path>","thumbs-up":"<path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path>","toggle-left":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"8\" cy=\"12\" r=\"3\"></circle>","toggle-right":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"16\" cy=\"12\" r=\"3\"></circle>","tool":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>","trash-2":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>","trash":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>","trello":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><rect x=\"7\" y=\"7\" width=\"3\" height=\"9\"></rect><rect x=\"14\" y=\"7\" width=\"3\" height=\"5\"></rect>","trending-down":"<polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"></polyline><polyline points=\"17 18 23 18 23 12\"></polyline>","trending-up":"<polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline>","triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path>","truck":"<rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"></rect><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"></circle><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>","tv":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"></rect><polyline points=\"17 2 12 7 7 2\"></polyline>","twitch":"<path d=\"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7\"></path>","twitter":"<path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>","type":"<polyline points=\"4 7 4 4 20 4 20 7\"></polyline><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"></line><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"></line>","umbrella":"<path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\"></path>","underline":"<path d=\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\"></path><line x1=\"4\" y1=\"21\" x2=\"20\" y2=\"21\"></line>","unlock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>","upload-cloud":"<polyline points=\"16 16 12 12 8 16\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline>","upload":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line>","user-check":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><polyline points=\"17 11 19 13 23 9\"></polyline>","user-minus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-plus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"></line><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-x":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"18\" y1=\"8\" x2=\"23\" y2=\"13\"></line><line x1=\"23\" y1=\"8\" x2=\"18\" y2=\"13\"></line>","user":"<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>","users":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>","video-off":"<path d=\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","video":"<polygon points=\"23 7 16 12 23 17 23 7\"></polygon><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>","voicemail":"<circle cx=\"5.5\" cy=\"11.5\" r=\"4.5\"></circle><circle cx=\"18.5\" cy=\"11.5\" r=\"4.5\"></circle><line x1=\"5.5\" y1=\"16\" x2=\"18.5\" y2=\"16\"></line>","volume-1":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-2":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-x":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>","volume":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>","watch":"<circle cx=\"12\" cy=\"12\" r=\"7\"></circle><polyline points=\"12 9 12 12 13.5 13.5\"></polyline><path d=\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\"></path>","wifi-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\"></path><path d=\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\"></path><path d=\"M10.71 5.05A16 16 0 0 1 22.58 9\"></path><path d=\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wifi":"<path d=\"M5 12.55a11 11 0 0 1 14.08 0\"></path><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wind":"<path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"></path>","x-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>","x":"<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>","youtube":"<path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"></path><polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>","zap-off":"<polyline points=\"12.41 6.75 13 2 10.57 4.92\"></polyline><polyline points=\"18.57 12.91 21 10 15.66 10\"></polyline><polyline points=\"8 8 3 14 12 14 11 22 16 16\"></polyline><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","zap":"<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>","zoom-in":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>","zoom-out":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>"};

/***/ }),

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k);
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
}());


/***/ }),

/***/ "./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    result = new C();
    for (;!(step = iterator.next()).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")));

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var document = global.document;

module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;
  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var arrayIndexOf = arrayIncludes(false);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var correctSetter = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var Reflect = global.Reflect;

// all object keys, includes non-enumerable and symbols
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt
module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
      ? CONVERT_TO_STRING ? S.charAt(position) : first
      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// 7.1.1 ToPrimitive(input [, PreferredType])
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = codePointAt(string, index, true);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (0, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/default-attrs.json":
/*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
/***/ (function(module) {

module.exports = {"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _defaultAttrs = __webpack_require__(/*! ./default-attrs.json */ "./src/default-attrs.json");

var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Icon = function () {
  function Icon(name, contents) {
    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Icon);

    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attrs = _extends({}, _defaultAttrs2.default, { class: 'feather feather-' + name });
  }

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */


  _createClass(Icon, [{
    key: 'toSvg',
    value: function toSvg() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

      return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
    }

    /**
     * Return string representation of an `Icon`.
     *
     * Added for backward compatibility. If old code expects `feather.icons.<name>`
     * to be a string, `toString()` will get implicitly called.
     *
     * @returns {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.contents;
    }
  }]);

  return Icon;
}();

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */


function attrsToString(attrs) {
  return Object.keys(attrs).map(function (key) {
    return key + '="' + attrs[key] + '"';
  }).join(' ');
}

exports.default = Icon;

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(/*! ./icon */ "./src/icon.js");

var _icon2 = _interopRequireDefault(_icon);

var _icons = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");

var _icons2 = _interopRequireDefault(_icons);

var _tags = __webpack_require__(/*! ./tags.json */ "./src/tags.json");

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.keys(_icons2.default).map(function (key) {
  return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
}).reduce(function (object, icon) {
  object[icon.name] = icon;
  return object;
}, {});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

var _toSvg = __webpack_require__(/*! ./to-svg */ "./src/to-svg.js");

var _toSvg2 = _interopRequireDefault(_toSvg);

var _replace = __webpack_require__(/*! ./replace */ "./src/replace.js");

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };

/***/ }),

/***/ "./src/replace.js":
/*!************************!*\
  !*** ./src/replace.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-env browser */


var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */
function replace() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof document === 'undefined') {
    throw new Error('`feather.replace()` only works in a browser environment.');
  }

  var elementsToReplace = document.querySelectorAll('[data-feather]');

  Array.from(elementsToReplace).forEach(function (element) {
    return replaceElement(element, attrs);
  });
}

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function replaceElement(element) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var elementAttrs = getAttrs(element);
  var name = elementAttrs['data-feather'];
  delete elementAttrs['data-feather'];

  var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
  var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  var svgElement = svgDocument.querySelector('svg');

  element.parentNode.replaceChild(svgElement, element);
}

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getAttrs(element) {
  return Array.from(element.attributes).reduce(function (attrs, attr) {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
}

exports.default = replace;

/***/ }),

/***/ "./src/tags.json":
/*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":["pulse","health","action","motion"],"airplay":["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],"anchor":[],"archive":["index","box"],"at-sign":["mention","at","email","message"],"award":["achievement","badge"],"aperture":["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],"battery":["power","electricity"],"battery-charging":["power","electricity"],"bell":["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],"bluetooth":["wireless"],"book-open":["read","library"],"book":["read","dictionary","booklet","magazine","library"],"bookmark":["read","clip","marker","tag"],"box":["cube"],"briefcase":["work","bag","baggage","folder"],"calendar":["date"],"camera":["photo"],"cast":["chromecast","airplay"],"circle":["off","zero","record"],"clipboard":["copy"],"clock":["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],"cloud":["weather"],"codepen":["logo"],"codesandbox":["logo"],"code":["source","programming"],"coffee":["drink","cup","mug","tea","cafe","hot","beverage"],"columns":["layout"],"command":["keyboard","cmd","terminal","prompt"],"compass":["navigation","safari","travel","direction"],"copy":["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],"cpu":["processor","technology"],"credit-card":["purchase","payment","cc"],"crop":["photo","image"],"crosshair":["aim","target"],"database":["storage","memory"],"delete":["remove"],"disc":["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],"droplet":["water"],"edit":["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],"eye":["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],"facebook":["logo","social"],"fast-forward":["music"],"figma":["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],"film":["movie","video"],"filter":["funnel","hopper"],"flag":["report"],"folder-minus":["directory"],"folder-plus":["directory"],"folder":["directory"],"framer":["logo","design","tool"],"frown":["emoji","face","bad","sad","emotion"],"gift":["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],"github":["logo","version control"],"gitlab":["logo","version control"],"globe":["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],"hash":["hashtag","number","pound"],"headphones":["music","audio","sound"],"heart":["like","love","emotion"],"help-circle":["question mark"],"hexagon":["shape","node.js","logo"],"home":["house","living"],"image":["picture"],"inbox":["email"],"instagram":["logo","camera"],"key":["password","login","authentication","secure"],"layers":["stack"],"layout":["window","webpage"],"life-bouy":["help","life ring","support"],"link":["chain","url"],"link-2":["chain","url"],"linkedin":["logo","social media"],"list":["options"],"lock":["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],"mail":["email","message"],"map-pin":["location","navigation","travel","marker"],"map":["location","navigation","travel"],"maximize":["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],"meh":["emoji","face","neutral","emotion"],"menu":["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],"mic":["record","sound","listen"],"minimize":["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],"minus":["subtract"],"monitor":["tv","screen","display"],"moon":["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],"move":["arrows"],"music":["note"],"navigation":["location","travel"],"navigation-2":["location","travel"],"octagon":["stop"],"package":["box","container"],"paperclip":["attachment"],"pause":["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],"percent":["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],"phone":["call"],"play":["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],"plus":["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],"pocket":["logo","save"],"power":["on","off"],"printer":["fax","office","device"],"radio":["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],"repeat":["loop","arrows"],"rewind":["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],"rss":["feed","subscribe"],"save":["floppy disk"],"scissors":["cut"],"search":["find","magnifier","magnifying glass"],"send":["message","mail","email","paper airplane","paper aeroplane"],"settings":["cog","edit","gear","preferences"],"share-2":["network","connections"],"shield":["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],"shuffle":["music"],"skip-back":["music"],"skip-forward":["music"],"slack":["logo"],"slash":["ban","no"],"sliders":["settings","controls"],"smartphone":["cellphone","device"],"smile":["emoji","face","happy","good","emotion"],"speaker":["audio","music"],"star":["bookmark","favorite","like"],"stop-circle":["media","music"],"sun":["brightness","weather","light"],"sunrise":["weather","time","morning","day"],"sunset":["weather","time","evening","night"],"tablet":["device"],"tag":["label"],"target":["logo","bullseye"],"terminal":["code","command line","prompt"],"thermometer":["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],"tool":["settings","spanner"],"trash":["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],"triangle":["delta"],"truck":["delivery","van","shipping","transport","lorry"],"tv":["television","stream"],"twitch":["logo"],"twitter":["logo","social"],"type":["text"],"umbrella":["rain","weather"],"unlock":["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],"user":["person","account"],"users":["group"],"video-off":["camera","movie","film"],"video":["camera","movie","film"],"voicemail":["phone"],"volume":["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],"watch":["clock","time"],"wifi-off":["disabled"],"wifi":["connection","signal","wireless"],"wind":["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],"x":["cancel","close","delete","remove","times","clear"],"youtube":["logo","video","play"],"zap-off":["flash","camera","lightning"],"zap":["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]};

/***/ }),

/***/ "./src/to-svg.js":
/*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */
function toSvg(name) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  console.warn('feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.');

  if (!name) {
    throw new Error('The required `key` (icon name) parameter is missing.');
  }

  if (!_icons2.default[name]) {
    throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://feathericons.com');
  }

  return _icons2.default[name].toSvg(attrs);
}

exports.default = toSvg;

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/es/array/from */"./node_modules/core-js/es/array/from.js");
module.exports = __webpack_require__(/*! /home/travis/build/feathericons/feather/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=feather.js.map
});

var feather$1 = unwrapExports(feather);

var Icon = function (_Component) {
  inherits(Icon, _Component);

  function Icon() {
    classCallCheck(this, Icon);
    return possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  createClass(Icon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      feather$1.replace();
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement('i', { 'data-feather': this.props.name, color: this.props.color, className: 'icon', width: this.props.size, height: this.props.size });
    }
  }]);
  return Icon;
}(React.Component);

var Checkbox = function (_Component) {
  inherits(Checkbox, _Component);

  function Checkbox() {
    classCallCheck(this, Checkbox);
    return possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var liClasses = classnames((_classNames = {
        'checkbox': true
      }, defineProperty(_classNames, this.props.color, this.props.color), defineProperty(_classNames, this.props.className, this.props.className), _classNames));

      return React__default.createElement(
        'div',
        { className: liClasses },
        React__default.createElement('input', {
          type: 'checkbox',
          name: this.props.name,
          id: this.props.id,
          disabled: this.props.disabled,
          checked: this.props.checked,
          onChange: this.props.onChange }),
        React__default.createElement(
          'label',
          { htmlFor: this.props.id },
          React__default.createElement(
            'span',
            null,
            React__default.createElement(Icon, { name: 'check', size: 16 })
          ),
          this.props.label
        )
      );
    }
  }]);
  return Checkbox;
}(React.Component);

var Container = function (_Component) {
  inherits(Container, _Component);

  function Container() {
    classCallCheck(this, Container);
    return possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  createClass(Container, [{
    key: 'render',
    value: function render() {
      var liClasses = classnames(defineProperty({
        'container': true
      }, this.props.size, this.props.size));

      return React__default.createElement(
        'div',
        { className: liClasses },
        this.props.children
      );
    }
  }]);
  return Container;
}(React.Component);

var Divider = function (_Component) {
  inherits(Divider, _Component);

  function Divider() {
    classCallCheck(this, Divider);
    return possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).apply(this, arguments));
  }

  createClass(Divider, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var divider = this.props.vertical ? 'divider-v' : 'divider hr';
      var align = this.props.textAlign ? this.props.textAlign : '';

      var liClasses = classnames((_classNames = {}, defineProperty(_classNames, divider, true), defineProperty(_classNames, align, this.props.textAlign), _classNames));

      return React__default.createElement(
        'div',
        { className: liClasses },
        this.props.children
      );
    }
  }]);
  return Divider;
}(React.Component);

var Dropdown = function (_Component) {
    inherits(Dropdown, _Component);

    function Dropdown() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Dropdown);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            active: false
        }, _this.toggleClass = function () {
            _this.setState({ active: !_this.state.active });
        }, _this.handleClick = function (e) {
            if (!_this.node.contains(e.target)) {
                _this.setState({ active: false });
                return;
            }
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Dropdown, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('mousedown', this.handleClick, false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClick, false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var liClasses = classnames((_classNames = {
                'dropdown': true
            }, defineProperty(_classNames, this.props.y, this.props.color), defineProperty(_classNames, this.props.x, this.props.x), defineProperty(_classNames, this.props.icon, this.props.icon), defineProperty(_classNames, this.props.className, this.props.className), defineProperty(_classNames, 'active', this.state.active), _classNames));

            return React__default.createElement(
                'span',
                { ref: function ref(node) {
                        return _this2.node = node;
                    }, className: liClasses },
                React__default.createElement(
                    'span',
                    { className: 'trigger',
                        onClick: function onClick() {
                            return _this2.toggleClass();
                        } },
                    this.props.children
                ),
                React__default.createElement(
                    'div',
                    { className: 'dropdown-content'
                    },
                    this.props.title && React__default.createElement(
                        'div',
                        { className: 'subheader' },
                        this.props.title
                    ),
                    this.props.items && this.props.items.map(function (item, index) {
                        return React__default.createElement(
                            'div',
                            { key: index, onClick: _this2.props.onClick, className: 'dropdown-content-item ' + item.color },
                            React__default.createElement(
                                'span',
                                { className: 'dropdown-item-icon' },
                                React__default.createElement('i', { className: 'feather ' + item.icon })
                            ),
                            item.name
                        );
                    })
                )
            );
        }
    }]);
    return Dropdown;
}(React.Component);

var PopOver = function (_React$Component) {
  inherits(PopOver, _React$Component);

  function PopOver() {
    classCallCheck(this, PopOver);
    return possibleConstructorReturn(this, (PopOver.__proto__ || Object.getPrototypeOf(PopOver)).apply(this, arguments));
  }

  createClass(PopOver, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'span',
        { className: 'popover ' + this.props.x + ' ' + this.props.y },
        this.props.children,
        React__default.createElement(
          'div',
          { className: 'popover-menu ' + this.props.size },
          this.props.label
        )
      );
    }
  }]);
  return PopOver;
}(React__default.Component);

var Radio = function (_Component) {
  inherits(Radio, _Component);

  function Radio() {
    classCallCheck(this, Radio);
    return possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  createClass(Radio, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'div',
        { className: 'radio ' + this.props.color },
        React__default.createElement('input', {
          type: 'radio',
          id: this.props.id,
          name: this.props.name,
          defaultValue: this.props.defaultValue,
          disabled: this.props.disabled,
          checked: this.props.checked,
          onChange: this.props.onChange }),
        React__default.createElement(
          'label',
          { htmlFor: this.props.id },
          React__default.createElement(
            'span',
            null,
            React__default.createElement(Icon, { name: 'circle', size: 16 })
          ),
          this.props.label
        )
      );
    }
  }]);
  return Radio;
}(React.Component);

var Select = function (_Component) {
  inherits(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: ''
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Select, [{
    key: 'handleChange',
    value: function handleChange(e) {
      if (!this.props.required) return false;

      if (e.target.value === '') {
        this.setState({ error: 'has-error' });
      } else {
        this.setState({ error: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        'div',
        { className: 'form-group ' + this.state.error },
        React__default.createElement(
          'label',
          { htmlFor: 'name' },
          this.props.label
        ),
        React__default.createElement(
          'div',
          { className: 'input-group' },
          React__default.createElement(
            'div',
            { className: 'input-field' },
            React__default.createElement(
              'select',
              { id: this.props.id, className: 'form-control', onChange: function onChange(e) {
                  _this2.props.onChange(e);_this2.handleChange(e);
                } },
              React__default.createElement(
                'option',
                { value: '', disabled: this.props.defaultOption.disabled },
                this.props.defaultOption.label
              ),
              this.props.options.map(function (e) {
                return React__default.createElement(
                  'option',
                  { value: e.value, key: e.value },
                  e.label
                );
              })
            )
          )
        ),
        React__default.createElement(
          'div',
          { className: 'hint persistent' },
          this.props.hintText
        )
      );
    }
  }]);
  return Select;
}(React.Component);


Select.defaultProps = {
  defaultOption: {
    disabled: false,
    label: 'Select option'
  }
};

var Skeleton = function (_Component) {
  inherits(Skeleton, _Component);

  function Skeleton() {
    classCallCheck(this, Skeleton);
    return possibleConstructorReturn(this, (Skeleton.__proto__ || Object.getPrototypeOf(Skeleton)).apply(this, arguments));
  }

  createClass(Skeleton, [{
    key: 'render',
    value: function render() {
      return React__default.createElement('div', { className: 'skeleton ' + this.props.variant,
        style: { width: this.props.width + 'px', height: this.props.height + 'px' } });
    }
  }]);
  return Skeleton;
}(React.Component);

var Slick = function (_Component) {
  inherits(Slick, _Component);

  function Slick() {
    classCallCheck(this, Slick);
    return possibleConstructorReturn(this, (Slick.__proto__ || Object.getPrototypeOf(Slick)).apply(this, arguments));
  }

  createClass(Slick, [{
    key: 'render',
    value: function render() {
      return React__default.createElement('div', null);
    }
  }]);
  return Slick;
}(React.Component);

var Slideshow = function (_Component) {
  inherits(Slideshow, _Component);

  function Slideshow() {
    classCallCheck(this, Slideshow);
    return possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).apply(this, arguments));
  }

  createClass(Slideshow, [{
    key: 'render',
    value: function render() {
      return React__default.createElement('div', null);
    }
  }]);
  return Slideshow;
}(React.Component);

var SnackbarGroup = function (_Component) {
  inherits(SnackbarGroup, _Component);

  function SnackbarGroup() {
    classCallCheck(this, SnackbarGroup);
    return possibleConstructorReturn(this, (SnackbarGroup.__proto__ || Object.getPrototypeOf(SnackbarGroup)).apply(this, arguments));
  }

  createClass(SnackbarGroup, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'div',
        { className: 'snackbar-wrapper' },
        this.props.items && this.props.items.map(function (e, i) {
          return React__default.createElement(Snackbar, { item: e, key: i });
        }),
        this.props.children
      );
    }
  }]);
  return SnackbarGroup;
}(React.Component);

var Snackbar = function (_Component2) {
  inherits(Snackbar, _Component2);

  function Snackbar() {
    classCallCheck(this, Snackbar);
    return possibleConstructorReturn(this, (Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).apply(this, arguments));
  }

  createClass(Snackbar, [{
    key: 'handleClose',
    value: function handleClose(event) {
      console.log(event.target.parentElement);
      event.target.parentElement.parentElement.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React__default.createElement(
        'div',
        { className: 'snackbar ' + this.props.item.type },
        React__default.createElement(
          'div',
          { className: 'snackbar-content' },
          this.props.item.icon && React__default.createElement(Icon, { name: '' + this.props.item.icon, size: 16 }),
          this.props.item.text
        ),
        this.props.item.close && React__default.createElement(
          'button',
          { onClick: function onClick(e) {
              return _this3.handleClose(e);
            }, className: 'btn xs icon' },
          React__default.createElement(Icon, { name: 'x', size: 16 })
        )
      );
    }
  }]);
  return Snackbar;
}(React.Component);

Snackbar.defaultProps = {
  item: {
    text: ''
  }
};

var Switch = function (_React$Component) {
  inherits(Switch, _React$Component);

  function Switch() {
    classCallCheck(this, Switch);
    return possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
  }

  createClass(Switch, [{
    key: 'render',
    value: function render() {

      var color = this.props.color ? this.props.color : '';

      var liClasses = classnames(defineProperty({
        'switch': true
      }, color, this.props.color));

      return React__default.createElement(
        'div',
        { className: liClasses },
        React__default.createElement('input', {
          type: 'checkbox',
          id: this.props.id,
          name: this.props.name,
          checked: this.props.checked,
          disabled: this.props.disabled,
          onChange: this.props.onChange }),
        React__default.createElement('label', { htmlFor: this.props.id })
      );
    }
  }]);
  return Switch;
}(React__default.Component);

var TextField = function (_Component) {
  inherits(TextField, _Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextField.__proto__ || Object.getPrototypeOf(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: ''
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TextField, [{
    key: 'handleBlur',
    value: function handleBlur(e) {
      if (this.validate(e)) {
        this.setState({ error: true });
        if (this.props.error) {
          this.props.error(defineProperty({}, this.props.name, { error: true }));
        }
      } else {
        this.setState({ error: false });
        if (this.props.error) {
          this.props.error(defineProperty({}, this.props.name, { error: true }));
        }
      }
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      if (value === '') {
        return true;
      }

      if (this.props.minLength && this.props.maxLength) {
        return !(value.length >= this.props.minLength && value.length <= this.props.maxLength);
      }

      if (this.props.min && this.props.max) {
        return !(value >= this.props.min && value <= this.props.max);
      }

      if (this.props.type === 'email') {
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !regex.test(String(value).toLowerCase());
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        'div',
        { className: 'form-group ' + (this.state.error ? 'has-error' : '') },
        React__default.createElement(
          'label',
          { htmlFor: 'name' },
          this.props.label
        ),
        React__default.createElement(
          'div',
          { className: 'input-group' },
          React__default.createElement(
            'div',
            { className: 'input-field' },
            React__default.createElement('input', { className: 'form-control',
              id: this.props.id,
              name: this.props.name,
              type: this.props.type ? this.props.type : 'text',
              disabled: this.props.disabled,
              readOnly: this.props.readOnly,
              placeholder: this.props.label,
              value: this.props.defaultValue,
              onChange: this.props.onChange,
              onBlur: this.props.required ? function (e) {
                return _this2.handleBlur(e.target.value);
              } : null
            })
          )
        ),
        React__default.createElement(
          'div',
          { className: 'hint persistent' },
          this.props.hintText
        ),
        React__default.createElement(
          'div',
          { className: 'hint' },
          this.props.errorText
        )
      );
    }
  }]);
  return TextField;
}(React.Component);

TextField.defaultProps = {
  onChange: null,
  defaultValue: '',
  readOnly: false,
  disabled: false,
  required: false
};

var Tooltip = function (_React$Component) {
  inherits(Tooltip, _React$Component);

  function Tooltip() {
    classCallCheck(this, Tooltip);
    return possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
  }

  createClass(Tooltip, [{
    key: "render",
    value: function render() {
      return React__default.createElement(
        "span",
        { className: "tooltip " + this.props.y },
        this.props.trigger,
        React__default.createElement(
          "div",
          { className: "tooltip-content" },
          this.props.children
        )
      );
    }
  }]);
  return Tooltip;
}(React__default.Component);

var Typography = function (_Component) {
  inherits(Typography, _Component);

  function Typography() {
    classCallCheck(this, Typography);
    return possibleConstructorReturn(this, (Typography.__proto__ || Object.getPrototypeOf(Typography)).apply(this, arguments));
  }

  createClass(Typography, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'div',
        { className: 'h1', id: this.props.id },
        'h1'
      );
    }
  }]);
  return Typography;
}(React.Component);

var Card = function (_Component) {
    inherits(Card, _Component);

    function Card() {
        classCallCheck(this, Card);
        return possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    createClass(Card, [{
        key: "render",
        value: function render() {
            return React__default.createElement(
                "div",
                { className: "card " + this.props.className, style: { width: this.props.width + "px" } },
                this.props.children
            );
        }
    }]);
    return Card;
}(React.Component);

var CardHeader = function (_Component2) {
    inherits(CardHeader, _Component2);

    function CardHeader() {
        classCallCheck(this, CardHeader);
        return possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
    }

    createClass(CardHeader, [{
        key: "render",
        value: function render() {
            return React__default.createElement(
                "div",
                { className: "card-header " + this.props.className },
                this.props.children
            );
        }
    }]);
    return CardHeader;
}(React.Component);

var CardContent = function (_Component3) {
    inherits(CardContent, _Component3);

    function CardContent() {
        classCallCheck(this, CardContent);
        return possibleConstructorReturn(this, (CardContent.__proto__ || Object.getPrototypeOf(CardContent)).apply(this, arguments));
    }

    createClass(CardContent, [{
        key: "render",
        value: function render() {
            return React__default.createElement(
                "div",
                { className: "card-body" },
                this.props.children
            );
        }
    }]);
    return CardContent;
}(React.Component);

var CardFooter = function (_Component4) {
    inherits(CardFooter, _Component4);

    function CardFooter() {
        classCallCheck(this, CardFooter);
        return possibleConstructorReturn(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).apply(this, arguments));
    }

    createClass(CardFooter, [{
        key: "render",
        value: function render() {
            return React__default.createElement(
                "div",
                { className: "card-footer" },
                this.props.children
            );
        }
    }]);
    return CardFooter;
}(React.Component);

var Grid = function (_Component) {
    inherits(Grid, _Component);

    function Grid() {
        classCallCheck(this, Grid);
        return possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
    }

    createClass(Grid, [{
        key: 'render',
        value: function render() {
            var styles = {
                flexWrap: this.props.wrap ? 'wrap' : '',
                gap: this.props.gap + 'px',
                justifyContent: this.props.center ? 'center' : ''
            };

            var liClasses = classnames(defineProperty({
                'grid d-flex': true
            }, this.props.className, this.props.className));

            return React__default.createElement(
                'div',
                { className: liClasses, style: styles },
                this.props.children
            );
        }
    }]);
    return Grid;
}(React.Component);

Grid.defaultProps = {
    className: '',
    wrap: '',
    gap: 0
};

var Row = function (_Component2) {
    inherits(Row, _Component2);

    function Row() {
        classCallCheck(this, Row);
        return possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    createClass(Row, [{
        key: 'render',
        value: function render() {
            var _classNames2;

            var alignItems = this.props.alignItems ? 'align-' + this.props.alignItems : '';

            var liClasses = classnames((_classNames2 = {
                'row': true
            }, defineProperty(_classNames2, this.props.direction, this.props.direction), defineProperty(_classNames2, this.props.justify, this.props.justify), defineProperty(_classNames2, alignItems, this.props.alignItems), _classNames2));

            return React__default.createElement(
                'div',
                { className: liClasses, style: this.props.style },
                this.props.children
            );
        }
    }]);
    return Row;
}(React.Component);

Row.defaultProps = {
    className: '',
    direction: '',
    justify: '',
    alignItems: ''
};

var Column = function (_Component3) {
    inherits(Column, _Component3);

    function Column() {
        classCallCheck(this, Column);
        return possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
    }

    createClass(Column, [{
        key: 'render',
        value: function render() {
            var _classNames3;

            var xs = this.props.xs ? 'col-xs-' + this.props.xs : '';
            var sm = this.props.sm ? 'col-sm-' + this.props.sm : '';
            var md = this.props.md ? 'col-md-' + this.props.md : '';
            var lg = this.props.lg ? 'col-lg-' + this.props.lg : '';
            var xl = this.props.xl ? 'col-xl-' + this.props.xl : '';

            var liClasses = classnames((_classNames3 = {
                'col': true
            }, defineProperty(_classNames3, xs, this.props.xs), defineProperty(_classNames3, sm, this.props.sm), defineProperty(_classNames3, md, this.props.md), defineProperty(_classNames3, lg, this.props.lg), defineProperty(_classNames3, xl, this.props.xl), defineProperty(_classNames3, this.props.className, this.props.className), _classNames3));

            return React__default.createElement(
                'div',
                { className: liClasses, style: this.props.style },
                this.props.children
            );
        }
    }]);
    return Column;
}(React.Component);

var List = function (_Component) {
    inherits(List, _Component);

    function List() {
        classCallCheck(this, List);
        return possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    createClass(List, [{
        key: 'render',
        value: function render() {
            return React__default.createElement(
                'ul',
                { className: 'list-group' },
                this.props.children
            );
        }
    }]);
    return List;
}(React.Component);

var ListItem = function (_Component2) {
    inherits(ListItem, _Component2);

    function ListItem() {
        classCallCheck(this, ListItem);
        return possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    createClass(ListItem, [{
        key: 'render',
        value: function render() {
            return React__default.createElement(
                'li',
                { className: 'list-item' },
                this.props.children
            );
        }
    }]);
    return ListItem;
}(React.Component);

var Dialog = function (_Component) {
    inherits(Dialog, _Component);

    function Dialog() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Dialog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.windowOnClick = function (event) {
            var modal = document.querySelector(".dialog.active");
            if (event.target === modal && _this.props.onClose) {
                _this.props.onClose();
            }
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Dialog, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener("click", this.windowOnClick);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var liClasses = classnames((_classNames = {
                'dialog': true
            }, defineProperty(_classNames, this.props.className, this.props.className), defineProperty(_classNames, 'scrollable', this.props.scrollable), defineProperty(_classNames, 'active', this.props.open), _classNames));

            var liChildClasses = classnames(defineProperty({
                'dialog-content': true
            }, this.props.size, this.props.size));

            return React__default.createElement(
                'div',
                { className: liClasses },
                React__default.createElement(
                    'div',
                    { className: liChildClasses },
                    this.props.children
                )
            );
        }
    }]);
    return Dialog;
}(React.Component);

var DialogHeader = function (_Component2) {
    inherits(DialogHeader, _Component2);

    function DialogHeader() {
        classCallCheck(this, DialogHeader);
        return possibleConstructorReturn(this, (DialogHeader.__proto__ || Object.getPrototypeOf(DialogHeader)).apply(this, arguments));
    }

    createClass(DialogHeader, [{
        key: 'render',
        value: function render() {
            return React__default.createElement(
                'div',
                { className: 'dialog-content-header' },
                this.props.onClose && React__default.createElement(
                    'button',
                    { className: 'btn btn-white icon close', onClick: this.props.onClose },
                    '\xD7'
                ),
                React__default.createElement(
                    'h4',
                    null,
                    this.props.title
                ),
                this.props.children
            );
        }
    }]);
    return DialogHeader;
}(React.Component);

var DialogContent = function (_Component3) {
    inherits(DialogContent, _Component3);

    function DialogContent() {
        classCallCheck(this, DialogContent);
        return possibleConstructorReturn(this, (DialogContent.__proto__ || Object.getPrototypeOf(DialogContent)).apply(this, arguments));
    }

    createClass(DialogContent, [{
        key: 'render',
        value: function render() {
            return React__default.createElement(
                'div',
                { className: 'dialog-content-body' },
                this.props.children
            );
        }
    }]);
    return DialogContent;
}(React.Component);

var DialogFooter = function (_Component4) {
    inherits(DialogFooter, _Component4);

    function DialogFooter() {
        classCallCheck(this, DialogFooter);
        return possibleConstructorReturn(this, (DialogFooter.__proto__ || Object.getPrototypeOf(DialogFooter)).apply(this, arguments));
    }

    createClass(DialogFooter, [{
        key: 'render',
        value: function render() {
            return React__default.createElement(
                'div',
                { className: 'dialog-content-footer' },
                this.props.children
            );
        }
    }]);
    return DialogFooter;
}(React.Component);

exports.text = text;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Container = Container;
exports.Divider = Divider;
exports.Dropdown = Dropdown;
exports.Icon = Icon;
exports.PopOver = PopOver;
exports.Radio = Radio;
exports.Select = Select;
exports.Skeleton = Skeleton;
exports.Slick = Slick;
exports.Slideshow = Slideshow;
exports.SnackbarGroup = SnackbarGroup;
exports.Snackbar = Snackbar;
exports.Switch = Switch;
exports.TextField = TextField;
exports.Tooltip = Tooltip;
exports.Typography = Typography;
exports.Card = Card;
exports.CardHeader = CardHeader;
exports.CardContent = CardContent;
exports.CardFooter = CardFooter;
exports.Grid = Grid;
exports.Row = Row;
exports.Column = Column;
exports.List = List;
exports.ListItem = ListItem;
exports.Dialog = Dialog;
exports.DialogHeader = DialogHeader;
exports.DialogContent = DialogContent;
exports.DialogFooter = DialogFooter;
//# sourceMappingURL=index.js.map
