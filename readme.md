# Puppeteer test app

test app for running puppeteer, taking a screenshot and returning it

### Installing

installing puppeteer will install a compatible version of chromium

```
npm install
```

## Running

```
node app.js
```

navigate to `http://localhost:8080/`

## Deployment

`master` builds and deploys to heroku

# Troubleshoot

Heroku instance does not spin up with everything required to run puppeteer. Must add [puppeteer-heroku-buildpack][1] to start chromium with pupeteer.

[1]: https://github.com/jontewks/puppeteer-heroku-buildpack