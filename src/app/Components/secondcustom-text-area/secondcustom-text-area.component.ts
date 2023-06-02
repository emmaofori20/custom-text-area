import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-secondcustom-text-area',
  templateUrl: './secondcustom-text-area.component.html',
  styleUrls: ['./secondcustom-text-area.component.scss']
})
export class SecondcustomTextAreaComponent {

  @Input() rows!: number;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() control = new FormControl();// form control to take values/text from users


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(){

  }


}
