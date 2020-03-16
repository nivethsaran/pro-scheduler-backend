show databases;

create database db;

use db;


show tables;

select*from WARNING;

desc onlineprofile;

desc events;

create table checkdummy 
(
id varchar(10),
name varchar(20)
);

create table user(
uid varchar(200) primary key,
fname varchar(200),
rname varchar(200),
email varchar(200),
mobile varchar(200),
avatarurl varchar(200),
rpath varchar(200),
design varchar(200)
);
 
create table reminder(
 uid varchar(100),
 time time,
 date date,
 note varchar(100),
 title varchar(100),
 noti varchar(100),
 pri varchar(100),
 rid varchar(100) primary key,
 foreign key (uid) references user(uid)
 );
 
create table onlineprofile
(uid varchar(100),
platformname varchar(100),
link varchar(100));


create table event
(eventid varchar(100) primary key,
eventname varchar(100),
eventtime time,
eventdate date);

create table history	
(uid varchar(100),
timestamp varchar(100));

 insert into event values('1','Name','23:00:00','2020-03-16');
  insert into event values('2','CIR','23:00:00','2020-03-10');
   insert into event values('3','Holiday','23:00:00','2020-04-09');
    insert into event values('4','Eventide','23:00:00','2020-03-16');
     insert into event values('5','Celeb','23:00:00','2020-03-16');
      insert into event values('6','TheDay','23:00:00','2020-03-16');
 
 select* from event;
 
 select* from user;
 
 select* from history;
 
 insert into checkdummy values("hello","hello");

alter table user add designation varchar(20);

insert into user values('VuoJX2sV0jf5cX2NsnditcbilRy1','Roy','Keane','roykeane@pl.com','9090909090','shorturl.at/cjDT9','shorturl.at/fsEKT','Assosiate Professor');
insert into user values('Q5QViVDMqJTa83HWKkmqUh5LHsA2','P','Abhiram','abhiram@somemail.com','9090909090','shorturl.at/cjDT9','shorturl.at/fsEKT','Assistant Professor');
insert into user values('3djUcqgAXOPv6LRqD8sJBEtsTJw2','M','Vinith','vinith@somemail.com','9090909087','shorturl.at/cjDT9','shorturl.at/fsEKT','Professor');
insert into user values('hJyR5leBS2fH0RFU8jnj9eqx7zm1','Navya','Navya','navya@somemail.com','9090909012','shorturl.at/cjDT9','shorturl.at/fsEKT','Assistant Professor');
insert into user values('u7fwMT1t9eRjWQps2LFn8voDZn53','B','Pavithron','pavi@somemail.com','9090909045','shorturl.at/cjDT9','shorturl.at/fsEKT','Assistant Professor');
insert into user values('3tnP7fGFilOAvZyJTgCNPvZtIE43','Arnab','Datta','arnab@somemail.com','9090909067','shorturl.at/cjDT9','shorturl.at/fsEKT','Assistant Professor');



insert into onlineprofile values('3djUcqgAXOPv6LRqD8sJBEtsTJw2','github','www.github.com');
insert into onlineprofile values('3djUcqgAXOPv6LRqD8sJBEtsTJw2','website','www.wordpress.com');
insert into onlineprofile values('3djUcqgAXOPv6LRqD8sJBEtsTJw2','linkedin','www.linkedin.com');
insert into onlineprofile values('3djUcqgAXOPv6LRqD8sJBEtsTJw2','instagram','www.instagram.com');


insert into onlineprofile values('hJyR5leBS2fH0RFU8jnj9eqx7zm1','github','www.github.com');
insert into onlineprofile values('hJyR5leBS2fH0RFU8jnj9eqx7zm1','website','www.wordpress.com');
insert into onlineprofile values('hJyR5leBS2fH0RFU8jnj9eqx7zm1','linkedin','www.linkedin.com');
insert into onlineprofile values('hJyR5leBS2fH0RFU8jnj9eqx7zm1','instagram','www.instagram.com');


insert into onlineprofile values('u7fwMT1t9eRjWQps2LFn8voDZn53','github','www.github.com');
insert into onlineprofile values('u7fwMT1t9eRjWQps2LFn8voDZn53','website','www.wordpress.com');
insert into onlineprofile values('u7fwMT1t9eRjWQps2LFn8voDZn53','linkedin','www.linkedin.com');
insert into onlineprofile values('u7fwMT1t9eRjWQps2LFn8voDZn53','instagram','www.instagram.com');

insert into onlineprofile values('3tnP7fGFilOAvZyJTgCNPvZtIE43','github','www.github.com');
insert into onlineprofile values('3tnP7fGFilOAvZyJTgCNPvZtIE43','website','www.wordpress.com');
insert into onlineprofile values('3tnP7fGFilOAvZyJTgCNPvZtIE43','linkedin','www.linkedin.com');
insert into onlineprofile values('3tnP7fGFilOAvZyJTgCNPvZtIE43','instagram','www.instagram.com');

insert into onlineprofile values('Q5QViVDMqJTa83HWKkmqUh5LHsA2','github','www.github.com');
insert into onlineprofile values('Q5QViVDMqJTa83HWKkmqUh5LHsA2','website','www.wordpress.com');
insert into onlineprofile values('Q5QViVDMqJTa83HWKkmqUh5LHsA2','linkedin','www.linkedin.com');
insert into onlineprofile values('Q5QViVDMqJTa83HWKkmqUh5LHsA2','instagram','www.instagram.com');
select * from onlineprofile;	

desc reminder;


select * from reminder;

select * from reminder where rid='Q5QViVDMqJTa83HWKkmqUh5LHsA21584284683268';


delete from reminder where not uid='VuoJX2sV0jf5cX2NsnditcbilRy1';


delete from reminder where uid='	';
(select uid,title,r_date from reminder where uid='VuoJX2sV0jf5cX2NsnditcbilRy1' and title='mani' and r_date='2020-02-15');

alter table reminder add column rid varchar(100);

drop table reminder;

Create table events
(event_id varchar(10) primary key,
event_name varchar(100),
event_date date,
event_desc varchar(200));

desc events;


delete from reminder where title="rofl";

SET SQL_SAFE_UPDATES=0;

select * from onlineprofile where uid='VuoJX2sV0jf5cX2NsnditcbilRy1';

select* from user;
delete from onlineprofile where uid='VuoJX2sV0jf5cX2NsnditcbilRy1';
delete from user where uid='VuoJX2sV0jf5cX2NsnditcbilRy1';

delete from reminder where uid='VuoJX2sV0jf5cX2NsnditcbilRy1' and title='SEPrp';

