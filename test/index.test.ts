import StructuredDataScraping from "../lib/index";

test('Structured data scraping', () => {
  return StructuredDataScraping
    .load("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org/\",\"@type\":\"Product\",\"name\":\"Notebook Acer 10ºGeração Intel Core i3-1005G1 8GB HD 1TB Tela 15.6\\\" Windows 10 Aspire 3 A315-56-34A9\",\"brand\":\"Acer\",\"image\":\"https://carrefourbr.vtexassets.com/arquivos/ids/10981430/30006538469406.jpg?v=637417920754600000\",\"description\":\"Compre Notebook Acer 10ºGeração Intel Core i3-1005G1 8GB HD 1TB Tela 15.6\\\" Windows 10 Aspire 3 A315-56-34A9  no Carrefour! Confira nossas ofertas!\",\"mpn\":\"6477362\",\"sku\":\"6442076\",\"offers\":{\"@type\":\"AggregateOffer\",\"lowPrice\":2899,\"highPrice\":2899,\"priceCurrency\":\"BRL\",\"offers\":[{\"@type\":\"Offer\",\"price\":2899,\"priceCurrency\":\"BRL\",\"availability\":\"http://schema.org/InStock\",\"sku\":\"6442076\",\"itemCondition\":\"http://schema.org/NewCondition\",\"priceValidUntil\":\"2050-01-01T02:59:59Z\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Carrefour\"}}],\"offerCount\":1}}</script>")
    .then((body) => StructuredDataScraping.parser(body))
    .then((data: any) => {
      expect(data[0]["@context"]).toBe("https://schema.org/");
      expect(data[0]["@type"]).toBe("Product");
      expect(data[0]["name"]).toBe("Notebook Acer 10ºGeração Intel Core i3-1005G1 8GB HD 1TB Tela 15.6\" Windows 10 Aspire 3 A315-56-34A9");
    });
});