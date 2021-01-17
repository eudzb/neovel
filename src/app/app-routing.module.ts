import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from '../app/pages/main-page/main-page.component';
import { BookInfoPageComponent } from '../app/pages/book-info-page/book-info-page.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'book-info/:bookId', component: BookInfoPageComponent },
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
