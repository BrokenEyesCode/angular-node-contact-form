import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    public service: AppService,
    private router: Router
  ){}

  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    contact: new FormControl('email'),
    email: new FormControl('')
  });

  onSubmit() {
    this.service.postFormSubmit(this.contactForm.value).subscribe({
      next: (data) => {
       // this.formRespone = data
       this.router.navigate(['thankyou'])
      },
      error: (error) => {
        console.error("Form submission error", error)
    }})
  }
}
