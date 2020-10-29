# Across the Stack
Check it out at https://across-the-stack.vercel.app

## High-level Planning
- [x] Spin up a Postgres Docker container
- [x] Load the [Pagila](https://github.com/devrimgunduz/pagila) sample dataset
- [x] Spin up a [PostgREST](https://github.com/PostgREST/postgrest) container
  - [x] Configure anonymous (read) and trusted (read, write) roles
- [x] Deploy backend on an AWS EC2 instance
- [x] Test read/write on actor/film tables
- [x] Implement Next.js web app with the following pages:
  - [x] Table view page
    - [x] Pagination
  - [x] Insert form page
- [x] Use CI/CD to deploy frontend to Vercel


## API Examples
The http request examples below use [`httpie`](https://github.com/httpie/httpie), though you may opt to use `curl` or `wget`.

Get films
```bash
http https://across.terse.live/film \
     order==last_update.desc \
     | npx -q fx
```

Insert film
```bash
MYTOKEN=<jwt_token_here> \
http POST https://across.terse.live/film \
     Authorization:"Bearer $MYTOKEN" \
     title="Inception" \
     description="Some trippy Chris Nolan movie about dreams" \
     release_year:=2010 \
     length:=148 \
     rating="PG-13" \
     language_id:=1
```
