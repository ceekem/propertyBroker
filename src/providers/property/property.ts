import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Storage } from '@ionic/storage';

@Injectable()
export class PropertyProvider {

  constructor( private http: Http) {
    //console.log('Hello PropertyProvider Provider');

  }

  //-----------Get Property Listing---------------------------------
   getListing(paged,propStatus){
      let postData = {page:paged,limit:'30',status:propStatus};
        console.log("postdata",postData)
      return new Promise((resolve, reject)=> {
         this.http.get('assets/data/properties.json')
         .subscribe(data=> {
           resolve(data.json());
         }, err=> {
           reject(err);
         });
      });
   }

   //-----------Add New Property Search---------------------------------
   getStaticFields(){
      return new Promise((resolve, reject)=> {
         this.http.get('assets/data/propertyadd_field.json')
         .subscribe(data=> {
           console.log(data);
           resolve(data.json());
         }, err=> {
           reject(err);
         });
      });
   }
   //-----------Add New Property Search---------------------------------
   addNewProperty(postData){

      return new Promise((resolve, reject)=> {
         this.http.post('addProperty',postData)
         .subscribe(data=> {
           resolve(data);
         }, err=> {
           reject(err);
         });
      });
   }
   //-----------Add New Property Search---------------------------------
   removeProperty(postData){
      return new Promise((resolve, reject)=> {
         this.http.post('removeProperty',postData)
         .subscribe(data=> {
           resolve(data);
         }, err=> {
           reject(err);
         });
      });
   }


}

