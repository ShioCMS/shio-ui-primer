import { Component, Input } from '@angular/core';

@Component({
  selector: 'octicons-plus',
  template: `<svg *ngIf="size == 16" class="octicon" viewBox="0 0 16 16" width="16" height="16">
  <path fill-rule="evenodd" d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z">
  </path></svg>`,
})
export class OcticonsPlus {
  @Input() size: number;
}
