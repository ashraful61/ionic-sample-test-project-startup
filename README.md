1. How to prepare build ?
   $ npm i
   $ npx cap add android / ionic cap add android
   $ ionic build
   $ npx cap sync / ionic cap sync
   $ npx cap open android / ionic cap open android
   $ This API requires the following permissions be added to your AndroidManifest.xml:

     <!-- <uses-permission android:name="android.permission.CAMERA" /> -->
     <!-- <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
     <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/> -->
     <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
     <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
     <uses-feature android:name="android.hardware.location.gps"/>

2. Social share
   Plugin Link: https://ionicframework.com/docs/native/social-sharing

3. Camera
   Api link: https://capacitorjs.com/docs/apis/camera

4. Apollo client
   1. npm install @apollo/client graphql
5. Cordova native Geo coder package
   https://ionicframework.com/docs/v5/native/native-geocoder
   $ npm install cordova-plugin-nativegeocoder
   $ npm install @awesome-cordova-plugins/native-geocoder
   $ ionic cap syn
6.  Geo location package
    Package link: https://ionicframework.com/docs/native/geolocation
    npm install @capacitor/geolocation
    npx cap sync

7. Diagonistic npm package
   https://ionicframework.com/docs/v5/native/diagnostic
   
8. https://www.npmjs.com/package/ngx-color-picker
# ionic-sample-test-project-startup
