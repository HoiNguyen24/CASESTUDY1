
let array1 = [10,7,5,4,7];
function findAvg(array1){
    let S = 0;
    for(let i = 0; i < array1.length; i++){
     S+= array1[i];
    }
    return S/array1.length;
}
console.log(findAvg(array1));
let array2 = [10,7,5,4,7];
let x= 5,index = 4;
function insertNumberToArray(array2,x,index){
    if(index >= 0 && index <= array2.length-1){
        for(let i = array2.length-1; i > index; i++){
                array2[i] = array2[i-1];
        }
        array2[index] = x;
    }
    return array2;
}
insertNumberToArray(array2,x,index);
console.log(array2);
function isPrime(n){
    if(n < 2) return false;
    for(let i = 2 ; i <= Math.sqrt(n);i++){
        if(n%i ===0) return false;
    }
    return true;
}
let y = 10;
function sumOfListPrime(y){
    let S = 0;
    for(let i = 0 ; i <= y ;i++){
        if(isPrime(i)){
            S += i;
            console.log(i);
        }
    }
    return S;
}
console.log("tong cac so nguyen to: "+sumOfListPrime(y));

let canvas2 = document.getElementById("CanvasTEST");
let ctx1 = canvas2.getContext('2d');
class CIRCLE{
    x;
    y;
    radius;
    color;
    constructor(x,y,radius,color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw(){
        ctx1.beginPath();
        ctx1.fillStyle= this.color;
        ctx1.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();
    }
}
let circle = new CIRCLE(50,50,80,"#000000");
circle.draw();

