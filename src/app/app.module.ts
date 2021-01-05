import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDestroyComponent } from './components/contact-destroy/contact-destroy.component';
import { ContactUpdateComponent } from './components/contact-update/contact-update.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactCreateComponent,
    ContactListComponent,
    ContactDestroyComponent,
    FooterComponent,
    ContactUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
