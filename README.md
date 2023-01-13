# Hunter Times 
## Table of Contents
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Illustrations](#illustrations)
  - [Wins and Challenges](#wins-and-challenges)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Organizational Resources](#sources)
  - [Sources](#sources)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)
  - [Set Up](#setup)
## Introduction
  - This app uses the NYTimes API in order to make a site that you can come to for your daily news. The site allows users to see all the top stories from the day. A user can filter through the category of their choosing and view all article related to that category. A user can then see more details on the article and they have the option to view the article on the 
- [Hunter Times Deployed Link](https://ny-times-ten.vercel.app/)
## Technologies
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
## Illustrations


<img width="871" alt="Screen Shot 2023-01-13 at 9 11 13 AM" src="https://user-images.githubusercontent.com/102885322/212366529-40db3db8-9eb8-4b5d-a262-d47f9237a249.png">

![Screen Shot 2023-01-12 at 10 08 59 AM](https://user-images.githubusercontent.com/102885322/212140668-9803e567-5e19-49ac-b5f6-49854dd5ebdb.png)
![Screen Shot 2023-01-12 at 10 27 32 AM](https://user-images.githubusercontent.com/102885322/212140696-9fbd0a78-f90f-4ac3-93af-2952e51830c2.png)

## Wins and Challenges 
- The first area of code I was particularly proud of was my buttons on my nav bar. I wanted to ensure that none of the buttons would take you to a blank page because nothing is more frustrating for a user. So to mitigate this issue I built the buttons using the data, not hard coding them. This allows the buttons to change based on the articles for the day.<img width="415" alt="Screen Shot 2023-01-12 at 2 31 36 PM" src="https://user-images.githubusercontent.com/102885322/212363303-847be09b-144b-4c98-85c8-0ffcf0b8c8a3.png">
- A challegne for me was that some of the data didn’t contain an image link and the null reading would crash the app. I found a solution using a ternary operator.
<img width="563" alt="Screen Shot 2023-01-12 at 2 17 59 PM" src="https://user-images.githubusercontent.com/102885322/212364371-386cf59b-52a9-4736-b183-cec88d5e1b85.png">


## Features
  - As, a user, I should be able to navigate to a home page, 
  and view a list of todays top stories.
  - As a user, I should be able to click a story and be taken to 
  more details about the article. 
  - As a user, I should be able to be redirected to NY times to read
  the full article. 
  - As a user, I should be able to filter the articles by topic from 
  the buttons at the top. 
## Possible Future Extensions
  - Future extension would be testing the application using cypress.  
  - Future extension would change the Navbar to have hamburger icon when it is in mobile view. 

## Sources
![Screen Shot 2023-01-12 at 10 48 49 AM](https://user-images.githubusercontent.com/102885322/212141454-1eebe634-4c9f-4e21-8f8a-69d8e3715a56.png)
  - [WireFrame] (https://app.excalidraw.com/s/AsEhZ7AUEaU/9lNRDS6e7DD)
  - [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
  - [YouTube](https://www.youtube.com/watch?v=K0KQP7qfrYo)
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
  - [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
## Contributors
<h3>Hunter Monroe</h3>

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Hmonroe2/)

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hunter-monroe-035ab0188/)

## Project Specs
 - [Turing](https://mod4.turing.edu/projects/take_home/take_home_fe)
## Setup
After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo.

Then install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:3000/`. 


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/matthew-press-813961246/
[product-demo]: images/demo.gif
[JavaScript.com]: https://img.shields.io/badge/-JavaScript-yellow
[JavaScript-url]: https://www.javascript.com/
[w3.org/Style/CSS/Overview.en.html]: https://img.shields.io/badge/-CSS-blue
[CSS-url]: https://www.w3.org/Style/CSS/Overview.en.html
[w3.org]: https://img.shields.io/badge/-HTML5-red
[HTML-url]: https://www.w3.org/
[Mocha-url]: https://mochajs.org/
[https://mochajs.org/]: https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white
[Chai-url]: https://www.chaijs.com/
[https://www.chaijs.com/]: https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white
