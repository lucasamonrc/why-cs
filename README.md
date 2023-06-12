# 🧑‍💻 Why CS?

A question and answer PWA for BYU Computer Science students find help to complete their homework. Built with Next.js and Supabase.

## 🚀 Technologies

- [Next.js](https://nextjs.org)
- [Tailwind](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)

## ⛔️ Problem Statement

Many students spend hours waiting to receive help with projects or homework assignments and don’t have a platform or someone they can rely on to get the necessary help for their questions. They are left with unanswered questions and unsolved problems for many days, leading to unneeded late nights of work, late assignments, and sometimes being unable to submit a project and homework assignments on time.

### Justification

We initially came up with this idea based on the frustrations and personal experiences we have when dealing with this problem. Oftentimes, we’d find ourselves not able to receive help from a teaching assistant or a professor because of our conflicting schedule due to work, family and other overlapping classes. We’ve noticed that Slack and other platforms are a great way for students to communicate with one another, but these communication channels are completely reset at the end of a semester, thus, deleting all useful questions and answers that were discussed throughout that semester. 

We’ve also started realizing that our problem statement could also affect teaching assistants, because they spend a good portion of their time answering the same questions over and over again to different students. We’ve conducted several interviews with both students and teaching assistants and confirmed that our problem statement wasn’t only affecting ourselves. We’ve collected some data points from different users in order to develop a simple application that could address this problem by encapsulating as many features as we could based on user feedback. 

We strongly believe that our application can positively impact the lives of any student and teaching assistant that starts using it. We are promoting an environment in which they can learn and study from, search up quick questions and answers from all available computer science classes, as well as empower them with a tool that will enhance their learning and teaching assistant position.

## 🙋‍♀️ User Evaluations

Our user evaluations helped us validate our problem statement, allowed us to narrow down the most desired features that we should implement and helped us integrate tasks that would be not confusing for users to perform. Next, we have a brief discussion of each round, our findings and what we decided to address and not address.

### Procedure

We invited a total of 6 students that represent our primary persona and 3 teaching assistants that represent our secondary persona. Each time, we asked the primary persona participants to perform the tasks of searching for a specific question and posting a new question, as well as giving feedback to the overall design of the app. For the secondary personas, we asked them to locate questions that weren’t answered before and answer them, search for previously answered questions, and give us feedback on the overall design.

__First Round__ 

Summarized Findings:

- When replying to a question, users commented that it would be annoying to keep going back and forth between the question and reply screen. It would be nicer if the reply screen did not cover the question while the user is composing a question.
- Everyone enjoyed being able to see how many replies a question has before opening it.
- Users pointed out that upon typing a question, it would be nice to see if someone has
previously asked that question before, as they would be more inclined to click on the link
for that particular question instead of asking their question right away.
- Users also pointed out some general interface optimizations that can be done by
increasing font size and making some icons more clear to see in some parts of the app.
- Everyone thought that navigating between the different screens was extremely easy and
intuitive.
- Everyone mentioned wanting a customized feed display of questions

Summarized addressed:

- Improve the thread reply cards, so the reaction action occupies less space in the card.
- Improve question cards by making students names more legible and showcase the class the questions are for.

Summarized not addressed:

- Student ranking and leaderboard. It would add too much work to implement a feature like this, and it goes beyond the project scope and problem statement.
- Student connections. Similar reason as the item above.

__Second Round__:

Summarized Findings:

- Uncovered some minor bugs in navigating throughout the app
- Got some positive feedback from the new layout for the question thread
- Overall design is very minimalistic, easy to navigate and appreciated by users testing

Summarized addressed:

- Custom feed for users depending on the class they are taking, which can be updated under their profile
- Fixed some minor bugs that prevented users from correctly navigating back from certain pages

## 📋 Meta

Lucas Castro – [lucasacastro.dev](https://www.lucasacastro.dev) – lucasamonrc@gmail.com

Ricardo Leite – ricardo.leitejr@hotmail.com

[@lucasamonrc](https://github.com/lucasamonrc)
[@ricardo-ljr](https://github.com/ricardo-ljr)
