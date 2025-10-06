import { Component, OnInit } from '@angular/core';
import { Client } from '../clientClass';
import { CLientService } from '../client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})

export class ClientFormComponent implements OnInit {

  clients: Client[] = [];
  registerForm: FormGroup;

  constructor(private service: CLientService, private build: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.build.group({
      cname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      pass: ['', [Validators.minLength(8), Validators.required]],
      repass: ['', [Validators.minLength(8), Validators.required]]
    });
    this.loadclients();
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.addclient(this.registerForm.value);
      this.registerForm.reset();
    } else {
      // mark all as touched so errors show up
      this.registerForm.markAllAsTouched();
    }
    return;
  }

  addclient(client: Client) {
    alert("Client registered : " + client.cname);
    this.service.addClient(client).subscribe(() => { this.loadclients(); });
  }

  loadclients() {
    this.service.getAllClients().subscribe(client => { this.clients = client });
  }
  
  deleteclient(i: number) {
    console.log(" number" + i);
    this.service.deleteClient(i).subscribe(() => { this.loadclients(); });
  }

  updateclient(client: Client, index: number) {
    this.service.updateClient(client, index).subscribe(() => { this.loadclients(); });
  }


}
