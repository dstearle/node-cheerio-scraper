// Imports
const request = require('request');
const cheerio = require('cheerio');

// The page to be scraped
request('https://americangrilledcheesecompany.com/', (error, response, html) => {

    // Scrape the page if there are no errors
    if(!error && response.statusCode == 200) {

        console.log(html);

    }

});