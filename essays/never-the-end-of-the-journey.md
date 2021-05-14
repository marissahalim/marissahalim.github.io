---
layout: essay
type: essay
title: End of the Journey? No, Never
# All dates must be YYYY-MM-DD format!
date: 2021-05-13
labels:
  - Software Engineering
  - Agile Project Management
  - Functional programming
  - User Interface Frameworks
---

## It's All Coming to an End
Tomorrow will be the last day for my Software Engineering I course and I think I've come a long way. Before jumping into this class, I didn't know what to expect to learn. At that point, my understanding of software engineering was juvenile which left me floundering at the beginning. But, as I took it assignment by assignment, I discovered that software engineering is a multitude of concepts that can be applied to future careers such as: 
* Open Source Software Development
* Configuration Management
* Functional Programming
* Development Environments
* Coding Standards
* User Interface Frameworks
* Agile Project Management
* Design Patterns
* Ethics in Software Engineering  
 I espacially learned a lot and gained valuable experience through my final project Budget Munchies. While people outside the computer science world may think that software engineering is *just* coding, I'd like to show them that that statement is wrong. Software engineering is not only coding but also ethics, effectiveness, discipline, and design. While learning Javascript and ESC (ECMAScript 6), I was introduced to the Underscore library which changed how concise I could code without giving up effeciency. Coding standards is all about discipline but it's there for a reason: to keep code organized and legible. Ethics can be seen in open source software development whether it's like the unethical experiment conducted by students from the University of Minnesota against the Linux Kernel or being courteous while asking questions on sites like Stack Overflow or CodeProject. Design has different appications in software engineering but in the end, they both are solutions to a problem. User Interface Frameworks such as Semantic UI are used to create components for front-end web development and the best part about them is that they can be created fast and applied to many situations. Design patterns are patterns that were designed to be the solution to problems that are similar to each other. 
## Group Projects
In Spring 2021, I had my first huge (at least to me) group project. I was in a group with three other classmates and the objective of our project was to create a web application that allowed college students to efficiently share easy, budget-friendly recipes within a communinity. This is where Issue-Developed Project Management comes in, also known as IDPM. IDPM uses the project board feature in GitHub and it allows group members to create issues (basically a task) and assign them to the most fit person. It really allows you to improve on things you're already good at while still being able to dip your toes in subjects you're not too comfortable with. I especially liked this management practice because it allowed me to keep track of all my tasks. As someone who sometimes forgets to put the milk back into the refridgerator, written record of things I need to do is really helpful for keeping me on track and productive. It's also super satisfying to close issues that you've completed. [https://media.tenor.com/images/9566405df823c33aa1d9f10561895880/tenor.gif] 
## Shorter Code but Just as Efficient
This semester, I was exposed to functional program in the form of the Underscore library for Javascript. The underscore library has a multitude of helpful functions like map, filter, and pluck which can reduce code to only a couple of lines. For example, if I wanted to multiply each number in the array nums = [1,2,3] by 3, I would use a for loop like this: 
```javascript
for (let i = 0, i < nums.length; i ++) {
    arrnum[i] *= 3; 
}
```
which would return [3,6,9]. However, with underscore, this can be shortened to one line: 
```javascript
_.map([1, 2, 3], function(num){ return num * 3; });
```
which would return the same array: [3,6,9]. This is the power of underscore: concise and efficient code! Another aspect that makes functional programming so useful is that it allows you to put a function within a function. This can be seen in the code above where `_.map` is the first function and the function inside it is `function(num){ return num * 3; }`. 
## Faster and Easier Design Implementation
Semantic UI is amazing ... to a certain extent. I think it's a great way for beginners to create interactive websites without having to worry about the design aspect of it. Semantic UI allows developers to create navbars, buttons, forms, etc. with just a few lines of code and it comes out looking clean. In the beginning, I thought it was really useful because I could recreate the appearance of an interesting website in under a few hours (this is pretty fast for me). When I started my final project, I found that I was slightly held back with Semantic UI in certain aspects of design like spacing and sizing.  
Even though this is the end to the Spring 2021 semester and more specifically, my Software Engineering I course, this is not the end to my journey of learning. 
