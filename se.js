var express=require('express');

var app = express();
var mysql = require('mysql');


//Establishing Connection
var connection = mysql.createConnection({
    host: 'database-2.cg9ufdrbrtne.us-east-1.rds.amazonaws.com',
    user: 'arnab',
    password: 'arnab135',
    database: 'db'

});



//Basic Check
app.get('/', function(req, res) {
    console.log("Server Is Working!");
  connection.query('SELECT * from checkdummy', function (err, results, fields) {
        if (err)
        {
        	res.send("Error");
        }
        else
        res.json(results);
    });
});


//Get Social Links
app.get('/getsocial/uid/:uid',function(req,res){
  var uid=req.params.uid;
  connection.query("select * from user where uid=?",[uid],function(err,resu,field){
      if (err)
        {
        	res.send("Error");
        }
      else{
          console.log(resu);
          res.json(resu);
      }
  })
});


//Get Reminder
app.get('/getReminderBn/startdate/:sd/enddate/:ed/uid/:uid',function(req,res){
    var sd=req.params.sd;
    var ed=req.params.ed;
    var uid=req.params.uid;
    connection.query("select * from reminder where uid=? AND date between ? AND ?",[uid,sd,ed],function(err,resu,field){
        if (err)
        {
        	console.log(sd);
        	res.json(err);
        }
        else{
            console.log(resu);
            res.json(resu);
        }
    });
  });





//Get Reminder for Check
app.get('/getReminderCheck/rid/:rid', function (req, res) {
    var sd = req.params.sd;
    var rid=req.params.rid;
    connection.query("select * from reminder where rid=?", [rid], function (err, resu, field) {
        if (err) {
            console.log(sd);
            res.json(err);
        }
        else {
            console.log(resu);
            res.json(resu);
        }
    });
});


//Get Reminder All
app.get('/getReminderall/uid/:uid', function (req, res) {

    var uid = req.params.uid;
    connection.query("select * from reminder where uid=?", [uid], function (err, resu, field) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(resu);
            res.json(resu);
        }
    });
});

app.get('/getVersion', function (req, res) {
    res.json({version:"1.0"})
});

//Get Reminder Today
app.get('/getRemindertoday/uid/:uid', function (req, res) {
    var dateobj = new Date();
    var date = dateobj.getFullYear() + '-' + (dateobj.getUTCMonth()+1) + '-' + dateobj.getDate();
    var uid = req.params.uid;
    console.log(date)
    connection.query("select * from reminder where uid=? AND date=?", [uid,date], function (err, resu, field) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(resu);
            res.json(resu);
        }
    });
});



//Get Profile Data
app.get('/getprofiledata/uid/:uid',function(req,res){
    var uid=req.params.uid;
    connection.query("select * from onlineprofile where uid=?",[uid],function(err,resu,field){
        if (err)
        {
        	res.send("Error");
        }
        else{
            console.log(resu);
            res.json(resu);
        }
    })
  });



//Insert reminder
app.get('/insertReminder/date/:date/time/:time/uid/:uid/note/:note/title/:title/notify/:noti/pri/:pri/rid/:rid',function(req,res){
  var date=req.params.date;
  var time=req.params.time;
  var uid=req.params.uid;
  var note= req.params.note;
  var title=req.params.title;
  var noti=req.params.noti;
  var pri=req.params.pri;
  var rid=req.params.rid;
  

  var list=[uid,time,date,note,title,noti,pri,rid]
  
  connection.query('INSERT INTO reminder values(?,?,?,?,?,?,?,?)', list, function (err, results, fields) {
  if (err)
        {
        	res.send("Error");
        }
  else
  {
      res.send("Success");
  }
  // Neat!
}); 
});


//Delete Reminder
app.get('/deleteReminder/uid/:uid/rid/:rid', function (req, res) {
   
    var uid = req.params.uid;
    var rid = req.params.rid;
    var list = [uid, rid];

    connection.query('DELETE FROM reminder WHERE uid=? and rid=?', list, function (err, results, fields) {
        if (err) {
            res.send("Error");
        }
        else {
            res.send("Success");
        }
        // Neat!
    });
});



//UpdateReminder
//Insert reminder
app.get('/updateReminder/date/:date/time/:time/uid/:uid/note/:note/title/:title/notify/:noti/pri/:pri/rid/:rid', function (req, res) {
    var date = req.params.date;
    var time = req.params.time;
    var uid = req.params.uid;
    var note = req.params.note;
    var title = req.params.title;
    var noti = req.params.noti;
    var pri = req.params.pri;
    var rid = req.params.rid;

    var list = [time, date, note, noti, pri, title, uid, rid]

    connection.query('UPDATE reminder set time=?,date=?,note=?,noti=?,pri=?,title=? where uid=? and rid=?', list, function (err, results, fields) {
        if (err) {
            res.send("Error");
        }
        else {
            res.send("Success");
        }
        // Neat!
    });
});

//Insert Social Links
app.get('/insertuser/uid/:uid/plat/:plat/link/:link',function(req,res)
{
    var uid=req.params.uid;
    var plat=req.params.plat;
    var link=req.params.link;

var p=
{
uid:uid,
plat:plat,
link:link
}
list=[uid,plat,link]
connection.query('insert into onlineprofile values(?,?,?)',list,function(err,result,fie)
{
if (err)
        {
        	res.send("Error");
        }
else
{
    res.send("Success");
}
});
});


//http://localhost:8081/profile/?uid=hello&fname=hello&rname=hello&email=niveth@gmail.com&mobile=73390&avatarurl=https://wow/wow/&rpath=www.comcom.com/wowowow&design=officer
//Add Profile
app.get('/profile',function(req,res)
{
    var uid=req.query.uid;
    var fname = req.query.fname;
    var rname = req.query.rname;
    var email = req.query.email;
    var mobile = req.query.mobile;
    var avatarurl = req.query.avatarurl;
    var rpath = req.query.rpath;
    var design = req.query.design;
    var s={
        uid:uid,
        fname:fname,
        rname:rname,
        email:email,
        mobile:mobile,
        avatarurl:avatarurl,
        rpath:rpath
    }
    list=[uid,fname,rname,email,mobile,avatarurl,rpath,design];
    console.log(list)
    connection.query('insert into user values(?,?,?,?,?,?,?,?)',list,function(err,results,field)
    {
if (err)
        {
        	res.send("Error");
        }		
else{
    res.send("Success");
}
    });
});




//Starting Server
app.listen(process.env.PORT || 8080); {
    console.log("Listening to 8081");
}
