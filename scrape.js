// Imports
const request = require('request');
const cheerio = require('cheerio');

// The page to be scraped
request('https://americangrilledcheesecompany.com/', (error, response, html) => {

    // Scrape the page if there are no errors
    if(!error && response.statusCode == 200) {

        // The html to be scraped from the page
        const $ = cheerio.load(html);

        // Grabs the menu section on the page
        const menuSection = $('.menu-section');
        // Grabs the heading from the menu section on the page
        // const menuSection = $('.menu-section h3');

        // Retrieves the html
        // console.log(menuSection.html());
        // Grabs the heading from the menu section on the page
        // const output = menuSection.find('h3').text();

        // console.log(output);

        // Loops through each item in the navbar
        $('.nav-item a').each((i, el) => {

            // The text of the nav-item
            const item = $(el).text();
            // The link of the navitem
            const link = $(el).attr('href');

            console.log(link);

        });

    }

});