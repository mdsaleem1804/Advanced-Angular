import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent implements OnInit {

  applicationForm:FormGroup;
  isApplied:boolean;
  isRegistered:boolean;
  dateOfBirth:any;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.applicationForm = this.formBuilder.group({
      candidateId: ['', [Validators.required, this.validateCandidateId]]
    });
  }

  validateCandidateId(control: FormControl){

    let regXp = /^INFY[0-9]{4}$/;
    if(regXp.test(control.value)){
      return null;
    }
    else{
      return {candidateIdErr : {message: "Enter a valid Candidate Id (E.g., INFY1001)"}};
    }
  }

}
