import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { AddDialogComponent } from './dialogs/add/add.dialog.component';
import { EditDialogComponent } from './dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';
import { ViewComponent } from './dialogs/view/view.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '', component:TableComponent },
  {path: 'Home', component:TableComponent },
  {path: 'Add', component:AddDialogComponent },
  {path: '404', component:ErrorpageComponent},
  {path: '**', redirectTo:'/404'}

];

const routing = RouterModule.forRoot(routes);

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }