import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { DateOfBirthValidatorDirective } from './custom-validator/date-of-birth-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomValidatorComponent,
    DateOfBirthValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
