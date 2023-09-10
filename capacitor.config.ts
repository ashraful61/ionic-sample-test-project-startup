import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wafisolutions.com',
  appName: 'sample-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
