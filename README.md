## Getting Started

Run `npm install` && `npm start` to start the project

### Todo

#### Week 1 (pt 1)

-   [ ] Create a form with the following fields
-   [ ] Input with first name
-   [ ] Input with last name
-   [ ] Text area for comments
-   [ ] Checkbox to subscribe to a newsletter
-   [ ] Input for an email
-   [ ] Submit button
-   [ ] When a user clicks the submit button:
-   [ ] Alert should appear with the first name and last name displayed (e.g. ‘Hi my name is [first name] [last name]’

#### Week 1 (pt 2)

-   [ ] Disable the submit button initially
-   [ ] The button should only be enabled if
-   [ ] First name and last name have at least 1 letter in the text box
-   [ ] Hide the input for an email initially
-   [ ] The input for email should be displayed if the checkbox is checked

#### Week 3

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://jsonplaceholder.typicode.com/

-   [ ] After clicking submit make a POST request to https://jsonplaceholder.typicode.com/users
-   [ ] The request object should follow this structure { firstName, lastName, isSubscribed, email, comment }
-   [ ] The email property should only be sent IF they have checked the box to subscribe
-   [ ] If the request is successful display a success message that disappears after 2 seconds (e.g. ‘Thanks for your submission [first name]’), clear all form fields
-   [ ] If the request is NOT successful, display a failure message (e.g. ‘Oops something went wrong’), do NOT clear all fields
-   [ ] Send a video to your mentor showing the successful submission and the network request with the payload being sent by recording a loom video and using the browser tools to show the network request
-   [ ] Make sure you show the scenario where a user subscribes to the newsletter and the scenario where they do NOT subscribe
