# Project 4: Around The U.S.

### Description

* This is a site that you'll be able to edit your name and occupation. You will be able to add images and titles do the site, as well like "like" any photo.

### Technologies

**In this site, we are using:**

* HTML
* CSS
* Javascript
* BEM methodology


### Overview

* Figma
* Images

**Figma**

* [Link to the project in Figma](https://www.figma.com/file/mUgu8OSHWE0M6p6vfwmdu9/Sprint-4-Around-The-U.S.-desktop-mobile?node-id=0%3A1)

**Github Pages**
* [Link to my project on Github Pages] (https://kaitbobait.github.io/web_project_4/ )

**Images**

The way you'll do this at work is by exporting images directly from Figma — we recommend doing that to practice more. Don't forget to optimize them [here](https://tinypng.com/), so your project loads faster. 

Have fun with JavaScript!

### To Do List:

## Update Profile Picture
**(DONE)Send a PATCH request to change profile photo**
**pass the JSON body with property avatar**
* avatar property should only contain a link to a profile picture
* if anything else is passed, the server will return an error (do I code this?)
**(DONE)When user hovers over picture, edit icon appear**
**When clicking this icon, the popup with a form must be opened**
* You need to code this form
* Should have 1 field - a link to a new profile photo
* take url reference from create card form

## Showing How Many Likes a Card Has
**Add a feaeture that shows how many likes each card has**
**Send a PUT request to like a card**
* https://around.nomoreparties.co/v1/groupId/cards/likes/cardId 
**To remove the like, simply send a DELETE request with the same url:**
* https://around.nomoreparties.co/v1/groupId/cards/likes/cardId 
**cardId in the URL should be repalces with the _id property of the corresponding card**
**The response will contain updated JSON with a card.**
* Inside this JSON, the array of likes will already be updated(?)
**After adding or removing a like, the heart icon should change color**
* and the like counter should increase or decrease respectively
**To change the number of likes, you'll either add or subtract 1 from the current number.**
* We recommend taking this number from the server's response and not from the HTML code. 
* Otherwise there will be an error if two users try to like one card at the same time


## Improving UX of all Forms
**Change the button text to be "Saving..."**
* Should be shown until the data has finihsed uploading
* reference the loading section in lesson
* Do the same thing for the forms used to add: New card && Update User Profile Picture

## Fix
**After deleting 2 cards in a row - 403 forbidden error**
**when updating avatar, on refresh, image reverts back to previous image**
* However, the data link is the correct link...







