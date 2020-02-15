use db;

show tables;

desc onlineprofile;

desc user;

alter table user add designation varchar(20);

insert into user values('VuoJX2sV0jf5cX2NsnditcbilRy1','Niveth','Saran','nivethsaran@gmail.com','7339065577','nil','nil','Assosiate Professor');

select * from onlineprofile;	

select* from user;
delete from onlineprofile where uid='VuoJX2sV0jf5cX2NsnditcbilRy1';
delete from user where uid='VuoJX2sV0jf5cX2NsnditcbilRy1';