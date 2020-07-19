import { Component, OnInit } from '@angular/core';
import { ApiService, UserGameData } from './api.service'

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})

export class MeComponent implements OnInit {

  data: UserGameData;

  displayedColumns: string[] = ['name', 'value'];
  levelDataSource: DataShowInterface[];
  billDataSource: DataShowInterface[];
  userDataSource: DataShowInterface[];

  constructor(private api: ApiService) { 
    this.getUserGameData()
  }

  getUserGameData = () => {
    this.api.getUserGameData().subscribe(
      data => {
        this.data = data;

        this.levelDataSource = [
          {name: 'Level', value: this.data.level},
          {name: 'Xp', value: this.data.xp},
        ];

        this.billDataSource = [
          {name: 'Bits', value: this.data.bits}, 
        ];
      
        this.userDataSource = [
          {name: 'Physical Damage', value: 3},
          {name: 'Magical Damage', value: 6},
          {name: 'Physical Resistance', value: 4},
          {name: 'Magical Resistance', value: 9}
        ];

      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }
}

export interface DataShowInterface {
  name: string;
  value: number;
}
