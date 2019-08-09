import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Events, ActionSheetController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PropertyProvider } from '../../providers/property/property';
import { CommonProvider } from '../../providers/common/common';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

//import { HomePage } from '../home/home';
import { PropertyDetailPage } from '../property-detail/property-detail';

@IonicPage()
@Component({
  selector: 'page-property-form',
  templateUrl: 'property-form.html',
})
export class PropertyFormPage {

  public screenType:any;
  public tabsStatus:any;
  private frmData:any;
  private result:any;
  public frmVArray:any;
  public commFields:any;
  public bedbathData:any;
  public overlayIcon:any;

  public audioFileName:any;
  public filePath:any;
  private audioFilePath:any;
  public audioResult:any;
  public propRestul:any;
  public pData:any;


  currentIndex: number = -1;
  public playerShowhide:any='hidePlayer';
  public isPlaying:boolean=false;
  private audioObj:any;
  constructor(
    private propertyManager:PropertyProvider,
    private common:CommonProvider,
    private camera: Camera,
    private storage:Storage,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private transfer: FileTransfer,
    private filePathClean: FilePath,
    private fileChooser: FileChooser,
    public alertCtrl: AlertController,
    private ev:Events,
    public navCtrl: NavController
  ) {
    this.audioFilePath = '';
    this.screenType = 'M';
    this.tabsStatus = {tab2:true,tab3:true};
    this.frmVArray= {frm1:['','','','','','','','',''],frm2:[''],frm3:['','']};
    this.bedbathData = [1,2,3,4,5,6,7,8];
    this.frmData = {
        //property_status:'',
        street_name:"",
        postal_code:"",
        city:"",
        state:"",size:"",bedrooms:'',bathrooms:'', property_type:'',prop_price:'',
        audio_file:'',
        vidoe_file:"",title:"",
        description:"",uauth:"",thumb:"",
        prop_images:[],
        status:'',
        cobroke:'',
        pro_id:''
      }



      this.audioFileName = "";
      let propData = this.navParams.get('pobj');
      this.pData = propData;
      //console.log('propData : ',propData);
      if(typeof(propData)!='undefined'){

          this.frmData.property_status  = propData.property_statusid;
          this.frmData.street_name      = propData.street_name;
          this.frmData.postal_code      = propData.postal_code;
          this.frmData.city             = propData.property_city;
          this.frmData.state            = propData.property_state_ab;
          this.frmData.size             = propData.property_size;
        //  this.frmData.bedrooms         = propData.bedrooms;
        //  this.frmData.bathrooms        = propData.bathrooms;
          this.frmData.property_type    = propData.property_typeid;
          this.frmData.prop_price       = propData.property_price;
          this.frmData.audio_file       = propData.audio_file;
          this.frmData.vidoe_file       = propData.vidoe_file;
          this.frmData.title            = propData.post_title;
          this.frmData.description      = propData.post_content;
          this.frmData.thumb            = propData.thumb;
          this.frmData.prop_images      = [];
          this.frmData.status           = propData.post_status;
          this.frmData.pro_id           = propData.id;
        //  this.frmData.cobroke          = propData.cobroke;

          this.frmData.uauth            = '';
          if(this.frmData.thumb!=''){
            this.overlayIcon = 'overlayCamera';
          }
          this.formatNumber(this.frmData.size,'size');
          this.formatNumber(this.frmData.prop_price,'price');

      }


      this.storage.get("userData").then((data)=>{
         if(data!=null && typeof(data)!='undefined'){
            this.frmData.uauth = data.uauth;
         }
      });

      this.commFields = {propertystatus:''};
  }


  ionViewDidEnter() {
        this.common.showLoading();
        this.propertyManager.getStaticFields()
        .then((res)=>{
              this.result = res;
              if(this.result.status){
                this.commFields = this.result.data;
              }
              this.common.hideLoading();
              //console.log(this.commFields);
        }, (err) => {
            // Handle error
            this.common.hideLoading();
            this.common.showError(err);
        });
  }


  selectScreenType(stype){
    //console.log(stype);
    if(this.isPlaying){
      this.audioObj.pause();
      this.isPlaying = false;
    }
    this.screenType = stype;
  }

  formatNumber(obj,type){
    //console.log('obj ',obj);
    let tmpNumber = obj.replace (/,/g, "");
    let formatedNumber= tmpNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if(type=='price'){
       if(tmpNumber>0){
         this.frmData.prop_price = formatedNumber;
       }else{
         this.frmData.prop_price = '';
       }
    }
    if(type=='size'){
       if(tmpNumber>0){
         this.frmData.size = formatedNumber;
       }else{
         this.frmData.size = '';
       }
    }

    if(type=='cobroke'){
       this.frmData.cobroke = formatedNumber;
    }

  }

