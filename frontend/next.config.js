const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  // Ensure Next uses the frontend folder as the tracing root to avoid
  // "inferred workspace root" warnings when multiple lockfiles exist.
  outputFileTracingRoot: path.resolve(__dirname),
};
