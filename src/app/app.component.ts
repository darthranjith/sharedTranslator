import { Component } from '@angular/core'
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  template: `
    {{'Title' | translate }}
  `,
  styles: []
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
  }
}
