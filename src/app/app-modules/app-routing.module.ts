import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppNewsComponent } from '../app-news/app-news.component';


const routes: Routes = [
  { path: '',  pathMatch: 'full', component: AppNewsComponent, data: { name: "entry"}},
  { path: 'home', component: AppNewsComponent, data: { name: "home"}},
  { path: 'about', loadChildren: () => import( '../pages/about/about.module').then(m => m.AboutModule) },
  { path: 'users', loadChildren: () => import( '../pages/user/user.module').then(m => m.UserModule) },
  { path: 'newsapp', component: AppNewsComponent, data: { name: "newsapp"}},
  { path: '**', redirectTo: '', data: { name: "redirect to entry"}}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
