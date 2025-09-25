import { Component } from '@angular/core';
import { Client } from '../clientClass';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {

  clients : Client[]=[];

  addClient (){
    
  }

  deleteClient(index: number){

  }
  
  updateClient(index : number){

  }


}
