import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"startpage", component:StartpageComponent},
  {path:"test", component:TestComponent},
  {path:"",redirectTo:"startpage",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
