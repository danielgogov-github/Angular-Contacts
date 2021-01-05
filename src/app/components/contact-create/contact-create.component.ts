import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  contact = {
    first_name: '',
    last_name: '',
    number: ''
  };
  error = {};
  submitted: boolean = false;

  constructor(
    private ContactsService: ContactsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    if(this.contact.first_name && this.contact.last_name && this.contact.number) {
      this.submitted = true;

      this.ContactsService.create(this.contact).subscribe(
        response => {
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        },
        error => {
          this.error = error;
          console.log(error);
        }
      );      
    }
  }
}
