# User stories: Customer portal

# User Story - US-009

## Story ID
* US-009

## Story Title
* List my tickets

## Story Points
* 3

## Description
* As a customer, I want to see all my tickets, so that I can follow each one.

## Acceptance Criteria
* AC-1: Given I am signed in, When I open My tickets, Then my tickets are listed newest first with their state.
* AC-2: Given I have no tickets, When I open My tickets, Then the page says so and links to the new ticket form.

## Edge Cases
* Another customer tickets never appear.

## Traceability
### Parent Epic
* EP-003

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-010

## Story ID
* US-010

## Story Title
* Search help articles

## Story Points
* 5

## Description
* As a customer, I want to search the help articles before I open a ticket, so that I may find the answer myself.

## Acceptance Criteria
* AC-1: Given articles exist, When I type a word in the search box, Then matching articles are listed best match first.
* AC-2: Given nothing matches, When I search, Then the page says so and offers to open a ticket.

## Edge Cases
* A search of one letter is not run.

## Traceability
### Parent Epic
* EP-003

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-011

## Story ID
* US-011

## Story Title
* Rate an answer

## Story Points
* 3

## Description
* As a customer, I want to rate how well my ticket was handled, so that the team learns what works.

## Acceptance Criteria
* AC-1: Given my ticket is closed, When I give 1 to 5 stars and a comment, Then the rating is saved on the ticket.
* AC-2: Given my ticket is open, When I try to rate it, Then the page does not offer a rating.

## Edge Cases
* A second rating replaces the first.

## Traceability
### Parent Epic
* EP-003

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

## Stories

| Story ID | Title | Points | Ready |
|---|---|---|---|
| US-009 | List my tickets | 3 | Yes |
| US-010 | Search help articles | 5 | Yes |
| US-011 | Rate an answer | 3 | Yes |

## Delivery order

1. US-009
2. US-010
3. US-011
