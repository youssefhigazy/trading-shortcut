import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent implements OnInit {

  @Output() requestedStock = new EventEmitter<string>();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  stockSearch(stock: string): void{
    this.requestedStock.emit(stock);
    this.route.navigate(["/", stock]);
  }
}
