1. Key project information
    This project is a music triva game based off of MIDI replicas of well known songs which I call MIDI Melody Mayhem. It is a set of 10 questions (currently) that are about the song you hear playing.
2.Table of content
1. Key project information
2. Table of content
3. Features
4. Testing
5. Deployment
6. Technologies and credits

3.1. Features used in HTML document
We have welcome message div with a start button with the game waiting to be played underneath

3.2. Main HTML document
Game Page
File : index.html

3.3. Existing Features summary
Once the start game button is pressed the welcome div will disappear from view and the MIDI file corresponding to the question will begin to play after a few moments. if the user wishes to stop the song they can press the pause button in the question container and they are able to click on an answer and the site will keep the users score until the end of the game.

4. Testing
4.1 Testing via Google Chrome Developer Tools
tested the game on several devices and they all worked well. I could have made the mobile welcome screen better for widths 300 pixels and under but i didn't leave myself enough time to fix it.


4.4. Lighthouse testing
*.html documents were tested via Lighthouse with very good results. 
Lighthouse testing - index.html
/workspaces/MidiMelodyMayhem/assets/images/lighthouse performance.png


4.5. Validators testing
Jigsaw CSS validator
Method : Project (styles.css) was tested by W3C CSS Validator.
Result : One error found while testing. This bug was fixed in commitment b0ce710. There are no further errors with CSS code (appendix 31).
Appendix 31 - Jigsaw CSS Validator testing - styles.css

Appendix 31 - Jigsaw testing - styles.css

W3C HTML validator
Method : Every HTML document was tested by W3C Validator.
Result : Initial validating found 2 errors. First error with trailing slash in hidden checkbox. Second error with misplaced </a> and </i> tags. Both errors were fixed in commitments 67936bc and 9769460. There were no future errors found after two fixes.

4.6. Accessibility testing (WAVE Web Accessibility Evaluation Tools)
Method : Every HTML document was tested by WAVE Web Accessibility Evaluation Tool.

Focus : This test focused on the following.

Every page has a language declared in header for page readers
WCAG Coding Practices are followed
All forms have correct aria labels aria-label="..."
All images have correct alt labels <alt="...">
Heading levels are in correct order <h1> - <h2> - <h3>
Correct contrast ratio - minimal contrast ratio 4.5:1
Result : Automated testing found no errors, contrast errors or alerts (Appendix 44). Contrast ratio of this project is 8.59:1 (Appendix 45).

4.7. Bugs
Fixed bugs
Throughout testing, various bugs were discovered, especially with very low view-port sizes. They were all fixed, committed and documented via GitHub.

Bug with gallery preview image size
Fix : Fixed using flex-box.
Bug with horizontal phone/tablet orientation gallery.html
Fix : Adjusted padding and margins of gallery elements.
Bug with gallery navigation bar
Fix : Adjusted margins.
Bug with horizontal phone/tablet orientation contact.html
Fix : Adjusted size of half-box.
Bug with <input ... type="email">field

5. Deployment
5.1. Transfer of progress from IDE
Task : To ensure regular commitments are done to avoid any data/progress loss.
Method :
commands git add [filename] was used to add specific file to staging area, alternatively command git add . was used to add all changed files to staging area
command git commit -m "[commit description]" was used to add commitments into queue
command git push was used to push all commitments to remote repository on GitHub
Finding : CodeAnywhere IDE only holds up to 3 commitments in queue, regular git push needed to be used.
Back to Table of content

5.2. Deployment to GitHub Pages
Task : To ensure users are able to view live version of Cibo Fresco project.
Method :
initial setting in GitHub -> PP1-Cibo-Fresco -> Settings -> Pages needed to be performed. It did enable developer to choose what branch to deploy.
all further deployments were done automatically after git push
Finding : It takes approximately 2 minutes from git push command to live version being updated.
Back to Table of content

5.3. Offline cloning
Task : To use repository on local machine.
Method :
Navigate to GitHub and follow Code -> HTTPS -> Copy button . after those steps open your local coding enviroment and type git clone [copied link] .
Finding : Git Windows application needs to be installed.
6. Technologies & Credits
6.1. Technologies used to develop and deploy this project
Balsamiq - to create wireframes.
HTML - main programming language for this project
CSS - styling the project via external CSS file /asssets/css/styles.css
CodeAnywhere - to write and save the code
GitBash - to make commitments of progress and push the results back to GitHub
ConText - code off-line in "doodle-zone" mode
GitHub - to record all commitments and deployment the live project
6.2. Credits
FontAwesome - to find and use icons
TinyPNG - to compress images
FavIcon.io - to find and compress favicon
StackEdit - used to preview and write portions of readme.MD file
PicJumbo - images database
code-boxx.com - help with hamburger menu
W3School - useful information and cheat sheets