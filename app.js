const express = require("express");
const puppeteer = require("puppeteer");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  console.log("started");
  const pngName = "goog-home.png";

  let fp = (async () => {
    const browser = await puppeteer.launch({
      defaultViewport: null,
      args: ["--window-size=1920,1080"]
    });
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.goto("https://google.com");

    console.log("saying hi");
    await page.type('input', 'hello');

    console.log("snapping a pic");
    await page.screenshot({ path: pngName });

    await page.close();
    await browser.close();
  })();

  await fp;

  res.set("Content-Type", "image/png");

  s = fs.createReadStream("./" + pngName);

  s.pipe(res);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
