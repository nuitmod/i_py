import { html, render } from '../modules/preact_link.js';
//import  * as jQuery from "https://unpkg.com/jquery@3.5.1/dist/jquery.min.js";
//var $ = window.jQuery;
console.log("main file");
let str_dat = "main ts data";
let main = () => html `
<div>
    <amp-bind-macro id="repl2" arguments="str" expression="str.toLowerCase()">
    </amp-bind-macro>
    <input type="text" placeholder="dat" on="input-throttled:AMP.setState({ arg: event.value })">
    <div data-amp-bind-text="'Input is ' + repl2(arg)">${str_dat}</div>
</div>`;
render(main(), document.getElementById("main"));
