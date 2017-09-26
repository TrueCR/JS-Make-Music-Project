# Submission Info
Student Name: <br> 
Student ID: <br>
Student GitHub Username: <br>
Date Completed: <br>

# Introduction to cs20-write-music

This is the CS 20 Client Side Services 3 credit major project. This project consists of taking text a user enters into a textarea and analyze it so that you can, in the words of Gary Provost, “write music”. 

The goal here is simple. Make a text box on a webpage, and allow the user to type whatever they’d like in there. Below, the sentences should come out highlighted based on their length. Here are the colours you should begin with:

Tiny (0-2 words) - Yellow Highlight<br>
Short (3-5 words) - Red Highlight<br>
Medium (6-14 words) - Green Highlight<br>
Long (15+ words) - Blue highlight<br>


# Other Required Items

1. Identifying Information - Make sure you have filled out <b>ALL</b> of the following for <b>EVERY</b> assignment you do<br>

Name:<br>
GitHub ID:<br>
Student ID:<br>
Date Completed:<br>

2. A formatted and detailed README file<br>
It must contains 3 items in this order: (Overview, Planning, Review). Overview is a summary of what this code does, and anything that the user might need to do to ensure it works. Planning is you planning out how you’re going to tackle this problem in text or point form. Plan out as much as possible. Ensure you cover all the requirements listed in your planning section for full marks. Finally, Review will cover how you think it went. Great? Quick? Really hard? What did you learn from this? How did you feel about it?

3. Developed (and commented) CSS, HTML, and JS<br>
Comment all your work. Ensure the page looks nice. This is a final project for the credit after all.

4. Commit and push regularly.<br>
I’d like to see the path you took to get here.

5. User selectable colors. <br>
Make sure the user has an option on the page to select the above colors for length. While those colors should be defaults, give them choice. It can be in whatever form you choose (drop down, RGB, HEX, etc)

6. It should update as you type.<br>
It’s ok if you start with a button and leave one on the page, but for full marks it should update as the user types (live or as they complete a sentence is ok).



# Tips, Tricks, and Hints

Try to remember how you coded your adventure game in CS 10. Do you remember .innerHTML? Does the line document.getElementById("demo").innerHTML = "Hello World”; look familiar? Don’t be afraid to refer back to the CS10 page, your completed codecademy course (for JS and HTML/CSS), or use the Googles.

.match is your friend! Have a look at https://www.w3schools.com/jsref/jsref_match.asp and discover the power of .match for JS. How is one way it can be used? Well, try this out:

<I>var result = document.getElementById('text').value.match( /[^\.!\?]+[\.!\?]+/g );</i>

That will read the textarea (provided you gave it the ID of ‘text’) and will break it up into pieces in an <I>array</I> called result. The 1st part /[^\.!\?] is looking for any .’s !’s and ?’s. The 2nd +[\.!\?] says to add that character back to the value in the array (the last character it added was the character BEFORE the .!?). And finally, /g says to continue going (globally) even though it found a match (i.e., read the entire textarea).

Also, .match can look inside a var for a character (spaces for example) to count them. # spaces gets you close to the number of words in the sentence.

Remember that you’ll need to add some HTML code to each member in the array you have. It might make life easier if different lengths of sentence fell into different classes…

Finally, use W3 Schools, Stack Overflow, and Google heavily. Add the word javascript in there all the time too or else you could end up with a solution for another language.


I’ve managed to make this work with as little as 11 lines of JS and some CSS magic. While there’s no limit on your code lines, always remember the KISS principle! 

Good luck!! 
