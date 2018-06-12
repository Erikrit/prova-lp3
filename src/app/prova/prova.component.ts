import { Component, OnInit } from '@angular/core';
import { ProvaServiceService} from './prova-service.service';
import {Entity} from './entity'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {
      
  entityGrup:FormGroup



  constructor(private provaService: ProvaServiceService,
  private teste:FormBuilder
  ) { 

    


  }



  ngOnInit() {
    

  }


  salvar(){
    this.entityGrup = this.teste.group({

    })
    
    this.provaService.SalvarHeroes;
  }

  buscar(){
    this.provaService.BuscarHeroes

  }

}
