import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';
import { RegisterComponent } from '../views/register/register.component';
import { ViewsModule } from '../views/views.module';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
]

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ViewsModule,
    RouterModule.forChild(routes)
  ],
})
export class LayoutModule { }
