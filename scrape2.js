// Imports
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

// Write Headers
writeStream.write(`Title \n`);

// The page to be scraped
request('https://americangrilledcheesecompany.com/locations/', (error, response, html) => {

    // Scrape the page if there are no errors
    if(!error && response.statusCode == 200) {

        // The html to be scraped from the page
        const $ = cheerio.load(html);

        // For each loop that goes through all of the location titles
        $('.locations-list').each((i, el) => {

            // The title of the location
            const title = $(el)
                .find('h3')
                .text()
                .replace(/\s\s+/g, '');

            // The title of the location
            // const link = $(el)
            //     .find('a')
            //     .attr('href');

            // Prints out the scraped information to the terminal
            // console.log(title);

            // Write row to csv file
            writeStream.write(`${ title } \n`);

        });

        // Inform terminal that scraping is done
        console.log('Scraping Done...');

    }

});