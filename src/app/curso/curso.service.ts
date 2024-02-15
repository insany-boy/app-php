import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  //URL
  url = "http://localhost/api/php/";

  //Vetor
  vetor:Curso[] = [];
  //Construtor
  constructor(private http: HttpClient) { }

  //Obter todos os cursos
  obterCursos(): Observable<Curso[]>{
      return this.http.get<Curso[]>(this.url+"listar")
    }

    //Cadastrar curso
    cadastrarCurso(c:Curso): Observable<Curso[]>{
      return this.http.post<Curso[]>
      (this.url+"cadastrar")
      }
    }
  }


5