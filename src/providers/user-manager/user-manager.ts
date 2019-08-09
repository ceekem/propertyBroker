import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserManagerProvider {

  constructor(private http: Http) {
    console.log('Hello UserManagerProvider Provider');
  }

  //----------Get Access Token----------------------------------
  getAccessToken(){
    let postData = {"grant_type":"client_credentials","client_id":"apirrstestclient","client_secret":"rrstestpassapi"};
     return new Promise((resolve, reject)=> {
        this.http.post('createaccesstoken',postData)
        .subscribe(data=> {
          resolve(data);
        }, err=> {
          reject(err);
        });
     });
  }
 //-----------Credae New Customer---------------------------------
  agentRegister(postData){
     return new Promise((resolve, reject)=> {
        this.http.post('agentregister',postData)
        .subscribe(data=> {
          resolve(data);
        }, err=> {
          reject(err);
        });
     });
  }
//------------Login--------------------------------
login(postData){
   return new Promise((resolve, reject)=> {
      this.http.post('agentlogin',postData)
      .subscribe(data=> {
        resolve(data);
      }, err=> {
        reject(err);
      });
   });
}
//-----------Forgot Password---------------------------------
updateProfile(postData){
   //console.log("TTTTTTTTTTTTTTTTT ",postData);
   return new Promise((resolve, reject)=> {
      this.http.post('agentProfileUpdate',postData)
      .subscribe(data=> {
        resolve(data);
      }, err=> {
        reject(err);
      });
   });
}
//-----------Forgot Password---------------------------------
forgotPasswrod(postData){
   return new Promise((resolve, reject)=> {
      this.http.post('forgotpassword',postData)
      .subscribe(data=> {
        resolve(data);
      }, err=> {
        reject(err);
      });
   });
}
//-----------Change Password---------------------------------
changePasswrod(postData){
   return new Promise((resolve, reject)=> {
      this.http.post('changepassword',postData)
      .subscribe(data=> {
        resolve(data);
      }, err=> {
        reject(err);
      });
   });
}

//-----------Reset Password---------------------------------
resetPassword(postData){
   return new Promise((resolve, reject)=> {
      this.http.post('resetpassword',postData)
      .subscribe(data=> {
        resolve(data);
      }, err=> {
        reject(err);
      });
   });
}
//---Get brokerage value ---
getBrokerage(){
   return new Promise((resolve, reject)=> {
      this.http.get('Brokerage')
      .subscribe(data=> {
        resolve(data);
      }, err=> {
        reject(err);
      });
   });
}
//---Get agency value ---
getAgencyData(){
   return new Promise((resolve, reject)=> {
      this.http.get('GetAgencies')
      .subscribe(data=> {
        resolve(data);
      }, err=> {
        reject(err);
      });
   });
}

//-----------Register Device---------------------------------
registerDevice(pastData){
  return new Promise((resolve, reject)=> {
     this.http.post('registerDevice',pastData)
     .subscribe(data=> {
       resolve(data);
     }, err=> {
       reject(err);
     });
  });
}

//---Get Appointment Data user vise ---
getAppointment(postData){
   return new Promise((resolve, reject)=> {
      this.http.get('assets/data/notifications.json')
      .subscribe(data=> {
        resolve(data.json());
      }, err=> {
        reject(err);
      });
   });
}
deleteAppointment(postData){
   return new Promise((resolve, reject)=> {
      this.http.post('deleteAppointment',postData)
      .subscribe(data=> {
        resolve(data);
      }, err=> {
        reject(err);
      });
   });
}

//==========Other Section==============================
//-----------About App---------------------------------
getAbaoutApp(){
   return new Promise((resolve, reject)=> {
      this.http.get('aboutagentapp')
      .subscribe(data=> {
        resolve(data);
      }, err=> {
        reject(err);
      });
   });
}

//--------------------------------------------

}
