let char1=1, char2=1, char3=1, char4=1;
let bul1=2, bul2=2, bul3=2, bul4=2;
let squi1=3, squi2=3, squi3=3, squi4=3;
let i1=1,i2=2,i3=3,i4=1;
function chonanh1(){
    i1+=1;
    if(i1==4) i1=1;
    if(i1==char1) document.getElementById('pos1').src="image/charman1.jpg";
    if(i1==bul1) document.getElementById('pos1').src="image/bulba1.jpg";
    if(i1==squi1) document.getElementById('pos1').src="image/squi1.jpg";
    kiemtra();
}
function chonanh2(){
    i2+=1;
    if(i2==4) i2=1;
    if(i2==char2) document.getElementById('pos2').src="image/charman2.jpg";
    if(i2==bul2) document.getElementById('pos2').src="image/bulba2.jpg";
    if(i2==squi2) document.getElementById('pos2').src="image/squi2.jpg";
    kiemtra();
}
function chonanh3(){
    i3+=1;
    if(i3==4) i3=1;
    if(i3==char3) document.getElementById('pos3').src="image/charman3.jpg";
    if(i3==bul3) document.getElementById('pos3').src="image/bulba3.jpg";
    if(i3==squi3) document.getElementById('pos3').src="image/squi3.jpg";
    kiemtra();
}
function chonanh4(){
    i4+=1;
    if(i4==4) i4=1;
    if(i4==char4) document.getElementById('pos4').src="image/charman4.jpg";
    if(i4==bul4) document.getElementById('pos4').src="image/bulba4.jpg";
    if(i4==squi4) document.getElementById('pos4').src="image/squi4.jpg";
    kiemtra();
}
function kiemtra(){
    if (i1==i2 & i2==i3 & i3==i4) alert('Bạn đã chiến thắng')
}