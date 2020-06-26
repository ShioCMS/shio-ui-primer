import { Component, Input } from '@angular/core';

@Component({
  selector: 'octicons-upload',
  template: `<svg *ngIf="size == 16" class="octicon" viewBox="0 0 16 16" width="16" height="16">
  <path fill-rule="evenodd"
      d="M8.53 1.22a.75.75 0 00-1.06 0L3.72 4.97a.75.75 0 001.06 1.06l2.47-2.47v6.69a.75.75 0 001.5 0V3.56l2.47 2.47a.75.75 0 101.06-1.06L8.53 1.22zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z">
  </path>
</svg>`,
})
export class OcticonsUpload {
  @Input() size: number;
}