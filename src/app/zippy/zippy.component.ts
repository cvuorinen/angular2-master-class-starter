import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'trm-zippy',
  templateUrl: 'zippy.component.html',
  styleUrls: ['zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input() public title: string;
  @Output() public toggle = new EventEmitter<boolean>();

  public open: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
