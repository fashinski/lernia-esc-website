# Group 4 - First planning meeting

**Project:** [Esc] Hacker Escape Rooms

**Meeting date:**261011.

**Participants:** Henry Nguyen, Eli Fadi, Viktor Ekström, Ashkan Baharlooe, and Natan Zemichael Yacob.

These notes are based on the first meeting.

## What we discussed

We went through the three parts of the assignment: loading challenge data, filtering challenges, and booking a challenge. We also discussed how to share the work, when to meet, how to communicate, and which existing code to use.

Using GitHub issues and a project board was suggested for keeping track of tasks. The group agreed to share the three main parts between five people, with two people working on filtering and two on booking.

## How we divided the work

| Member | Responsibility |
| --- | --- |
| Henry | Load challenge data from the API and use it to create the challenge cards. Show the three highest-rated challenges on the homepage and all challenges on the new challenges page. |
| Viktor | Create the "Filter challenges" button and filter panel, the online/on-site checkboxes, and the minimum and maximum rating widgets. |
| Ashkan | Complete the remaining filtering work, including the tag filters and text search. |
| Eli | Build booking steps 1 and 2. Open the booking dialog, let the user choose a date, and request available times from the API. Then collect the user's name, email, available time, and number of participants. |
| Natan | Build booking step 3: show the thank-you message and let the user close the dialog and return to the challenge list. |

The booking steps belong in the same dialog. Booking must work from both the homepage and the page with all challenges. The time choices and participant limits must follow the API data.

## Meetings

We will meet every Tuesday at 10:00 to check progress, discuss problems, and agree on the next tasks.

If someone needs to change a meeting time, they should tell the group in advance. We will keep notes from every group meeting for the submission.


## Communication

We will use the Slack group chat for communication between meetings. We can ask each other for help and ask the teacher for guidance if we get stuck.

## Shared repository

We will start from Ashkan's existing repository. We shared our GitHub usernames so could be given access.


## Submission and teamwork

The group said that each member should submit the same planning answers individually in ItsLearning.

The assignment also requires everyone to write JavaScript and commit their own code to the shared repository. Each person must provide a link to their own pull request and a pull request they reviewed. The final submission includes the GitHub Pages link, repository link, and meeting notes. A short personal reflection is also needed for VG.

Eli Fadi.


## The end
-----------------------------------------------

-----------------------------------------------

## Notes for myself

I added booking step 1 and 2. The user can choose a date, see the available times from the API, and fill in their name, email and number of participants. The form can also send the booking to the API.

The customer details stays in the form when changing the date, so they dont need to enter everything again.

I tested it locally using booking-test.html. The available times loaded, changing the date kept the details, and the test booking was confirmed. I also checked the console and received all six booking fields.

For Henry, the openBooking(challenge, button) function in js/booking.js is ready to connect with the challenge cards. It needs the challenge id, title, minParticipants and maxParticipants.

For Natan, the booking:confirmed event is sent after the API confirms the booking. The booking data is in event.detail.booking and the challenge data is in event.detail.challenge.

The homepage still use placeholder cards without real challenge IDs, so this part needs connecting with Henry's work. Natan's confirmation screen is also still pending.

I am keeping this as a draft for now. We still need to connect our parts and finish checking mobile layout, keyboard navigation and error cases.

-------------------------------

## Screenshots so far

<img width="1147" height="881" alt="image" src="https://github.com/user-attachments/assets/9b3c1869-adf4-4833-975d-467e7cb5a28c" />

<img width="1497" height="996" alt="Screenshot 2026-11-11 153219" src="https://github.com/user-attachments/assets/98b932af-ab96-4c40-8a96-561f4bfff21f" />

<img width="1062" height="556" alt="Screenshot 2026-11-11 153313" src="https://github.com/user-attachments/assets/db0d26ee-98ad-4e7f-b661-3f2df865a0c9" />

<img width="1075" height="608" alt="Screenshot 2026-11-11 153916" src="https://github.com/user-attachments/assets/9dcce6ae-693d-46f3-b71a-bdda35c0e2ab" />

<img width="1912" height="962" alt="Screenshot 2026-11-11 154816" src="https://github.com/user-attachments/assets/e24bbbb5-bb87-430e-866e-b3eddb8161aa" />

<img width="1502" height="1001" alt="Screenshot 2026-11-11 170442" src="https://github.com/user-attachments/assets/f6e5199a-0f40-45f6-9e31-c7140304d7d5" />

<img width="1698" height="933" alt="Screenshot 2026-11-12 110351" src="https://github.com/user-attachments/assets/5f43064d-d514-429f-8127-26f7abd5a580" />

<img width="1907" height="962" alt="Screenshot 2026-11-12 111003" src="https://github.com/user-attachments/assets/d2c5f467-840b-4373-a4d5-81026a118845" />

<img width="1405" height="912" alt="Screenshot 2026-11-12 114000" src="https://github.com/user-attachments/assets/90ee66da-b12e-4440-820f-a5c4eb4f4a9f" />

<img width="796" height="943" alt="Screenshot 2026-11-12 114227" src="https://github.com/user-attachments/assets/0928ec89-7365-4d08-b571-20d974621521" />

<img width="1492" height="1006" alt="Screenshot 2026-11-12 112308" src="https://github.com/user-attachments/assets/690c03fe-aeac-4f69-a687-3cebb5b3d6c7" />

--------------------------------

## Slack message after the PR #1

<img width="1067" height="810" alt="image" src="https://github.com/user-attachments/assets/0b7e590f-18e7-4a73-b159-f8868bdbed94" />

















