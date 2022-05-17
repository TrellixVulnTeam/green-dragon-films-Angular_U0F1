import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: ''}

  constructor(
    public userRegistrationService: UserRegistrationService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    localStorage.setItem('user', this.userData.Username);
    this.userRegistrationService.userLogin(this.userData).subscribe(
      result => {
        // localStorage.setItem('user', result.user.Username);
        localStorage.setItem('token', result.token);
        this.dialogRef.close(); 
        this.router.navigate(['movies']);
        this.snackBar.open(result, 'OK', {
           duration: 2000
        });
       }, (result) => {
         console.log(result)
         this.snackBar.open(result, 'OK', {
           duration: 2000
         });
       });
       
  }

}
