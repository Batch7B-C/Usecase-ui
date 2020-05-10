import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice:UserService) { }
  
   user : User=new User();
   submitted = false;
 selectedFiles: FileList;
   ngOnInit() {

    var username=window.localStorage.getItem("edit-username");
  if(username!=null && username!=""){
    this.userservice.findOneInAll(username)
  
      .subscribe(
  
       data => {
  
        this.user =data;
  
        this.usersaveform.setValue(this.user);
  
       }) ;
  
  
  
    this.submitted = false;
  
   }}
   selectFile(event) {

   }   
  
   usersaveform=new FormGroup({
  
    username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  
    password:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),

    //confirm:new FormControl('' , [Validators.required ] ),
  
    email:new FormControl('',[Validators.required,Validators.email]),
  
   // usertype:new FormControl('',[Validators.required])
   });
  
  
  
   saveUser(saveUser){
  
    this.user=new User();
  
    this.user.username=this.Username.value;
  
    this.user.password=this.Password.value;
  // this.user.confirm=this.Confirm.value
    this.user.email=this.Email.value;
   //this.user.usertype=this.Usertype.value;
    this.submitted = true;
    this.save();
  }
    
 
   save() {
  
    this.userservice.saveUser(this.user)
  
     .subscribe(data => console.log(data), error => console.log(error));
  
    this.user = new User();
    window.localStorage.removeItem("edit-username");
   }
  
   get Username(){
  
    return this.usersaveform.get('username');
  
   }
   get Password(){
  
    return this.usersaveform.get('password');
  
   }
   get Confirm(){
  
    return this.usersaveform.get('confirm');
  
   }
  
   get Email(){
  
    return this.usersaveform.get('email');
  
   }
  
   get Usertype(){
  
    return this.usersaveform.get('usertype');
  
   }
  
   saveUserForm(){
  
    this.submitted=false;
  
    this.usersaveform.reset();
  
   }

}
