import { ComponentChildren } from "preact";
import { Navbar } from "./Navbar";

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
        </head>
        <body>
          <Navbar />
          <div className="container">
            {children}
          </div>
        </body>
      </html>
    </>
  )
}
