import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appDateOfBirthValidator]',
  providers:[{
    provide: NG_VALIDATORS,
    useClass: DateOfBirthValidatorDirective,
    multi: true
  }]
})

export class DateOfBirthValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): {} | null {
    let dob:Date = new Date(control.value);
    let today:Date = new Date();
    let diffInSeconds = (today.getTime() - dob.getTime())/1000;
    let diffInDays = diffInSeconds/(3600*24);
    let diffInYears = Math.round(diffInDays/365.25);
    if(diffInYears < 18){
      return { ageError: {message: "Age Should be greater than or equal to 18!"}}
    }
    else{
      return null;
    }
  }
}
