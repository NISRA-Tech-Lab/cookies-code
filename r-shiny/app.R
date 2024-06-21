library(shiny)

# Define UI for application that draws a histogram
ui <- fluidPage(
  
    tags$link(rel = "stylesheet", type = "text/css", href = "style.css"),
  
    div(id = "cookie-banner", class = "cookies-infobar",
        style = "display: none; width: 100%; position: fixed;",
        role = "cookies-information",
        div(class = "container-fluid main-container",
            p(strong("Cookies on the Northern Ireland Statistics and Research Agency website")),
            p("This prototype web page places small amounts of information known as cookies on your device",
            a(href = "https://www.nisra.gov.uk/cookies", class ="cookiesbarlink", "Find out more about cookies")),
            HTML('<button id="accept-cookies" class="cookies-infobar_btn">Accept cookies</button>'),
            HTML('<button id="reject-cookies" class="cookies-infobar_btn_reject">Reject cookies</button>'))),
    
    includeScript("www/cookies_script.js"),
    
    titlePanel("Cookies code for R Shiny"),
    
    p("The necessary scripts and code for using the NISRA cookies code are included in this folder")
)

# Define server logic required to draw a histogram
server <- function(input, output) {


}

# Run the application 
shinyApp(ui = ui, server = server)
