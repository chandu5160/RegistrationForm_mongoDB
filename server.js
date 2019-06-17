


/******* registration script ********/
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongojs = require('mongojs');
var db = mongojs("chandu", ["registration"]);
app.use('/', express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/savedata', function (req, res) {
    
    db.registration.findOne({ "username": req.body.username }, function (err, result) {
        if (err) throw err;
       
        if (result && result.username==req.body.username) {
                res.json("already userid exist");
        } else {
            db.registration.insert(req.body, function (err, doc) {
         
                res.json("Successfully");
            })
        }
        
    });
    
    //console.log(req.body)
})




/******* login server script ********/
app.get('/getdata', function (req, res) {
    // console.log("////////////////////////",req);
    db.registration.findOne({ "username": req.query.uid }, function (err, result) {
        if (err) throw err;
        //console.log(result);
        //res.json(result);
        if (result) {
            if (req.query.psw5 == result.psw) {
                res.json("Login Success");
            }
            else {
                res.json("Invalid password");
            }
        }
        else {
            res.json("Invalid User Id");
        }
    });
});


/******* print server script ********/
app.get('/printdata', function (req, res) {
    // console.log("////////////////////////",req);
    db.registration.findOne({ "username": req.query.uid }, function (err, result) {
        if (err) throw err;
        console.log(result);
        //res.json(result);
        if (result) {
            if (req.query.psw5 == result.psw) {
                res.json(result);
            }
            else {
                res.json("Invalid password");
            }
        }
        else {
            res.json("Invalid User Id");
        }
    });
});

app.post('/updatedata', function (req, res) {
 // console.log("1111",req.body)
  
    db.registration.update( {"username":req.body.username}, req.body, function (err, doc) {
       // alert("hii");
      // console.log("req.body", req.body)
       //  console.log("updated");
        res.json(doc);
    });
});






/**********delete ***************/

    app.post('/deletdata',function(req,res){
        console.log("delete entered");
         db.registration.remove({"username":req.body.username}, function(err, result) {
           
            
                res.json("removed");
             
           
           });
         });


         app.listen(8080);
