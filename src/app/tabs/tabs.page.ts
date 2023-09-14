import { Component, OnInit } from '@angular/core';
import { NativeSettings, AndroidSettings, IOSSettings } from 'capacitor-native-settings';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { LocationService } from '../location.service';
import { Capacitor } from "@capacitor/core";
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

   options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
};

  constructor(
    private nativeGeocoder: NativeGeocoder,
    private locationService: LocationService
    ) {
    // NativeSettings.openAndroid({
    //   option: AndroidSettings.ApplicationDetails,
    // });
    
    // alert(JSON.stringify(NativeSettings));
  }

  ngOnInit(): void {
    alert('hi');
    // this.printCurrentPosition();
    this.getMyLocation();
  }

   printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  
    console.log('Current position:', coordinates.coords);
    alert(JSON.stringify(coordinates.coords));
    this.getUserGpsAddress(coordinates.coords)
  };
  

  getUserGpsAddress = async (coords: any) => {

      try {

          const { accuracy, altitude, latitude, longitude, speed } = coords
  
          let options: NativeGeocoderOptions = {
            useLocale: true,
            maxResults: 5,
          };
  
          const results = await this.nativeGeocoder.reverseGeocode(
            latitude,
            longitude,
            options
          );
  
       console.log('UserLocations', results);
       alert(JSON.stringify(results[0]))

      } catch (err) {
        console.log(err);
      }
  }




  async getMyLocation() {
    const hasPermission = await this.locationService.checkGPSPermission();
    if (hasPermission) {
      if (Capacitor.isNative) {
        const canUseGPS = await this.locationService.askToTurnOnGPS();
        this.postGPSPermission(canUseGPS);
      }
      else { this.postGPSPermission(true); }
    }
    else {
      const permission = await this.locationService.requestGPSPermission();
      if (permission === 'CAN_REQUEST' || permission === 'GOT_PERMISSION') {
        if (Capacitor.isNative) {
          const canUseGPS = await this.locationService.askToTurnOnGPS();
          this.postGPSPermission(canUseGPS);
        }
        else { this.postGPSPermission(true); }
      }
      else {
        await Toast.show({
          text: 'User denied location permission'
        })
      }
    }
  }

  async postGPSPermission(canUseGPS: boolean) {
    if (canUseGPS) {
      this.printCurrentPosition();  
     }
    else {
      await Toast.show({
        text: 'Please turn on GPS to get location'
      })
    }
  }

  // async watchPosition() {
  //   try {
  //     this.watchId = Geolocation.watchPosition({}, (position, err) => {
  //       this.ngZone.run(() => {
  //         if (err) { console.log('err', err); return; }
  //         this.lat = position.coords.latitude;
  //         this.lng = position.coords.longitude
  //         this.clearWatch();
  //       })
  //     })
  //   }
  //   catch (err) { console.log('err', err) }
  // }

  // clearWatch() {
  //   if (this.watchId != null) {
  //     Geolocation.clearWatch({ id: this.watchId });
  //   }
  // }










}
