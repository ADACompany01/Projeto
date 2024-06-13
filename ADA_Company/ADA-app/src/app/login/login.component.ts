import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  email = '';
  senha = '';
  mensagem = '';
  
  
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}
  
  ngOnInit(): void {

  }
  
  login(): void {
    if(this.authService.login(this.email, this.senha)){
        this.router.navigate(['/meuacesso']);
        
     
    } else {
      // Mensagem de erro
      this.mensagem = "Credenciais inválidas. Tente novamente!";
    }
  }

  preventDefault(event: Event) {
    event.preventDefault();
  }
}

 

