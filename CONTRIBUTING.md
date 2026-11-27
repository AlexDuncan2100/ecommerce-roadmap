# Katkı rehberi

Katkın için teşekkürler! Bu proje, e-ticaret öğrenenlere **az ama değerli** kaynak sunmayı hedefler. Bu yüzden her link aşağıdaki kurallardan geçer.

## Kaynak kuralları

1. **Dil eşleşmeli.** Türkçe sürüme yalnızca Türkçe, İngilizce sürüme yalnızca İngilizce kaynak eklenir.
2. **Önce resmi kaynak.** Platformun kendi yardım merkezi, eğitim sayfası veya API dokümanı varsa onu tercih et.
3. **Kamu ve otorite kaynakları** (Ticaret Bakanlığı, TİM, platformların resmi YouTube kanalları, tanınmış sektör yayınları) uygundur.
4. **Eklenmeyenler:** satış odaklı açılış sayfaları, içeriği zayıf veya kopya yazılar, giriş gerektiren sayfalar, kısaltılmış linkler.
5. Link açılıyor olmalı ve alt konuyla doğrudan ilgili olmalı.

## Kod bilmeden katkı

- [Kaynak öner](https://github.com/AlexDuncan2100/ecommerce-roadmap/issues/new?template=kaynak-oner.yml)
- [Kırık link bildir](https://github.com/AlexDuncan2100/ecommerce-roadmap/issues/new?template=kirik-link.yml)

## PR ile kaynak ekleme

En kolay yol `src/add.tsv` dosyasına bir satır eklemektir. Alanlar **sekme (TAB)** ile ayrılır:

```
yol_haritası  modül  alt_konu  dil  tür  başlık  url
```

| Alan | Değerler |
|---|---|
| `yol_haritası` | `genel`, `amazon`, `etsy`, `shopify`, `3pl`, `ebay`, `zalando`, `kaufland`, `wayfair` |
| `modül` | 0-9 (sitede "Modül 01" = `0`) |
| `alt_konu` | 0-2 (modülün yanındaki kutular, yukarıdan aşağı) |
| `dil` | `tr` veya `en` |
| `tür` | `official`, `video`, `article`, `pdf`, `course`, `oss` |

Örnek:

```
amazon	0	0	en	official	Amazon Seller Central Help	https://sellercentral.amazon.com/help/hub
```

Sonra siteyi üret ve kontrol et:

```bash
npm run build
# index.html'i tarayıcıda aç ve eklediğin linki kontrol et
```

PR açarken `src/` değişikliklerini **ve** yeniden üretilmiş `index.html` dosyasını ekle. Tekrar eden linkler `merge.js` tarafından otomatik ayıklanır.

## Diğer değişiklikler

- Yeni modül veya alt konu: `src/roadmaps.js`
- Cheat sheet: `src/cheat.js`
- Arayüz: `src/template.html`

Büyük değişikliklerden önce bir issue açıp fikrini paylaşırsan birlikte netleştiririz.
