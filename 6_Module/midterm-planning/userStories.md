### Our Apps Requirements -> User Stories

1. A user can create a poll with multiple choices

  As a user, I can create a poll with multiple choices, because I want to gather opinions from my friends.

2. Each choice can have a title and optional description

  As a user, I can add titles and optional descriptions to each choice in the poll, because I want to provide context for each option.

3. The creator must enter an email

  As a creator, I must enter an email when creating a poll, because I need to receive notifications and access administrative features.

4. When a poll is finished being created, the user is given two links: an administrative link (which lets them access the results) and a submission link (which the user sends to their friends)

  As a creator, when I finish creating a poll, I want to receive two links: an administrative link to access the results and a submission link, because I want to be able to access administrative features and I want to be able to share my polls with my friends.

5. The links are also sent to the creator via email (using mailgun)

  As a creator, I want to receive the links to the poll via email because I want easy access and sharing with my friends.

6. When a user visits the submission link, they enter their name if required and see a list of the choices for that poll

  As a user, when I visit the submission link, I want to be able to enter my name if required, because I want to view a list of choices for the poll.

7. The user can rank the choices (by drag and drop, or some other method) and then submits the poll

  As a user, I want to be able to rank the choices in the poll using a drag-and-drop reorder or other method, because I want the creator to see my preferences in my preferred order.

8. Each time a submission is received, the creator is notified with an email (which includes the administrative link and a link to the results)

  As a user, when I submit my response to a poll, I want the creator to be notified via an email, because I want them to receive my responses.

* the results are ranked using the Borda Count method: https://en.wikipedia.org/wiki/Borda_count

  As a creator, I want the results of the poll to be ranked using the Borda Count method, because it provides a fair and reliable way to aggregate preferences and determine the overall ranking of choices.