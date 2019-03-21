import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PhotosService } from '../../service/photos';
import { Photos } from '../../interfaces/photos';
import { PhotoDetailsComponent } from '../../components/photo-details/photo-details';

@IonicPage()
@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html',
})
export class PhotosPage implements OnInit{

  public photos: Array<Photos>;
  selectedPhoto: Photos;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _photos: PhotosService,
    public modalCtrl: ModalController
    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosPage');
  }
  
  public albumid = this.navParams.get('photo');
  
  
  ngOnInit(){
    this.getPhotos();
  }

  openSettings(photos: Photos) {
    this.selectedPhoto = photos;
    let modal = this.modalCtrl.create(PhotoDetailsComponent, {
      url_photo: this.selectedPhoto.url
    });
    modal.present();
  }

  getPhotos(){
    this._photos.getPhotos(this.albumid).subscribe(photos => this.photos = photos);
  }


}