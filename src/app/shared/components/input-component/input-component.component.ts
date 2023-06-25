import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
})
export class InputComponentComponent implements OnInit {
  @Input()
  public type = 'text';
  @Input()
  public labelTxt = '';
  @Input()
  public formName: string;
  @Input()
  public placeholderTxt: string;
  @Input()
  public hasLabel: false;
  constructor() { }

  ngOnInit() {

  }
  
  
}
