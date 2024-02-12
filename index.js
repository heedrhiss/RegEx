document.getElementById('name').addEventListener('blur',regexName);
document.getElementById('tel').addEventListener('blur',regexTel);
document.getElementById('mail').addEventListener('blur',regexMail);
document.getElementById('zip').addEventListener('blur',regexZip);


function regexName(){
    const name = document.getElementById('name')
    const regex = /[a-z]{3,15}/i;

    if(!regex.test(name.value)){
        name.style.borderColor = "red";
        addMessage("Enter only alphabet with Lenght range of 3-15", 'text-red-500', 'nameMess')
    
    }else{
        name.style.borderColor = "green";
        addMessage("Name and length is good", 'text-green-500', 'nameMess')
        
    }
}

function regexTel(){
    const tel = document.getElementById('tel')
    const regex = /[\d-+]{10,14}/;

    if(!regex.test(tel.value)){
    tel.style.borderColor = "red";
    addMessage("Enter only numbers with Lenght range of 10-14", 'text-red-500', 'telMess')
    

    }
    // else if(tel.value == "")
    // {  
    //     addMessage("", 'text-red-500', 'telMess')
    //     clearfield('telMess')
    // }
    else
    {
        tel.style.borderColor = "green";
        addMessage("Number and length is good", 'text-green-500', 'telMess')
    }   
}

function regexMail(){
const mail = document.getElementById('mail')
const regex = /^([a-zA-Z0-9\.\-\_]+)@([a-zA-Z0-9]+)\.([a-zA-Z0-9]{2,5})$/;
   if(!regex.test(mail.value)){
    mail.style.borderColor = "red";
    addMessage("Enter a valid email address", 'text-red-500', 'mailMess')

}else{
    mail.style.borderColor = "green";
    addMessage("Email address is valid", 'text-green-500', 'mailMess')
}
}

function regexZip(){
    const zip = document.getElementById('zip')
    const regex = /^([0-9]{3})(-?[0-9]{3})$/;

    if(!regex.test(zip.value)){
        zip.style.borderColor = "red";
        addMessage("Enter a valid Zip code", 'text-red-500', 'zipMess')
    
    }else{
        zip.style.borderColor = "green";
        addMessage("Zip code is valid", 'text-green-500', 'zipMess')    
    }
}

function addMessage(message, color, mess){
let location = document.getElementById(mess)
location.innerText = message
location.classList.add(color)
}

function clearfield(){
    let location = document.getElementById('telMess')
    location.value= ""
}