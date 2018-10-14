# Analyze-Properties Backend README

## Ruby/Rails Version
Ruby: 2.5.1p57  
Rails: 5.2.1
## System dependencies
---
### PostgreSQL 10 - https://www.postgresql.org/download/
_Relational Database_

#### Installer setup for localhost/development
**username**: analyze-properties  
**password**: password  
**port**: 5432  

### pgAdmin - https://www.pgadmin.org/download/
_Administration and development platform for PostgreSQL._

**Localhost pgAdmin portal**  
http://127.0.0.1:50397/browser/

## App initialization
---
From the terminal:
`bundle install`

## Database initialization
---
From the terminal:  
`rake db:setup`  
`rake db:migrate`

## Running tests
---
From the terminal:  
`rails test`

## Starting the app
---
From the terminal:  
`rails s`  

Navigate to: http://localhost:3000/

## Endpoints
test OK endpoint:  http://localhost:3000/api/v1/test


