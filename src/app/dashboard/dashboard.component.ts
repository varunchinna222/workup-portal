import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  logout: boolean = false
  drop: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onuser(){
    this.logout = !this.logout
  }

  onhead(){
    this.drop = !this.drop
  }

  onhead1(){
    this.drop = !this.drop
  }
 
  onhead2(){
    this.drop = !this.drop
  }
 

  onhead3(){
    this.drop = !this.drop
  }
  onuser4(){
    this.logout = !this.logout
  }

  onhead4(){
    this.drop = !this.drop
  }
  
  onhead5(){
    this.drop = !this.drop
  }
  
  onhead6(){
    this.drop = !this.drop
  }
  onhead7(){
    this.drop = !this.drop
  }
  onhead8(){
    this.drop = !this.drop
  }
  onhead9(){
    this.drop = !this.drop
  }
 


}
