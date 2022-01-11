'use strict'

const puppeteer = require('puppeteer')
const cheerio = require('cheerio')

module.exports = async config => {
  try{
  const url = `https://divyabhaskar.co.in/rashifal/${config.num}/today/`
  const puppeteerConfig = {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
  const browser = await puppeteer.launch(puppeteerConfig)
  const page = await browser.newPage()
  page.setViewport({ width: 1366, height: 768 });
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
  );
  page.setRequestInterception(true);
  page.on('request', request => {
    if (!request.isNavigationRequest()) {
      request.continue()
      return
    }
    const headers = request.headers()
    headers['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
    headers['Accept-Encoding'] = 'gzip'
    headers['Upgrade-Insecure-Requests'] = 1
    headers['Referer'] = 'https://www.google.com/'
    request.continue({ headers })
  })
  await page.goto(url, { waitUntil: 'networkidle2' })
  
  const content = await page.content()
  const $ = cheerio.load(content)
  const positive = $(`.${config.class}`).find('p').first().text() || false
  const negative = $(`.${config.class}`).find('p').eq(1).text() || false
  const business = $(`.${config.class}`).find('p').eq(2).text() || false
  const health = $(`.${config.class}`).find('p').eq(4).text() || false
  const teroParagraph = $(`.${config.class}`).find('p').eq(5).text() || false
  const carrier = $(`.${config.class}`).find('p').eq(6).text() || false
  const love = $(`.${config.class}`).find('p').eq(7).text() || false
  const countParagraph = $(`.${config.class}`).find('p').eq(9).text() || false
  const whatToDo = $(`.${config.class}`).find('p').eq(11).text() || false
  const luckyNumber = $(`.${config.class}`).find('p').eq(12).text() || false
  const luckyColor = $(`.${config.class}`).find('p').eq(13).text() || false
  const relatedCelebrities = $(`.${config.class}`).find('p').eq(14).text() || false

  const finalData = {
    positive,
    negative,
    business,
    love,
    health,
    carrier,
    teroParagraph,
    countParagraph,
    whatToDo,
    luckyNumber,
    luckyColor,
    relatedCelebrities
}

  let results = {finalData}
  

  await page.close()
  await browser.close()

  return results
  }catch(error){
    console.log(error);
  }
}
