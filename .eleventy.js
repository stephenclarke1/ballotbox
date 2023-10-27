const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {

    // eleventyConfig.addPassthroughCopy('./src/assets/styles/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/events');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    //titlecase filter
    eleventyConfig.addFilter("titlecase", (str) => {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    });


     // Create the filter function.
    function sortByOrder(values) {
        let vals = [...values]
        return vals.sort((a, b) => Math.sign(a.data.order - b.data.order))
    }

    // Add the filter.
    eleventyConfig.addFilter('sortByOrder', sortByOrder)

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}