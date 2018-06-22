import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {LocationStrategy, HashLocationStrategy} from '@angular/common'

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MarcasComponent } from './marcas/marcas.component';
import { MarcaComponent } from './marcas/marca/marca.component';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';
import { MenuComponent } from './marca-detail/menu/menu.component';
import { ShoppingCartComponent } from './marca-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './marca-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './marca-detail/reviews/reviews.component';

import { OrderSummaryComponent } from './order-summary/order-summary.component';

import {SharedModule} from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminComponent } from './admin/admin.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MarcasComponent,
    MarcaComponent,
    MarcaDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
    RegistroComponent,
    AdminComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
