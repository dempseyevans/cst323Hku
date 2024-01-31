import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayEntriesComponent } from './display-entries/display-entries.component';


const routes: Routes = [
  { path: './entries', component: DisplayEntriesComponent},
  //FINISH PATHS
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
