function validateForm(){
    var message = document.contactform.message;
    var num = /[0-9]/;
    
    if(document.contactform.name.value == " " || document.contactform.name.value == null){
        alert( "Please provide your name!" );
        name.focus();
        return false;
    }
    else ifdocument.contactform.name.length > 25){
        alert( "Name cannot be more than 25 characters!" );
        name.focus();
        return false;
    }
    else if(document.contactform.name.value.match(num)){
        alert( "Name cannot have numbers!" );
        name.focus();
        return false;
    }
    
    var  atposition = document.contactform.email.indexOf("@");  
    var dotposition= document.contactform.email.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
    {  
        alert("Please enter a valid e-mail address");  
        emailID.focus();
        return false;  
    }  
    
    if(document.contactform.email.value == " " || document.contactform.email.value == null){
        alert( "Please enter a valid email address!" );
        name.focus();
        return false;    
    }
    return true;
}