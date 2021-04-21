//import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import { html, Component, render } from  '../modules/preact_link.js'
import { observer } from '../modules/mobx_preact.module.js';
//import imob from "./mobx_store.js";
import { autorun, toJS } from '../modules/mobx.module.js';
import  * as jQuery from "https://unpkg.com/jquery@3.5.1/dist/jquery.min.js";


var $ = window.jQuery;

console.log("main file");

// let name="i-py pr";
//
// var header=()=>html`
//   <amp-accordion class="menu" disable-session-states>
//     <section>
//       <h5 class="amp_a">${name}</h5>
//       <div>
//         <a href="https://nuitmod.github.io/ini_pwa/amp/">ini_pwa</a>
//         <a href="https://nuitmod.github.io/npx_io/">npx_io</a>
//         <a href="https://nuitmod.github.io/io_proj/amp/">io_proj</a>
//         <a href="https://nuitmod.github.io/mod_i">mod_i main</a>
//       </div>
//     </section>
//   </amp-accordion>`
//
//
// render(header(), document.getElementById("root"))
