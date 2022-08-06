import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from '@core/core.module';
import { ThemeModule } from '@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthSimpleToken } from '@nebular/auth';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { AuthGuard } from '@core/auth/auth-guard.service';
import { AuthAppInterceptor } from '@core/auth/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbAuthModule.forRoot({
      strategies: [
       NbPasswordAuthStrategy.setup({
         name: 'email',
         token: {
           class: NbAuthSimpleToken,
           key: 'token'
         },
         login: {
           endpoint: 'login/',
         },
         register: {
           endpoint: 'register/',
         },
         logout: {
           endpoint: 'logout/',
         },
       }),
      ],
      forms: {},
      }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthAppInterceptor, multi: true },
  ],
})
export class AppModule {
}
