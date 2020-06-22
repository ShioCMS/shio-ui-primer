import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { first } from 'rxjs/operators';
import { UserService } from '@app/_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Shio CMS';
  loading = false;
  users: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

}
