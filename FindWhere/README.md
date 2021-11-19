<img src="https://raw.githubusercontent.com/Redwars22/Web2/main/FindWhere/findwhere_demo.png" width="800px"/>

# 🇧🇷 PORTUGUÊS
## 📙 INTRODUÇÃO
O FindWhere é uma aplicação web construída em Angular que, usando a API do Google Maps, localiza um lugar com base em sua latitude e longitude. Por padrão, ele exibe uma imagem de satélite.

## 🛠 FERRAMENTAS
Eu usei o [StackBlitz](https://stackblitz.com) como IDE para escrever o código da aplicação e testá-la, a API do Google Maps (que você pode obter [aqui](https://developers.google.com/maps) gratuitamente) e o [Firebase](https://console.firebase.google.com/) para hospedá-la.

## ⚙️ COMO FUNCIONA?
```typescript
getLatitude() {
    let latitude = (<HTMLInputElement>document.getElementById('lat')).value;
    return latitude;
  }

  getLongitude() {
    let longitude = (<HTMLInputElement>document.getElementById('long')).value;
    return longitude;
  }

  showMap() {
    let lat: string = this.getLatitude();
    let long: string = this.getLongitude();

    document.getElementById('map').innerHTML =
      '<iframe class="mapShow" src="https://www.google.com/maps/embed/v1/view?key=$API_KEY&center=' +
      lat +
      ',' +
      long +
      '&maptype=satellite&zoom=15" width="333" height="233" frameborder="0" style="border:0"/>';
  }
```

*Você deve substituir $API_KEY pela sua chave API, obrigatória, que pode ser obtida na página da API do Google Maps (link acima).*

## 🔗 LINKS IMPORTANTES
[🗂️ Código Fonte](https://github.com/Redwars22/Web2/tree/main/FindWhere)
[▶️ Executar online](https://findwhere-1d8b2.firebaseapp.com/?68662)

<hr/>

# 🇺🇸 ENGLISH
## 📙 INTRODUCTION
FindWhere is a web app built in Angular that uses the Google Maps API to locate a place based on its latitude and longitude. I shows a satellite image by default.

## 🛠 TOOLS
I used [StackBlitz](https://stackblitz.com) as an IDE to write my app's code and test it, the Google Maps API (you can get it [here](https://developers.google.com/maps) for free) and [Firebase](https://console.firebase.google.com/) to host it.

## ⚙️ HOW DOES IT WORK?
```typescript
getLatitude() {
    let latitude = (<HTMLInputElement>document.getElementById('lat')).value;
    return latitude;
  }

  getLongitude() {
    let longitude = (<HTMLInputElement>document.getElementById('long')).value;
    return longitude;
  }

  showMap() {
    let lat: string = this.getLatitude();
    let long: string = this.getLongitude();

    document.getElementById('map').innerHTML =
      '<iframe class="mapShow" src="https://www.google.com/maps/embed/v1/view?key=$API_KEY&center=' +
      lat +
      ',' +
      long +
      '&maptype=satellite&zoom=15" width="333" height="233" frameborder="0" style="border:0"/>';
  }
```

*You need to replace $API_KEY with your own key, which is required. You can get it from the Google Maps API website (link above).*

## 🔗 IMPORTANT LINKS
[🗂️ Source code](https://github.com/Redwars22/Web2/tree/main/FindWhere)
[▶️ Run online](https://findwhere-1d8b2.firebaseapp.com/?68662)