  continueToPayment(){

    this.frmVArray= {frm1:['','','','','','','','',''],frm2:[''],frm3:['','']};

 

    //------Form 2---------
    if(this.screenType=='M'){
      let isValid = true;
     // if(!this.frmData.prop_images.length && this.frmData.thumb=='') this.frmVArray.frm2[0] = 'ngR';

      for( i=0; i<this.frmVArray.frm2.length; i++){
          if(this.frmVArray.frm2[i]!='') isValid = false;
      }
      if(isValid){
        if(this.isPlaying) this.audioObj.pause();
        this.tabsStatus.tab3 = false;
        console.log(this.frmData.pro_id);
        if(this.frmData.pro_id){
          this.tabsStatus.tab3 = true;
        }
        this.screenType = 'S';
      }

    }

       //------Form 1---------
      else if(this.screenType=='S'){
        let isValid = true;
        //if(this.frmData.property_status=='') this.frmVArray.frm1[0] = 'ngR';
        if(this.frmData.street_name=='') this.frmVArray.frm1[0] = 'ngR';
        if(this.frmData.postal_code=='') this.frmVArray.frm1[1] = 'ngR';
        if(this.frmData.city=='') this.frmVArray.frm1[2] = 'ngR';
        if(this.frmData.state=='') this.frmVArray.frm1[3] = 'ngR';
        if(this.frmData.size=='') this.frmVArray.frm1[4] = 'ngR';
     //   if(this.frmData.bedrooms=='') this.frmVArray.frm1[5] = 'ngR';
     //   if(this.frmData.bathrooms=='') this.frmVArray.frm1[6] = 'ngR';
        if(this.frmData.property_type=='') this.frmVArray.frm1[7] = 'ngR';
        if(this.frmData.prop_price=='') this.frmVArray.frm1[8] = 'ngR';
  
        for(var i=0; i<this.frmVArray.frm1.length; i++){
            if(this.frmVArray.frm1[i]!='') isValid = false;
        }
        if(isValid){
      //    this.tabsStatus.tab2 = false;
          this.screenType = 'D';

        }
  
      }

    //------Form 3---------
    else if(this.screenType=='D'){
      let alert = this.alertCtrl.create({
        title:'Information',
        message: 'Do you want to publish your property?',
        buttons: [
          {
            text: 'Yes',
            //role: 'destructive',
            handler: () => {
              this.navCtrl.setRoot('HomePage');
             this.common.showAlert('Your property has been published');
            }
          },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      alert.present();


    }

  }

  //-----------------------
  actionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Property Image',
      buttons: [
        {
          text: 'Camera',
          //role: 'destructive',
          handler: () => {
            //console.log('Destructive clicked');
            this.captureImage(0);
          }
        },{
          text: 'Library',
          handler: () => {
            //console.log('Archive clicked');
            this.captureImage(1);
          }
        },{
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

  getCameraOption(type){
      let source;
      switch (type) {
        case 0:
         source = this.camera.PictureSourceType.CAMERA;
         break;
        case 1:
         source = this.camera.PictureSourceType.PHOTOLIBRARY;
         break;
      }

      const options: CameraOptions = {
        quality: 100,
        sourceType:source,
        targetWidth:300,
        targetHeight:500,
        saveToPhotoAlbum:false,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

      return options;
  }
  captureImage(type){
    this.common.showLoading();
     let options =  this.getCameraOption(type);

      this.camera.getPicture(options).then((imageData) => {
        this.common.hideLoading();
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.overlayIcon = 'overlayCamera';
        //let base64Image = 'data:image/jpeg;base64,' + imageData;
        let base64Image = imageData;
        this.frmData.prop_images[0] = base64Image;
        this.frmData.thumb = 'data:image/jpeg;base64,'+base64Image;
      }, (err) => {
          // Handle error
          this.common.hideLoading();
          this.common.showError(err);
      });
  }


  removeImage(){
    this.frmData.prop_images[0] ='';
    this.frmData.thumb = '';
    this.overlayIcon = '';
  }

  //------------------------
  saveAsDraft(){
   // this.common.showAlert('Property has been saved as draft');
   let alert = this.alertCtrl.create({
     title: 'Information',
    message: 'Do you want to unpublish your property?',
    buttons: [
      {
        text: 'Yes',
        //role: 'destructive',
        handler: () => {
          this.common.showAlert('Your property has been unpublished');
          this.navCtrl.pop();
          this.common.hideLoading();
         }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  alert.present();
  }


}
