const toggle=document.querySelector('.menu-toggle');
const mobile=document.querySelector('#mobile-nav');
if(toggle&&mobile){toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));toggle.setAttribute('aria-label',expanded?'Apri il menu':'Chiudi il menu');mobile.hidden=expanded;});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Apri il menu');}));}
