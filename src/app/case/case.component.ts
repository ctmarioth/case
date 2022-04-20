import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { IDropDownValue } from 'src/case';


@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent {

  // alert:boolean=false

  public dropdownvalues1: Array<IDropDownValue> = [{
       value: 5, name: 'Assigned' },
      { value: 6, name: 'In Progress' },
      { value: 1, name: 'New' },
      { value: 2, name: 'Unassigned' },
      { value: 7, name: 'Resolved' }];

  public dropdownvalues2: Array<IDropDownValue>= [{
   'value': 1, 'name': 'unifi portal' },
  { 'value': 2, 'name': 'myunifi App ' },
  { 'value': 3, 'name': 'SPICE.AI' },
  { 'value': 4, 'name': 'mobile@unifi App' },
  { 'value': 7, 'name': 'HERO' },
  { 'value': 8, 'name': 'SPICE (RETEM)'
  }];

  // cases = new FormControl();

  caseForm = new FormGroup({
    'status': new FormControl(null, Validators.required),
    'title': new FormControl(null, Validators.required),
    'name': new FormControl(null, Validators.required),
    'accNo': new FormControl(null, Validators.required),
    'ID': new FormControl(null),
    'custID': new FormControl(null, Validators.required),
    'sourceID': new FormControl(null, Validators.required),
    'serviceID': new FormControl(null, Validators.required),
    'action': new FormControl('1', Validators.required),
    'conName': new FormControl(null, Validators.required),
    'hpNo': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'description': new FormControl(null, Validators.required),
    'date': new FormControl(null, Validators.required)
  });

  // stat: Status[] = [
  //     { value: 5, name: 'Assigned' },
  //     { value: 6, name: 'In Progress' },
  //     { value: 1, name: 'New' },
  //     { value: 2, name: 'Unassigned' },
  //     { value: 7, name: 'Resolved' },
  //   ];

  // name = new FormControl('');

  // updateName() {
  //   this.firstName.setValue('Nancy');
  // }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.caseForm.value);

    if(this.caseForm.valid){
      alert('Success! Your data has been submitted successfully.');
    }
    // console.log(this.alert=true);
  }

  // closeAlert(){
  //   this.alert=false;
  // }

  resForm() {
    this.caseForm.reset();
    this.caseForm.patchValue({action:'1'})
  }

  get status() {
    return this.caseForm.get('status');
  }

  get title() {
    return this.caseForm.get('title');
  }

  get name() {
    return this.caseForm.get('name');
  }

  get accNo() {
    return this.caseForm.get('accNo');
  }

  // get ID() {
  //   return this.caseForm.get('ID');
  // }

  get custID() {
    return this.caseForm.get('custID');
  }

  get sourceID() {
    return this.caseForm.get('sourceID');
  }

  get serviceID() {
    return this.caseForm.get('serviceID');
  }

  get action() {
    return this.caseForm.get('action');
  }

  get conName() {
    return this.caseForm.get('conName');
  }

  get hpNo() {
    return this.caseForm.get('hpNo');
  }

  get email() {
    return this.caseForm.get('email');
  }

  get description() {
    return this.caseForm.get('description');
  }

  get date() {
    return this.caseForm.get('date');
  }

  constructor() { }


  ngOnInit(): void {
  }

}
