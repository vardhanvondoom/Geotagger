import { LocationdataService } from './service/locationdata.service';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ManageLocationComponent } from './pages/manage-location/manage-location.component';
import { MapviewComponent } from './pages/mapview/mapview.component';
import { TableComponent } from './components/table/table.component';
import { AgmCoreModule } from '@agm/core';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ManageLocationComponent,
    MapviewComponent,
    TableComponent,
    ModalComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCHG3Sbr1YJDjmWzHXXgqzELPovbjQkeao'
    })
  ],
  entryComponents:[ModalComponent],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
