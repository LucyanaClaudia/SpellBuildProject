function letterOnly(event) 
    {
        var charCode = event.keyCode;
        return ((charCode >= 65 && charCode <= 90) || charCode == 8);
    };

function buySpellbreak()
{
    
    var fullname = document.getElementById('form-fullname').value;
    var email = document.getElementById('form-email').value;
    var username = document.getElementById('form-username').value;
    let password = document.getElementById('form-password').value;
    let rePassword = document.getElementById('form-rePassword').value;
    var male = document.getElementById('male').value;
    var female = document.getElementById('female').value;
    var quantity = document.getElementById('form-quantity').value;
    var address = document.getElementById('form-address').value;
    var aggreement = document.getElementById('form-aggreement').value;

    if (fullname.value == "")                                  
    { 
        alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 

    if (fullname.value == letterOnly)
    {
        alert("Fullname must consist of letters only."); 
        name.focus(); 
        return false; 
    }
   
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (!email.value.includes("@") && !email.value.includes("."))
    {
        window.alert("Email must contain '@' and '.'"); 
        email.focus(); 
        return false; 
    }

    var str = email;
    var x = str.indexof("@.");
    if (x != -1)
    {
        window.alert(" ‘@’ and ‘.’ cannot be side by side. E.g: John@gmail.com"); 
        email.focus(); 
        return false;
    }

    if (username.value == ""){
        window.alert("Please enter your username."); 
        username.focus(); 
        return false; 
    }

    if (username.value.length <= 7){
        window.alert("Username length must be greater than 6 characters."); 
        username.focus(); 
        return false; 
    }

    if (!username.value.includes() && !username.value.includes(" ")){
        window.alert("Please enter your username without space."); 
        username.focus(); 
        return false; 
    }

    if (password.value == "")                        
    { 
        window.alert("Please enter your password."); 
        password.focus(); 
        return false; 
    }

    if (password.value.length <= 9)
    {
        window.alert("Password length must be greater than 8 characters"); 
        password.focus(); 
        return false; 
    }

    

    if (password)
    {
        window.alert("Password must be alphanumeric (contain letter and digit)."); 
        password.focus(); 
        return false; 
    }

    if (rePassword.value != password.value)
    {
        window.alert("Password must be the same.");
        rePassword.focus(); 
        return false; 
    }

    if (male.checked == false && female.checked == false )
    {
        window.alert("Please choose your gender."); 
        return false; 
    }

    if (quantity.value <= 0 && quantity.value == "") 
    {
        window.alert("Please input your quantity."); 
        quantity.focus(); 
        return false; 
    }

    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        address.focus(); 
        return false; 
    } 

    if (address.value.endsWith("Street"))
    {
        window.alert("Must ends with ‘ Street’ "); 
        address.focus(); 
        return false; 
    }

    if(!aggreement.checked)
    {
        window.alert("Terms and conditions must be agreed.");
        aggreement.focus();
        return;
    }
}