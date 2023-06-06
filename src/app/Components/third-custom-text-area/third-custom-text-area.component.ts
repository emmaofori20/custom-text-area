import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-third-custom-text-area',
  templateUrl: './third-custom-text-area.component.html',
  styleUrls: ['./third-custom-text-area.component.scss'],
})
export class ThirdCustomTextAreaComponent implements AfterViewInit {
  @Input() rows!: number;
  @Input() colums!: number;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() Autosize!: boolean;
  @Input() MinRow!: number;
  @Input() MaxRow!: number;
  @Input() customLabelClass: string | undefined; // style label using tailwind
  @Input() customTextAreaClass: string | undefined; // style label using tailwind
  @Input() customStyleLabel: { [key: string]: string } | undefined;
  @Input() customStyleTextArea: { [key: string]: string } | undefined;
  @Input() control = new FormControl();

  calculatedMaxHeight!: number;
  @ViewChild('textareaElement')
  textareaElement!: ElementRef<HTMLTextAreaElement>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.autogrowTextarea();
    const { nativeElement } = this.textareaElement;
    this.calculatedMaxHeight = nativeElement.scrollHeight * this.MaxRow - 120;
  }

  autogrowTextarea() {
    const { nativeElement } = this.textareaElement;

    if (this.Autosize) {
      this.renderer.setStyle(nativeElement, 'height', 'auto');
      this.renderer.setStyle(
        nativeElement,
        'height',
        nativeElement.scrollHeight + 'px'
      );

      // Calculate the max number of rows the textarea can have

      console.log('scrollHeight', nativeElement.scrollHeight);
      console.log('maxheiht', this.calculatedMaxHeight);
      // Check if the textarea height exceeds the max height
      if (nativeElement.scrollHeight > this.calculatedMaxHeight) {
        nativeElement.style.overflowY = 'scroll'; // Enable vertical scrolling
        nativeElement.style.height = this.calculatedMaxHeight + 'px'; // Set the height to the max height
      } else {
        nativeElement.style.overflowY = 'hidden'; // Disable vertical scrolling
      }
    } else {
      console.log('dont auto size');
    }
  }

  getRows() {
    if (this.Autosize) {
      return this.MinRow;
    } else {
      return this.rows;
    }
  }
}
