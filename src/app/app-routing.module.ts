import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { OneitemComponent } from './components/oneitem/oneitem.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';



const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: ListComponent},
  {path: "product/:productID", component: OneitemComponent},
  {path: "edit/:editID", component: EditComponent},
  {path: "create", component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
