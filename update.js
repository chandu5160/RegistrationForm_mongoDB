function print2() {

    var data2=JSON.parse(window.localStorage.getItem('name'));
            
           
           //console.log(data2[0].username);
           $('#uid').val(data2.username);
           $('#fnam').val(data2.firstname);
           $('#lnam').val(data2.lname);
           $('#email').val(data2.email);
           $('#psw').val(data2.psw);
           $('#rpsw').val(data2.psw);
           $('#dob').val(data2.date);
          
           var x=data2.gender;  
           if(x=="male")
           {
               document.getElementById("g1").checked=true;
               //$('#g1').prop("checked") == true;
           }
           else{
            document.getElementById("g2").checked=true;
            //$('#g2').prop("checked") == true;
           }
           $('#add').val(data2.address); 
        
        
     
    document.getElementById("uid").disabled=true;
}
function update(){
    var data = {};
    var x = document.getElementById("g1").checked;
    data.username = $('#uid').val();
    data.firstname = $('#fnam').val();
    data.lname = $('#lnam').val();

    data.email = $('#email').val();
    data.psw = $('#psw').val();
    data.date = $('#dob').val();
    if (x == true) {
        data.gender = $('#g1').val();
    }
    else {
        data.gender = $('#g2').val();
    }
    data.address = $('#add').val();

    $.ajax({
        type: "POST",
        url: "/updatedata",
        data: data,
        success: function (res) {
            console.log(res);
        }
    
    })
    window.location.replace('./LOGIN.html');
}


