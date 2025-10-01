import { Component, OnInit } from '@angular/core';
import { Client } from '../clientClass';
import { CLientService } from '../client.service';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})

export class ClientFormComponent implements OnInit{

  clients : any[]=[];
  registerForm:FormGroup;

  constructor(private service: CLientService, private build: FormBuilder){}
 
  ngOnInit(){ this.registerForm=this.build.group({
      cname:[''],
      emailId:[''],
      pass:[''],
      repass:['']
    });
    this.loadclients();
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.addclient(this.registerForm.value);
    this.registerForm.reset();
    this.loadclients();
    
    return;
  }


  

  addclient (client: any){
    alert("Client registered : "+ client.cname);
    this.service.addClient(client).subscribe(()=>{this.loadclients();});
  }

  loadclients () {
    
    this.service.getAllClients().subscribe(client=>{this.clients=client});
  }


  deleteclient(i: number){
    this.service.deleteClient(i).subscribe(()=>{this.loadclients();});
  }
  
  updateclient(client: any,index : number){
    this.service.updateClient(client,index).subscribe(()=>{this.loadclients();});
  }


}
