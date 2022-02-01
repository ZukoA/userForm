function validate_data(){
    var name = validate_name();
    var lastname = validate_lastname();
    var age = validate_age();
    var email = validate_email();
    var gender = validate_gender();
    var courses = validate_courses();
    var courses_question = validate_courses_question();

    if(name && lastname && age && email && gender && courses && courses_question){
        document.getElementsByClassName("name")[0].innerHTML = name;
        document.getElementsByClassName("lastname")[0].innerHTML = lastname;
        document.getElementsByClassName("age")[0].innerHTML = age;
        document.getElementsByClassName("email")[0].innerHTML = email;
        document.getElementsByClassName("gender")[0].innerHTML = gender;
        document.getElementsByClassName("course")[0].innerHTML = courses;
        document.getElementsByClassName("question")[0].innerHTML = courses_question;
    }
}

function validate_name(){
    var x = document.getElementById("name");
    var error = document.getElementById("error_name");

    if(x.value == ''){
        error.innerHTML = "Name is required!";
        x.style.border = "1px solid red";
        return false;
    }else{
        x.style.border = "1px solid #a7a7a7";
        error.innerHTML = "";
        return capitalizeString(x.value);
    }
}

function validate_lastname(){
    var x = document.getElementById("lastname");
    var error = document.getElementById("error_lastname");

    if(x.value == ''){
        error.innerHTML = "Last name is required!";
        x.style.border = "1px solid red";
        return false;
    }else{
        x.style.border = "1px solid #a7a7a7";
        error.innerHTML = "";
        return capitalizeString(x.value);
    }
}

function validate_age(){
    var x = document.getElementById("age");
    var error = document.getElementById("error_age");

    if(x.value == ''){
        error.innerHTML = "Age is reguired!";
        x.style.border = "1px solid red";
        return false;
    }else{
        x.style.border = "1px solid #a7a7a7";
        error.innerHTML = "";
        return x.value;
    }
}

function validate_email(){
    var x = document.getElementById("email");
    var error = document.getElementById("error_email");
    var atlocation=(x.value).indexOf('@');

    if(x.value == '' || atlocation < 1){
        error.innerHTML = "Email address is invalid!";
        x.style.border = "1px solid red";
        return false;
    }else{
        x.style.border = "1px solid #a7a7a7";
        error.innerHTML = "";
        return (x.value).toLowerCase();
    }
}

function validate_gender(){
    var x = document.getElementsByName("gender");
    var error = document.getElementById("error_gender");
    var gender = "";

    for(var i = 0; i < x.length; i++){
        if(x[i].checked){
            gender = x[i].value;
            break;
        }
    }

    if(gender == ""){
        error.innerHTML = "Choose gender!";
        return false;
    }else{
        error.innerHTML = "";
        return gender;
    }
}

function validate_courses(){
    var x = document.getElementById("course");
    var y;
    var z = x.options.length;

    for(var i = 0; i < z; i++){
        y = x[i];
        if(y.selected === true){
            break;
        }
    }
    if(y.value=="" || y.value==null){
        document.getElementById("error_course").innerHTML = "Choose which course do you want!";
        return false;
    }else{
        document.getElementById("error_course").innerHTML = "";
        return y.value;
    }
}

function validate_courses_question(){
    var x = document.getElementsByName("ckbox[]");
    var y = "";
    var br = 0;

    for(var i = 0; i < x.length; i++){
        if(x[i].checked){
            br++;
            y = x[i].value;
        }
    }if(br!=1){
        document.getElementById("error_question").innerHTML = "Choose one value!";
        return false;
    }else{
        document.getElementById("error_question").innerHTML = "";
        return y;
    }
}

function capitalizeString(text){
    var first_letter = text[0].toUpperCase();
    var rest_of_letters = text.substring(1, text.length).toLowerCase();

    return first_letter + rest_of_letters;
}