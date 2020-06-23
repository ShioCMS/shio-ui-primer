import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from '@app/_services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Shio CMS';
  
  constructor() { }

  ngOnInit() { }

}
