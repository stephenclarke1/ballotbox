module.exports = function(eleventyConfig) {

    // eleventyConfig.addPassthroughCopy('./src/assets/styles/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}