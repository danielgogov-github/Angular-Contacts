import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactInterface } from 'src/app/interfaces/contact-interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {
  contact: ContactInterface;
  id: any;
  error = {};
  completed: boolean = false;
  submitted: boolean = false;

  constructor(
    private Router: Router,
    private ActivatedRoute: ActivatedRoute,
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
  
  update(id, data) {
    this.submitted = true;
    this.ContactsService.update(id, data).subscribe(
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
