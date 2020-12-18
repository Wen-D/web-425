/*
============================================
; Title: 1.4 - TypeScript
; Author: Professor Krasso
; Date: 12/18/20
; Modified by:Wendy Leon
; Description: TypeScript
;==========================================
*/
import {IPerson} from "./person.interface";

//person class
class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person ("Wen-D", "Leon");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);