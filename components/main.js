// <reference path ="../typings/globals/jquery/index.d.ts"/>
//<reference types="jquery" />
//<reference types="node" />
//
import { html, render } from '../modules/preact_link.js';
let str_dat = "main.ts file dat";
//console.log("main file");
//console.log($);
$('#inp_data').text("yyyyyyyyyyyyyyyyyyyyyy");
let main = () => html `
  <div>
    <h5>${str_dat}</h5>
    <amp-bind-macro id="repl2" arguments="str" expression="str.toLowerCase()">
    </amp-bind-macro>
    <input type="text" placeholder="dat" on="input-throttled:AMP.setState({ arg2: event.value })" />
    <div data-amp-bind-text="'Input is ' + repl2(arg2)">${str_dat}</div>
  </div>`;
render(main(), document.getElementById("main"));
