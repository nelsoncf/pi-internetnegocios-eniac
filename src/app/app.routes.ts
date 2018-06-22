import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {MarcasComponent} from './marcas/marcas.component'
import {MarcaDetailComponent} from './marca-detail/marca-detail.component'
import {MenuComponent} from './marca-detail/menu/menu.component'
import {ReviewsComponent} from './marca-detail/reviews/reviews.component'
import {OrderSummaryComponent} from './order-summary/order-summary.component'
import {NotFoundComponent} from './not-found/not-found.component'
import { LoginComponent } from './security/login/login.component'
import { LoggedInGuard } from './security/loggedIn.guard';
import { RegistroComponent } from './registro/registro.component';
import { AdminComponent } from './admin/admin.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login/:to', component: LoginComponent},
  {path: 'login/', component: LoginComponent},
  {path: 'marcas/:id', component: MarcaDetailComponent,
  children: [
    {path: '', redirectTo: 'menu', pathMatch: 'full'},
    {path: 'menu', component: MenuComponent},
    {path: 'reviews', component: ReviewsComponent}
  ]},
  {path: 'marcas', component: MarcasComponent},
  {path: 'order', loadChildren: './order/order.module#OrderModule',
    canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'sobre', loadChildren: './about/about.module#AboutModule'},
  {path: 'registro', component: RegistroComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: NotFoundComponent}

]
