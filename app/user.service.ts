import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8099/Mockquiz/UserPortal';
  constructor(private http:HttpClient) { }

  getAllusers(): Observable<any> {
  
   return this.http.get(`${this.baseUrl}`+'/getAllUsers');
  
   }
   saveUser(user: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'/saveUser', user);
   
   }
   
    deleteUser(username: string): Observable<any> {
   
     return this.http.delete(`${this.baseUrl}/deleteUser/${username}`);
   
    }
   
   
   
    findOneInAll(username: string): Observable<any> {
   
     return this.http.get(`${this.baseUrl}/findOneInAll/${username}`);
   
    }
   
   
   
    updateUser(username: string, value: any): Observable<any> {
   
     return this.http.put(`${this.baseUrl}/updateUser/${username}`, value);
   
    }
   
    findByUsernameAndPassword(username: string,password: string): Observable<any> {
   
      return this.http.get(this.baseUrl+'/findByUsernameAndPassword/'+username+'/'+password);
    
     }
}







