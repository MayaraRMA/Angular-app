import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { EstadoBr } from './../models/estado-br.model';
//import { Cidade } from '../models/cidade';
import { map } from '../../../../node_modules/rxjs/operators';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) {}

  //getEstadosBr() {
  //  return this.http.get('assets/dados/estadosbr.json')
  //  .map((res: Response) => {
  //      res.json()
  //  })
  //}

}