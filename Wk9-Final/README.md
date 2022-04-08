# Week-9-Final

README file for RainyCityDiver's University of Washington JavaScript 310B Final Project



### ********** Space Merchant Defense **********

DESCRIPTION: 
    
This program is designed to provide a short distraction from your potentially-stressful workday. Built with HTML, CSS, Bootstrap, & JavaScript.

INSTALLATION: 
    
Download the following to your local drive in the same directory (file):
1. space-defense.js
2. space-defense.html
3. space-defense.css

You may ignore `space-defense.spec.js`.

TO START:

Launch `space-defense.html` in a browser of your choice.

As the Weapons Officer of the Star Freighter S.S. Fortune, it's up to you to keep the crew, and more importantly, the ***cargo*** safe. As the inevitable happens, and the Fortune is attacked by pirates, you race to your station. Your ship's underpowered weapons are outclassed by your enemy's, but your shields are stronger. Good luck crewperson!

CONTROLS: 

While fighting for your life against the pirates intent on enriching themselves at the expense of your boss's efforts, You'll find modern technology has solved many of the problems plaguing complex weapons systems of the past. The S.S. Fortune's weapons console features only one button; "FIRE". Targeting is, [fortunately](https://i1.wp.com/pulptastic.com/wp-content/uploads/2014/10/c4586ecbea5b0d34b50baa0c2a6a95cb_650x.jpg?resize=650%2C866), automatic. [Unfortunately](https://gifimage.net/wp-content/uploads/2017/10/double-facepalm-gif-3.gif) your foes weapons also auto-aim, and are more powerful, so your only saving grace is how strong your ship's shields are.

Speaking of... your ship's defense shields are as cheap as the weapons. This means the protection offered may vary. You will find the shield strength displayed underneath the scenario description. If you're lucky, the shields will be high; up to 44! If you're not, they'll be lower. Much lower.

FIGHTING: 

Space Merchant Defense provides feedback as to the Fortune's shield level underneath the scenario description. Also tracked is the number of pirate ships you've destroyed, the type of enemy ship you're currently facing, and that ship's shield strength.

Pirate ships usually come in two flavors; a light fighter, and a heavy fighter. Their weapons do the same amount of damage, but the light fighter has half the shield strength of the heavy sibling. Facing off against light fighters is an easy way to rack up impressive scores, but since about 40% of pirate fleets, on average, are comprised of heavy fighters; "high scores" may not be so easy to reach.

Firing your weapons drains the pirate ship's shields, but their weapons drain the Fortune's. As you destroy one pirate ship, press the "Fire" button to automatically target the next. Try to kill as many pirates as possible before the Fortune is ~~destroyed~~ disabled and boarded. 

SAVING YOUR SCORE:

Your highest score can be saved locally to your browser at the end of each play round. A "Save Progress" button will appear when your ship's shields are depleted and is ... boarded

RE-RUN: 

1. When the S.S. Fortune's shields finally fail, you'll be offered an option to try another play-through; click the "Try Again!" button that appears underneath the "Save Progress" button to re-load the page and play again.
2. Re-load the page at any time during gameplay.

Your score is saved in the browser. Warning: re-installing your browser may result in score loss.

SUPPORT: 

You may reach out to the creator via GitHub with suggestions to improve program (see ROADMAP).

ROADMAP/FUTURE FUNCTIONALITY:

Suggestions are welcome.

CONTRIBUTIONS: 

Contributions are welcome.

PROJECT STATUS 

Space Merchant Defense is under development.

CHANGELOG: 
   
Empty



### ********** Currency Converter **********

DESCRIPTION: 
    
This program is designed to convert an amount of one currency to another. Pretty straightforward, really. Built with HTML, Bootstrap, & JavaScript.

INSTALLATION: 
    
Download the following to your local drive in the same directory (file):
1. curconv.js
2. curconv.html

TO START:

Launch `curconv.html` in a browser of your choice.

USE: 

1. Make your selection of starting currency/currency to convert with the top-most drop-down, located under the "Convert From:" heading. Error will be seen if an incorrect selection is made.
2. Enter the amount of that currency you wish to convert in the number-entry field located under the "Convert this amount:" heading. Currency symbols are not supported at this time. Error will be seen if an incorrect entry is provided.
3. Select the currency to convert to via the drop-down located under the "Convert To:" heading. Error will be seen if an incorrect selection is made.
4. Click the "Convert" button.
5. The converted amount is shown just underneath the "Convert" button, replacing the "Result will appear here" text. 

RE-RUN: 

Re-select any of the convert-from and/or convert-to currencies, or re-enter an amount to convert, and click "Convert".

BACK-END:

Site makes an API call to https://api.vatcomply.com/rates to obtain a current exchange table, and uses this table to calculate the conversion locally.

SUPPORT: 

You may reach out to the creator via GitHub with suggestions to improve program (see ROADMAP).

ROADMAP/FUTURE FUNCTIONALITY:

Suggestions are welcome.

CONTRIBUTIONS: 

Contributions are welcome.

PROJECT STATUS 

Currency Converter is under development.

CHANGELOG: 
   
Empty

This document is not final and is subject to modification.
