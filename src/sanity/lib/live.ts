// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity/live";
import { client } from './client'

// Tokens are only required for Draft Mode/Visual Editing features
// For basic live content updates (published content), tokens can be omitted
// If you need draft preview functionality, provide a token with Viewer permissions
const token = process.env.SANITY_API_READ_TOKEN;

const config: Parameters<typeof defineLive>[0] = {
  client,
};

// Only add tokens if available (required for Draft Mode, optional for published content)
if (token) {
  config.serverToken = token;
  config.browserToken = token;
}

export const { sanityFetch, SanityLive } = defineLive(config);
