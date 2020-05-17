# covid19tokyo.live
Website for tracking covid19 cases in the greater Tokyo area. Developed by 3 college students to better understand the numbers behind the coronavirus outbreak in Tokyo. 
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

   - The purpose of js files are as follows
     -`js/translate.js` is used to translate the files to Japanese and English, respectively.
     -`js/index.js` is used to initialize all the data arrays used in the charts.
     -`js/summary.js` initalizes the "summary" card of the site.
     -`js/util.js` contains various methods used in creation of the map.
     -`js/news.js` fetches news data from the Tokyo government and displays them on the "News" card.
     -`js/charts` directory contains all the charts used in the site.
  
   -`css/style.css` contains all the styling used for elements throughout the website.
   - `./data` stores some data used in the website in JSON format.
     - `cases.json` contains data of cases by ward.
     - `deaths.json` stores the count of deaths by day, starting from 01-24-20.
     - `discharged.json` stores the count of discharges by day, starting from 03-27-20.
    
   




## Features
covid19tokyo features a range of data visualization elmenets, including:
### Summary



