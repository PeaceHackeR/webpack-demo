import _ from 'lodash';
import printMe from './print.js';

function component(){
    var elm = document.createElement('div');
    var btn = document.createElement('button');

    elm.innerHTML = _.join(['Toto', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check console!';
    btn.onclick = printMe;

    elm.appendChild(btn);

    return elm;

}

document.body.appendChild(component());