# [covid19tokyo.live](https://covid19tokyo.live/en/)
Website for tracking covid19 cases in the greater Tokyo area.
## Getting Started
To get this project up and running on your machine, follow these steps.
1. Start by cloning the repository.
```
git clone https://github.com/patilatharva/covid19tokyo.live.git
```
2. Install the server to run it on local.
```
npm i -g http-server
```
3. Run the server.
```
http-server
```
## Code Organization
- There are two main html that are displayed: 
  - `index.html`: the Japanese version
  - `en/index.html`: the English version of the site

- The purpose of the js files are as follows:
  - `js/translate.js` is used to translate the files to Japanese and English, respectively.
  - `js/index.js` is used to initialize all the data arrays used in the charts.
  - `js/summary.js` initalizes the "summary" card of the site.
  - `js/util.js` contains various methods used in creation of the map.
  - `js/news.js` fetches news data from the Tokyo government and displays them on the "News" card.
  - `js/charts` directory contains all the charts used in the site.

- `css/style.css` contains all the styling used for elements throughout the website.

- `./data` stores some data used in the website in JSON format.
  - `cases.json` contains data of cases by ward.
  - `deaths.json` stores the count of deaths by day, starting from 01-24-20.
  - `discharged.json` stores the count of discharges by day, starting from 03-27-20.
- `./images` contains all the image assets used in the website.
- `./assets` contains files of dependencies such as bootstrap.

## Data Sources
The data used in this website has been gathered from:
- [Press releases from the Bureau of Social Welfare and Public Health, Tokyo Metro. Govt.](https://www.fukushihoken.metro.tokyo.lg.jp/hodo/index.html)
- [Tokyo Open Data](https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068)
- [Tokyo Metro. Gov. Official COVID-19 Information Site](https://stopcovid19.metro.tokyo.lg.jp/)

## Built With
- [Bootstrap](https://getbootstrap.com/) - Front end framework.
- [Mapbox](https://www.mapbox.com/) - Provides responsive maps to use in web applications.
- [Charts.js](https://www.chartjs.org/) - Open source JavaScript charting library.

## Authors
- [Atharva Patil](https://github.com/patilatharva)
- [Rahul Joshi](https://github.com/rahuljoshi44)
- [Yoshiki Yarlagadda](https://github.com/y0shiki)
## License
This project is licensed under the MIT License. 
## Acknowledgments
Special thanks to [Mapbox](https://www.mapbox.com/) and [Google Cloud](https://cloud.google.com/gcp/?utm_source=google&utm_medium=cpc&utm_campaign=na-US-all-en-dr-bkws-all-all-trial-b-dr-1008076&utm_content=text-ad-none-any-DEV_c-CRE_115268617687-ADGP_Hybrid+%7C+AW+SEM+%7C+BKWS+%7C+US+%7C+en+%7C+BMM+~+Clouds+Google-KWID_43700010161690057-kwd-64595508764&utm_term=KW_%2Bclouds%20%2Bgoogle-ST_%2Bclouds+%2Bgoogle&gclid=CjwKCAjwwYP2BRBGEiwAkoBpAlJ15rBc-pSeBrcqWuwA8luX6rSgruz6bCpINjO5uCrLihJ4XRm_JBoCfZwQAvD_BwE) for supporting this website.
