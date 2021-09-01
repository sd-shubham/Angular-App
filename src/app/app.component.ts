import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'passing from parent to child';
  title = 'SampleAngularApp';
  parent: string;
  userForm: FormGroup;
  rowArray = [1, 2];
  constructor(private readonly fb: FormBuilder) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: this.fb.array([this.addressGroup()]),
      document: this.fb.array([this.addDocument()]),
    });
  }
  public addAddress() {
    this.addressArray.push(this.addressGroup());
  }
  public addDocumentEvent() {
    this.documentArray.push(this.addDocument());
  }
  private addressGroup(): FormGroup {
    return this.fb.group({
      country: [''],
      state: [''],
      city: [],
      contact: this.fb.array([this.addContacts()]),
    });
  }
  private addDocument(): FormGroup {
    return this.fb.group({
      name: [''],
      type: [''],
    });
  }
  private addContacts(): FormGroup {
    return this.fb.group({
      contactPerson: [''],
      phoneNumber: [''],
    });
  }
  private addContactEvent(index: number) {
    debugger;
    (<FormArray>(
      (<FormGroup>this.addressArray.controls[index]).controls.contact
    )).push(this.addContacts());
  }
  get addressArray(): FormArray {
    return <FormArray>this.userForm.controls.address;
  }
  get documentArray(): FormArray {
    return <FormArray>this.userForm.controls.document;
  }
  callback(event: string) {
    this.parent = event;
  }
}
