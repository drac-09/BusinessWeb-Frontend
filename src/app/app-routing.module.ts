import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticarGuard } from './autenticar.guard';

// Importando Componentes
import { HomeComponent } from './components/home/home.component';
import { LoginBusinessComponent } from './components/login-business/login-business.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { RegisterBusinessComponent } from './components/register-business/register-business.component';


// Rutas de Navegacion
const routes: Routes = [
  {
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'login-business', 
    component: LoginBusinessComponent
  },
  {
    path: 'login-admin', 
    component: LoginAdminComponent
  },
  {
    path: 'register-business', 
    component: RegisterBusinessComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(x => x.AdminModule),
    canActivate: [AutenticarGuard]
  },
  {
    path: 'admin-companies',
    loadChildren: () => import('./components/business/business.module').then(m => m.BusinessModule),
    canActivate: [AutenticarGuard]
  },
  
  {
    path: '**', 
    redirectTo: '/home', 
    pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
