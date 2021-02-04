// Imports
const request = require('request');
const cheerio = require('cheerio');

// The page to be scraped
request('https://americangrilledcheesecompany.com/locations/', (error, response, html) => {

    // Scrape the page if there are no errors
    if(!error && response.statusCode == 200) {

        // The html to be scraped from the page
        const $ = cheerio.load(html);

        // For each loop that goes through all of the location titles
        $('.locations-list').each((i, el) => {

            const title = $(el)
            .find('h3')
            .text()
            .replace(/\s\s+/g, '');

            console.log(title);

        });

    }

});