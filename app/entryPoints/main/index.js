require('./styles/main');
require('reactApp');

const usersApi = require('Api/users');
const twitter = require('Api/twitter');
const $ = require('jquery');

const users = usersApi.getUsers();
const sectionThreeSolution = require('sectionThreeSolution');
const welcomeUser = require('welcomeUser');
const appConfig = require('typescript/appConfig');

sectionThreeSolution('USD', fxRates => console.log(fxRates));

// $.each(users, (index, user) => { $(document.body).append( `<p>${index}: name ${user.name} age ${user.age}</p>`); });

welcomeUser('Jones');