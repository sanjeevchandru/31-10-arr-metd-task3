document.write("3. we are going to define an array of four people."+"<br>"+" However, since there can only be three winners,"+"<br>"+" the fourth person in the list will have to be discounted."+"<br>");
document.write("-------------------------------------------------------------"+"<br>");
let arr=["Anna", "Beth", "Cara","David"];

let no1=arr.filter(function(value,index){
    // if(index==0){
    //     document.write(value)
    // }
    return index==0;
});
document.write("The No1 winner is "+no1+"<br>");

let no2=arr.filter(function(value,index){
    return index==1;
});
document.write("The No2 winner is "+no2+"<br>");

let no3=arr.filter(function(value,index){
    return index==2;
});
document.write("The No3 winner is "+no3+"<br>");

let no4=arr.filter(function(value,index){
    return index==3;
});
document.write("Sorry "+no4+" is not one of the winners.");


