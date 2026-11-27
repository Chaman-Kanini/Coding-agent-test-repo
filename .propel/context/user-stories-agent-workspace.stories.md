# User stories: Agent workspace

# User Story - US-005

## Story ID
* US-005

## Story Title
* Work a ticket queue

## Story Points
* 5

## Description
* As a agent, I want to see open tickets sorted by age and priority, so that I take the most urgent first.

## Acceptance Criteria
* AC-1: Given tickets are open, When I open the queue, Then they are listed oldest and highest priority first, 25 to a page.
* AC-2: Given the queue is long, When I filter by status or assignee, Then only matching tickets are listed.

## Edge Cases
* An empty queue says so.

## Traceability
### Parent Epic
* EP-002

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-006

## Story ID
* US-006

## Story Title
* Take and hand over a ticket

## Story Points
* 3

## Description
* As a agent, I want to take a ticket or hand it to a colleague, so that each ticket has one owner.

## Acceptance Criteria
* AC-1: Given a ticket has no owner, When I take it, Then I am its owner and it leaves the unassigned list.
* AC-2: Given I own a ticket, When I hand it to a colleague, Then they own it and the change is in its history.

## Edge Cases
* Two agents taking the same ticket at once: the first wins, the second is told.

## Traceability
### Parent Epic
* EP-002

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-007

## Story ID
* US-007

## Story Title
* Reply and leave private notes

## Story Points
* 5

## Description
* As a agent, I want to reply to the customer and to leave notes only the team sees, so that the customer gets answers and the team keeps context.

## Acceptance Criteria
* AC-1: Given I own a ticket, When I send a reply, Then the customer sees it and gets an email.
* AC-2: Given I own a ticket, When I add a private note, Then only agents see it.

## Edge Cases
* A reply with only spaces is refused.

## Traceability
### Parent Epic
* EP-002

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-008

## Story ID
* US-008

## Story Title
* Use canned replies

## Story Points
* 3

## Description
* As a agent, I want to insert a saved reply, so that I answer common questions in seconds.

## Acceptance Criteria
* AC-1: Given saved replies exist, When I pick one in the reply box, Then its text is inserted and I can edit it.
* AC-2: Given I write a reply, When I save it as a canned reply, Then it appears in the list for all agents.

## Edge Cases
* A canned reply name that exists is refused.

## Traceability
### Parent Epic
* EP-002

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

## Stories

| Story ID | Title | Points | Ready |
|---|---|---|---|
| US-005 | Work a ticket queue | 5 | Yes |
| US-006 | Take and hand over a ticket | 3 | Yes |
| US-007 | Reply and leave private notes | 5 | Yes |
| US-008 | Use canned replies | 3 | Yes |

## Delivery order

1. US-005
2. US-006
3. US-007
4. US-008
