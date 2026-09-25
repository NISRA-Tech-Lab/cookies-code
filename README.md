# Implementing NISRA Cookies Code

## HTMLs hosted on DataVis server

[Link to folder](html-on-datavis)

This folder contains four files:

* [consent_head.html](html-on-datavis/consent_head.html)
* [cookie_banner.html](html-on-datavis/cookie_banner.html)
* [example.html](html-on-datavis/example.html)
* [style.css](html-on-datavis/style.css)

This code is only to be used on HTML outputs that will be published on the
DataVis server. Visuals being published on the
[NISRA Interactive Data Visualisation Hub](https://visual.nisra.gov.uk/)
will automatically have that website's cookie policy applied.

To implement in an HTML project:

*Recommended software: [Visual Studio Code](https://code.visualstudio.com/)*
*(available from ITAssist Store) or [Notepad++](https://notepad-plus-plus.org/)*
*(available from ITAssist Store).*

1. Copy and paste the content of `style.css` into your project's current CSS
style sheet.
2. Copy the contents of `consent_head.html` into the `<head>` of your main HTML
file. This must be placed before any other analytics or Google Tag Manager code
so that the default consent state is set before Google Tag Manager loads.
3. Add `<div id="cookie-banner"></div>` directly below the opening `<body>` tag.
4. Copy the contents of `cookie_banner.html` into your main HTML file near the
end of the `<body>`.
5. Remove any existing Google Tag Manager or analytics code that would duplicate
the implementation in `consent_head.html`.

The implementation uses Google Advanced Consent Mode v2. Analytics and
advertising consent are denied by default, while Google Tag Manager is loaded in
all consent states. If analytics cookies are accepted, `analytics_storage` is
granted while advertising consent remains denied. The user's choice is stored
for up to 365 days and reapplied on subsequent visits.

**Please note that full analytics and Google Tag Manager functionality may not**
**be visible when viewing the HTML output offline and should also be tested**
**when hosted on the DataVis server.**

## Rmarkdown documents

[Link to folder](r-markdown)

This folder contains four files:

* [consent_head.html](r-markdown/consent_head.html)
* [cookie_banner.html](r-markdown/cookie_banner.html)
* [report.Rmd](r-markdown/report.Rmd)
* [style.css](r-markdown/style.css)

This code has already been implemented in the latest version of the
[NISRA RAP Skeleton](https://github.com/NISRA-Tech-Lab/rap-skeleton).

To implement in an existing R Markdown project:

*Recommended software: [R](https://www.r-project.org/) with*
*[RStudio](https://posit.co/download/rstudio-desktop/) (both available free*
*from the ITAssist Store).*

1. Copy and paste the content of `style.css` into your project's current CSS
style sheet.
2. Place `consent_head.html` and `cookie_banner.html` in the same folder as your
main R Markdown script.
3. Add the following to the `html_document` section of your YAML:

```yaml
includes:
  in_header:
    - "consent_head.html"
  after_body:
    - "cookie_banner.html"
```

4. Add `<div id="cookie-banner"></div>` directly below the YAML declaration.
5. Remove any existing Google Tag Manager, analytics or cookie banner code that
would duplicate the new implementation.

The implementation uses Google Advanced Consent Mode v2. Analytics and
advertising consent are denied by default, while Google Tag Manager is loaded in
all consent states. If analytics cookies are accepted, `analytics_storage` is
granted while advertising consent remains denied. The user's choice is stored
for up to 365 days and reapplied on subsequent visits.

**Please note that full analytics and Google Tag Manager functionality may not**
**be visible when viewing the HTML output offline and should also be tested**
**when hosted on the DataVis server.**

## RShiny apps

[Link to folder](r-shiny)

This folder contains three files:

* [app.R](r-shiny/app.R)
* [www/cookies_script.js](r-shiny/www/cookies_script.js)
* [www/style.css](r-shiny/www/style.css)

To implement in an existing Shiny App:

*Recommended software: [R](https://www.r-project.org/) with*
*[RStudio](https://posit.co/download/rstudio-desktop/) (both available free*
*from ITAssist Store)*

1. If it doesn't exist, create a sub-folder named `www` in the same directory
as your `app.R` script.
2. Place both the `cookies_script.js` and `style.css` files in there.
Alternatively, you may wish to append the contents of `style.css` to an existing
Stylesheet.
3. In your `app.R` script add the line `tags$link(rel = "stylesheet", type =
"text/css", href = "style.css")` to the `ui`.
4. Add the banner code from lines 8-16 of this `app.R` script to the `ui`.
5. Directly below this, add the line `includeScript("www/cookies_script.js")`

**Please note that the full functionality of the Cookies Banner will not be**
**visibile when using the App online, but will be functional when it is hosted**
**on the RShiny server.**

## Power BI dashboards

[Link to folder](power-bi)

This folder contains one file:

* [powerbi-html-template.html](power-bi/powerbi-html-template.html)

This code is to be used to prepare the Power BI dashboard for uploading to the
DataVis server.

To implement:

*Recommended software: [Visual Studio Code](https://code.visualstudio.com/)*
*(available from ITAssist Store) or [Notepad++](https://notepad-plus-plus.org/)*
*(available from ITAssist Store)*

1. Obtain the embed link for your report from the Power BI web service.
2. In powerbi-html-template.html, find the Power BI <iframe> and replace the
existing placeholder src URL with the embed link for your report.
3. Replace each occurrence of REPORT_NAME with the title of your report.
4. Save the HTML file and upload it to DataVis.

The Power BI HTML template includes the NISRA Google Advanced Consent Mode v2
implementation for dashboards hosted on the DataVis server. Analytics and
advertising consent are denied by default, while Google Tag Manager is loaded in
all consent states. If analytics cookies are accepted, `analytics_storage` is
granted while advertising consent remains denied. The user's choice is stored
for up to 365 days and reapplied on subsequent visits.

**Please note that full analytics and Google Tag Manager functionality may not**
**be visible when viewing the HTML output offline and should also be tested**
**when hosted on the DataVis server.**
