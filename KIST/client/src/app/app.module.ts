import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { routing } from './app.routes';

import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { ModulesComponent } from './modules/modules.component';
import { FindComponent } from './find/find.component';
import { HelpComponent } from './help/help.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ModulesComponent,
    FindComponent,
    HelpComponent,
    AccountComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    Ng2SmartTableModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      progressBar: true,
      closeButton: true
    }),
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
