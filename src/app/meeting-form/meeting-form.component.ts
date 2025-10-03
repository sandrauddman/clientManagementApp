import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CLientService } from '../client.service';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css']
})
export class MeetingFormComponent implements OnInit{

    meetings: any[]=[];
    clients : any[]=[];
    meetingForm:FormGroup;
  
    constructor(private service: MeetingService, private meetbuild: FormBuilder, public clientservice: CLientService){}
   
    ngOnInit(){ this.meetingForm=this.meetbuild.group({
        meetname:[''],
        clientId:[''],
        date:[''],
        time:['']
      });
      this.loadclients();
      this.loadmeetings();
      
    }
  
    get form(){
      return this.meetingForm.controls;
    }
  
    onSubmit(){
      this.addmeeting(this.meetingForm.value);
      this.meetingForm.reset();
      
     
      
      return;
    }
  
  
    loadclients () {
    
    this.clientservice.getAllClients().subscribe(client=>{this.clients=client});
  }
  
    addmeeting (meeting: any){
      alert("Meeting booked : "+ meeting.meetname);
      this.service.addMeeting(meeting).subscribe(()=>{this.loadmeetings();});
    }
  
    loadmeetings() {
      
      this.service.getAllMeetings().subscribe(meeting=>{this.meetings=meeting});
    }
  
  
    deletemeeting(i: number){
      this.service.deleteMeeting(i).subscribe(()=>{this.loadmeetings();});
    }
    
    updateclient(client: any,index : number){
      this.service.updateMeeting(client,index).subscribe(()=>{this.loadmeetings();});
    }
  
  
  }
