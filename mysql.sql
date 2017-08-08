/*create the mysql database*/
create database pickup_db


/*create the users table*/
create table pickup_db.users(  
	id integer(10) auto_increment primary key NOT NUll, 
	firstName varchar(30) NOT NULL, 
	lastName varchar(30) not null, 
	email varchar(30) not null, 
	username varchar(30) not null UNIQUE, 
	password varchar(30) not null, 
	imageUrl varchar(300), 
	numWins integer(10), 
	numLosses integer(10)
	);


ALTER TABLE users ADD UNIQUE (username)

/*insert default values into table users*/
insert into pickup_db.users (firstName, lastName, email, username, password, imageUrl, numWins, numLosses) 
	values ("Greg", "Mariuzza", "gmariuzza123@gmail.com", "gmariuzza", "test", "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg", 0 ,0), 
	("John", "Doe", "johndoe@gmail.com", "jdoe", "tes1t", "https://c1.staticflickr.com/2/1520/24330829813_944c817720_b.jpg", 1 ,0), 
	("Jane", "Doe", "janedoe@gmail.com", "janedoe", "test2", "http://www.theamazingpics.com/wp-content/uploads/2014/03/A-Breathtakingly-Beautiful-Picture-of-a-Winter-Morning-In-Finland.jpg", 1 ,1), 
	("Bob", "Johnson", "bjohnson@yahoo.com", "bjohnson", "test3", "https://s-media-cache-ak0.pinimg.com/736x/1c/be/e5/1cbee5d7b3a8254c14b7476e70a2a4ac--computer-laptop-beach-background.jpg", 2 ,1), 
	("Kelly", "Martin", "kellymartin1@yahoo.com", "username2", "test4", "http://www.graphics99.com/wp-content/uploads/2012/12/Glorious-Evening-Picture.jpg", 2 ,20), 
	("Lexy", "Williams", "williamsl7@hotmail.com", "lwilliams7", "test5", "http://www.graphics99.com/wp-content/uploads/2012/12/Glorious-Evening-Picture.jpg", 4 ,0), 
	("Michael", "Morgan", "mmorgan@gmail.com", "morganm", "test6", "http://www.graphics99.com/wp-content/uploads/2012/12/Glorious-Evening-Picture.jpg", 40 ,100), 
	("Kevin", "Durant", "kdurant@gmail.com", "durant", "test7", "http://www.graphics99.com/wp-content/uploads/2012/12/Glorious-Evening-Picture.jpg", 0 ,200), 
	("Josh", "Doctson", "redskins@gmail.com", "redskins1", "test8", "http://www.graphics99.com/wp-content/uploads/2012/12/Glorious-Evening-Picture.jpg", 1000 ,0), 
	("Kim", "Clark", "kclark@yahoo.com", "kim123", "test9", "http://www.graphics99.com/wp-content/uploads/2012/12/Glorious-Evening-Picture.jpg", 0 ,0), 
	("Larry", "Hoover", "bigmeech@gmail.com", "lhoover21", "test10", "http://www.graphics99.com/wp-content/uploads/2012/12/Glorious-Evening-Picture.jpg", 5 ,5);


/*create the games table in pickup_db*/
create table games(  
	location varchar(50), 
	sport varchar(30), 
	active boolean, 
	maxNumPlayers integer(30), 
	start datetime, 
	end datetime );


/*insert default values into table games*/
insert into games (location, sport, active, maxNumPlayers, start, end) 
	values ("zilker park", "ultimate frisbee", false, 22, "2017-08-08 16:000", null), 
	("zilker park", "soccer", false, 13, "2017-08-08 18:000", null), 
	("gregory gym", "basketball", false, 10, null, null), 
	("pease park", "volleyball", false, 6, "2017-08-14 7:000",null), 
	("riverside disk golf", "disk golf", false, 4, "2017-09-08 14:000",null), 
	("pease park", "soccer", false, 6, "2018-08-08 18:000", null), 
	("zilker park", "soccer", false, 12, "2017-11-08 18:000", null), 
	("gregory gym", "volleyball", false, 8, "2017-12-12 14:000", null), 
	("zilker park", "volleyball", false, 8, "2017-09-12 12:030", null), 
	("riverside disk golf", "disk golf", false, 4, "2017-11-08 18:000", null);


