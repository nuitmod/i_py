"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preact_link_js_1 = require("../modules/preact_link.js");
let str_dat = "vi.ts file dat";
$('#vi_dat').text(str_dat);
let main = () => preact_link_js_1.html `
  <div>
    <h5>${str_dat}</h5>
  </div>`;
preact_link_js_1.render(main(), document.getElementById("vi_main"));
