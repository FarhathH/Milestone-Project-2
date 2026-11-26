# Amy Rose Dress-Up Game

## Project overview

This README contains the overall development of the [Amy Rose Dress-Up game](https://farhathh.github.io/Milestone-Project-2/index.html) website. This project focused on a simple interactive dress-up game. I had used Amy Rose from the Sonic the Hedgehog franchise and to avoid copyright, I will not ever charge money for this. There are several outfits to drag and drop. You can apply different styles of makeup as well. You should be able to access the game by clicking the deployed link.

## Purpose

### Developer goals:
I wanted to produce a cute and bubbly genre of games that you would typically find on the [GirlsGoGames](https://www.girlsgogames.co.uk/) website. For some women, this can be nostalgic if you have played these types of games before. This was a great opportunity to practice the use of JavaScript DOM/jQuery.

### User goals:
The users are looking to play a game that fits their aesthetic preferences. They may want to experiment with different styles to share with their friends.

### Target Audience
The main demographic audience are the rough age groups of 5-12 year old girls. Though girls in their early and late teens can play it too. The theme and aesthetic of the game is based on the type of dress up games the average demographic of girls played or had available during the 2000s-2010s.

## UX-Design
This was the stage where I needed to be able to stick to a layout and design that is simple enough for the younger audience to be able to figure out where to navigate and where to go. The structure was short and simple. I just kept note of what was important to include in the game with the amount of time I had. The business side of things weren’t too much of a bother as this game was for fair use.

### Strategy
At this stage, I had to be able to put some thought into how the game would be executed. I thought about the type of outfits that Amy could wear and the context for this. Based on the target demographic. I had to be mindful of the type of outfits worn by her. At this stage I had tried to brainstorm typical outfits that teens of the y2k period could potentially wear. The mood board was created to help with inspiration.

![Mindmap of my rough strategy](https://github.com/user-attachments/assets/5598773f-466f-40dd-861e-327fdfc74777)

![Y2K themed mood board for inspiration](https://github.com/user-attachments/assets/fb23241c-c5e8-4663-9212-a6ffbeb202d2)

### Structure
This was the information architecture for the game that I planned on doing. There were some parts that I had left out. I had originally made this in mind of having additional features along with the basic features for a complete game. Although I had some ideas in mind for the menu, characters and extra accessories. I did prioritise the main features that would be used for this structure e.g. menu, outfit selection and results.

![The information architecture for the dress-up game](https://github.com/user-attachments/assets/8b71ee34-dfe0-47a4-ac96-80416e04b0b8)

### Skeleton
These are some rough sketches of how the layout of the game was supposed to look. In the earlier concepts. Amy Rose would have a half-body pose in the title screen. This did change to a floating chibi head to work around my own time management. This way I could implement the visual assets while saving some time. Most of the wireframes include the important features such as having a main menu and navigating to the dress up screen, the user being able to see outfits and Amy Rose trying on those outfits with the results screen. I never included an options screen since I was short on time. I treated that as an optional feature.

[Main menu wireframes](https://github.com/user-attachments/assets/2edf40f0-e6c3-4b77-9d1f-7e453c43a465)

[Dress Up screen wireframes](https://github.com/user-attachments/assets/5f13ab2c-626c-4470-a4fd-acf28973d560)

[Results screen](https://github.com/user-attachments/assets/661f88db-73be-4d8f-8134-e58a04f4a425)

### Scope
Having to work with limited time has helped me to prioritise getting the bare minimum criteria out of the way. Initially, I had bigger plans for it, but to have the playable version ready. I wanted to make this to remind myself that it was important to be able to have the user interact and get something out of the experience than have extra perks and lose sight of what was important. It helped me to take into account what I could include if I had completed the basic features earlier in advance.

![table of what to prioritise and what to leave out based on objectives](https://github.com/user-attachments/assets/eaa4864f-1b92-4438-946c-ec55b07caac1)

### Surface
When it came down to the polished look. I wanted the theme to align with the character herself. Amy Rose can be bubbly and sweet so I assumed that a font like ‘Cherry Bomb One’ matched the bubbly side of her rather well. That was selected for the title. The font ‘Unkempt’ was used for the rest of the content as it is still more carefree in comparison to a . As far as the colour choice goes. I tried to go with various shades of pink, purple and red to make it clear that this game is focused on Amy Rose. I thought that by implementing roses in the background Amy shares the same surname as the name of the flower itself.

## User Stories
1. **"As a 8 year old who wants to play cute dress up games. I want the game to have all kinds of clothes and stuff so that I can explore styles and try new ones."**
* Good new was that I was able to complete this by:
  * Illustrating some outfits for the user to try out.
  * The start button navigates to the character in her undergarments ready to be dressed.
* Bad news was that:
  * Rendering the outfits did result in me losing time so there were only around four outfits to select in total which gives it less re-playability.
  * I managed to upload one of my own rendered images for copilot to generate an image of Amy Rose in a y2k style outfit. It produced a nice looking design, but had a completely different style so I never really used it.

2. **"As a year-7 student, I just wanted to look for a simple game that I can play on my mobile phone so that I don’t have to wait until I get home to play."**
* For a younger student, they probably wanted to play on their phone during break or lunchtime. The website had been tested for different screen sizes.
* The user will have an easier time playing the game on their phones as I double checked that the content is readable and the user can interact with it.

3. **"As a young adult, I prefer to play these types of games with the visuals reminiscent of the Y2K era for nostalgic purposes."** 
* Due to time constraints from poor work management. I had prioritised getting the main objectives completed firs

## Design
[Include concept designs]

## Features
* Main menu
  * Start button:
    * Users can click this button to begin.
* Dress-Up screen
  * Selection of clothes
* Results
  * Users can see Amy with the outfit of their picking.
  * Users can select whether to try again or go back to the main menu.
 
## Responsive Design
At the beginning, I had tried to get the grid setup so that I had an easier time with adding important content later. From the beginning, I was a bit ambitious in how the game would be portrayed. Most of the official look for the webpages was more or less similar to the old wireframes. However, there were a few differences. The main menu has a profile of Amy instead of the whole body to save time. The dress up screen was adjusted so that the outfits menu was separated from Amy so that it doesn’t cut off the lower half of her body. 

![The wireframes](https://github.com/user-attachments/assets/477f1180-6fbe-465e-9d83-e7553708b8cb)

At the first iteration of the game, it started off with the bare bones version of the web pages. I made sure to lay out the rough structure to put in the content later. I had used my wireframes as a reference for how the layout should work. I did label the boxes based on what content goes in there. I created the grey grids to plan out the layout before applying the main theme for the game.

![The beginning of the responsive designs](https://github.com/user-attachments/assets/d8e476f5-80b5-4309-a7e2-ace6f5d7d164)

Once I had double checked that the layout was responsive in all screen sizes, I had just finished rendering Amy’s sprite and a few outfits. I placed some buttons for the user to interact with when they want to change how she looks. At this stage, my main content was implemented and I was confident on the layout that I had hidden the layout grid colours to check on how it appeared at the time.

![The updated version of the responsive designs](https://github.com/user-attachments/assets/31719740-f9e6-4bdb-89c2-874585b878de)

## Accessibility
When I was closer to my deadline, I had double checked the main background samples created earlier and used the WebAIM Contrast checker. Most of my own samples had a low contrast ratio. I initially made some samples of the main background. Most of the images in my web game have captions for the screen reader. Some of the main samples were made to check the contrast between the rose and each shade of light blue, dark blue, pink and yellow. Each time I compared the colours with the rose, each contrast ratio was too low. I ended up experimenting with lightness and darkness until I managed to find the appropriate contrast ratio as shown below.

![Exploring and comparing colour patches for my webpage.](https://github.com/user-attachments/assets/64c6b0c7-b71c-45f8-9d10-a52f8f979037)

Once I managed to find a colour scheme that was accessible-friendly. I started editing the rose background image to have the colour scheme with a stronger colour contrast and applied it as a repeated background image with CSS.

![Webpages with the colour scheme that I picked](https://github.com/user-attachments/assets/8e129a3f-18d1-4c75-af2a-927b3c6d8aaa)

## Testing → Bugs and Fixes
I had decided to display the test results and solutions in a table rather than dozens of screenshots. I wanted to keep the tests, bugs and solutions tidied up so that other people could read up on what features were tested, the flaws they displayed and the solutions that I eventually found for each of them. Some of these were manual tests and some were done through HTML/CSS checker and lighthouse.

![testing results page 1](https://github.com/user-attachments/assets/08378a4b-04c6-4f7a-bb3d-2c11b22247db)
![testing results page 2](https://github.com/user-attachments/assets/3eadad77-0a18-49b7-81c0-99e81cde541f)
![testing results page 3](https://github.com/user-attachments/assets/05c1edc6-bc5b-4eb3-9466-c1cd124b686d)

## Deployment
This project was made using VS Code and committed with GitHub Desktop majority of the time. Here are the steps to deploy the website on your own (if you already have the repository).
1. **Login** to the GitHub website
2. From the **list of repositories**, select **FarhathH/Milestone-Project-2**.
3. From the list of menu items **below the repository name**, select **Settings**
4. At the side menu in the Code, **planning and automation**, select the **Pages tab** to get to the GitHub Pages section.
5. With the **sources drop-down menu**, make sure that **Deploy from a branch** is selected.
6. Underneath the **sources tab**, click the drop-menu with none. Select and change it **master-branch**.
7. The page should refresh and there should be a **live link** of the deployed site.
8. **Retrieve** the link to the deployed website.

If you don’t have the repository yet, you will need to follow these steps to clone the repository first.
1. **Click** this [link](https://github.com/FarhathH/Milestone-Project-2) to find the GitHub repository
2. Under the repository **click** the Code button and **copy** the HTTPS web URL.
3. In your local IDE **open** Git Bash.
4. **Change** the current directory where you want the cloned repository to be.
5. **Type** git clone and **paste** the URL you copied in step 3.
6. The repository is ready for you to view, edit and make commits.


## Credits

### Code
* JavaScript/jQuery:
  * Most of the JavaScript Coding was implemented using [jQuery](https://api.jquery.com/) library and documentation as guidelines for implementing interactive elements via your computer mouse.
  * [W3schools](https://www.w3schools.com/html/html5_draganddrop.asp) for documentation and referencing the click and drag functions as well as other JavaScript coding.
  * Also took the page linking method from [W3School doc website](https://www.w3schools.com/howto/howto_js_redirect_webpage.asp).
* HTML/CSS:
  * Main interfaces created from basic HTML5 and [Bootstrap](https://getbootstrap.com/docs/6.0/getting-started/install/) with some my my own custom CSS.
### Content
* The concept of a dress-up game isn’t exactly unique, but I want to explore this genre with Amy Rose. Either she’s dressing up for a date, a fashion audition or discovering a new look.
* Amy Rose, clothes and accessories sprites created by myself via [GIMP](https://www.gimp.org/).
* Y2K mood board (credit for all the images used):
  *   Images of the two Japanese women in alternative fashion were taken from [TBD Tuyên](https://www.pexels.com/@tbd-tuyen-859104985/).
  *   The images of a woman in a pink top and denim skirt and the woman with the black and purple top were taken from [Yaritza](https://www.pexels.com/@yaritza-226643218/).
  *   The image of the woman wearing pink sunglasses, mini top and jeans were taken from [The Earthy Jay](https://www.pexels.com/@the-earthy-jay-380084919/).
  *   The image of the yellow flip phone was taken from [Frank Schrader](https://www.pexels.com/@franki-frank/).
  *   Image of a drag artist wearing a pink cowboy hat, pink t-shirt, baggy jeans and long sleeve gloves was taken from [SLAYTINA's pexel page](https://www.pexels.com/@slaytinaaaa/).
  *   The image of a pile of early smartphones and older iPod devices were taken from [Skyler Ewing](https://www.pexels.com/@skyler-ewing-266953/).
  *   The image of CD's and a CD player were taken from [Odin Reyna](https://www.pexels.com/@odin-reyna-383507/).
 
### Media:
* Created the favicon icon by placing my own rendered .png and converted it into a .ico image with [Favicon Generator](https://realfavicongenerator.net/).
* Gathered suitable colour scheme through the [WebAIM Contrast checker](https://webaim.org/resources/contrastchecker/).
* Everything produced was used with VS Code, GIMP etc.
* Fonts taken from [Google Fonts](https://fonts.google.com/selection):
  * Cherry Bomb One (for the main headings)
  * Unkempt (For general text) 

## Future Features
* Music volume settings
  * Users can adjust the volume.
  * They can select different soundtracks related to the character.
* Quality settings
* Character selection
* Options:
    * Users can edit audio/resolution quality.
* Make-up palettes
    * Accessories such as jewellery, shoes etc.


