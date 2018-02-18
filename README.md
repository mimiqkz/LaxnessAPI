# Verkefni 3

Útfæra skal vefþjónustu sem leyfir að skrifa, lesa, breyta og eyða minnisatriðum.

## `notes.js`

Gefinn er grunnur að einingu sem sér um að meðhöndla minnisatriði í `notes.js`. Útfæra skal föll í einingu samkvæmt `jsdoc` skjölun á hverju falli. Skilagildi fyrir `create` og `update` eru hlutir þar sem lyklar eru ekki skilgreindir en gætu verið nokkrir, t.d. boolean gildi um hvort tekist hafi að búa til, fylki af hlutum ef kröfur standast ekki. Leyfilegt (og æskilegt) er að útfæra hjálparföll innan einingu.

Kröfur á gögnum sem notandi sendir inn eru:

* Titill verður að vera settur sem strengur af lengd `[1, 255]`
  - Villuskilaboð: `Title must be a string of length 1 to 255 characters`
* Texti verður að vera strengur en má vera tómistrengurinn
  - Villuskilaboð: `Text must be a string`
* Dagsetning verður að vera sett og verður að vera á ISO 8601 formi
  - Villuskilaboð: `Datetime must be a ISO 8601 date`

## Vefþjónusta

Vefþjónusta skal gera öll föll í `notes.js` aðgengileg, sér í lagi:

* `GET` á `\` skal skila fylki af öllum minnisatriðum sem til eru
* `POST` á `\` skal útbúa nýtt minnisatriði
  - Ef það er ólöglegt skal öllum villum skilað í fylki með skilaboðum að ofan, sjá dæmi að neðan
  - Ef löglegt er nýrri færslu skilað _með ID_ sem hlut, notast skal við `RETURNING` virkni í postgres
* `GET` á `\:id` skal skila hlut sem inniheldur færslu með viðeigandi id
  - Ef færsla er til er henni skilað sem hlut
  - Ef færsla er ekki til skal skila að færsla sé ekki til
* `PUT` á `\:id` skal uppfæra færslu með viðeigandi id
  - Sömu reglur gilda um gögn og þegar ný færsla er búin til
  - Ef færsla er ekki til skal skila að færsla sé ekki til
* `DELETE` á `\:id`, eyðir færslu með viðeigandi id
  - Til að vita hvort færslu sé eytt úr grunni er hægt að nýta að ef `DELETE` sql skipun er framkvæmd er niðurstaða frá `query` í `pg` módúl með `rowCount === 1`
  - Ef færslu er eytt skal engu skilað, upplýsingar um niðurstöðu skal gefa til kynna með HTTP status kóða
  - Ef færsla er ekki til skal skila að færsla sé ekki til

Almennt ef villa kemur upp skal skila json með einum lykli, `error` sem tiltekur villu, t.d.

```json
{"error": "Note not found"}
```

Velja skal viðeigandi HTTP status kóða fyrir hvert tilvik um sig.

## Dæmi

```bash
> curl http://localhost:3000/
[]

> curl -H "Content-Type: application/json" -d '{invalid json}' http://localhost:3000/
{"error":"Invalid json"}

> curl -H "Content-Type: application/json" -d '{"title": "", "text": null, "datetime": "x"}' http://localhost:3000/
[{"field":"title","message":"Title must be a string of length 1 to 255 characters"},{"field":"text","message":"Text must be a string"},{"field":"datetime","message":"Datetime must be ISO 8601 date"}]

> curl -H "Content-Type: application/json" -d '{"title": "Halló", "text": "", "datetime": "2018-02-18"}' http://localhost:3000/
{"id":1,"datetime":"2018-02-18T00:00:00.000Z","title":"Halló","text":""}

> curl -H "Content-Type: application/json" -d '{"title": "foo", "text": "bar", "datetime": "2018-02-18"}' http://localhost:3000/
{"id":2,"datetime":"2018-02-18T00:00:00.000Z","title":"foo","text":"bar"}

> curl http://localhost:3000/1
{"id":1,"title":"Halló","text":"","datetime":"2018-02-18T00:00:00.000Z"}

> curl -X PUT -H "Content-Type: application/json" -d '{"title": "Bless", "text": "", "datetime": "2018-02-18"}' http://localhost:3000/1
{"id":1,"title":"Bless","text":"","datetime":"2018-02-18T00:00:00.000Z"}

> curl -X PUT -H "Content-Type: application/json" -d '{"title": "Bless", "text": "",  "datetime": "2018-02-18"}' http://localhost:3000/10
{"error":"Note not found"}

> curl http://localhost:3000/
[{"id":1,"title":"Bless","text":"","datetime":"2018-02-18T00:00:00.000Z"},{"id":2,"title":"foo","text":"bar","datetime":"2018-02-18T00:00:00.000Z"}]

> curl -X DELETE http://localhost:3000/1
# ekkert svar

> curl http://localhost:3000/
[{"id":2,"title":"foo","text":"bar","datetime":"2018-02-18T00:00:00.000Z"}]
```

## Útfærsla

Öll gögn skulu vera á json formi, bæði sem send eru inn í vefþjónustu og þær sem vefþjónusta skilar.

Passa þarf upp á SQL injection og XSS í gögnum sem koma frá notanda.

Ráðlagt að nota [`validator.js`](https://github.com/chriso/validator.js) fyrir staðfestingu á gögnum.

Í `.env` skal geyma `PORT` og `DATABASE_URL` fyrir forrit, `dotenv` pakki er settur upp og notaður í `app.js` og `createdb.js`.

Gefið er skema að töflu og forrit til að setja upp töflu (`DATABASE_URL` verður að vera sett). Ef `psql` er aðgengilegt á skipanalínu (sjá leiðbeiningar) er hægt að nota `createdb` til að útbúa gagnagrunn.

```bash
> createdb v3
> node createdb.js
Schema created
```

Gefið er `.eslintrc.js` sem skal ekki skila villum.

Engu ætti að þurfa að breyta í `app.js`.

Verkefnið skal keyra á Heroku.

## Git og GitHub

Verkefni þetta er sett fyrir á GitHub og almennt ætti að skila því úr einka (private) repo nemanda. Nemendur geta fengið gjaldfrjálsan aðgang að einka repos á meðan námi stendur, sjá https://education.github.com/.

Til að byrja er hægt að afrita þetta repo og bæta við á sínu eigin:

```bash
> git clone https://github.com/vefforritun/vef2-2018-v2.git
> cd vef2-2018-v2
> git remote remove origin # fjarlægja remote sem verkefni er í
> git remote add origin <slóð á repo> # bæta við í þínu repo
> git push
```

## Mat

* 50% – `notes.js` virkni uppsett eftir forskrift
* 40% – Vefþjónustuskil uppsett eftir forskrift
* 10% – Verkefni uppsett á Heroku

## Sett fyrir

Verkefni sett fyrir á Uglu sunnudaginn 18. febrúar 2018.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags föstudaginn 3. mars 2018.

Skilaboð skulu innihalda slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `ernir` og `elvarhelga`.

## Einkunn

Sett verða fyrir sex minni verkefni þar sem fimm bestu gilda 6% hvert, samtals 30% af lokaeinkunn.

Sett verða fyrir tvö hópa verkefni þar sem hvort um sig gildir 15%, samtals 30% af lokaeinkunn.
