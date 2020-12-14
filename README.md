<img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0;">

# Tiles Memory Game

Welcome to my simple memory game created using HTML5, CSS and Javascript! This is a 
short yet effective way at putting your brain to the test. Within the game, there are 
different difficulties to choose from. This allows players to enjoy the game at an 
intensity level that suits their own gaming style.

I want players to have a hassle free experience on my site when dealing with playing, 
navigating or sending support emails. Creating a full list of instructions, call to 
action buttons and a simple yet effective form with Javascript has made this all possible.

## Design Process 

When i initally thought about creating a memory game, I sketched some ideas down on paper. 
My original design was going to be 3 pages consisting of a home page (with the game on it), 
how to play page and a support page. After using the Javascript language and really 
getting a feel for how it bonds to a web page, I was able to impliment 2 more pages along 
with multiple difficulty levels. My inital idea only included one difficulty level. But, 
once i got started with things I realised that users may prefer selectable intesity levels.

## User Experience

### User Stories

* I want to put my memory to the test.
* I want to be able to select different intensity levels.
* I want to be able to contact someone for support if needed.
* I want an easy navigation layout for the website.

These needs are met by;

* A simple yet effective memory game which will notify you upon completion.
* 3 different intensity levels allows the user the play at a rate they desire.
* A fully functional form on the support page.
* A simple yet effective navigation bar that will not break from clicking between pages in any order.

### Strategy Plane 

##### Website Goals;

* Supply a user with a fun, interactive memory game.
* Create an easy to use website.
* Use simple yet effective ways to impliment javascript for interactivity.
* Create a website that would be effective in all age groups.

### Scope Plane 

This website is designed over 5 pages. The home page contains 
call the action buttons for other pages will lure users too eplore 
the site with ease. The game pages access the DOM to change 
the layoud of the html when the user interacts with it. The support page 
uses EmailJS api to send a personal email with any data the user inputs in the fields.
The EmailJS templte is also fully customised for ease of use by the receiver.


### Structure Plane 

The aim of the structure is to allow users to navigate through the site with ease. 
The home page contains a description on what the site is about, how to play and how to 
get support if needed. Game pages have tiles that are outlined so that they are easy to see for the user.
The support page is structured so that the user can fill in their details easily with placeholder text to enusre they knwo where data goes.

### Skeleton Plane 

1. 5 different pages with easy access to all.
2. Tiles that change based on screen size for ease of use.
3. A burger navagtion icon for smaller screens.

### Surface Plane

When creating this project, I thought intensly about colours that would be good for user experience.
The colours for the main site are subtle coulours that go well together. The tiles 
had to be made with vibrant colours because the user will be playing a game in which they stimulate their mind. I want the user to feel as if they are on their feet while playing.

## Features

Burger icon - Easy navagtion for smaller devices where all pages may not fit onto the screen.

Call to action buttons - easy navigation for user from and to any page on the website.

Support from - a simple from which will allow any user to receive support upon completion.

An alert box - a alert box which informs the user of completion and temps them with the next level.

links to socials - easy to use icons at the bottom of every page for additional navagation/ support.

### Features left to implement

* A function which randomises the tile layout after completion.

* I would have liked to of chnaged the layoud of tiles for smaller devices.

* I had an issue with the burger icon not working just before completion which has not been resolved yet.

## Technologies used

[Bootstrap](https://getbootstrap.com/) - This is the framework I used to construct the website.

[Stack Overflow](https://stackoverflow.com/) - I used this as a resource of skils that I needed to learn e.g javascrip.

[W3Schools](https://www.w3schools.com/default.asp) - I used this as a resource for skills e.g Styling pieces of text.

[W3Docs](https://www.w3docs.com/) - I used this to learn how to style buttons and spans.

[Geeks for geeks](https://www.geeksforgeeks.org/) - I used this to learn different attributes for HTML.

[Site point community](https://www.sitepoint.com/community/) - I used this to learn how to style bootstraps grid system.

[Font awesome](https://fontawesome.com/v4.7.0/) - This was used to add icons into the footer for socials

[Google fonts](https://fonts.google.com/) - This website was used to add personality to my website

[EmailJS](https://www.emailjs.com/) - This was used for the api so that my form would work

## Testing

- Nav-bar - I have tested the nav bar on every page to make sure the links to the other pages work, no matter what order they are clicked in.
- Footer - Social links work in the footer on all pages.
- Tested all external links in footer to ensure they open a new tab for user experience purposes.
- Tested that all buttons work.
- Tested all buttons to ensure they work no matter what order they are pressed in.

## Issues 

- The burger icon for smaller devices stopped working right at the end of my project which I did not manage to fix in time.

### Validation

The W3C Markup Validator and the W3C CSS Validator were both used to validate every page of this project to ensure there were no syntax errors.

- Home - Pass
- Easy level - Pass
- Medium level -  Pass
- Hard level - Pass
- Support - Pass
- CSS - Pass


### Device testing

During my project, I consistently checked the websited compatibility with all device sizes to ensure the best user experience possible.
I ensured this by using Chromes built in developer tools.
This website works well on all device sizes although I did encounter some issues on mobile device size with the text overflow.

I had a number of work collegues/ friends trial the website out for feedback so that i could make improvments from early development stages
 regarding a users experience. 


#### Devices tested

- Moto G4
- Galaxy S5
- Pixel 2
- Pixel 2 XL
- IPhone 5/SE
- IPhone 6/7/8
- IPhone 6/7/8Plus
- IPhone X
- IPad
- IPad Pro
- Surface Duo
- Galaxy Fold

### Contact form

1. Go to support page
2. Try to submit empty form, a message will appear saying _Field required_

### Social Footer Links 

1. Click on icon to social platform
2. Page will open on a seperate tab to ensure the site is not lost

### Game Pages

1. Game onto game page and click the tiles faster than 225ms.
2. Tiles do not crash and game does not stop working.

