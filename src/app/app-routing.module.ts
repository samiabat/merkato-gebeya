import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { ViewMyAdsComponent } from './components/view-my-ads/view-my-ads.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent }, 
  { path: 'sign-in', component: SignInComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }, // Privacy Policy route
  { path: 'terms-of-service', component: TermsOfServiceComponent }, // Terms of Service route
  { path: 'about-us', component: AboutUsComponent }, // Terms of Service route
  { path: 'profile', component: ProfileComponent },
  { path: 'my-ads/create', component: CreateAdComponent }, 
  { path: 'my-ads/view', component: ViewMyAdsComponent }, // Route for View My Ads
  { path: '**', redirectTo: '/' } // Redirect any other paths to the home route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
