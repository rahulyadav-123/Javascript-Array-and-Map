var lastNum;
var firstNum;
var sum;

for(i=1;i<100;i++){
    lastNum=i%10;
    firstNum=Math.floor(i/10);
    sum=lastNum*10+firstNum;
    if(sum===i){
        console.log(i);
    }
}