import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'photo-details',
  templateUrl: 'photo-details.html'
})
export class PhotoDetailsComponent implements OnInit{

  url_photo: string;

  constructor(
    public params: NavParams,
    public navCtrl: NavController
    ) {}

  ngOnInit(){
    this.url_photo = this.params.get('url_photo');
  }

  closeModal(){
    this.navCtrl.pop();
  }

}
