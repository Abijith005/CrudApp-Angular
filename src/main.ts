import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import axios from 'axios';

import { AppModule } from './app/app.module';

// axios.defaults.withCredentials=true;
// axios.defaults.baseURL='http://localhost:3000'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
