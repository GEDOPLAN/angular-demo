import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';

if (environment.production) {
  enableProdMode();
}


function callAjax(url, callback) {
  ;
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      callback(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

//const locale = navigator.language; > Browsersprache
let locale;
const urlLocale = new URLSearchParams(window.location.search).get('locale');
switch (urlLocale) {
  case 'en': locale = null; break;
  default: locale = urlLocale;
}


const url = `http://localhost:4200/assets/messages${locale == null ? '' : '.' + locale}.xlf`;
callAjax(url, (response) => {
  platformBrowserDynamic().bootstrapModule(AppModule,
    {
      providers: [
        { provide: TRANSLATIONS, useValue: response },
        { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
        { provide: LOCALE_ID, useValue: locale }
      ]
    });
});


