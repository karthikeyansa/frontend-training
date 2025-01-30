import "./globals.css";
import { Root } from "@adaptavant/eds-core";
import brand from "@adaptavant/eds-brands/setmore";
import translations from "@adaptavant/eds-translations/english";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Inbound</title>
      </head>
      <body>
        <Root brand={brand} colorScheme="light" translations={translations}>
          {children}
        </Root>
      </body>
    </html>
  );
}
