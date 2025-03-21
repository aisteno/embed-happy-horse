function getSiteUserInfo() {
    // Look for "SiteUserInfo=" followed by any characters not including semicolon
    const match = document.cookie.match(/(^|;\s*)SiteUserInfo=([^;]+)/);
    if (!match) return null;

    try {
        // The cookie value is URL-encoded JSON, so decode and parse
        console.log(match[2]);
        return JSON.parse(decodeURIComponent(match[2]));
    } catch (err) {
        console.error('Error parsing SiteUserInfo cookie:', err);
        return null;
    }
}

getSiteUserInfo();
