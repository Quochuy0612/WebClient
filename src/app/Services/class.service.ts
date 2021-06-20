import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(
    private webReqService: WebRequestService,
    private http: HttpClient
  ) { }

  getLevel() {
    return this.webReqService.get('Levels');
  }

  getClass(_id: string) {
    return this.webReqService.get(`Levels/${_id}`);
  }
  
  updateTeacher(classId: string, lecturers: string) {
    return this.webReqService.put(`classes/${classId}`,{lecturers});
  }

  getClassDetail(){
    return this.webReqService.get('Classdetails');
  }
  signupToLearn(studentId: String, qty: Number, classId: String){
    return this.webReqService.put(`Classdetails/${classId}`, {studentId, qty});
  }
  createClassDetail(classId){
    return this.webReqService.post(`Classdetails/${classId}`,null);
  }
  
}
