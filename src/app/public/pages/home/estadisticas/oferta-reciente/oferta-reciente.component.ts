import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas/estadisticas.service';

@Component({
  selector: 'app-oferta-reciente',
  templateUrl: './oferta-reciente.component.html',
  styleUrls: ['./oferta-reciente.component.css']
})
export class OfertaRecienteComponent implements OnInit {

  ofertaReciente = '';
  storedP = 'sp_select_max_oferta()';

  constructor(private statsService: EstadisticasService) { }

  ngOnInit(): void {
    this.recentOfert();
  }

  recentOfert() {
    this.statsService.getStatistics(this.storedP).subscribe((resp: any) => {
      if (resp.ok) {
        this.ofertaReciente = resp.ofert_stats;
      }
    });
  }

}
