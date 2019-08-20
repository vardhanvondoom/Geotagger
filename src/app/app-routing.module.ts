import { ManageLocationComponent } from './pages/manage-location/manage-location.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapviewComponent } from './pages/mapview/mapview.component';


const routes: Routes = [
  {path:"",component:ManageLocationComponent},
  {path:"mapp",component:MapviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
