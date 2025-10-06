import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './clientClass';




@Injectable({
  providedIn: 'root'
})
export class CLientService {

  private url:string="http://localhost:3000/clients"

  constructor(private http: HttpClient ) { }

addClient(client : Client): Observable<Client>{
  return this.http.post<Client>(this.url, client);
}

getAllClients():Observable<Client[]>{
  return this.http.get<Client[]>(this.url);
}

getClient(index: number): Observable<Client>{
  return this.http.get<Client>(`${this.url}/${index}`);
}

deleteClient(index: number): Observable<void> {
 return this.http.delete<void>(`${this.url}/${index}`);
}
updateClient(client: Client, index: number): Observable<Client>{
  return this.http.put<Client>(`${this.url}/${index}`,client)

}

}
