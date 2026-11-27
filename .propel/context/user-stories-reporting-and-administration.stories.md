# User stories: Reporting and administration

# User Story - US-016

## Story ID
* US-016

## Story Title
* See ticket volume

## Story Points
* 5

## Description
* As a manager, I want to see tickets opened and closed per day, so that I can plan staffing.

## Acceptance Criteria
* AC-1: Given I pick a date range, When the dashboard loads, Then a chart shows tickets opened and closed per day.
* AC-2: Given the range holds no tickets, When the dashboard loads, Then the chart says there is no data.

## Edge Cases
* A range over 1 year is refused.

## Traceability
### Parent Epic
* EP-005

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-017

## Story ID
* US-017

## Story Title
* Manage users and roles

## Story Points
* 5

## Description
* As a admin, I want to invite users and give them a role, so that people can do only their job.

## Acceptance Criteria
* AC-1: Given I am an admin, When I invite an email with a role, Then the user gets an invitation and has that role after they accept.
* AC-2: Given I change a role, When I save, Then the user has the new role from their next request.

## Edge Cases
* The last admin cannot be demoted.

## Traceability
### Parent Epic
* EP-005

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

# User Story - US-018

## Story ID
* US-018

## Story Title
* Keep an audit trail

## Story Points
* 3

## Description
* As a admin, I want to see who changed what, so that I can answer an audit.

## Acceptance Criteria
* AC-1: Given a setting or a role changes, When the change is saved, Then an audit row holds who, what, when and the old and new value.
* AC-2: Given I open the audit log, When I filter by user or date, Then only matching rows are listed.

## Edge Cases
* Audit rows cannot be edited or deleted.

## Traceability
### Parent Epic
* EP-005

### Requirement Tags
* N/A

### Dependencies
* N/A

## Visual Design Context
- **Screen ID(s)**: N/A

## Stories

| Story ID | Title | Points | Ready |
|---|---|---|---|
| US-016 | See ticket volume | 5 | Yes |
| US-017 | Manage users and roles | 5 | Yes |
| US-018 | Keep an audit trail | 3 | Yes |

## Delivery order

1. US-016
2. US-017
3. US-018
