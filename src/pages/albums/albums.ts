import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlbumsService } from '../../service/albums';
import { Albums } from '../../interfaces/albums';
import { PhotosPage } from '../photos/photos';

@IonicPage()
@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
})
export class AlbumsPage implements OnInit {

  public albums: Array<Albums>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _albums: AlbumsService
    ) {}

  public user_id = this.navParams.get('album_id');

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumsPage');
  }

  ngOnInit() {
    this.getAlbums();
  }

  goToOtherPage(album: Albums){
    this.navCtrl.push(PhotosPage, { 
      photo: album.id
    });
  }

  getAlbums(){
    this._albums.getAlbums(this.user_id).subscribe(albums => this.albums = albums);
  }

}
