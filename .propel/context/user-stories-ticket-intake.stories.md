# User stories: Ticket intake

# User Story - US-001

## Story ID
* US-001

## Story Title
* Open a ticket

## Story Points
* 5

## Description
* As a customer, I want to open a ticket with a subject and a description, so that the team knows what is wrong.

## Acceptance Criteria
* AC-1: Given the new ticket form is open, When I send a subject and a description, Then a ticket is created, open, with a reference number shown.
* AC-2: Given the form is open, When I leave the subject empty, Then the form shows a message and no ticket is created.

## Edge Cases
* A subject over 120 characters is refused.

## Traceability
### Parent Epic
* EP-001

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-002

## Story ID
* US-002

## Story Title
* Attach files to a ticket

## Story Points
* 5

## Description
* As a customer, I want to attach screenshots to my ticket, so that the team can see the problem.

## Acceptance Criteria
* AC-1: Given a ticket is open, When I attach a file under 10 MB, Then the file is stored and listed on the ticket.
* AC-2: Given a ticket is open, When I attach a file over 10 MB or of a type that is not allowed, Then the file is refused with the reason.

## Edge Cases
* Two files with the same name are both kept.

## Traceability
### Parent Epic
* EP-001

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-003

## Story ID
* US-003

## Story Title
* Turn an email into a ticket

## Story Points
* 8

## Description
* As a customer, I want to email the support address, so that I can reach the team without the web form.

## Acceptance Criteria
* AC-1: Given an email arrives at the support mailbox, When the poller reads it, Then a ticket is created with the subject and the body.
* AC-2: Given an email is a reply to a ticket, When the poller reads it, Then it is added to that ticket and no new ticket is made.
* AC-3: Given the mailbox is down, When the poller runs, Then it tries again later and loses no email.

## Edge Cases
* An email with no subject gets the subject (no subject).

## Traceability
### Parent Epic
* EP-001

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-004

## Story ID
* US-004

## Story Title
* See the state of my ticket

## Story Points
* 3

## Description
* As a customer, I want to see where my ticket stands, so that I do not have to ask.

## Acceptance Criteria
* AC-1: Given I have a ticket, When I open it, Then I see its state, its last update and the comments I may read.
* AC-2: Given a ticket belongs to someone else, When I open its address, Then I get a not found page.

## Edge Cases
* A closed ticket still opens.

## Traceability
### Parent Epic
* EP-001

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

## Stories

| Story ID | Title | Points | Ready |
|---|---|---|---|
| US-001 | Open a ticket | 5 | Yes |
| US-002 | Attach files to a ticket | 5 | Yes |
| US-003 | Turn an email into a ticket | 8 | Yes |
| US-004 | See the state of my ticket | 3 | Yes |

## Delivery order

1. US-001
2. US-002
3. US-003
4. US-004
