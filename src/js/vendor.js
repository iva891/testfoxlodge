import 'babel-polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import validate from "jquery-validation";
import select2 from '../../node_modules/select2/dist/js/select2.full';
import Inputmask from "inputmask";
import 'tooltipster/dist/js/tooltipster.main.min';
import 'tooltipster/dist/js/tooltipster.bundle.min';
select2($);

window.$ = $;
window.jQuery = $;
window.validate = validate;
window.select2 = select2;
window.Inputmask = Inputmask;
window.$W = $(window);
window.$D = $(document);
window.$H = $('html');
window.$B = $('body');

svg4everybody();
// import 'ninelines-ua-parser';
