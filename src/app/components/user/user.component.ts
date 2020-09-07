import { Component, OnInit } from '@angular/core';
import { ApiService, UserData }  from '../../api/api.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string
  user: UserData;

  panelsTelegram = [
    {title: 'panel 1',  description: 'description 1', content: 'content 1'},
    {title: 'panel 2',  description: 'description 2', content: 'content 2'},
  ]
  
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    // get the username out of the url
    this.route.params.subscribe(
      params => {
        this.username = params['username'];

        this.apiService.getUserData(this.username).subscribe(
          user => {
            this.user = user
          },
          error => {
            console.log(error);
          } 
        );

      }
    );

    
  }
}
