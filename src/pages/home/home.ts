import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ModalController,AlertController,Platform,Events,MenuController } from 'ionic-angular';
import { PropertyProvider } from '../../providers/property/property';
import { CommonProvider } from '../../providers/common/common';
import { UserManagerProvider } from '../../providers/user-manager/user-manager';

import { PropertyFormPage} from '../property-form/property-form';
import { PropertyDetailPage} from '../property-detail/property-detail';
import { ListingMapviewPage } from "../listing-mapview/listing-mapview";
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private result:any;
  private propertyData:any;
  private filterData:any;
  private searchData:any;
  public isRecAvailable:any;
  public paged:any;
  public infiniteScrollComplete:boolean;
  private savedSearchData:any;
  public user_uauth : any;
  public propertyStatus:any;

  public appointmentData:any;
  private notificationCount:number;

  constructor(
    public navCtrl: NavController,
    private common:CommonProvider,
    public alertCtrl: AlertController,
    private userManager:UserManagerProvider,
    private propertyManager:PropertyProvider,
    public modalCtrl: ModalController,
    public platform: Platform,
    private ev:Events,
    private menu:MenuController,
    public navParams: NavParams
  ) {
      this.menu.enable(true);
      this.filterData = [];
      this.savedSearchData = [];
      this.isRecAvailable = true;
      this.paged = 1;
      this.propertyStatus = 'publish';
      this.infiniteScrollComplete = false;

      this.showListing();
  }
  getFomatedPrice(n){
    //n = n.toFixed(2);
    return "$"+n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }

  showListing(){
   
    this.paged = 1;
    if(this.paged==1)this.propertyData = [];
    this.isRecAvailable = true;
    this.infiniteScrollComplete = false;
    this.propertyManager.getListing(this.paged,this.propertyStatus)
    .then((res)=>{
         
          this.result = res;
          this.propertyData = this.propertyData.concat(this.result.data);

      }, err=> {
        if(this.paged==1)this.isRecAvailable = false;
        this.common.showError(err);
      });
  }


  doInfinite(inifinteScroll){
    if(this.paged==1)this.propertyData = [];
    this.propertyManager.getListing(this.paged,this.propertyStatus).then((res)=>{
          this.result = res;
          if(this.result.status){
            this.paged++;
            this.propertyData = this.propertyData.concat(this.result.data);
            inifinteScroll.complete();
          }else{
              this.infiniteScrollComplete = true;
          }

    }, err=> {
      this.infiniteScrollComplete = true;
      this.common.showError(err);
    });
  }

  doRefresh(refresher){
    this.propertyData = [];
    this.propertyManager.getListing(this.paged,this.propertyStatus).then((res)=>{
          this.result = res;
          if(this.result.status){
            this.propertyData = this.result.data;
          }else{
           // no data
          }
          refresher.complete();
    }, err=> {
      refresher.complete();
      this.common.showError(err);
    });

  }

 filterListing(tabType,audioObj){
    this.propertyStatus = tabType;
    this.showListing();
 }

  viewDetail(pobj){
      this.navCtrl.push('PropertyDetailPage',{propertydata:pobj});
  }

  editProperty(pobj,slidingItem){
     slidingItem.close();
     this.navCtrl.push('PropertyFormPage',{pobj:pobj});
  }
  removeProperty(pobj,index,slidingItem){

    let confirm = this.alertCtrl.create({
      title:'Information',
      message: 'Do you want to delete this property?',
      buttons: [
        {
          text: 'No',
          handler: () => {
           
          }
        },
        {
          text: 'Yes',
          handler: () => {
              this.common.showLoading();
              this.common.showAlert('Property has been removed')
              this.common.hideLoading();
          }
        }
      ]
    });
    confirm.present();
  }


  //---Add property page ---
  addPropertyPage(){
    this.navCtrl.push('PropertyFormPage');
  }

  //------------------

  notification(){
      this.navCtrl.setRoot('NotificationPage');
  }

  goToMapview(){
    this.navCtrl.push('ListingMapviewPage');
  }

}
