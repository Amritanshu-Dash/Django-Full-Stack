alert("Welcome");
var f_name = prompt("Enter your name: ");
var l_name = prompt("Enter your last name: ");
if(f_name[1] === l_name[1]){

    var age = prompt("Enter your age: ");
    if(age >= 20 && age <= 30){
        var p_name = prompt("Enter your pet name: ");
        if(p_name.slice(-1) === 'y' || p_name.slice(-1) === 'Y'){
            console.log("Welcome Commander!!");
        }
    }
}