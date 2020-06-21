import { Component, Input } from '@angular/core';

@Component({
  selector: 'octicons-history',
  template: `<svg *ngIf="size == 16" class="octicon" viewBox="0 0 16 16" width="16" height="16">
  <path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z">
  </path></svg>`,
})
export class OcticonsHistoryComponent {
  @Input() size: number;
}

