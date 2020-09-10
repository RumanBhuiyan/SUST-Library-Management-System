# SUST-Library-Management-System <img src="https://image.flaticon.com/icons/svg/926/926358.svg" width="200" height="60"  />

[![Maintenance](https://img.shields.io/badge/ReactJs-16.0-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Maintenance](https://img.shields.io/badge/NodeJs-13.12.0-red.svg)](https://bitbucket.org/lbesson/ansi-colors)
[![Maintenance](https://img.shields.io/badge/Gsap-3.0-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Maintenance](https://img.shields.io/badge/Jquery-3.5.1-red.svg)](https://bitbucket.org/lbesson/ansi-colors)
[![Maintenance](https://img.shields.io/badge/Bootstrap-4.2-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Maintenance](https://img.shields.io/badge/Nodemailer-6.4.1-red.svg)](https://bitbucket.org/lbesson/ansi-colors)
[![Maintenance](https://img.shields.io/badge/Auth0--green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Maintenance](https://img.shields.io/badge/BcryptJs-5.0-red.svg)](https://bitbucket.org/lbesson/ansi-colors)


<img src="./Front-End/src/images/HomeTopPNG.PNG" >

## This full-stack Web Application built on `React js` as a front-end library & `Node.js` as Backend

## Features :

### 1. Admin Can Add book ,remove book,change ownership of the book & can send mail to the any user to return the book
### 2. Students Can Borrow book from the library for maximum 7 days after successfull login
### 3. Students will have to sign up first using their registration number and other neccessary informations  
### 4. Students & Admin both can login using Their google and facebook account too!!
### 5. This application has lots of animations to display the components of the application
### 6. This Website is fully Responsive which is pefect in all kind of mobile devices you can check its responsiveness
###  here [Mobile Friendly Test](https://search.google.com/test/mobile-friendly)

## How to use it : 
## Server NodeJs App Setup:
### 1.  Firstly download the project and unzip it
### 2. Open the project under Your fabourite editor like [Vs Code](https://code.visualstudio.com/) or [Atom](https://atom.io/)
### 3. Go inside `Back-End` Directory and Open Terminal Here and run the command `npm install`
### this will automatically download all of the packages mentioned in `package.json` file required for back-end
### 4. As I have used [MongoDB Atlas](https://cloud.mongodb.com/) for hosting my database so you'll havae to create an account there
### and Create a cluster and make a database Replae some information in `routers.js` file 
### `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ejbh7.mongodb.net/${process.env.DB_BOOKSDB}?retryWrites=true&w=majority`
### 5.Replace Variables like  
### -  `DB_USERNAME` by your Username in mongodb atlas
### -  ` DB_PASSWORD` by your Password in mongodb atlas
### -  `DB_BOOKSDB ` by your Database name in mongodb atlas

### 6. Finally Go to teminal and run the command `node server.js` or `nodemon server.js` the server will run in `PORT:4000` 
### to visualize your database go to browser and type `http://localhost:4000/data/` and hit enter now you will see a message in the console
### `Connected with database successfully` & data in JSON form in the browser that means now you can read and write data to mongodb atlas through your application


## Client React App Setup:

### 1. Go inside `Front-End` Directory and Open Terminal Here and run the command `npm install`
### this will automatically download all of the packages mentioned in `package.json` file
### 2. Then in terminal run the command `npm start`
### this will run your front-end React app in `http://localhost:3000/` automaically 
### Open your Fabourite Browser and type `http://localhost:3000/` then you will see the interface like Above
