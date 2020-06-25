import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'primer-dropdown',
  templateUrl: './primer-dropdown.component.html',
  styleUrls: ['./primer-dropdown.component.scss']
})
export class PrimerDropdown implements OnInit {
  @Input() defaultOpen: boolean;
  @Input() overlay: boolean = false;
  @Input() open: boolean;

  constructor() { }

  ngOnInit(): void {

  }
  public onToggle() {

  }
  public onClickOutside() {

  }
}
