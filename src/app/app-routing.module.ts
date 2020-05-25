import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';

const routes: Routes = [
  {path: 'gry/en', component: MainPageComponent},
  {path: 'gry/tr', component: MainPageComponent},
  {path: 'grz/en', component: MainPageComponent},
  {path: 'grz/tr', component: MainPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
