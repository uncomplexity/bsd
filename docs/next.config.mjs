import path from "node:path";
import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
	// ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra({
	// ... Add regular Next.js options here
	turbopack: {
		root: path.join(import.meta.dirname, ".."),
	},
});
