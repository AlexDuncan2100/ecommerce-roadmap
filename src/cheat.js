const CHEAT = {
 genel: {
  tr: [{h:"Temel formüller", items:["Dönüşüm oranı = Sipariş / Ziyaret","AOV = Ciro / Sipariş sayısı","CAC = Pazarlama gideri / Yeni müşteri","LTV = AOV × Yıllık sipariş sıklığı × Brüt marj × Müşteri ömrü","ROAS = Reklam cirosu / Reklam harcaması"]},
       {h:"Yasal kontrol listesi (TR)", items:["ETBİS kaydı ve bildirimi","Mesafeli satış sözleşmesi ve ön bilgilendirme formu","KVKK aydınlatma metni ve çerez politikası","İade ve cayma hakkı sayfası","Fatura ve e-arşiv düzeni"]},
       {h:"Lansman öncesi", items:["Ürün veri tablosu (GTIN, öznitelik, görsel)","Kargo ve iade politikası","Ödeme ve 3D Secure testi","Merchant Center feed onayı","Analitik ve dönüşüm takibi"]}],
  en: [{h:"Core formulas", items:["Conversion rate = Orders / Sessions","AOV = Revenue / Orders","CAC = Marketing spend / New customers","LTV = AOV × Order frequency × Gross margin × Lifetime","ROAS = Ad revenue / Ad spend"]},
       {h:"Compliance checklist", items:["Business registration and tax ID","Terms, privacy and cookie policies","Returns and withdrawal policy","EU VAT: OSS / IOSS where relevant","Invoice and record keeping"]},
       {h:"Before launch", items:["Product data sheet (GTIN, attributes, images)","Shipping and returns policy","Payment testing","Merchant Center feed approved","Analytics and conversion tracking"]}]
 },
 amazon: {
  tr: [{h:"Terimler", items:["ASIN: Amazon ürün kimliği","Buy Box: Öne çıkan teklif","FBA / FBM: Amazon'un ya da satıcının gönderimi","ACOS = Reklam harcaması / Reklam satışı","TACOS = Reklam harcaması / Toplam satış"]},
       {h:"Listeleme kontrolü", items:["Başlık: marka + ürün + temel özellik","5 madde işareti: fayda odaklı","Arama terimleri alanı doldu mu","Ana görsel beyaz arka planlı","Varyasyonlar doğru parent altında"]},
       {h:"Hesap sağlığı", items:["Sipariş kusur oranı < %1","Geç gönderim oranı < %4","Gönderim öncesi iptal < %2.5","Politika uyarılarını haftalık kontrol"]}],
  en: [{h:"Terms", items:["ASIN: Amazon product ID","Buy Box: the Featured Offer","FBA / FBM: fulfilled by Amazon or by merchant","ACOS = Ad spend / Ad sales","TACOS = Ad spend / Total sales"]},
       {h:"Listing checklist", items:["Title: brand + product + key attribute","5 benefit-led bullets","Search terms filled","Main image on white background","Variations under the right parent"]},
       {h:"Account health", items:["Order defect rate < 1%","Late shipment rate < 4%","Pre-fulfillment cancel rate < 2.5%","Review policy warnings weekly"]}]
 },
 etsy: {
  tr: [{h:"Etsy SEO", items:["13 etiketin hepsini kullan","Etiketler 20 karaktere kadar, çok kelimeli","Başlığın başı en önemli kelimeler","Kategori ve öznitelikleri eksiksiz doldur","Fotoğraf: ilk görsel küçük resimde net olmalı"]},
       {h:"Fiyat formülü", items:["Malzeme + işçilik + ambalaj","+ Etsy ücretleri (listeleme, işlem, ödeme)","+ Reklam payı","+ Kâr marjı","Ücretsiz kargo eşiğini hesaba kat"]}],
  en: [{h:"Etsy SEO", items:["Use all 13 tags","Tags up to 20 characters, multi-word","Most important words first in the title","Fill category and attributes completely","Thumbnail must read clearly"]},
       {h:"Pricing formula", items:["Materials + labour + packaging","+ Etsy fees (listing, transaction, payment)","+ Ad allowance","+ Profit margin","Account for free-shipping thresholds"]}]
 },
 shopify: {
  tr: [{h:"Kurulum sırası", items:["Mağaza ayarları ve yasal sayfalar","Ürünler ve koleksiyonlar","Tema ve gezinme menüsü","Ödeme, vergi ve kargo","Alan adı ve test siparişi"]},
       {h:"Liquid hızlı başvuru", items:["{{ product.title }}: çıktı","{% if %} / {% for %}: mantık","| money: para biçimi filtresi","sections + blocks: OS 2.0 yapısı"]}],
  en: [{h:"Setup order", items:["Store settings and legal pages","Products and collections","Theme and navigation","Payments, tax and shipping","Domain and a test order"]},
       {h:"Liquid quick reference", items:["{{ product.title }}: output","{% if %} / {% for %}: logic","| money: currency filter","sections + blocks: OS 2.0 structure"]}]
 },
 "3pl": {
  tr: [{h:"Terimler", items:["3PL: Üçüncü taraf lojistik","4PL: Lojistiği bütünüyle yöneten taraf","SKU: Stok tutma birimi","ASN: Ön sevk bildirimi","Pick / Pack: Toplama / Paketleme"]},
       {h:"Depo KPI'ları", items:["Sipariş doğruluğu > %99.5 (hedef)","Aynı gün sevk oranı","Sipariş başı maliyet","Stok doğruluğu","Stok devir hızı"]},
       {h:"3PL teklifinde sorulacaklar", items:["Mal kabul ücreti","Palet/raf başı depolama","Sipariş başı elleçleme","İade işleme ücreti","Pazaryeri entegrasyonları"]}],
  en: [{h:"Terms", items:["3PL: third-party logistics","4PL: end-to-end logistics manager","SKU: stock keeping unit","ASN: advance shipping notice","Pick / Pack"]},
       {h:"Warehouse KPIs", items:["Order accuracy > 99.5% (target)","Same-day ship rate","Cost per order","Inventory accuracy","Inventory turns"]},
       {h:"Questions for a 3PL quote", items:["Receiving fee","Storage per pallet/shelf","Pick and pack per order","Returns processing fee","Marketplace integrations"]}]
 },
 ebay: {
  tr: [{h:"Listeleme kontrolü", items:["Başlık 80 karakteri iyi kullan","Item specifics eksiksiz","Kargo ve iade politikası net","En az birkaç net fotoğraf","Doğru kategori ve katalog eşleşmesi"]},
       {h:"Performans", items:["Zamanında takip numarası","Düşük kusur oranı","Hızlı mesaj yanıtı","Olumlu geri bildirim"]}],
  en: [{h:"Listing checklist", items:["Use the 80-character title well","Complete item specifics","Clear shipping and returns","Several sharp photos","Right category and catalog match"]},
       {h:"Performance", items:["On-time tracking upload","Low defect rate","Fast message replies","Positive feedback"]}]
 },
 zalando: {
  tr: [{h:"Başarı faktörleri", items:["Eksiksiz beden ve öznitelik verisi","Zalando görsel standartlarına uyum","Hızlı teslim (kendi lojistiği veya ZFS)","İade oranını düşüren beden bilgisi","zDirect raporlarını haftalık takip"]}],
  en: [{h:"Success factors", items:["Complete size and attribute data","Images meeting Zalando standards","Fast delivery (own logistics or ZFS)","Size guidance that cuts returns","Weekly zDirect report review"]}]
 },
 kaufland: {
  tr: [{h:"Başlangıç kontrolü", items:["Ürünlerde geçerli EAN","Almanca ürün verisi","Teslim süresi ayarları","Kaufland kurallarına uyum","FBK veya kendi gönderim kararı"]}],
  en: [{h:"Getting started", items:["Valid EAN on every product","German-language product data","Handling and delivery times set","Seller guidelines followed","Decide FBK or self-fulfilled"]}]
 },
 wayfair: {
  tr: [{h:"Modeli anlamak", items:["Wayfair perakende fiyatı belirler","Tedarikçi toptan maliyet verir","Tedarikçi dropship gönderir veya CastleGate'e stok koyar","Büyük ürünlerde LTL kargo planı","Hasarı azaltan ambalaj"]}],
  en: [{h:"Understanding the model", items:["Wayfair sets retail price","Supplier provides wholesale cost","Supplier dropships or stocks CastleGate","Plan LTL freight for bulky items","Packaging that reduces damage"]}]
 }
};
if (typeof module !== "undefined") module.exports = { CHEAT };
