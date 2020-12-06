"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
index_1.default
    .load("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org/\",\"@type\":\"Product\",\"name\":\"Notebook Acer 10ºGeração Intel Core i3-1005G1 8GB HD 1TB Tela 15.6\\\" Windows 10 Aspire 3 A315-56-34A9\",\"brand\":\"Acer\",\"image\":\"https://carrefourbr.vtexassets.com/arquivos/ids/10981430/30006538469406.jpg?v=637417920754600000\",\"description\":\"Compre Notebook Acer 10ºGeração Intel Core i3-1005G1 8GB HD 1TB Tela 15.6\\\" Windows 10 Aspire 3 A315-56-34A9  no Carrefour! Confira nossas ofertas!\",\"mpn\":\"6477362\",\"sku\":\"6442076\",\"offers\":{\"@type\":\"AggregateOffer\",\"lowPrice\":2899,\"highPrice\":2899,\"priceCurrency\":\"BRL\",\"offers\":[{\"@type\":\"Offer\",\"price\":2899,\"priceCurrency\":\"BRL\",\"availability\":\"http://schema.org/InStock\",\"sku\":\"6442076\",\"itemCondition\":\"http://schema.org/NewCondition\",\"priceValidUntil\":\"2050-01-01T02:59:59Z\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Carrefour\"}}],\"offerCount\":1}}</script>")
    //.loadFromFile("sample.html")
    //.download("https://www.carrefour.com.br/mouse-sem-fio-2-4-ghz-1200-dpi-preto-usb-multilaser-mo251-mo251-mp01808721/p")
    .then(function (body) { return index_1.default.parser(body); })
    .then(function (result) {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(result, null, 4));
})
    .catch(function (err) {
    // eslint-disable-next-line no-console
    console.log(err);
});
