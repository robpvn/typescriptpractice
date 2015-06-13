/// <reference path="person.ts" />
/// <reference path="contactdetails.ts" />
//I'm not sure if we still need the reference path for intellisense

//Once you get node.js module involved (i.e. almost always), ypu need to use 
// all modules az externel: http://www.typescriptlang.org/Handbook#modules-going-external
//IF we want to use the object directly without a namespace (that is, there is only one 
// class in the file), we use export: http://www.typescriptlang.org/Handbook#modules-export-
import ContactDetails = require("./contactdetails");
import Person = require("./person");

const myConst = "hello world";
var myNum = myConst.charAt(0);
var myPers = new Person("Jens", "Jensen");
var fullname = myPers.fullname;
var test = new ContactDetails.Email("testmail", "teast@example.com");
console.log(fullname);