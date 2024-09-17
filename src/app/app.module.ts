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
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SecondNavComponent } from './components/second-nav/second-nav.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { ViewMyAdsComponent } from './components/view-my-ads/view-my-ads.component';
import { HomeComponent } from './components/home/home.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

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
    NewArrivalsComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    AboutUsComponent,
    SignInComponent,
    SignUpComponent,
    SecondNavComponent,
    CartComponent,
    WishlistComponent,
    ProfileComponent,
    CreateAdComponent,
    ViewMyAdsComponent,
    HomeComponent,
    ProductFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
