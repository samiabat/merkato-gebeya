import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FlashSalesComponent } from './components/flash-sales/flash-sales.component';
import { BrowseCategoryComponent } from './components/browse-category/browse-category.component';
import { BestSellingProductsComponent } from './components/best-selling-products/best-selling-products.component';
import { ExploreProductsComponent } from './components/explore-products/explore-products.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FlashSalesComponent,
    BrowseCategoryComponent,
    BestSellingProductsComponent,
    ExploreProductsComponent,
    FooterComponent,
    NewArrivalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
