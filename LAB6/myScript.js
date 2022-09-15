

function blurFunction(event)
{
    var passwd = document.getElementById("serverpasswd").value;
    var confirm_passwd = document.getElementById("confirmpasswd").value;
    if(passwd != confirm_passwd){
        document.getElementById("error_confirm_passwd").innerHTML = 'Not matching';
    }
    else{
        document.getElementById("error_confirm_passwd").innerHTML = '';
    }
}

function validate(event){
    
    var servername = document.getElementById("serveruname").value;
    let regExp = /[A-Z]/;
    let regExp1=/[0-9]/;
    let isMatch = regExp.test(servername);
    let isdigit =regExp1.test(servername);
    if(!isMatch || !isdigit){
        document.getElementById("error_serverusername").innerHTML = 'Invalid Username';
    }
    else{
        document.getElementById("error_serverusername").innerHTML = "";
    }

    
}

function showMessage(event){
    var a=document.getElementById("managername").value;
    var b=document.getElementById("email").value;
    var c=document.getElementById("serveruname").value;
    var d=document.getElementById("teamlead").value;
    alert("Manager Name: "+a+"\n"+"Email: "+b+"\n"+"Username: "+c+"\n"+"Team Lead: "+d);
}

function myFunction(){
    var element = document.body;
   element.classList.toggle("dark-mode");
}