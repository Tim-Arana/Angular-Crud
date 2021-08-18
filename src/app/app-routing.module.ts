import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { AddDialogComponent } from './dialogs/add/add.dialog.component';
import { EditDialogComponent } from './dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';
import { ViewComponent } from './dialogs/view/view.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TableComponent } from './table/table.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'Home', component:TableComponent },
  {path: 'About', component:AboutComponent },
  {path: '404', component:ErrorpageComponent},
  {path: '**', redirectTo:'/404'}

];

const routing = RouterModule.forRoot(routes);

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }