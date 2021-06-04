import { html, render } from '../modules/preact_link.js';
//import  * as jQuery from "https://unpkg.com/jquery@3.5.1/dist/jquery.min.js";
//var dat: string="dat";
let name = "i-py pr";
var header = () => html `
  <amp-accordion class="menu" disable-session-states>
    <section>
      <h5 class="amp_a">${name}</h5>
      <div>
        <a href="https://nuitmod.github.io/ini_pwa/amp/">ini_pwa</a>
        <a href="https://nuitmod.github.io/npx_io/">npx_io</a>
        <a href="https://nuitmod.github.io/io_proj/amp/">io_proj</a>
        <a href="https://nuitmod.github.io/mod_i/amp/">mod_i</a>
        <a href="https://i-nuit.vercel.app/">i-nuit</a>
      </div>
    </section>
  </amp-accordion>`;
render(header(), document.getElementById("root"));
