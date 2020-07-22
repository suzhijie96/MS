import { LiveComponent } from './live/live.component';
import { AddCameraComponent } from './add-camera/add-camera.component';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd'
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddCameraComponent,
    LiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NzLayoutModule,
    NzFormModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [ { provide: NZ_ICONS, useValue: icons } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
