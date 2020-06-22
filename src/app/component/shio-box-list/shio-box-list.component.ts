import { Component, OnInit, Input } from '@angular/core';
import { ShObjectData } from 'src/app/data/object/object.data';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'shio-box-list',
  templateUrl: './shio-box-list.component.html',
  styleUrls: ['./shio-box-list.component.scss']
})
export class ShioBoxListComponent implements OnInit {
  @Input() objectList: ShObjectData;
  ptSelectForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ptSelectForm = this.formBuilder.group({
      filter: ['']
    });
  }

}
