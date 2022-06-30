// function sum (num1,num2,num3){
//     console.log(num1+num2+num3);
// }
// sum(20,40,10);


//Summation using For/In Loop
// function sum(){
//     var sum = 0;
//     for(var i in arguments){
//         sum += arguments[i];
//     }
//     document.write(sum + "</br>")
// }
// sum(20,30,50);
// sum(70,90);


// function call(parameter1,parameter2){
//     var callBack = parameter1 + parameter2;
//     console.log(arguments);
//     return callBack;
    
// }
// var result = call(10,20);
// document.write(result);


//----Compare Function With Return Value & For/In Loop 
// function similler(){
//     console.log(arguments);
//     var summation = 0;
//     for(var i in arguments){
//         summation += arguments[i];
//     }
//     document.write(summation + '</br>');
// }
// similler(1,2,3,4,5);
// similler(7,8,9,10);
// similler(100,300,50,70);
// similler(71,77,79,73);



//---Example:01
// function similler(name,...numValue){
//     console.log(arguments);
//     document.write(`My name is: ${name} </br>`);
//     var summation = 0;
//     for(var i in numValue){
//         summation += numValue[i];
//     }
//     document.write('Only numerical value summation using rest operator:',summation + '</br>');
// }
// similler('Salman',1,2,3,4,5);
// similler('Pranto',10,20,30,40,50);


//---Example:02
function similler(name,degree,...numValue){
    console.log(arguments);
    document.write(`My name is: ${name} of ${degree} </br>`);
    var summation = 0;
    for(var i in numValue){
        summation += numValue[i];
    }
    document.write('Only numerical value summation using rest operator:',summation + '</br>');
}
similler('Salman','BSc',1,2,3,4,5);
similler('Pranto','MSc',10,20,30,40,50);
