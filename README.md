# Project Defect Dashboard

A small dashboard of high level statistics for defects per project from yoru defect tracking tool. The idea here is to be able to query an endpoint in this case [CA Rally](https://www.broadcom.com/products/software/agile-development/rally-software) and pull some high level stats for your defects.

- Average defect age
- Defects by environment

## Build

Restore `npm install`

Run development server `npm start`

## TODO:
- Replace mocks with call to back end
- Implement a back-end to talk to your chosen bug tracker...