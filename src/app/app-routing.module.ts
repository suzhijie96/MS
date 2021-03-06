import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LiveComponent } from './live/live.component';
import { AddCameraComponent } from './add-camera/add-camera.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'resetPwd', component: ResetPasswordComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'Index/:id', component: DashboardComponent,
    children: [
      { path: 'AddCamera', component: AddCameraComponent},
      { path: 'Live', component: LiveComponent},
  ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
