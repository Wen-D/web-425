
/* ============================================
; Title:  GPA calculator app1
; Author: Professor Krasso
; Date:   5 February 2021
; Modified by: Wendy Leon
; Description:  gpa calculator app1
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';// an import statement for the ITranscript interface
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  // variable named transcriptEntry of type ITranscript
  //transcriptEntry: ITranscript;

  // selectableGrades array of type Array<string> with grading default values
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+' ,'D' ,'D-', 'F'];

  //variable name transcriptEntries of type Array<ITranscript> and set to an empty array
  transcriptEntries: Array<ITranscript>=[];
  //variable named gpaTotal of type number and value set to 0
  gpaTotal: number = 0;

  transcriptForm: FormGroup;

  //components constructor w empty ITranscript object and assigned to the transcriptEntry variable
  constructor(private fb: FormBuilder) {
    //this.transcriptEntry = {} as ITranscript;
  }

  //from template driven form 2 a reactive form
  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required]
    })
  }
  //function named form that returns the transcriptForm controls
  get form() { return this.transcriptForm.controls; }



  // function  onSubmit() w/ a parameter called event

  onSubmit(event){
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });

    //this even will reset validation
    event.currentTarget.reset()
  }

  calculateResults(){
    let gpa: number = 0;

    //For loop grading based on value
    for (let entry of this.transcriptEntries) {
      switch(entry.grade) {
        case 'A': gpa += 4.0;
        break;
        case 'A-': gpa += 3.7;
        break;
        case 'B+': gpa+= 3.33;
        break;
        case 'B': gpa+= 3.00;
        break;
        case 'B-': gpa+= 2.70;
        break;
        case 'C+': gpa+= 2.30;
        break;
        case 'C': gpa+= 2.00;
        break;
        case 'C-': gpa+= 1.70;
        break;
        case 'D+': gpa+= 1.30;
        break;
        case 'D': gpa+= 1.00;
        break;
        case 'D-': gpa+= 1.30;
        break;
        case 'F': gpa+= 0.00;
        break;
      }
    }

    // total gpa calculation
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
