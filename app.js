// BEFORE WRITING ANY CODE WRITE OUT WHAT I AM GOING TO DO!!!1


//using selectors inside the element
// traversing the dom


// first i want to SELECT all 3 question buttons(question-btn) in html
// once i have selected them i will loop over them(forEach) becuase i want to
// add click event listener to each and every button

// make sure that the parent is the question and add that particular class
// show-text to the parent("question")


const btns = document.querySelectorAll(".question-btn") /*i am accessing All of the question buttons(3)  */

btns.forEach(function(btn){
    btn.addEventListener('click', function(event){
    // console.log(event.currentTarget.parentElement.parentElement)/**tells me the button i clicked shows up as html in console */
    // (2:45) learning to traverse the dom-moving up and down the dom tree.
    // parentElement shows me the parent element in this case the question-btn is the child of the
    // question-title.

    // (4:43) now i need to think about what to add to access my question 
    // since the question is the class
    // that is looking for the show-text class.
    // i need to add a second parentElement.
    // now in the console when clicking a button the class of question shows up in console.

    // since i have access to the parent i have to classList, toggle then show-text

    // which means each time i click on the button i will just toggle(add or remove) the show-text
    //  class from the parent element which in this case is article class of "question"    
    const question = event.currentTarget.parentElement.parentElement
    question.classList.toggle('show-text')
    // show-text is the class i want to toggle 
    // this is the short way of doing it
})
})


// traversing the dom method

// 1. i selected the buttons

// 2. look for the parent elements of the question-btn which were div class of
// question-title and article class of question.


