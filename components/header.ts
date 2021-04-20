import { html, Component, render } from  '../modules/preact_link.js'
import { observer } from '../modules/mobx_preact.module.js';
//import imob from "./mobx_store.js";
import { autorun, toJS } from '../modules/mobx.module.js';
//import  * as jQuery from "https://unpkg.com/jquery@3.5.1/dist/jquery.min.js";


var dat: string="dat";

var header=dat=>console.log(dat);
