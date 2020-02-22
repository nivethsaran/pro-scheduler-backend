use db;

show tables;

desc onlineprofile;

desc reminder;

alter table user add designation varchar(20);

insert into user values('VuoJX2sV0jf5cX2NsnditcbilRy1','Niveth','Saran','nivethsaran@gmail.com','7339065577','nil','nil','Assosiate Professor');

select * from onlineprofile;	

desc reminder;

ALTER TABLE reminder ADD primary key(title);

select * from reminder;

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

