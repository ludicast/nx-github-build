import { Component, OnInit } from '@angular/core';
import { SHARED_CONST } from '@happyorg/shared-utils';

@Component({
  selector: 'happyorg-lib11-component5',
  templateUrl: './lib11-component5.component.html',
  styleUrls: ['./lib11-component5.component.css'],
})
export class Lib11Component5Component implements OnInit {
  sharedConst = SHARED_CONST;

  constructor() {}

  ngOnInit() {}
}
