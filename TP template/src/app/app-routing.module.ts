import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ValidationComponent } from './validation/validation.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'sign up', component: SignupComponent },
  { path: 'sign in', component: AuthComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, //composant par défaut
  { path: '**', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
