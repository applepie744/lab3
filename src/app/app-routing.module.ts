import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataTableComponent } from './entities/components/data-table/data-table.component';
import { HomeComponent } from './entities/components/home/home.component';


export const routes: Routes = [
  {path: 'page1', component: HomeComponent},
  {path: 'page2', component: DataTableComponent},
  {path: '', redirectTo: '/page1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
