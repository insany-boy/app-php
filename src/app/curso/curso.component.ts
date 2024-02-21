import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {


  //Vetor de cursos
  vetor:Curso[] = [];

  //Objeto da classe Curso
  curso = new Curso("", 0);
  http: any;
  url: string | undefined;

  //Construtor
  constructor(private curso_servico:CursoService) { }
  
  //Inicializador
  ngOnInit() {
    
  this.selecao();
    
  }


    //Seleção
    selecao():void{
      this.curso_servico.obterCursos().subscribe(
        (res: Curso[]) => { this.vetor = res; }
      )
    }

    //Cadastrar Cursdo
    cadastro(){
      this.curso_servico.cadastrarCurso(this.curso).subscribe(() => {

        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;

        this.selecao();
      }

      ) 
    }
       
    //Alterar
    alterar():void{
      alert("Alterar");
    }

    //Remover
    remover():void{
      
    }
  }


