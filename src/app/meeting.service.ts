import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  private url: string = "http://localhost:3000/meetings"

  constructor(private http: HttpClient) { }

  addMeeting(meeting: any): Observable<any> {
    return this.http.post<any>(this.url, meeting);
  }

  getAllMeetings(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getMeeting(index: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${index}`);
  }

  deleteMeeting(index: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${index}`);
  }

  updateMeeting(meeting: any, index: number): Observable<any> {
    return this.http.put<any>(`${this.url}/${index}`, meeting)
  }
}