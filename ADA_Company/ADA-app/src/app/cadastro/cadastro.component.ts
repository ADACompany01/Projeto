import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      // Lógica para salvar os dados pode ser adicionada aqui
      // Exemplo: enviar os dados para um serviço de API

      // Após salvar, redirecionar para a página de perfil
      this.router.navigate(['/meuacesso']);
    } else {
      // Exibir mensagens de erro ou marcar os campos inválidos
      this.cadastroForm.markAllAsTouched();
    }
  }
}
