let tablink= document.getElementsByClassName('table-link');
let tabcontent= document.getElementsByClassName('tab-content');

function opentab(tabname){
    for(tablink of tablink){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontent){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');



}




