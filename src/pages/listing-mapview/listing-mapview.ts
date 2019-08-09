import { Component, NgZone,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController,
NavParams,ActionSheetController,LoadingController,Events,ViewController,App
,AlertController, Platform, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {Geolocation} from '@ionic-native/geolocation'
import { CommonProvider } from '../../providers/common/common';
import { UserManagerProvider } from '../../providers/user-manager/user-manager';
import { PropertyProvider } from '../../providers/property/property';
declare var MarkerClusterer: any ;
declare var google;
var markersArray = [];

declare var google;
var addr;
@IonicPage()
@Component({
  selector: 'page-listing-mapview',
  templateUrl: 'listing-mapview.html',
})
export class ListingMapviewPage {
 @ViewChild('map') mapElement: ElementRef;
@ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;
addressElement: HTMLInputElement = null;
listSearch: string = '';
map: any;
marker: any;
loading: any;
search: boolean = false;
error: any;
switch: string = "map";
loca:any;
lact:any;
latitude:any;
longitude:any;
selLoc:any;
location:any;
loc:any;
 location1:Object = {address:''};
 add : any;
 properties: any;
 property:any;
 public paged:any;
 public propertyStatus:any;
 public allData:any;
regionals: any = [];
currentregional: any;
constructor(
public navCtrl : NavController,
public loadingCtrl: LoadingController,
public toastCtrl: ToastController,
public app: App,
public nav: NavController,
public zone: NgZone,
public platform: Platform,
public alertCtrl: AlertController,
public actionSheetCtrl: ActionSheetController,
public geolocation: Geolocation,
private viewCtrl:ViewController,
public events: Events,
private propertyManager:PropertyProvider,
private common:CommonProvider,
public userManager: UserManagerProvider
) {
  this.paged = 1;
  this.propertyStatus = 'publish';
  this.platform.ready().then(() => {
    this.loading = this.loadingCtrl.create({
      content: 'Getting location ...'
    });
    this.loading.present();
    this.geolocation.getCurrentPosition({enableHighAccuracy:true}).then((res)=>{
      this.loading.dismiss();
      //this.latitude = res.coords.latitude;
      //this.longitude = res.coords.longitude;

      //-------static data 
      this.latitude = 25.9347377;
      this.longitude = -80.1372757;

      this.loadMaps();
    });
  });
}

loadMaps() {
  if (!!google) {
    this.initializeMap();
    this.initAutocomplete();
  } else {
    this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.')
  }
}

errorAlert(title, message) {
  let alert = this.alertCtrl.create({
    title: title,
    message: message,
    buttons: [{
      text: 'OK',
      handler: data => {
      this.loadMaps();
      }
    }]
  });
  alert.present();
}

getFomatedPrice(n){
  //n = n.toFixed(2);
  return "$"+n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

mapsSearchBar(ev: any) {
  console.log(ev);
  const autocomplete = new google.maps.places.Autocomplete(ev);
  autocomplete.bindTo('bounds', this.map);
  return new Observable((sub: any) => {
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        sub.error({
        message: 'Autocomplete returned place with no geometry'
        });
      } else {
        sub.next(place.geometry.location);
        sub.complete();
      }
    });
  });
}

initAutocomplete(): void {
  this.addressElement =
  this.searchbar.nativeElement.querySelector('.searchbar-input');
  this.createAutocomplete(this.addressElement).subscribe((location) => {
    this.lact = location;
    let options = {
      center: location.geometry.location,
      zoom: 12
    };
    this.map.setOptions(options);
    this.addMarker(this.lact.geometry.location,this.lact.formatted_address);
  });
}

createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
  const autocomplete = new google.maps.places.Autocomplete(addressEl);
  autocomplete.bindTo('bounds', this.map);
  return new Observable((sub: any) => {
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        sub.error({
        message: 'Autocomplete returned place with no geometry'
        });
      } else {
        this.loca = place;
        this.events.publish('address', this.loca);
        sub.next(place);
      }
    });
  });
}

initializeMap() {
  let latLng = new google.maps.LatLng(this.latitude, this.longitude);
  let mapOptions = {
    center: latLng,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  }
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  this.addMarker(latLng ,'You are here');
}

addMarker(position, content) {
    this.propertyManager.getListing(this.paged,this.propertyStatus).then((result)=>{
          this.properties = result;
          this.allData = this.properties.data
            for(this.property of this.allData){
              let latLng = new google.maps.LatLng(this.property.property_lat, this.property.property_lon);
            
              let marker = new google.maps.Marker({
                map: this.map,
                position: latLng
              });

                let content = '<div id="infoButton"><img src="'+this.property.thumb+'" width="220"><h4>'+this.property.post_title+'</h4>';
              content += '</p>Sq Ft : '+this.property.property_size+', Price: '+this.getFomatedPrice(this.property.property_price)+'</p></div>';
              this.addInfoWindow(marker, content, this.property);
            }

 });
}

addInfoWindow(marker, content, prop){
 
  var infoWindow = new google.maps.InfoWindow({
    content: content
  });
  let parent = this;
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });

  google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
    document.getElementById('infoButton').addEventListener('click', () => {
            console.log('Clicked : ',prop);
            this.navCtrl.push('PropertyDetailPage',{propertydata:prop});
    });

  });

}

closeModal() {
  this.viewCtrl.dismiss(this.loca);
}

}
