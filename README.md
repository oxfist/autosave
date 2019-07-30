# Autosave
[![CircleCI](https://circleci.com/gh/oxfist/autosave/tree/master.svg?style=svg)](https://circleci.com/gh/oxfist/autosave/tree/master)

## Requirements

1. PostgreSQL 9.x

## Run locally

1. Setup db with `rails db:setup`
1. To deploy locally on port `3000` run `foreman start -f Procfile.dev -p 3000`.

## Deployment

To deploy the most recent commit, push to heroku remote: `git push heroku`.
