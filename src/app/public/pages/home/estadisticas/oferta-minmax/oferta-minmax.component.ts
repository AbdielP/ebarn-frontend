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

  constructor(private statsService: EstadisticasService) { }

  ngOnInit(): void {
    this.maxOfert();
    this.minOfert();
  }

  private maxOfert(): void {
    this.statsService.getStatistics('sp_select_max_precio_oferta()').subscribe((resp: any) => {
      if (resp.ok) {
        this.ofertaMax = resp.ofert_stats;
      }
    });
  }

  private minOfert(): void {
    this.statsService.getStatistics('sp_select_min_precio_oferta()').subscribe((resp: any) => {
      if (resp.ok) {
        this.ofertaMin = resp.ofert_stats;
      }
    });
  }

}
