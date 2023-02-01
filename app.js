/* initialize a constant variable named sections and set it equal to
all of the elements with the class named section, 
referecning the index html file */
const sections = document.querySelectorAll('.section');

/* initialize a constant variable named sectionButtons and set it equal to
all of the elements within the controls class (the parent container of
all of the buttons), referencing the index html file */
const sectionButtons = document.querySelectorAll('.contols');

/* initiliaze a constant variable named sectionButton and set it equal to
all of the elemens within the control class,
referencing the index html file */
const sectionButton = document.querySelectorAll('.control');

/* initialize a constant variable named allSections and set it equal to
all of the elements of the main-landing-page class (the body of
the html file), referencing the index html file */
const allSections = document.querySelectorAll('.main-landing-page'); 

//A function to control the page transitions
function PageTransitions(){
    /* The goal: when a user clicks on a button the current
    button is removed from the active-button class,
    the button that is clicked is added to the actvie-button
    class. We should visually be able to see this with the
    active button illuminating green while buttons that are
    not active are grey */

    // iterate through all of the buttons
    for(let i = 0; i < sectionButton.length; i++){
        
        // did the mouse click one the current button? if yes then:
        sectionButton[i].addEventListener('click', function(){
            
            /* store the current button as whichever button is active before the click
            temporary variable so in javascript we use let instead of const */
            let currentButton = document.querySelectorAll('.active-btn');
            
            /* now remove the active-button class from the current button
            by replacing the string active button with an empty string */
            currentButton[0].className = currentButton[0].className.replace('active-btn', '');

            /* now add the active button class on to the button that was clicked
            by referencing the function we just created which in javascript is
            called this
            we want to add the string active class to the end of the section
            now this section will inherit the active class and its behaviors 
            (the green light) */
            this.className += ' active-btn';

        })
    }
}

PageTransitions();