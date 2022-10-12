let t1 = "1";
let t2 = "2";
let t3 = "3";
let t4 = "4";
let t5 = "5";
let t6 = "6";
let t7 = "7";
let t8 = "8";
let t9 = "9";
let t10 = "10";
let t11 = "11";
let t12 = "12";
 function songay() {
  let month = document.getElementById('thang').value;
  switch (month) {
   case t1:
   case t3:
   case t5:
   case t7:
   case t8:
   case t10:
   case t12:
    document.getElementById('kq').innerHTML = " Tháng " + month + " Có 31 ngày";
    break
   case t2:
    document.getElementById('kq').innerHTML = " Tháng " + month + " Có 28 - 29 ngày";
    break
   case t4:
   case t6:
   case t9:
   case t11:
    document.getElementById('kq').innerHTML = ' Tháng ' + month + "Có 30 ngày";
    break
   default:
    document.getElementById('kq').innerHTML = "Vui lòng nhập tháng";
  }
 }