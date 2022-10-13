import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfriend',
  templateUrl: './viewfriend.component.html',
  styleUrls: ['./viewfriend.component.css']
})
export class ViewfriendComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewFriend().subscribe(
      (data)=>{
        this.friendData=data
      }
    )
  }
  
  friendData:any=[]

  ngOnInit(): void {
  }

}
