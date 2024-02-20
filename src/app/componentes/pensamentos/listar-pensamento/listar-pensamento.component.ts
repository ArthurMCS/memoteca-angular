import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
   /*  {
      conteudo: 'I love React',
      autoria: 'Nay',
      modelo: 'modelo2'
    },
    {
      conteudo: 'I love Node',
      autoria: 'Nay',
      modelo: 'modelo1'
    } */
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
