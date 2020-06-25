import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'primer-dropdown-menu',
  templateUrl: './primer-dropdown-menu.component.html',
  styleUrls: ['./primer-dropdown-menu.component.scss']
})
export class PrimerDropdownMenu implements OnInit {
  @Input() direction: string = "sw" //'ne', 'e', 'se', 's', 'sw', or 'w'
  
  constructor() { }

  ngOnInit(): void {
  }

}
