# Implementing NISRA Cookies Code

## HTMLs hosted on DataVis server

[Link to folder](html-on-datavis)

This folder contains three files:

* [cookies_script.js](html-on-datavis/cookies_script.js)
* [example.html](html-on-datavis/example.html)
* [style.css](html-on-datavis/style.css)

This code is only to be used on html outputs that will be published on the DataVis server. Visuals being published on the [NISRA Interactive Data Visualisation Hub](https://visual.nisra.gov.uk/) will automatically have that website's Cookie policy applied.

To implement in a HTML project:

_Recommended software: [Visual Studio Code](https://code.visualstudio.com/) (available free from ITAssist via Service Request) or [Notepad++](https://notepad-plus-plus.org/) (available free from ITAssist Store)_

1. Copy and paste the content of `style.css` into your project's current CSS style sheet.
1. Place the file `cookies_script.js` in the same folder as your main html script.
1. In your main html script, add the line `<div id = "cookie-banner"></div>` directly below the opening `<body>` tag.
1. After the closing `</body>` tag, add the line `<script src = "cookies_script.js"></script>`
1. Below this add the line `<script>window.onload = showCookieBanner;</script>` (if your project already has a `window.onload` function then add a call to `showCookieBanner()` to its internal workings).

__Please note that the full functionality of the Cookies Banner will not be visibile when viewing the html output offline, but will be functional when it is hosted on the DataVis server.__

## Rmarkdown documents

[Link to folder](r-markdown)

This folder contains three files:

* [cookies_script.js](r-markdown/cookies_script.js)
* [report.Rmd](r-markdown/report.Rmd)
* [style.css](r-markdown/style.css)

This code has already been implemented in the [latest version of the NISRA RAP Skeleton](https://github.com/NISRA-Tech-Lab/rap-skeleton).

To implement in an existing Rmd project:

_Recommended software: [R](https://www.r-project.org/) with [RStudio](https://posit.co/download/rstudio-desktop/) (both available free from ITAssist Store)_

1. Copy and paste the content of `style.css` into your project's current CSS style sheet.
1. Place the file `cookies_script.js` in the same folder as your main Rmd script. 
1. In your main Rmd script, remove any existing code relating to Google Tag Manager and add the line `<div id = "cookie-banner"></div>` directly below the YAML declaration.
1. At the bottom of your main Rmd script add the line `<script> src = "cookies_script.js"</script>`

__Please note that the full functionality of the Cookies Banner will not be visibile when viewing the output offline, but will be functional when it is hosted on the DataVis server.__

## RShiny apps

[Link to folder](r-shiny)

This folder contains three files:

* [app.R](r-shiny/app.R)
* [www/cookies_script.js](r-shiny/www/cookies_script.js)
* [www/style.css](r-shiny/www/style.css)

To implement in an existing Shiny App:

_Recommended software: [R](https://www.r-project.org/) with [RStudio](https://posit.co/download/rstudio-desktop/) (both available free from ITAssist Store)_

1. If it doesn't exist, create a sub-folder named `www` in the same directory as your `app.R` script.
1. Place both the `cookies_script.js` and `style.css` files in there. Alternatively, you may wish to append the contents of `style.css` to an existing Stylesheet.
1. In your `app.R` script add the line `tags$link(rel = "stylesheet", type = "text/css", href = "style.css")` to the `ui`.
1. Add the banner code from lines 8-16 of this `app.R` script to the `ui`.
1. Directly below this, add the line `includeScript("www/cookies_script.js")`

__Please note that the full functionality of the Cookies Banner will not be visibile when using the App online, but will be functional when it is hosted on the RShiny server.__

## Power BI dashboards

[Link to folder](power-bi)

This folder contains one file:

* [powerbi-html-template.html](power-bi/powerbi-html-template.html)

This code is to be used to prepare the PowerBI dashboard for uploading to the DataVis server.

To implement:

_Recommended software: [Visual Studio Code](https://code.visualstudio.com/) (available free from ITAssist via Service Request) or [Notepad++](https://notepad-plus-plus.org/) (available free from ITAssist Store)_

1. Obtain the embed link for your report from the PowerBI web service.
1. Remove the `placeholder` link on line 23 of the html script.
1. Replace it with the embed link you obtained.
1. Update lines 5 and 15 with the title of your Report.
1. Save HTML file and upload to DataVis.

__Please note that the full functionality of the Cookies Banner will not be visibile when viewing the output offline, but will be functional when it is hosted on the DataVis server.__
