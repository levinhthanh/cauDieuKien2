
function change1(){
    document.getElementById('hang1').checked=true;
    if(document.getElementById('hang2').checked)
    document.getElementById('hang3').checked=false; 
}
function change2(){
    document.getElementById('hang2').checked=true;
    if(document.getElementById('hang3').checked)
    document.getElementById('hang1').checked=false; 
}
function change3(){
    document.getElementById('hang3').checked=true;
    if(document.getElementById('hang1').checked)
    document.getElementById('hang2').checked=false; 
}
