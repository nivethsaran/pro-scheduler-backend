var express=require('express');

var app = express();
var mysql = require('mysql');


//Establishing Connection
var connection = mysql.createConnection({
    host: 'database-2.cg9ufdrbrtne.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    database: 'db'

});



//Basic Check
app.get('/', function(req, res) {
    console.log("Server Is Working!");
  connection.query('SELECT * from checkdummy', function (err, results, fields) {
        if (err)
        {
        	res.json({'err':'You Screwed Up'});
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
        	res.json({'err':'You Screwed Up'});
        }
      else{
          console.log(resu);
          res.json(resu);
      }
  })
});


//Get Reminder
app.get('/getReminder/startdate/:sd/enddate/:ed/uid/:uid',function(req,res){
    var sd=req.params.sd;
    var ed=req.params.ed;
    var uid=req.params.uid;
    console.log(sd);
    connection.query("select * from reminder where uid=? AND r_date between ? AND 	?",[uid,sd,ed],function(err,resu,field){
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


//Get Profile Data
app.get('/getprofiledata/uid/:uid',function(req,res){
    var uid=req.params.uid;
    connection.query("select * from onlineprofile where uid=?",[uid],function(err,resu,field){
        if (err)
        {
        	res.json({'err':'You Screwed Up'});
        }
        else{
            console.log(resu);
            res.json(resu);
        }
    })
  });



//Insert reminder
app.get('/insertReminder/date/:date/time/:time/uid/:uid/note/:note/title/:title/notify/:noti/pri/:pri',function(req,res){
  var date=req.params.date;
  var time=req.params.time;
  var uid=req.params.uid;
  var note= req.params.note;
  var title=req.params.title;
  var noti=req.params.noti;
  var pri=req.params.pri;
  
  var post={
    uid:uid,
    r_time:time,
    r_date:date,
    note:note,
    title:title,
    notification:noti,
    priority:pri
  }

  var list=[uid,r_time,r_date,note,title,noti,pri]
  
  connection.query('INSERT INTO reminder values(?,?,?,?,?,?,?)', list, function (err, results, fields) {
  if (err)
        {
        	res.json({'err':'You Screwed Up'});
        }
  else
  {
      res.send("success");
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
        	res.json({'err':'You Screwed Up'});
        }
else
{
    res.send("success");
}
});
});



//Add Profile
app.get('/profile/uid/:uid/fname/:fname/rname/:rname/email/:email/mobile/:mobile/avatarurl/:avatarurl/rpath/:rpath/design/:design',function(req,res)
{
    var uid=req.params.uid;
    var fname=req.params.fname;
    var rname=req.params.rname;
    var email=req.params.email;
    var mobile=req.params.mobile;
    var avatarurl=req.params.avatarurl;
    var rpath=req.params.rpath;
    var design=req.params.design;
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
    connection.query('insert into user values(?,?,?,?,?,?,?,?)',list,function(err,results,field)
    {
if (err)
        {
        	res.json({'err':'You Screwed Up'});
        }		
else{
    res.send("success");
}
    });
});

//Starting Server
app.listen(process.env.PORT || 8081); {
    console.log("Listening to 8081");
}