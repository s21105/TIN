(()=>{var e={920:(e,t)=>{t.convertDist=function(){var e=document.getElementById("dist").value,t=document.getElementById("distConv"),n=document.getElementById("result2");let o;"k-m"===t.value?o=.621371*e:"m-k"===t.value&&(o=e/.621371),n.value=o}},510:(e,t)=>{t.convertTemp=function(){var e=parseInt(document.getElementById("temp").value),t=document.getElementById("from"),n=document.getElementById("to"),o=document.getElementById("result");let r;"from-c"===t.value&&(r="to-f"===n.value?9*e/5+32:"to-k"===n.value?e+273.15:"can not convert to the same degree"),"from-f"===t.value&&(r="to-c"===n.value?5*(e-32)/9:"to-k"===n.value?5*(e+459.67)/9:"can not convert to the same degree"),"from-k"===t.value&&(r="to-c"===n.value?e-273.15:"to-f"===n.value?9*e/5-459.67:"can not convert to the same degree"),o.value=r}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{const e=n(510),t=n(920);document.getElementById("b1").addEventListener("click",e.convertTemp),document.getElementById("b2").addEventListener("click",t.convertDist)})()})();
