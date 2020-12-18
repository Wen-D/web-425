/*
============================================
; Title: 1.4 - TypeScript
; Author: Professor Krasso
; Date: 12/18/20
; Modified by:Wendy Leon
; Description: TypeScript
;==========================================
*/
//constructor
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
//create new person with my name
var myName = new Person("Wen-D", "Leon");
//display new person with my name
console.log("My name is " + myName.firstName + " " + myName.lastName);
