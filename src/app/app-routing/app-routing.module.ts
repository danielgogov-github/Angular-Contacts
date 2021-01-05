import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactCreateComponent } from '../components/contact-create/contact-create.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';
import { ContactDestroyComponent } from '../components/contact-destroy/contact-destroy.component';
import { ContactUpdateComponent } from '../components/contact-update/contact-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'create', component: ContactCreateComponent },
  { path: 'update/:id', component: ContactUpdateComponent },
  { path: 'destroy/:id', component: ContactDestroyComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]  
})
export class AppRoutingModule { }
