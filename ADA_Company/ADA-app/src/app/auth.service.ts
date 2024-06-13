import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  private acessos = [
    {
      email: 'teste01@gmail.com',
      senha: 'senha1'
    },
    {
      email: 'teste02@gmail.com',
      senha: 'senha2'
    },
    {
      email: 'teste03@gmail.com',
      senha: 'senha3'
    },
  ];

  constructor() {
    if(this.isBrowser()){
      const storedAuth = sessionStorage.getItem('usuarioAutenticado');
      this.usuarioAutenticado = storedAuth === 'true';
    }
  }

  login(email: string, senha: string): boolean {
    this.acessos.forEach(acesso => { 
      if(acesso.email == email && acesso.senha == senha){
        this.usuarioAutenticado = true;
        sessionStorage.setItem('usuarioAutenticado', 'true');
        sessionStorage.setItem('usuarioAutenticado', 'true');
      }
    });
    if(!this.usuarioAutenticado){
      this.usuarioAutenticado = false;
      sessionStorage.setItem('usuarioAutenticado', 'false');
      }
    return this.usuarioAutenticado;
  }

  logout(): void{
    this.usuarioAutenticado = false;
    sessionStorage.removeItem('usuarioAutenticado');
  }

  isLoggedIn(): boolean {
    return this.usuarioAutenticado;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof sessionStorage !== 'undefined';
  }
}

