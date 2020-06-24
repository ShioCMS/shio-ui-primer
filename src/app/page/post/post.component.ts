import 'brace';
import 'brace/theme/eclipse';
import 'brace/mode/text';
import 'brace/mode/javascript';
import 'brace/mode/html';

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumbData } from 'src/app/data/folder/breadcrumb.data';
import { ShPostService } from 'src/app/service/post/post.service';
import { ShPostXPData } from 'src/app/data/post/postxp.data';

import { AceConfigInterface, AceComponent, AceDirective } from 'ngx-ace-wrapper';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterViewInit {
  private breacrumbData: Observable<BreadcrumbData>;
  private shPostData: Observable<ShPostXPData>
  private id: string;
  public content: string = 'Some example content';
  public disabled: boolean = false;
  public config: AceConfigInterface = {    
    showGutter: true,
    theme:'eclipse',
    readOnly: false
  };

  public tinyMCEConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    height: 300,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
  };

  @ViewChild(AceComponent, { static: false }) componentRef?: AceComponent;
  @ViewChild(AceDirective, { static: false }) directiveRef?: AceDirective;

  constructor(private shPostService: ShPostService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.shPostData = this.shPostService.get(this.id);

    this.breacrumbData = this.shPostService.getBreadcrumb(this.id);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  ngAfterViewInit(): void {
    //this.directiveRef.ace();
    //this.componentRef.directiveRef.ace();
  }

  getShPost(): Observable<ShPostXPData> {
    return this.shPostData;
  }
  getBreadcrumb(): Observable<BreadcrumbData> {
    return this.breacrumbData;
  }
  ngOnInit(): void {

  }
  public onEditorBlur(event: any): void {
    console.log('Editor blur:', event);
  }

  public onEditorFocus(event: any): void {
    console.log('Editor focus:', event);
  }

  public onValueChange(value: string): void {
    console.log('Value change:', value);
  }

  public onContentChange(event: any): void {
    console.log('Content change:', event);
  }

  public onSelectionChange(event: any): void {
    console.log('Selection change:', event);
  }
}
