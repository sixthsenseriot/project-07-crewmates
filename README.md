# Web Development Project 7 - _Crewmates_

Submitted by: **Khanh Nguyen**

**Crewmates** is a full-featured CRUD web application that allows users to create and customize their own Among Us crewmate characters. Users can personalize each crewmate by selecting a body color, choosing from a variety of hats, and adding unique details such as likes and dislikes. Once customized, crewmates can be posted to the app and displayed alongside others. Users also have the ability to view, edit, and delete any crewmates they’ve created, providing full control over their creations in an intuitive and interactive interface.

🔗 [View Live Website](https://amoga.netlify.app/) 

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

-   [x] **The web app contains a page that features a create form to add a new crewmate**
    -   Users can name the crewmate
    -   Users can set the crewmate’s attributes by clicking on one of several values
-   [x] **The web app includes a summary page of all the user’s added crewmatese**
    -   The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
    -   The summary page is sorted by creation date such that the most recently created crewmates appear at the top
-   [x] **A previously created crewmate can be updated from the list of crewmates in the summary page**
    -   Each crewmate has an edit button that will take users to an update form for the relevant crewmate
    -   Users can see the current attributes of their crewmate on the update form
    -   After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page
-   [x] **A previously created crewmate can be deleted from the crewmate list**
    -   Using the edit form detailed in the previous _crewmates can be updated_ feature, there is a button that allows users to delete that crewmate
    -   After deleting a crewmate, the crewmate should no longer be visible in the summary page
    -   [x] **Each crewmate has a direct, unique URL link to an info page about them**
        -   Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
        -   The detail page contains extra information about the crewmate not included in the summary page
        -   Users can navigate to to the edit form from the detail page

The following **optional** features are implemented:

-   [ ] A crewmate can be given a category upon creation which restricts their attribute value options
    -   e.g., a Dungeons and Dragons class or a development team role (project manager, product owner, etc.)
    -   User can choose a `category` option to describe their crewmate before any attributes are specified
    -   Based on the category value, users are allowed to access only a subset of the possible attributes
-   [ ] A section of the summary page, displays summary statistics about a user’s crew on their crew page
    -   e.g., the percent of members with a certain attribute
-   [ ] The summary page displays a custom “success” metric about a user’s crew which changes the look of the crewmate list
    -   e.g., a pirate crew’s predicted success at commandeering a new galley

The following **additional** features are implemented:

-   [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Website Walkthrough](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN281cjc3eTdiMzNmbWM0MzRxdTA0czRrZzMwZjdrZXc5bXB1MHg5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/x7PGXK0HG7Nen0zKHQ/giphy.gif)

🔗 [Link for Better Viewing of Walkthrough](https://imgur.com/gallery/codepath-project-7-crewmates-kn-68fUog1)

<!-- Replace this with whatever GIF tool you used! -->

GIF created with [LICEcap v1.32](https://www.cockos.com/licecap/)

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One of the main challenges I faced during the development of this web app was meeting the project deadline due to personal life circumstances. Balancing time between responsibilities outside of development and ensuring consistent progress on the app proved to be difficult at times. Despite this, I stayed focused and prioritized core functionality to ensure the app was delivered in a working and polished state.

## License

    Copyright 2025 Khanh Nguyen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
