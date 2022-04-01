import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [

  { path: '', pathMatch: "full", component: HomePageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'gestion', component: GestionPageComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
