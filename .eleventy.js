module.exports = function(eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy images if you add them later
  eleventyConfig.addPassthroughCopy("src/images");

  // Copy CNAME file for GitHub Pages
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Add pathPrefix filter for GitHub Pages subdirectory support
  eleventyConfig.addFilter("url", function(url) {
    const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "";
    if (!url) return url;
    if (url.startsWith('http')) return url;
    return pathPrefix + url;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/"
  };
};
