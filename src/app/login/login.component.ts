import { Component } from '@angular/core';
import { User } from '../model/User.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  user = new User();
  erreur = 0;

  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser) this.router.navigate(['/']);
    //alert('Login ou mot de passe incorrecte!');
    else this.erreur = 1;
  }
}
