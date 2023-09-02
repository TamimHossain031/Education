'use strict';
const addEventOnElem = function(elem,type,callback){
    if(elem.length>1){
        for(let i = 0; i < elem.length; i++){
           console.log(elem[i].addEventListener(type,callback));
        }
    }else{
        elem.addEventListener(type,callback);
    }
}

//navbar toggle ->>
const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const overlay = document.querySelector('[data-overlay]');
const header = document.querySelector("[data-header]");

const toggleNavbar = function(){
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
}

const closeNavbar = function(){
    navbar.classList.remove('active');
    overlay.classList.remove('active');
}

const activeElem = function(){
    if(window.scrollY > 100){
        header.classList.add('active');        
    }else{
        header.classList.remove('active');
    }
}


addEventOnElem(navTogglers,'click',toggleNavbar);
addEventOnElem(navLinks,'click',closeNavbar);
addEventOnElem(window,'scroll',activeElem);
