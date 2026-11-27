# User stories: SLA and notifications

# User Story - US-012

## Story ID
* US-012

## Story Title
* Set SLA policies

## Story Points
* 5

## Description
* As a admin, I want to set a first reply and a resolution time for each priority, so that agents know their deadlines.

## Acceptance Criteria
* AC-1: Given I am an admin, When I save a policy for a priority, Then new tickets of that priority get its deadlines.
* AC-2: Given I am an agent, When I try to change a policy, Then I am refused.

## Edge Cases
* A resolution time shorter than the first reply time is refused.

## Traceability
### Parent Epic
* EP-004

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-013

## Story ID
* US-013

## Story Title
* Show the SLA clock

## Story Points
* 5

## Description
* As a agent, I want to see how much time a ticket has left, so that I work the tickets about to breach first.

## Acceptance Criteria
* AC-1: Given a ticket has a deadline, When I see it in the queue or on the ticket, Then the time left is shown and turns red under 15 minutes.
* AC-2: Given a ticket is paused while waiting for the customer, When I see it, Then the clock is shown as paused.

## Edge Cases
* Business hours are not modelled yet: the clock runs all day.

## Traceability
### Parent Epic
* EP-004

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-014

## Story ID
* US-014

## Story Title
* Warn before a breach

## Story Points
* 5

## Description
* As a agent, I want to be warned before a ticket breaches, so that I can act in time.

## Acceptance Criteria
* AC-1: Given a ticket has 15 minutes left, When the checker runs, Then its owner gets one warning.
* AC-2: Given a ticket was warned, When the checker runs again, Then no second warning is sent.

## Edge Cases
* An unassigned ticket warns the whole team.

## Traceability
### Parent Epic
* EP-004

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-015

## Story ID
* US-015

## Story Title
* Read my notifications

## Story Points
* 3

## Description
* As a agent, I want to see my notifications in the app, so that I do not rely on email alone.

## Acceptance Criteria
* AC-1: Given I have notifications, When I open the bell, Then unread ones are first and a count is shown.
* AC-2: Given I open a notification, When I click it, Then it is marked read and I land on its ticket.

## Edge Cases
* More than 99 unread shows 99+.

## Traceability
### Parent Epic
* EP-004

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

## Stories

| Story ID | Title | Points | Ready |
|---|---|---|---|
| US-012 | Set SLA policies | 5 | Yes |
| US-013 | Show the SLA clock | 5 | Yes |
| US-014 | Warn before a breach | 5 | Yes |
| US-015 | Read my notifications | 3 | Yes |

## Delivery order

1. US-012
2. US-013
3. US-014
4. US-015
