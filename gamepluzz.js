let a = 0;
let b = 0;
let c = 0;
let img1= document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
function changeImg1() {
    a++;
    if(a > 2){
        a = 0;
    }
    img1.src = "./anh/" + a + ".jpg"
    check();
}

function changeImg2() {

    b++;
    if(b > 2){
        b = 0;
    }
    img2.src = "./anh/" + b + ".jpg"
    check();
}

function changeImg3() {
    c++;
    if(c > 2){
        c = 0;
    }
    img3.src = "./anh/" + c + ".jpg"
    check()
}
function check() {
    if (a === b && a === c ) {
        img1.style.boxShadow = 'red 4px 4px 9px';
        img2.style.boxShadow = 'red 4px 4px 9px';
        img3.style.boxShadow = 'red 4px 4px 9px';
    }else {
        img1.style.boxShadow = 'white 4px 4px 9px';
        img2.style.boxShadow = 'white 4px 4px 9px';
        img3.style.boxShadow = 'white 4px 4px 9px';
    }

}