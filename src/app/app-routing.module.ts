import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BankingComponent } from './features/banking/banking.component';
import { ClientsComponent } from './features/clients/clients.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'banking',
    component: BankingComponent,
    children: [
      {
        path: 'clients',
        title: 'Clients',
        component: ClientsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
