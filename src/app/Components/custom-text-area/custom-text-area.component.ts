import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-text-area',
  templateUrl: './custom-text-area.component.html',
  styleUrls: ['./custom-text-area.component.scss']
})
export class CustomTextAreaComponent implements OnInit{
  @Input() label!: string;
  @Input() numberOfRows: number =1;//set the number of rows
  @Input() control = new FormControl();// form control to take values/text from users

  constructor(){
    
  }

  ngOnInit(): void {
    
  }

}
