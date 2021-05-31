# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

# Zadání

V Javascriptu (ES2015+), nejlépe za pomocí frameworku React, vyrobte jednoduché uživatelské rozhraní
pro výpočet dýška. Uživatelské rozhraní se bude skládat z hlavního okna, ve kterém budou 3 vstupní
políčka - "Částka na účtu", "Kvalita obsluhy" a "Kolik lidí se dělí o účet". Kvalita obsluhy bude
mít možnosti:

- Špatná (2%)
- Dobrá (10%)
- Perfektní, jsem nadšený (15%)

Čísla v závorce říkají, jaké procento z částky bude kalkulačka přičítat k původnímu účtu. Za každého
dalšího člověka, který se na účtu podílí pak připočtěte konstantní částku podle vlastního uvážení a
výslednou hodnotu zaokrouhlete na desítky nahoru. Podoba formuláře, výpočet a styl zápisu kódu je
čistě na Vás.

### Příklad vstupu #1
- Částka na účtu: 500, Obsluha: Dobrá, Počet lidí: 2 (Za každého člověka navíc: 10)
- Výstup: 560

### Příklad vstupu #2
- Částka na účtu: 340, Oblusha: Špatná, Počet lidí: 1 (Za každého člověka navíc: 10)
- Výstup: 350
