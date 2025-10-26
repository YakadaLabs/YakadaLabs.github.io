module.exports = function(eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy images if you add them later
  eleventyConfig.addPassthroughCopy("src/images");

  // Copy CNAME file for GitHub Pages
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Add build timestamp for cache busting
  eleventyConfig.addGlobalData("buildTimestamp", () => {
    return Date.now();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
