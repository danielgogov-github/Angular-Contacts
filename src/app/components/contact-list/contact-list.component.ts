import { Component, OnInit } from '@angular/core';
import { ContactInterface } from 'src/app/interfaces/contact-interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: ContactInterface;
  completed: boolean = false;
  error = {};

  constructor(private ContactsService: ContactsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.ContactsService.getAll().subscribe(
      response => {
        this.contacts = response;
        this.completed = true;
      },
      error => {
        this.error = error;
        console.log(error);
      }
    )
  }
}
