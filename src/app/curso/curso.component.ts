import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {


  //Vetor de cursos
  vetor:Curso[] = [];

  //Objeto da classe Curso
  curso = new Curso();

  //Construtor
  constructor(private curso_servico:CursoService) { }
  
  //Inicializador
  ngOnInit() {
    
  }


    //Seleção
    selecao():void{
      this.curso_servico.obterCursos().subscribe(
        (res: Curso[]) => {
          
        }
      )
    }

    //Cadastro
    cadastro():void{
    alert("Cadastro");

    }

    //Alterar
    alterar():void{
      alert("Alterar");
    }

    //Remover
    remover():void{
      alert("Remover");
    }
  }


