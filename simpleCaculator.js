let input="";
let show='';
let output="";
let pheptinh='';
let sohang1=0;
let sohang2=0;
let ketqua=0;
function tinhtoan(){
    sohang2=parseInt(output);
    switch(pheptinh){
          case 'cong':ketqua=sohang1+sohang2;break;
          case 'tru':ketqua=sohang1-sohang2;break;
          case 'nhan':ketqua=sohang1*sohang2;break;
          case 'chia':ketqua=sohang1/sohang2;break;                
    } 
    show=String(ketqua);
    document.getElementById('hienthi').innerHTML=show;
    output='';
    show='';
}
function nhapso1(){    
    input=document.getElementById('so1').innerHTML;
    output=input;
    show=show+output;
    document.getElementById('hienthi').innerHTML=show;
}
function nhapso2(){
    
    input=document.getElementById('so2').innerHTML;
    output=input;
    show=show+output;
    document.getElementById('hienthi').innerHTML=show;
}
function nhapso3(){
    
    input=document.getElementById('so3').innerHTML;
    output=input;
    show=show+output;
    document.getElementById('hienthi').innerHTML=show;
}
function nhapso4(){
    
    input=document.getElementById('so4').innerHTML;
    output=input;
    show=show+output;
    document.getElementById('hienthi').innerHTML=show;
}
function nhapso5(){
    
    input=document.getElementById('so5').innerHTML;
    output=input;
    show=show+output;
    document.getElementById('hienthi').innerHTML=show;
}
function nhapso6(){
    
    input=document.getElementById('so6').innerHTML;
    output=input;
    show=show+output;
    document.getElementById('hienthi').innerHTML=show;
}
function nhapso7(){
    
    input=document.getElementById('so7').innerHTML;
    output=input;
    show=show+output;
    document.getElementById('hienthi').innerHTML=show;
}
function nhapso8(){
    
    input=document.getElementById('so8').innerHTML;
    output=input;
    show=show+output;
    document.getElementById('hienthi').innerHTML=show;
}
function nhapso9(){
    
    input=document.getElementById('so9').innerHTML;
    output=input;
    show=show+output;
    document.getElementById('hienthi').innerHTML=show;
}
function nhapso0(){
    
    input=document.getElementById('so0').innerHTML;
    output=input;
    show=show+output;
    document.getElementById('hienthi').innerHTML=show;
}
function nhapcong(){
    sohang1=parseInt(output);    
    input=document.getElementById('cong').innerHTML;
    output=output+input;
    show=output;
    document.getElementById('hienthi').innerHTML=show;
    pheptinh='cong';  
    output='';    
}
function nhaptru(){    
    sohang1=parseInt(output);
    input=document.getElementById('tru').innerHTML;
    output=output+input;
    show=output;
    document.getElementById('hienthi').innerHTML=show;
    pheptinh='tru'; 
    output='';  
}
function nhapnhan(){ 
    sohang1=parseInt(output);   
    input=document.getElementById('nhan').innerHTML;
    output=output+input;
    show=output;
    document.getElementById('hienthi').innerHTML=show;
    pheptinh='nhan';  
    output='';
}
function nhapchia(){  
    sohang1=parseInt(output);  
    input=document.getElementById('chia').innerHTML;
    output=output+input;
    show=output;
    document.getElementById('hienthi').innerHTML=show;
    pheptinh='chia';    
    output='';
}
function reset(){   
    input='';
    output='';
    document.getElementById('hienthi').innerHTML=output;
}