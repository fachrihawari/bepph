import { ComponentChildren } from "preact";
import { Navbar } from "../components/Navbar";

type LayoutProps = {
  children: ComponentChildren
}

export function Layout(props: LayoutProps) {
  const { children = true } = props
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Layout File</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossOrigin="anonymous"
          />
          <script src="https://unpkg.com/htmx.org@1.9.3" integrity="sha384-lVb3Rd/Ca0AxaoZg5sACe8FJKF0tnUgR2Kd7ehUOG5GCcROv5uBIZsOqovBAcWua" crossOrigin="anonymous"></script>
          <style>
            {
              `
              .list-group-item {
                transition: all ease-in 1s ;
              }
              `
            }
          </style>
        </head>
        <body>
          <Navbar />
          <div id="main-content" className="container">
            {children}
          </div>
        </body>
      </html>
    </>
  )
}
