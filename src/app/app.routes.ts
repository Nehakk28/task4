import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { DepartmentComponent } from './pages/department/department.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'contactus',component:ContactComponent},
    {path:'aboutus',component:AboutComponent},
    {path:'department',component:DepartmentComponent},
];
