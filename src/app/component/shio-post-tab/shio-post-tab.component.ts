import { Component, OnInit, Input } from '@angular/core';
import { ShPostData } from '@app/data/post/post.data';
import { ShPostAttrData } from '@app/data/post/postAttr.data';
import { AceConfigInterface } from 'ngx-ace-wrapper';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'shio-post-tab',
  templateUrl: './shio-post-tab.component.html',
  styleUrls: ['./shio-post-tab.component.scss']
})
export class ShioPostTabComponent implements OnInit {
  @Input() shPost: ShPostData;
  @Input() tabIndex: number;
  @Input() currentTab: number;

  public aceConfig: AceConfigInterface = {
    showGutter: true,
    theme: 'eclipse',
    readOnly: false
  };
  public chkEditor = ClassicEditor;
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

  constructor() { }

  ngOnInit(): void {
  }
  getTabPostAttrs() {
    let filteredShPostAttrs: ShPostAttrData[] = this.shPost.shPostAttrs.filter(
      shPostAttr => shPostAttr.tab === this.tabIndex);
    return filteredShPostAttrs;
  }
}
