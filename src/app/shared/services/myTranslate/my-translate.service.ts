import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

  constructor(private _TranslateService: TranslateService, @Inject(PLATFORM_ID) private platformId: object) {
    _TranslateService.setDefaultLang("en")

    if (isPlatformBrowser(platformId)) {

      this.setLang()
    }


  }

  setLang() {

    if (localStorage.getItem('lang') != null) {

    let storedLang: string = localStorage.getItem("lang")!

    // words
    this._TranslateService.use(storedLang)

    if (storedLang == "en") {
      document.dir = 'ltr'
      document.body.dir = 'ltr'
    }
    else if (storedLang == "ar") {
      document.dir = 'rtl'
      document.body.dir = 'rtl'

    }
  }

  }

  changeLang(lang: string) {
    localStorage.setItem("lang", lang);
    this.setLang()
  }
}
