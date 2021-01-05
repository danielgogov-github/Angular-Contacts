import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';
import { ContactInterface } from 'src/app/interfaces/contact-interface';

@Component({
  selector: 'app-contact-destroy',
  templateUrl: './contact-destroy.component.html',
  styleUrls: ['./contact-destroy.component.css']
})
export class ContactDestroyComponent implements OnInit {
  id: any;
  contact: ContactInterface;
  error = {};
  completed: boolean = false;
  deleted: boolean = false;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private Router: Router,
    private ContactsService: ContactsService
  ) { }

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.get(this.id);
  }

  get(id) {
    this.ContactsService.get(id).subscribe(
      response => {
        this.contact = response;
        this.completed = true;
      },
      error => {
        this.error = error;
        console.log(error);
      }
    );
  }

  destroy(id) {
    this.deleted = true;
    this.ContactsService.destroy(id).subscribe(
      response => {
        this.Router.navigate(['/']);
      },
      error => {
        this.error = error;
        console.log(error);
      }
    );
  }
}
