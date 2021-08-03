import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const TradingView: any;

@Component({
  selector: 'app-trading-charts',
  templateUrl: './trading-charts.component.html',
  styleUrls: ['./trading-charts.component.scss']
})

export class TradingChartsComponent implements OnInit {
  searchedStocks: string[];
  searchedStocksLocalStorage: any;
  searchedStocksLocalStorageParsed: string[];
  ar_chart: any;
  en_chart: any;

  constructor() { }

  ngOnInit(): void {
    this.searchedStocks = [];
    this.searchedStocksLocalStorage = localStorage.getItem("searchedStocks");
    this.searchedStocksLocalStorageParsed = JSON.parse(localStorage.getItem("searchedStocks"));
    this.ar_chart = document.querySelector(".ar-chart");
    this.en_chart = document.querySelector(".en-chart");
  }

  stockChart(requestedStock: string): void {
    let language = "en";

    if (this.ar_chart.checked) language = "ar_AE";
    else language = "en";
    
    try {
      new TradingView.widget(
        {
            "width": 1300,
            "height": 850,
            "symbol": requestedStock,
            "interval": "1",
            "timezone": "America/Chicago",
            "theme": "dark",
            "style": "1",
            "locale": language,
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "withdateranges": true,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "studies": [
                "Stochastic@tv-basicstudies",
                "RSI@tv-basicstudies"
            ],
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650",
            "container_id": "tradingview_3a114"
        }
        ); 

        this.addToStockList(requestedStock);
      } catch (error) {
    }
  }

  addToStockList (stock: string): void {
    if (JSON.parse(this.searchedStocksLocalStorage)) this.searchedStocks = JSON.parse(this.searchedStocksLocalStorage);
    if (this.searchedStocks.includes(String(stock).toUpperCase())) return;

    this.searchedStocks.push(String(stock).toUpperCase());
    localStorage.setItem("searchedStocks", JSON.stringify(this.searchedStocks));
    this.updatingLocalStorage();
  } 
  
  removeStockFromHistory(index: number): void {
    let newLocalStorage: string[]; 
    newLocalStorage = JSON.parse(localStorage.getItem("searchedStocks"))
    newLocalStorage.splice(index, 1);
    
    localStorage.setItem("searchedStocks", JSON.stringify(newLocalStorage));

    this.updatingLocalStorage();
  }

  clearSearchHistory(): void{
    localStorage.removeItem("searchedStocks");
    window.location.reload();
  }

  updatingLocalStorage(): void{
    this.searchedStocksLocalStorage = localStorage.getItem("searchedStocks");
    this.searchedStocksLocalStorageParsed = JSON.parse(localStorage.getItem("searchedStocks"));
  }
}
