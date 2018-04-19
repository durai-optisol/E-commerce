import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseService {
  constructor(private http: Http) { }
 
  getForDropdown() {
    return this.http.get('/courses/dropdown-list').map((response: Response) => response.json());
  }
  getById(id: string) {
    return this.http.get('/courses/' + id).map((response: Response) => response.json());
  }
  create(course) {
    return this.http.post('/courses', course);
  }
}