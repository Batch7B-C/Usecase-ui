import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockquizService {

  private baseUrl = 'http://localhost:8099/Mockquiz/Mockquiz';
  constructor(private http:HttpClient) { }

  getAllMockquiz(): Observable<any> {
  
   return this.http.get(`${this.baseUrl}`+'/getAllMockquiz');
  
   }
   saveMockquiz(mockquiz: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'/saveMockquiz', mockquiz);
   
   }
   
    deleteMockquiz(qid: number): Observable<any> {
   
     return this.http.delete(`${this.baseUrl}/deleteMockquiz/${qid}`);
   
    }
   
   
   
    findOneInAll(qid: number): Observable<any> {
   
     return this.http.get(`${this.baseUrl}/findOneInAll4/${qid}`);
   
    }
   
   
   
    updateMockquiz(qid: number, value: any): Observable<any> {
   
     return this.http.put(`${this.baseUrl}/updateMockquiz/${qid}`, value);
   
    }
}
