import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events,ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { UserManagerProvider } from '../../providers/user-manager/user-manager';
import { CommonProvider } from '../../providers/common/common';
import { Storage } from '@ionic/storage';
import { HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-register-profileimg',
  templateUrl: 'register-profileimg.html',
})
export class RegisterProfileimgPage {

  private result:any;
  private userData:any;
  private frmData:any;
  public overlayIcon:any;
  constructor(
    public navCtrl: NavController,
    public ev:Events,
    private common:CommonProvider,
    private camera: Camera,
    private storage:Storage,
    private userManager:UserManagerProvider,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {

      this.frmData = {
        fullname:'',
        email:"",
        phone_number:"",
        brokerrage_name:'',
        brokerrage_address:'',
        license:'',
        profile_image:"",
        is_image_update:false};

    let data = this.navParams.get('userData');
    this.userData = data;


    if(data!=null && typeof(data)!='undefined'){

       this.frmData.fullname             = data.fullname;
       this.frmData.email                = data.email;
       this.frmData.phone_number         = data.phone_number;
       this.frmData.brokerrage_name      = data.brokerrage_name;
       this.frmData.brokerrage_address   = data.brokerrage_address;
       this.frmData.license              = data.license;

       this.frmData.uauth = data.uauth;
    }



  }


  skipToHome(){
    //console.log('this.userData :',this.userData);
    this.ev.publish('checkRegister','');
    this.navCtrl.setRoot(HomePage);
  }

  //------------------------
  actionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Profile Image',
      buttons: [
        {
          text: 'Camera',
          //role: 'destructive',
          handler: () => {
            this.captureImage(0);
          }
        },{
          text: 'Library',
          handler: () => {
            this.captureImage(1);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
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
        targetHeight:400,
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

        //let base64Image = 'data:image/jpeg;base64,' + imageData;
        let base64Image = imageData;
        //this.frmData.profile_img = base64Image;
        this.frmData.is_image_update = true;
        this.frmData.profile_image = 'data:image/jpeg;base64,'+base64Image;
      }, err=> {
        this.common.hideLoading();
        this.common.showError(err);
      });
  }

  removeImage(){
    this.frmData.profile_image      = '';
    this.frmData.is_image_update    = true;
  }


  continue(){
    this.common.showLoading();
    //console.log(this.frmData);
    this.userManager.updateProfile(this.frmData)
    .then((res)=>{
          this.common.hideLoading();
          this.result = res;
          if(this.result.status){
            this.result.data.uauth = this.frmData.uauth;
            this.storage.set("userData",this.result.data).then(()=>{
              this.ev.publish('checkRegister',this.result.data);
              this.navCtrl.push('HomePage');
            });
          }else{
            this.common.showToast(this.result.msg);
          }
      }, err=> {
        this.common.hideLoading();
        this.common.showError(err);
      });
  }

}
