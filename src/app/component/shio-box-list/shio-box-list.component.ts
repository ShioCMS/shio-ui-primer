import { Component, OnInit, Input } from '@angular/core';
import { ShObjectData } from 'src/app/data/object/object.data';

@Component({
  selector: 'shio-box-list',
  templateUrl: './shio-box-list.component.html',
  styleUrls: ['./shio-box-list.component.scss']
})
export class ShioBoxListComponent implements OnInit {
  @Input() objectList: ShObjectData;
  constructor() { }

  ngOnInit(): void {
  }

}
