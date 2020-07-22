import { LiveComponent } from './live/live.component';
import { AddCameraComponent } from './add-camera/add-camera.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Index', component: DashboardComponent },
  { path: 'AddCamera', component: AddCameraComponent},
  { path: 'Live', component: LiveComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
