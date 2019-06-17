

//import { callbackify } from "util";

/************ LOGIN SCRIPT ************/

 
function login1() {
    var data = {};
    data.uid = $('#uid1').val();
    data.psw5 = $('#psw1').val();

    $.ajax({
        url: '/getdata',
        type: 'Get',
        data: data,
        dataType: "json",

        success: function (data1) {
            console.log('success', data1);
            document.getElementById("span2").innerHTML = data1;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error', errorThrown);

        }
    });
}


/************ print SCRIPT ************/

var data2;
function print1(a,b) {
    $("#div5").hide();
    $("#frm5").show();


     var data = {};
     data.uid=a;
     data.psw5 = b;
    var htmldata = '';

    $.ajax({
        url: '/printdata',
        type: 'Get',
        data: data,
        dataType: "json",

        success: function (data1) {
           // console.log('success', data1);
          
            data2 = data1;
            if(data2=="Invalid User Id"){
                $('#span1').html("Invalid User Id");
            }
            else if(data2=="Invalid password"){
                $('#span1').html("Invalid password");
            }
            else{
                var value=data2;
            htmldata += '<html><table>'
            htmldata += '<tr><td>userId</td><td>first Name</td><td>last Name</td><td>email</td><td>psw</td><td>date</td><td>gender</td><td>adderss</td><td>edit&update</td></tr>'
           // htmldata +='<tr><td>'+data2.username+'</td></tr>'
        //    $.each(data2,function(i,value){
        //        // var ht='<a href="./update.html?username="+value.username+"&password="+value.psw>'+'<input type="button"  value="edit"></input></a>'
                htmldata += '<tr><td>' + value.username + '</td><td>' + value.firstname + '</td><td>' + value.lname + '</td><td>' + value.email + '</td><td>' + value.psw + '</td><td>' + value.date + '</td><td>' + value.gender + '</td><td>' + value.address + '</td><td><input type="button" onclick="edit5()" value="edit"><input type="submit" onclick="delete5()" value="delete"></td>'
             
        //    });
            htmldata += '</tr></table></html>'
            $('#span1').html(htmldata);
        }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error', errorThrown);

        }
    });
}

/************ edit SCRIPT ************/
function edit5() {

   window.localStorage.setItem("name", JSON.stringify(data2));
   //console.log(uid,ufname);
  // $("#userid1").val(d);
 window.location.href="./update.html";

}

/************ DELETE SCRIPT ************/

 
function delete5() {
    var data = {};
    data.username = data2.username;
    data.psw5 =data2.psw;
    

    $.ajax({
        url: '/deletdata',
        type: 'POST',
        data: data,
        dataType: "json",

        success: function (data1) {
           //console.log('success', data1);
           if(data1=="removed"){
           document.write("removed");
           }           
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error', errorThrown);

        }
    });
}


/************ REGISTERATION SCRIPT ************/


function uids() {
    var x = document.getElementById("uid").value;
    if (x == "") {
        uid.focus();
        document.getElementById("p1").innerHTML = "please enter uid";
        $('#p1').popover('toggle')

    }


    else {
        document.getElementById("p1").innerHTML = "";
    }
}

function firstname() {
    var alphaExp = /^[a-zA-Z ]*$/;
    var x = document.getElementById("fnam");
    if (x.value == "") {
        fnam.focus();
        document.getElementById("p2").innerHTML = "please enter first name";
    }

    else if (!(alphaExp.test(x.value))) {
        fnam.focus();
        document.getElementById("p2").innerHTML = "please enter first name only alphabets";

    }
    else {
        document.getElementById("p2").innerHTML = "";
    }
}
function lnams() {
    var alphaExp = /^[a-zA-Z ]*$/;
    var x = document.getElementById("lnam").value;
    if (x == "") {
        lnam.focus();
        document.getElementById("p3").innerHTML = "please enter last name";
    }
    else if (!(alphaExp.test(x))) {
        lnam.focus();
        document.getElementById("p3").innerHTML = "please enter first name only alphabets";
    }
    else {
        document.getElementById("p3").innerHTML = "";
    }
}
function emails() {
    var mailformat = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    var x = document.getElementById("email").value;
    if (x == "") {
        email.focus();
        document.getElementById("p4").innerHTML = "please enter email";
    }
    else if (!(mailformat.test(x))) {
        email.focus();
        document.getElementById("p4").innerHTML = "please enter  perfect email";
    }
    else {
        document.getElementById("p4").innerHTML = "";
    }
}
function psws() {
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    var x = document.getElementById("psw").value;
    if (x == "") {
        psw.focus();
        document.getElementById("p5").innerHTML = "please enter password";
    }
    else if (!x.match(pattern)) {
        psw.focus();
        document.getElementById("p5").innerHTML = "please enter password 8 characters includes uppercase special character and number";
    }
    else {
        document.getElementById("p5").innerHTML = "";
    }
}
function psw1() {
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    var x = document.getElementById("rpsw").value;
    var y = document.getElementById("psw").value;
    if (x == "") {
        psw1.focus();
        document.getElementById("p6").innerHTML = "please enter re password";
    }
    else if (!x.match(pattern)) {
        psw1.focus();
        document.getElementById("p6").innerHTML = "please enter password 8 characters includes uppercase special character and number";
    }
    else if (x != y) {
        psw1.focus();
        document.getElementById("p6").innerHTML = "password not matches";
    }
    else {
        document.getElementById("p6").innerHTML = "";
    }
}
function dobs() {
    var x = document.getElementById("dob").value;
    if (x == "") {
        dob.focus();
        document.getElementById("p7").innerHTML = "please enter dob";
    }
    else {
        document.getElementById("p7").innerHTML = "";
    }
}
function gend() {
    var x = document.getElementById("g1");

    var y = document.getElementById("g2");
    if ((x.checked == false) && (y.checked == false)) {
        g.focus();
        document.getElementById("p8").innerHTML = "please select gender";
    }
    else {
        document.getElementById("p8").innerHTML = "";
    }
}

function address() {
    var x = document.getElementById("add").value;
    if (x == "") {
        add.focus();
        document.getElementById("p9").innerHTML = "please enter address";
    }
    else {
        document.getElementById("p9").innerHTML = "";
    }
}
function save() {
    uids();
    firstname();
    lnams();
    emails();
    psws();
    psw1();
    dobs();
    gend();
    address(); 

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
        url: "/savedata",
        data: data,
        success: function (res) {
       $('#rr').val(res);
        }
    
    })




}
//<a href="./update.html?username:'+data2[0].username+'&password='+data2[0].psw;">
//window.location.href='./update.html?username:'+data2[0].username+'&password='+data2[0].psw;

