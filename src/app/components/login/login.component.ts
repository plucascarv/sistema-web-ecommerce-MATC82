import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    console.log('Função onSubmit chamada!');
    console.log('Dados enviados:', { email: this.email, password: this.password })
    
    const loginData = {
      email: this.email,
      password: this.password,
    };

    this.http.post('http://localhost:3000/api/login', loginData).subscribe({
      next: (res: any) => {
        console.log('Login bem-sucedido:', res);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Erro no login:', err);
        alert('Credenciais inválidas!');
      },
    });
  }
}
