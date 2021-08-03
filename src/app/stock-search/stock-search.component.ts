import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent implements OnInit {

  @Output() requestedStock = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  stockSearch(stock: string): void{
    this.requestedStock.emit(stock);
  }
}
