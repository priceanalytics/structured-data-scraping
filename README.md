# @priceanalytics/structured-data-scraping

Structured data extractor ld+json

```js
import StructuredDataScraping from "./index";

StructuredDataScraping
    //.load("")
    //.loadFromFile("sample.html")
    //.download("URL")
    .then((body) => StructuredDataScraping.parser(body))
    .then((result: any) => {
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(result, null, 4));
    })
    .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
    });
```