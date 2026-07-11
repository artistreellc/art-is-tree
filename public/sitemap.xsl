<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Art is Tree LLC</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #374151;
            max-width: 75rem;
            margin: 0 auto;
            padding: 2rem;
            background: #f3f4f6;
          }
          h1 {
            color: #166534; /* Green-700 from Tailwind */
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            font-weight: 800;
            letter-spacing: -0.025em;
          }
          p.desc {
            color: #4b5563;
            margin-bottom: 2rem;
            font-size: 1.1rem;
            line-height: 1.6;
            max-width: 65ch;
          }
          a {
            color: #15803d; /* Green-700 */
            text-decoration: none;
            transition: color 0.2s;
          }
          a:hover {
            text-decoration: underline;
            color: #14532d; /* Green-900 */
          }
          .card {
            background: #ffffff;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            overflow: hidden;
            border: 1px solid #e5e7eb;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th {
            background-color: #f9fafb;
            color: #111827;
            font-weight: 600;
            text-align: left;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid #e5e7eb;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          tr {
            border-bottom: 1px solid #e5e7eb;
            transition: background-color 0.2s ease;
          }
          tr:last-child {
            border-bottom: none;
          }
          tr:nth-child(even) {
            background-color: #fcfcfc;
          }
          tr:hover {
            background-color: #f0fdf4; /* Green-50 */
          }
          td {
            padding: 1rem 1.5rem;
            font-size: 0.95rem;
            color: #4b5563;
          }
          td.url {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            font-size: 0.875rem;
            color: #166534;
          }
          td.priority-high {
            color: #166534;
            font-weight: 700;
          }
          td.priority-medium {
            color: #b45309;
            font-weight: 600;
          }
          td.priority-low {
            color: #6b7280;
          }
          .footer {
            margin-top: 2.5rem;
            text-align: center;
            font-size: 0.875rem;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
            padding-top: 1.5rem;
          }
          @media (max-width: 768px) {
            body { padding: 1rem; }
            .card { border-radius: 0.5rem; }
            table, thead, tbody, th, td, tr { display: block; }
            thead tr { position: absolute; top: -9999px; left: -9999px; }
            tr { border: 1px solid #e5e7eb; margin-bottom: 1rem; border-radius: 0.5rem; background: #fff !important; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
            td { border: none; border-bottom: 1px solid #f3f4f6; position: relative; padding-left: 50%; padding-top: 0.75rem; padding-bottom: 0.75rem; text-align: right; }
            td:last-child { border-bottom: none; }
            td:before { position: absolute; top: 0.75rem; left: 1rem; width: 40%; white-space: nowrap; font-weight: 600; text-align: left; color: #9ca3af; content: attr(data-label); font-size: 0.75rem; text-transform: uppercase; }
            td.url { text-align: right; word-break: break-all; padding-left: 1rem; text-align: left; display: block; padding-top: 2.5rem; }
            td.url:before { content: "URL"; top: 0.75rem; }
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p class="desc">
          This is the XML Sitemap for <a href="https://artistreevabeach.com">Art is Tree LLC</a>.
          It helps search engines like Google and Bing discover and index our pages, ensuring customers can find our tree removal and crane services in Virginia Beach.
        </p>
        <div class="card">
          <table>
            <thead>
              <tr>
                <th width="50%">URL</th>
                <th width="15%">Priority</th>
                <th width="15%">Change Frequency</th>
                <th width="20%">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td data-label="URL" class="url">
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td data-label="Priority">
                    <xsl:choose>
                      <xsl:when test="sitemap:priority &gt;= 0.8">
                        <xsl:attribute name="class">priority-high</xsl:attribute>
                      </xsl:when>
                      <xsl:when test="sitemap:priority &gt;= 0.5">
                        <xsl:attribute name="class">priority-medium</xsl:attribute>
                      </xsl:when>
                      <xsl:otherwise>
                        <xsl:attribute name="class">priority-low</xsl:attribute>
                      </xsl:otherwise>
                    </xsl:choose>
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                  <td data-label="Change Freq">
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td data-label="Last Modified">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
        <div class="footer">
          Generated for <strong>Art is Tree LLC</strong> &bull; Optimized for Search Engines &bull; Virginia Beach, VA
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>