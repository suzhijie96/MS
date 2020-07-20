import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
