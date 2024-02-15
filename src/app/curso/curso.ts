export class Curso {
   nomeCurso: string;
   valorCurso :number;
   idCurso?: number;
   
   constructor(nomeCurso: string, valorCurso: number, idCurso?: number){
      this.nomeCurso = nomeCurso;
      this.valorCurso = valorCurso;
      this.idCurso = idCurso;
   }
    
}