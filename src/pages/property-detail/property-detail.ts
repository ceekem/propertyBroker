import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ActionSheetController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-property-detail',
  templateUrl: 'property-detail.html',
})
export class PropertyDetailPage {

  private propertyData:any;
  private fullDetail:boolean;
  private sortdDesc:any;

  currentIndex: number = -1;
  

  constructor(
    public navCtrl: NavController,
    private ev:Events,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public socialSharing: SocialSharing) {
      this.propertyData = this.navParams.get('propertydata');
      console.log('Property Data',this.propertyData);
      this.sortdDesc = this.propertyData.post_content.split(".");
     
      this.fullDetail = false;

      this.propertyData.custom_desc = this.sortdDesc[0];

      //--------------------
      this.ev.subscribe('propertyUpdate',data=>{
          //console.log('propertyUpdate : ',data);
          this.propertyData.post_title      =   data.title;
          this.propertyData.thumb           =   data.thumb;
          this.propertyData.street_name     =   data.street_name;
          this.propertyData.property_state  =   data.state;
          this.propertyData.property_size   =   data.size;
          this.propertyData.property_type   =   data.property_type;
          this.propertyData.property_status =   data.property_status;
          this.propertyData.property_price  =   data.prop_price;
          this.propertyData.post_content    =   data.description;
          this.propertyData.property_city   =   data.city;
          this.propertyData.bedrooms        =   data.bedrooms;
          this.propertyData.bathrooms       =   data.bathrooms;
          this.propertyData.audio_file      =   data.audio_file;
      });
      //--------------------
      //console.log('content :',content);
      console.log('propertyData',this.propertyData);
  }



  ionViewDidEnter(){
    this.propertyData = this.navParams.get('propertydata');
    console.log('PD', this.propertyData);
  }

   actionSheet(i){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share via',
      buttons: [
        {
          text: 'Whatsapp',
          handler: () => {
            this.whatsappShare(i);
          }
        }
        ,{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  whatsappShare(index){
      var msg = "Property Title: "+ index.post_title+"\n\r Price: $"+index.property_price+"\n\r Bedrooms: "+index.bedrooms+"\n\r Bathrooms: "+index.bathrooms;
     this.socialSharing.shareViaWhatsApp(msg, null, null);
  }

  getFomatedPrice(n){
     return "$"+n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  editProperty(pobj){
     this.navCtrl.push('PropertyFormPage',{pobj:pobj});
  }
  readMore(){
    this.fullDetail = !this.fullDetail;
    if(this.fullDetail){
       this.propertyData.custom_desc = this.propertyData.post_content;
    }else{
      this.propertyData.custom_desc = this.sortdDesc[0];;
    }
 }

}
