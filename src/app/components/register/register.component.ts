import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const dados = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
    };

    console.log('Enviando dados de registro:', dados);

    this.http.post('http://localhost:3000/api/registro', dados).subscribe({
      next: (res: any) => {
        console.log('Registro bem-sucedido:', res);
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro ao registrar:', err);
        alert('Erro ao registrar. Tente novamente.');
      },
    });
  }
}
