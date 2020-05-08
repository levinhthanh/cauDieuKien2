function countDay()
{
   let month=document.getElementById('thang').value;
   days='0';
   
   switch(month){
       case '1': 
       case '3':
       case '5':
       case '7':
       case '9':
       case '11': days='31';
                  break;
       case '4': 
       case '6':
       case '8':
       case '10':
       case '12': days='30';
                  break;
       case '2':  days='28 hoặc 29';
                  break;
       default: '';
   }
   if (days=='0')  document.getElementById('ketqua').innerHTML='Mời bạn nhập lại tháng từ 1 đến 12!'
   else document.getElementById('ketqua').innerHTML= 'Tháng '+ month+' có ' +days +' ngày';
}