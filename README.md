Pass.in is an application to **manage participants of in-person events**

It allows the organizer registers an event and open a public page for submission.

The registered participants can emit a credential for check-in on the day of the event.

The system will scan the participants credential to permit their entrance in the event.

## Requirements

### Functional Requirements

- [ ] The organizer should be able to register a new event;
- [ ] The organizer should be able to view data of an event;
- [ ] The organizer should be able to view the list of participants;
- [ ] The participant should be able to register for an event;
- [ ] The participant should be able to view their registration permit;
- [ ] The participant should be able to check in to an event;

### Business Rules

- [ ] The participant can only register in an event once;
- [ ] The participant can only register for events with available spots;
- [ ] The participant can check-in an event only once;

### Non-functional Requirements

- [ ] Check-in should be facilitated via QR code.


---
## Anotations:

Request Body
Search Params (Search Params / Query Params) `http://localhost:3333/users?name=Fred`
Route Params -> Identification of resoucers `DELETE http://localhost:3333/users/3`
Headers -> Context

Native Driver / Query Builder / ORMs (Object Relational Mapping)

20x => Success
30x => Redirect
40x => Client Error
50x => Server Error


