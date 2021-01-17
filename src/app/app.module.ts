// ? ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// ? COMPONENTS
import { BookListComponent } from './components/book-list/book-list.component';

// ? PAGES
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BookInfoPageComponent } from './pages/book-info-page/book-info-page.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BookListComponent,
    BookInfoPageComponent,
    TopBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
