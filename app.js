// BEFORE WRITING ANY CODE WRITE OUT WHAT I AM GOING TO DO!!!1


// 2 ways to do this

// 1. traversing the dom
// 2. using selectors inside the element - THIS WAY TO ADD JS FUNCTIONAILITY
//  IN THIS JS DOM PROJECT STARTS ON (LINE 66)


// first i want to SELECT all 3 question buttons(question-btn) in html
// once i have selected them i will loop over them(forEach) becuase i want to
// add click event listener to each and every button

// make sure that the parent is the question and add that particular class
// show-text to the parent("question")


/*i am accessing All of the question buttons(3)  */
// const btns = document.querySelectorAll(".question-btn") 

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(event){

    // console.log(event.currentTarget.parentElement.parentElement)

    /**tells me the button i clicked shows up as html in console */
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

    // const question = event.currentTarget.parentElement.parentElement
    // question.classList.toggle('show-text')

    // show-text is the class i want to toggle 
    // this is the short way of doing it
// })
// })


// traversing the dom method

// 1. i selected the buttons

// 2. look for the parent elements of the question-btn which were div class of
// question-title and article class of question.

// I CAN LOOK FOR CHILDREN AND SYBLINGSBUT IN THIS CASE I LOOK FOR THE 
// PARENT ELEMENT


// SUMMARY DOWN BELOW OF WHAT I DID(7:15)
// i wanted to look for the parent to put my show-text class and
// only show up when i clicked the plus button to show the question text.
// that is why i used parent element 2 times 
// to find the parent element in order for the show-text class to show up 



// ======================================================================================


// USING SELECTORS INSIDE THE ELEMENT VID 150.

// IN THIS CASE I AM NOT LOOKING FOR THE buttons

//  i want to select the questions(article classes) that are looking for the show-text class
// and use forEach to loop over all 3 questions

const questions = document.querySelectorAll('.question')


questions.forEach(function(question){
// console.log(question)// my article classes are in the console
// i can add my querySelector or getElementById to my element(orange)
// once i have access to my 1 specific item  in my loop.

// how does this help me?

// it helps me because i can select a specific button

// for example i am looping over and for each article class i can select that specific button

// now i want to select each and every button from within each and every question

// DOWN BELOW IS HOW THAT WORKS

const btn = question.querySelector('.question-btn')
// im looking for question instead of document is becuase it limits what i am looking for.
//  i have 3 question i am either looking in question 1,2, or 3
// THEN I ADD THE querySelector and still look for the same class.

// console.log(btn)
// now i should have all 3 buttons referenced exactly what i have
// when hovering over the buttons 
// (button.question-btn)

// THE REFERENCE GIVES ME AN OPTION OF ADDING A EVENT LISTENER TO MY BUTTON

// once i click on the button the question will toggle the question text

btn.addEventListener('click',function(){
    questions.forEach(function(item){
        // console.log(item);
        if(item !== question)
        item.classList.remove('show-text')
    })
// if the item DOES NOT match the article class of question then i remove the show-text class

    // i close the text by removing the show-text class from the article class of question


    question.classList.toggle("show-text")
})
// why am i just saying question in the event listener?
// BECAUSE IT IS THE NAME OF MY PARAMETER (LINE 82)(4:27)

// the question references my article.
// the button references the actual button that is WITHIN THE ARTICLE

// i am looking in question NOT THE WHOLE DOCUMENT 

// i am within my question in my loop for example first,second,and third question in this case.

// the iteration i am accessing the article THEN LOOK FOR THE button within the article.
// DO NOT LOOK IN THE WHOLE DOCUMENT just llok in my question

// once i have access to the button(btn) i would add an event listener

// then i will just say "so that specific question,iteration,and article,"
// i would just TOGGLE IT once i click on the button within the article

// THEN i would toggle the class on THE ACTUAL PARENT which is the 
// article class of "question"



// NOW I WANT TO ADD THE FUNCTIONALITY that if i have my first question open
// ("Do You Accept All Major Credit Cards?")

// and i click on the other 2 questions i would want to close the other questions that are open

// how do i do that?

// i select ALL OF THE QUESTIONS AGAIN(querySelectorAll) IN THE EVENT LISTENER 
// which i have already done.

// which means i just reference them
// questions.forEach to loop over the 3 questions and then create a callback function

// DON't FORGET TO REFERENCE each and every item as a parameter
// but do not repeat the same name i will call it item even though they are the same article
// classes i was referencing using the parameter called (question) LINE 82
// i am just calling them items instead of questions for this loop iteration.

// i setup the functionaility of closing 1 article class if 1 of the other 2 are open by
//  using an if statement(LINE 114).

})




// RECAP OF WHAT I DID (9:25)

// i select elements ALREADY within some kind of selection instead looking at the whole document.


// if i already selected a specific item (questions)(LINE 81 )i can look with in that item

//  i can say question.querySelector or getElementById

// it is good becuase i can select specific items instead of selecting all of the buttons
// or select all of the article classes 

// I CAN USE THE SELECTORS INSIDE ELEMENTS METHOD  TO SELECT VERY SPECIFIC THINGS
// WITHIN THAT SELECTION

// questions for example instead of document










