import { Component, OnInit, Input } from '@angular/core';
import { ShObjectData } from 'src/app/data/object/object.data';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgxSmartModalService } from 'ngx-smart-modal';
@Component({
  selector: 'shio-box-list',
  templateUrl: './shio-box-list.component.html'
})
export class ShioBoxListComponent implements OnInit {
  @Input() objectList: ShObjectData;
  ptSelectForm: FormGroup;
  faBars = faBars;
  constructor(public ngxSmartModalService: NgxSmartModalService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ptSelectForm = this.formBuilder.group({
      filter: ['']
    });
  }

}
