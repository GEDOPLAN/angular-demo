import { FormBuilder, FormGroup, FormArray, RequiredValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../../services/source-link-service.service';

import { } from ''

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.less']
})
export class ModelDrivenComponent implements OnInit {

  form: FormGroup;

  user: any = {};

  mails: FormArray;

  constructor(src: SourceLinkServiceService, private fb: FormBuilder) {
    src.setSourceLink('/src/app/model-driven');

    this.form = fb.group({
      id: ['5', control => !/^\d+$/.test(control.value) ? ['Ungültige Eingabe']  : null],
      username: ['', RequiredValidator],
      mails: fb.array([
        fb.group({
          mail: ['']
        })
      ])
    });

    this.mails = <FormArray>this.form.controls['mails'];
  }

  ngOnInit() {
  }

  pushMail() {
    this.mails.push(this.fb.group({
      mail: ['']
    }));
  }

  removeMail(index: number) {
    this.mails.removeAt(index);
  }

  submit() {
    Object.assign(this.user, this.form.value);
  }
 
 patch(){
   this.form.patchValue({id: 400, username: "Dominik"});
 }

}
