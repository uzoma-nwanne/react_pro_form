## Getting Started

Run `npm install` && `npm start` to start the project

### Todo

There is a `Form` component in the component directory. Finish creating it by following the instructions below.

---

### Watch:

#### Getting started with Create React App

https://www.loom.com/share/5b275694c429474790589c7afbacd109?sharedAppSource=personal_library

#### useState and event handling

https://www.loom.com/share/b62f6cabf89645cfafcf3cc07d46b31b

#### useEffect and keys

https://www.loom.com/share/cbd2d10ec7ce4ee9bf13683fc6af5ace?sharedAppSource=personal_library

#### Final Product - Hopefully yours looks better 😉

https://www.loom.com/share/8c74a207a5dd4b2da55801dd551b7c0e

#### Part 1

Create a form with the following fields

-   [ ] Input with first name
-   [ ] Input with last name
-   [ ] Text area for comments
-   [ ] Checkbox to subscribe to a newsletter
-   [ ] Input for an email
-   [ ] Submit button
-   [ ] When a user clicks the submit button:
-   [ ] Alert should appear with the first name and last name displayed (e.g. ‘Hi my name is [first name] [last name]’

#### Part Deux

-   [ ] Disable the submit button initially
-   [ ] The button should only be enabled if first name and last name have at least 1 letter in the text box
-   [ ] Hide the input for an email initially
-   [ ] The input for email should be displayed if the checkbox is checked

#### Part 3

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://jsonplaceholder.typicode.com/

-   [ ] After clicking submit make a POST request to https://jsonplaceholder.typicode.com/users
-   [ ] The request object should follow this structure `{ firstName, lastName, isSubscribed, email, comment }`
-   [ ] The email property should only be sent IF they have checked the box to subscribe
-   [ ] If the request is successful display a success message that disappears after 2 seconds (e.g. ‘Thanks for your submission [first name]’) then clear all form fields
-   [ ] If the request is NOT successful, display a failure message (e.g. ‘Oops something went wrong’), do NOT clear all fields
-   [ ] Send a video to your mentor showing the successful submission and the network request with the payload being sent by recording a loom video and using the browser tools to show the network request
-   [ ] Make sure you show the scenario where a user subscribes to the newsletter and the scenario where they do NOT subscribe
