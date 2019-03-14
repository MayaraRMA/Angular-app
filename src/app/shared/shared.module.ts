import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownService } from './services/dropdown.service';


@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [ DropdownService ]
  })
  export class SharedModule { }