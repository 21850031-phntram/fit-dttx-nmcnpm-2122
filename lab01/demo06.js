/**
 * Câu lệnh điều kiện trong ES
 */

let n = 7;
if(n % 2 == 0){
    console.log(n, "la so chan");
}
else{
    console.log(n, "la so le");
}

let m = 4;
switch(m){
    case 1:
        console.log("Chu nhat");
        break;
    case 2:
        console.log("Thu 2");
        break;
    case 3:
        console.log("Thu 3");
    case 4:
        console.log("Thu 4");
        break;
    default:
        console.log("Du lieu khong hop le");
}