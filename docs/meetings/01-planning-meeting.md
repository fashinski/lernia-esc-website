# Group 4 - First planning meeting

**Project:** [Esc] Hacker Escape Rooms

**Meeting date:** Not stated in the supplied transcript.

**Participants:** Henry Nguyen, Eli Fadi, Viktor Ekström, Ashkan Baharlooe, and Natan Zemichael Yacob.

These notes are based on the first meeting transcript and the final decisions sent to the teacher. The final decisions clarify the names and task split discussed in the meeting.

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

The booking steps belong in the same dialog. Booking must work from both the homepage and the page with all challenges. The time choices and participant limits must follow the API data. These are requirements from the assignment.

## Meetings

We will meet every Tuesday at 10:00 to check progress, discuss problems, and agree on the next tasks.

If someone needs to change a meeting time, they should tell the group in advance. We will keep notes from every group meeting for the submission.

The submitted decision gives the weekly day and time but does not list the calendar dates. The group still needs to write down the exact dates, as requested by the teacher.

## Communication

We will use the Slack group chat for communication between meetings. We can ask each other for help and ask the teacher for guidance if we get stuck.

## Shared repository

We will start from Ashkan's existing repository. Members shared, or were asked to share, their GitHub usernames so they could be given access.

Ashkan's repository link was not included in the supplied transcript or final decision. These notes are stored here as Eli's copy of the meeting record.

## Submission and teamwork

The group said that each member should submit the same planning answers individually in ItsLearning.

The assignment also requires everyone to write JavaScript and commit their own code to the shared repository. Each person must provide a link to their own pull request and a pull request they reviewed. The final submission includes the GitHub Pages link, repository link, and meeting notes. A short personal reflection is also needed for VG.

## Follow-up items

- Confirm Ashkan's repository link and make sure everyone has access.
- Write down the calendar dates for the Tuesday meetings.
- Eli and Natan need to agree on how the booking steps connect and which data is passed between them.
- Viktor and Ashkan need to agree on how their filter parts work together, including the "No matching challenges" message.

These follow-up items describe details still to settle; they were not additional task assignments in the submitted decision.
