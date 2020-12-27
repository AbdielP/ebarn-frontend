import { EstadisticasService } from 'src/app/services/estadisticas/estadisticas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferta-minmax',
  templateUrl: './oferta-minmax.component.html',
  styleUrls: ['./oferta-minmax.component.css']
})
export class OfertaMinmaxComponent implements OnInit {

  ofertaMax = '';
  ofertaMin = '';

  constructor(private statsService:EstadisticasService) { }

  ngOnInit(): void {
    this.maxOfert();
    this.minOfert();
  }

  private maxOfert() {
    this.statsService.selectMaxOfert().subscribe((resp: any) => {
      if (resp.ok) {
        this.ofertaMax = resp.max_ofert;
      }
    });
  }

  private minOfert() {
    this.statsService.selectMinOfert().subscribe((resp: any) => {
      if (resp.ok) {
        this.ofertaMin = resp.min_ofert;
      }
    });
  }

}
