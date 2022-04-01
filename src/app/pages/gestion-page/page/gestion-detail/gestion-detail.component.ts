import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-gestion-detail',
  templateUrl: './gestion-detail.component.html',
  styleUrls: ['./gestion-detail.component.scss']
})
export class GestionDetailComponent implements OnInit {

  @Input() newProduct: any;
  constructor() { }

  ngOnInit(): void {
  }

}
