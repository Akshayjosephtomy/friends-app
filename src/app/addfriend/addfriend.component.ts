import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  readValues=()=>{
    let data={
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend
    }
    console.log(data)
    this.myapi.addFriend(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Friend Added Successfully")
      }
    )
  }

  ngOnInit(): void {
  }

}
