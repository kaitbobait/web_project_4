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

## Create Section Class

** Renders a list of elements on a page according

** (DONE)first parameter: object with 2 properties (items, renderer)
* items property is an array of data which needs to be added on a page when initializing the class
* renderer property is a function responsible for creating and rendering data on a page

** (DONE)second parameter: CSS class selector where you'll add the card elements

** stores a public method that renders all elements on the page.
* The renderer() function will render each element on a page

** Stores a public method called addItem() that takes a DOM element and adds it to the container
* does not contain any markup. 
* receives markup through the callback function and inserts it in the container

## Create Popup Class

**Create Popup class that opens and closes the popup window, as per the following requirements**
** (DONE)Constructor has 1 parameter: the popup selector

** (DONE)Stores the public methods that will open and close the popup:
* (DONE)open() 
* (DONE)close() 

** stores the private method that stores teh logic for closing the popup by pressing the Esc key:
* (DONE)_handleEscClose()

** stores a public method that adds a click event listener to the close icon of the popup
* (DONE)setEventListeners()

## Create PopupWithImage Class

** Create the PopupWithImage class as a child of Popup
* this class has to change the parent open() method.

** The open() method with the PopupWithImage class, you need to add:
* an image to the popup
* the corresponding image src attribute 
* caption for the image

## Create the PopupWithForm Class

** Create this class as a child class of Popup

** Constructor: 
* Takes a callback of the form submission
* The popup selector

** Stores a private Methode named _getInputValues()
* collects data from all the input fields

** Modifies the setEventListeners() parent method

** The setEventListeners() method of the PopupWithForm class has to:
* add the click event listener to the close icon
* add the submit event handler

** Modifies the close() parent method in order to reset the form once the popup is closed

** Create an instance of the PopupWithForm class for EACH popup

## Create UserInfo Class

** This class is responsible for rendering information about the user on the page

** Takes an object with the selectors of 2 elements into the constructor:
* 1. containing the user's name
* 2. containing the user's job

** Stores a public method named getUserInfo()
* returns an object with information about the user
* This method will be handy for cases when it's necessary to display the user data in the open form

** Stores a public method named setUserInfo() 
* takes a new suer data and adds it on the page

## Transforming the Card Class

** Connect the Card class to the popup

** (DONE) Make Card take the handleCardClick() function into the constructor

** When user clicks on the card, this function will open the popup with an image

## Create the .gitignore File

## Set up Webpack and Bundle and Build






