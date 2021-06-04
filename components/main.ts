import { html, Component, render } from  '../modules/preact_link.js'
import { observer } from '../modules/mobx_preact.module.js';
//import imob from "./mobx_store.js";
import { autorun, toJS } from '../modules/mobx.module.js';
//import  * as jQuery from "https://unpkg.com/jquery@3.5.1/dist/jquery.min.js";
import * as jQuery from '../modules/jquery.min.js';

//var $ = window.jQuery;


console.log("main file");

let str_dat="main.ts";

let main=()=>html`
  <div>
    <h5>${str_dat}</h5>
    <amp-bind-macro id="repl2" arguments="str" expression="str.toLowerCase()">
    </amp-bind-macro>
    <input type="text" placeholder="dat" on="input-throttled:AMP.setState({ arg2: event.value })" />
    <div data-amp-bind-text="'Input is ' + repl2(arg2)">${str_dat}</div>
  </div>`











render(main(), document.getElementById("main"))
