import { Component, Input } from '@angular/core';

@Component({
  selector: 'octicons-clock',
  template: `<svg *ngIf="size == 16" class="octicon" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z">
  </path></svg>
  `,
})
export class OcticonsClock {
  @Input() size: number;
}