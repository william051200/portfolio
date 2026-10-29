# SEO keywords

## Search focus

The portfolio targets searches for William Ng and software engineering work in Penang, Malaysia. These phrases reflect the existing portfolio content; they are not based on keyword-volume research.

| Priority | Keyword or phrase | Relevant content |
| --- | --- | --- |
| Primary | William Ng software engineer | Page title, profile, and about section |
| Primary | software engineer in Penang, Malaysia | Page title, description, and profile location |
| Secondary | full-stack applications | Profile and project descriptions |
| Secondary | developer automation | Profile, experience, and projects |
| Secondary | software development engineer | Profile and structured data |
| Supporting | TypeScript and Python applications | About section and capabilities |
| Supporting | AI-enabled computer vision systems | Profile and computer vision projects |
| Supporting | manufacturing software | About section and manufacturing projects |
| Supporting | Microsoft Azure CLI contributions | About section and experience |

Use these phrases where they describe the work naturally. Avoid repeating every phrase in headings or adding hidden keyword lists. Google does not use the `meta keywords` tag, so the page does not include one.

## Implemented SEO

- `index.html` includes a canonical URL, descriptive title, social metadata, and JSON-LD `Person` structured data.
- The canonical URL is `https://william051200.github.io/portfolio/`. Section fragments such as `#home` refer to this same page.
- `public/sitemap.xml` lists the canonical page. Vite copies it to `https://william051200.github.io/portfolio/sitemap.xml` during deployment.
- The metadata copy is recorded separately in [meta-description.md](meta-description.md).

## Deployment and indexing checks

1. Deploy the site, then verify the URL-prefix property `https://william051200.github.io/portfolio/` in Google Search Console.
2. Submit `https://william051200.github.io/portfolio/sitemap.xml`.
3. Inspect the canonical URL and check that Google can render the portfolio content. Request indexing after deployment.

The page still renders its main content with Vue in the browser. Prerendering is not included in this change. Google can render JavaScript, but prerendered HTML would reduce reliance on that step and help crawlers that cannot run JavaScript.

GitHub Pages project sites cannot control the host-root `robots.txt` from this repository's `public` folder. No project-level `robots.txt` was added; a sitemap can be submitted directly in Search Console.

If the domain or repository path changes, update the canonical URL, `og:url`, JSON-LD URL, sitemap, and these documents together. Metadata and sitemap submission do not guarantee indexing or rankings.

## References

- [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google: Supported meta tags](https://developers.google.com/search/docs/crawling-indexing/special-tags)
- [Google: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
