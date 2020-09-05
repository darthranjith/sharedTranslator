import {NgModule} from "@angular/core";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { environment } from '../environments/environment';

@NgModule({
    declarations: [ ],
    imports: [
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    exports: [TranslateModule]
})
export class SharedModule {}

export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(
        http,
        '../assets/i18n/'+environment.project+'/',
        '.json'
    );
}