import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShioTextWidgetComponent } from './shio-text-widget/shio-text-widget.component';
import { ShioTextAreaWidgetComponent } from './shio-text-area-widget/shio-text-area-widget.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShioTextWidgetComponent, ShioTextAreaWidgetComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ShioTextWidgetComponent, ShioTextAreaWidgetComponent
  ]
})
export class ShioWidgetModule { }
