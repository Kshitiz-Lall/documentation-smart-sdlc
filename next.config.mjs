import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

const nextConfig = {
  output: "export",
  basePath: "/documentation-smart-sdlc",
  assetPrefix: "/documentation-smart-sdlc/",
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
};

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig, {
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      "next-mdx-import-source-file": "./src/mdx-components.tsx",
    },
  },
  // ... Add regular Next.js options here
  async redirects() {
    return [
      {
        source: "/",
        destination: "/",
        permanent: true,
      },
    ];
  },
});
