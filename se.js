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




app.get('/', function(req, res) {
    console.log("Server Is Working!");
  connection.query('SELECT * from checkdummy', function (error, results, fields) {
        if (error) throw error;
        else
        // console.log(table);
        // res.json(results);
        // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        // res.send(table);
        res.json(results);
        // res.send(table)

    });
    //data = { uname: "Coimbatore Traffic Department", password: "Password" };
    //res.json(data);
});



app.get('/getsocial/uid/:uid',function(req,res){
  var uid=req.params.uid;
  // console.log(sd);
  connection.query("select resumepath from user where uid=?",[uid],function(err,resu,field){
      if (err) throw err;
      else{
          console.log(resu);
          res.json(resu);
      }
  })
});



app.get('/getReminder/startdate/:sd/enddate/:ed/uid/:uid',function(req,res){
    var sd=req.params.sd;
    var ed=req.params.ed;
    var uid=req.params.uid;
    console.log(sd);
    connection.query("select * from reminder where uid=? AND r_date between ? AND 	?",[uid,sd,ed],function(err,resu,field){
        if (err) throw err;
        else{
            console.log(resu);
            res.json(resu);
        }
    })
  });
app.get('/getprofiledata/uid/:uid',function(req,res){
    var uid=req.params.uid;
    console.log(sd);
    connection.query("select * from onlineprofile where uid=?",[uid],function(err,resu,field){
        if (err) throw err;
        else{
            console.log(resu);
            res.json(resu);
        }
    })
  });


app.get('/insertReminder/date/:date/time/:time/uid/:uid/note/:note/title/:title/notify/:noti/pri/:pri',function(req,res){
  var date=req.params.date;
  var time=req.params.ed;
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
  
  connection.query('INSERT INTO reminder SET ?', post, function (error, results, fields) {
  if (error) throw error;
  else
  {
      res.send("success");
  }
  // Neat!
});


  res.json(req.params);
});

app.get('insertuser/uid/:uid/plat/:plat/link/:link',function(req,res)
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
connection.query('insert into onlineprofile set ?',p,function(err,result,fie)
{
if (err) throw err;
else
{
    res.send("success");
}
});
});




app.get('profile/uid/:uid/fname/:fname/rname/:rname/email/:email/mobile/:mobile/avatarurl/:avatarurl/rpath/:rpath',function(req,res)
{
    var uid=req.params.uid;
    var fname=req.params.fname;
    var rname=req.params.rname;
    var email=req.params.email;
    var mobile=req.params.mobile;
    var avatarurl=req.params.avatarurl;
    var rpath=req.params.rpath;
    var s={
        uid:uid,
        fname:fname,
        rname:rname,
        email:email,
        mobile:mobile,
        avatarurl:avatarurl,
        rpath:rpath
    }
    connection.query('insert into user set ?',s,function(err,results,field)
    {
if (err) throw err;
else{
    res.send("success");
}
    });
});

//Starting Server
app.listen(process.env.PORT || 8081); {
    console.log("Listening to 8081");
}