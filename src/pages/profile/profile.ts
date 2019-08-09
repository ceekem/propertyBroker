import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { UserManagerProvider } from '../../providers/user-manager/user-manager';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public frmData:any;
  public overlayIcon:any;
  public frmVArray:any;
  public result:any;
  public commFields:any;

  constructor(
    private common:CommonProvider,
    private camera: Camera,
    public navParams: NavParams,
    private ev:Events,
    private userManager:UserManagerProvider,
    public navCtrl: NavController
  ) {
       this.frmVArray= ['','','','','',''];
        this.frmData = {
          fullname:'Guest',
          phone_number:"(123) 456-7890",
          email:"demo@gmail.com",
          office:"Fl",
          company_info:"",
          brokerrage_address:'514 S. Magnolia St. Orlando, FL 32806',
          license:'987123456',
          };

  }
  //-----------------------
  autoValidate(index,value){
      if(value!=''){
        this.frmVArray[index] = ''
      }else{
        this.frmVArray[index] = 'ngR';
      }
  }
  frmSubmit(){
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var chk= re.test(String(this.frmData.email).toLowerCase());

      this.frmVArray= ['','','','','',''];
      let isValid = true;
      if(this.frmData.fullname=='') this.frmVArray[0]     = 'ngR';
      if(this.frmData.email=='') this.frmVArray[1]   = 'ngR';
    else if(!chk){ this.common.showToast('This is not a valid email');}
      if(this.frmData.phone_number=='') this.frmVArray[2]   = 'ngR';
  //    if(this.frmData.brokerrage_address=='') this.frmVArray[3]   = 'ngR';
      if(this.frmData.license=='') this.frmVArray[4]  = 'ngR';

      for(var i=0; i<this.frmVArray.length; i++){
          if(this.frmVArray[i]!='') isValid = false;
      }
      if(isValid){
        this.common.showLoading();
        console.log(this.frmData);
        this.common.showAlert('Your profile has been updated');
        this.common.hideLoading();
      }

  }
  notification(){
      this.navCtrl.setRoot('NotificationPage');
  }

}
