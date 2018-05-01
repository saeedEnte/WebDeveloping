
function main_to_test(){

    var myArray = [5,4,5,6,2,1];
    console.log(myArray.length);
    myArray = array_resizer();
    console.log(myArray.length);
    var objecArray = [];
    
    var person = {
        name : "Saeed",
        age : 24
    };

    objecArray.push(new Object());
    objecArray[objecArray.length-1] = person;

    console.log(objecArray[0].name+"\t"+objecArray[0].age)
}

function array_resizer(a) {
    a = [1,2,3]
    return a;
}