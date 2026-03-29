import path from "node:path";
import nextra from "nextra";

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/bsd' : '',
  assetPrefix: isProd ? '/bsd/' : '',
  images: {
    unoptimized: true,
  },
};

// Set up Nextra with its configuration
const withNextra = nextra({
	// ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra({
	// ... Add regular Next.js options here

	...nextConfig,

	turbopack: {
		root: path.join(import.meta.dirname, ".."),
	},
});
