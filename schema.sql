DROP TABLE IF EXISTS quotes;
DROP TABLE IF EXISTS users;

CREATE TABLE quotes (
  id serial primary key,
  chapter character varying(225) NOT NULL,
  book character varying(255) NOT NULL,
  quote text NOT NULL,
  year character varying(255) NOT NULL
);

CREATE TABLE users (
  id serial primary key,
  username VARCHAR UNIQUE,
  password character varying(255) NOT NULL
);

INSERT INTO users (username, password) VALUES('admin', '$2a$10$D.D8c49IY3EmgJ48EygJdeSDfs2PGvsEELI/xxHYfz0lMoUEpUkmK' );

INSERT INTO quotes (quote, chapter, book, year) VALUES (
'Dáið er alt án drauma og dapur heimurinn.',
'11. kafli.',
'Barn náttúrunnar.',
'1919'
), (
'Sá sem hefur fundið gleðina, - hina sönnu lífsgleði, hann er á veginum til guðs.',
'25. kafli. Hulda.',
'Barn náttúrunnar.',
'1919'
), (
'Gættu þín fyrir náttúrunni, því þó hún sé fögur, þá er hún ekki miskunnsöm',
'17. kafli. Stefán bóndi',
'Barn náttúrunnar.',
'1919'
), (
'Stundum finst mér dauðinn einn sé veruleikur, en hitt blekkíng!',
'12. kafli.',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Ekkert er í ríki náttúrunnar jafnfjarri því að vera yfirnáttúrlegt einsog kraftaverk. Ekkert er yfirnáttúrlegra en náttúran sjálf.',
'91.kafli',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Konan er ekki aðeins móðir mannanna, heldur dýrlínganna, jafnvel Jesú Krists sjálfs.',
'82. kafli.',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Fæstir offra einni nótt ævi sinnar til að vaka frammifyrir augliti drottins; flestir offra konunni öllum nóttum manndómsára sinna.',
'39. kafli.',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Guði verður ekki fremur þjónað með múnklífi en ljóðagerð. Maðurinn sigrast ekki fremur á ófullkomnun sinni með múnklífi en með kveðskap.',
'89. kafli.',
'Vefarinn mikli frá Kasmír',
'1927'
), (
'Merkasta uppfundníng á jörðu er drottinn. Rafmagnið er hégómi í samanburði við hann.',
'92. kafli',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'...guð einn getur fyrirgefið kvenfólki',
'82. kafli. Steinn Elliði',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Veröldin er einsog nótt í Róm. Göturnar liggja hver um aðra þvera, hver veit hvert? Sumir sofa; sumir vaka; sumir eru að fæðast, aðrir að deyja.',
'100. kafli',
'Vefarinn mikli frá Kasmír',
'1927'
), (
'Veröldin er samsæri vangetunnar gegn snildarandanum.',
'55. kafli. Bambara Salvatore',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Alt er lygi nema ástin',
'27. kafli. Jófríður',
'Vefarinn mikli frá Kasmír',
'1927'
), (
'Því aðeins verða menn skáld að þeir séu reiðubúnir að gánga á málga hjá lyginni, alstaðar, í öllu og ávalt',
'52. kafli. Örnólfur',
'Vefarinn mikli frá Kasmír',
'1927'
), (
'Mennirnir eru því hlægilegri í augum mér sem þeim líður ver',
'84. kafli. Steinn Elliði',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Ekkert er í ríki náttúrunnar jafnfjarri því að vera yfirnáttúrulegt eins og kraftaverk. Ekkert er yfirnáttúrulegra en náttúran sjálf',
'91. kafli. Steinn Elliði',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Það er insta þrá mín að mega gánga hér aftur, mega sveima einsog kynlegur fugl yfir íslenskum fjöllum á kyrrum hásumarnóttum eftirað ég er dáinn',
'46. kafli. Steinn Elliði',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Ekkert er geigvænlegra en hið ósagða milli manns og konu',
'51. kafli',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Það er aumkunarverður maður sem getur ekki unað við neina blekkíngu, því hann er altof sterkur til þess að lifa meðal manna',
'39. kafli. Steinn Elliði',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Móðir hans er skækja, og þángað sækir hann þessar skáldskapargrillur; í okkar ætt hefur aldrei þekst nein tegund af lauslæti',
'52. kafli. Örnólfur',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Því aðeins verða menn skáld að þeir séu reiðubúnir að gánga á mála hjá lyginni, alstaðar, í öllu og ávalt',
'52. kafli. Örnólfur',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Ég hef næga reynslu til þess að vita að það er ógerníngur að yrkja nema um sjálfan sig. Það er ógerníngur að gera fallegra kvæði en maður er sjálfur',
'65. kafli. Steinn Elliði',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Skáldsögur valda svíma, því þær opna manni víðerni mannlífsins',
'8. kafli. Steinn Elliði',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Mesta sælan í hemi, það er að syndga. Og þar næst ásetníngurinn um að syndga. Að syndga, það er það sem dýrlíngarnir þrá',
'8. kafli. Steinn Elliði',
'Vefarinn mikli frá Kasmír.',
'1927'
), (
'Bráðum kemur betri tíð með blóm í haga, sæta lánga sumardaga',
'Bráðum kemur betri tíð',
'Kvæðakver',
'1930'
), (
'Hann Eyjólfur segir að það sé ekkert að marka drauma, athugaði telpan. Ég segi að það sé ekkert að marka vökuna, sagði dreingurinn.',
' 9. kafli.',
'Salka. Valka. Þú vínviður hrein',
'1931'
), (
'Að verða fullorðin er að komast að raun um að maður á ekki móður, heldur vakir einn í myrkri næturinnar.',
' 7. kafli.',
'Salka. Valka. Þú vínviður hrein',
'1931'
), (
'En trú mér til, barnið gott, það verður einginn ríkur á því að vinna.',
' 10.kafli.',
'Salka. Valka. Þú vínviður hrein',
'1931'
), (
'Það er lítil dygð að spara þegar aungu er af að taka.',
'6. kafli.',
'Salka. Valka. Þú vínviður hrein',
'1931'
), (
'Það getur komist uppí vana einsog hvað annað að horfa á ólánssamt fólk gráta.',
'20.kafli.',
'Salka. Valka. Þú vínviður hrein',
'1931'
), (
'Allir sem bera sig vel verða að manni. Þegar á alt er litið þá er meira undir því komið hvernig maður ber sig en hvað maður er í raun og veru.',
'15. kafli. Herborg í Kófinu',
'Salka. Valka. Þú vínviður hrein',
'1931'
), (
'Það er svo erfitt að vera manneskja',
'7. kafli. Sigurlína Jónsdóttir',
'Salka. Valka. Þú vínviður hrein',
'1931'
), (
'Sá er ekki altaf tryggastur sem situr kjur, heldur hinn sem kemur aftur',
'18. kafli. Steinþór',
'Salka. Valka. Þú vínviður hrein',
'1931'
), (
'... þegar öllu er á botninn hvolft þá er lífið þó umfram alt saltfiskur en ekki draumaríngl. ',
' 7. kafli.',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'Ekkert er á jörðu sælla en draumurinn um návist elskhugans þegar hann er fjarri.',
'25.kafli.',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'Ætli það sé nokkur annar guð en fiskurinn.',
'2. kafli.',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'Manneskjurnar standa uppi varnarlausar gagnvart ástinni aungusíður en dauðanum.',
'24. kafli.',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'Fátt er eins unaðslegt á jörðinni og sofandi börn.',
'2.kafli',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'Í raun og veru erum við í eðli okkar sú þjóð sem unir sér best í gapastokknum, en hann er aðeins frábrugðinn snörunni í því að dólgurinn tyllir niður tánum',
' 18. kafli',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'Kaffi og kvæði, það er alt og sumt sem þið hugsið um hér á Íslandi..',
'5. Kafli. Angantýr Bogesen',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'Þegar öllu er á botninn hvolft, þá er maðurinn einn, aleinn, hann finnur það þegar banastundin nálgast, þegar hann veit að hann á að deya sínum dauða – einn',
'24. kafli',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'Þegar ég horfi á þig, og eins þegar ég hugsa til þín, þá finst mér að djúpsettasta óskin sem ég á og muni nokkurntíma eignast, sé að mega deya í faðmi þínum, að þú sitjir yfir mér þegar ég tek síðustu andvörpin ',
'24. kafli. Arnaldur',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'...það er einginn endir á ránglæti undir sólinni í augum manns sem mætt hefur litlum skilníngi í uppvextinum; honum verður hamíngjudraumurinn einsog berklar sem taka sig upp í ótal myndum uns hann deyr',
'18. kafli',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'Sá sem ekki sér hvar hann stendur í þjóðfélaginu, hann er blindur og heyrnarlaus. Sá sem ekki er reiðubúinn til að berjast á móti ránglætinu í þjóðfélaginu, ég kalla hann bara ekki mann',
'13. kafli. Salka Valka',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'...þó hann hefði myrt bánkastjóra í Amríku, þá er það áreiðanlega minni synd heldur en eignast barn á Óseyri við Axlarfjörð',
'22. kafli. Salka Valka',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'...fáir eru vinir þess snauða',
'1. kafli. Guðmundur Jónsson',
'Salka Valka. Fuglinn í fjörunni',
'1932'
), (
'Það er hægt að skifta öllum mönnum á jörðunni í aðeins tvo menn, þann sem vinnur, og hinn sem rænir arðinum af vinnu hans',
'11. kafli. Arnaldur',
'Salka Valka. Fuglinn í fjörunni',
'1932 '
), (
'...eindræginn, trygðin við þá sem við elskum, sú trygð sem ekkert getur rofið, það er eina leiðin til að skapa konu heilbrigða lyndiseinkunn, til að gera hana örugga í lífinu, gera hana farsæla',
'1. þáttur. Gæa Kaldan',
'Straumrof.',
'1934'
), (
'Þú getur haft mig fyrir því, að frelsið er meira vert en lofthæðin í bænum ...',
'2. kafli.',
'Sjálfstætt fólk',
'1934 - 193'
), (
'Maðurinn finnur það sem hann leitar að, og sá sem trúir á draug finnur draug.',
'47. kafli.',
'Sjálfstætt fólk',
'1934 - 193'
), (
'Aum eru hundkvikindin, en þó aumari mannkvikindin.',
'2 kafli.',
'Sjálfstætt fólk',
'1934 - 193'
), (
'Hann hélt bara áfram að horfa í andlit móður sinnar, sem var æðst þess sem lifði í heiminum, góðleiki þess var öllu ofar, fegurð þess og sorg.',
'31. kafli.',
'Sjálfstætt fólk',
'1934 - 193'
), (
'Ætli það sé ekki svo að hver geymi sinn áfángastað í sjálfs síns brjósti.',
'55.kafli.',
'Sjálfstætt fólk',
'1934 - 193'
), (
'Það er veikleikamerki að telja mönnum hughvarf, sjálfstæður maður hugsar aðeins um sig og lætur aðra fara sínu fram ...',
'63. kafli',
'Sjálfstætt fólk',
'1934 - 193'
), (
'... Sjálfstæðar manneskjur þurfa ekki kristindóm ...',
'43. kafli.',
'Sjálfstætt fólk',
'1934 - 193'
), (
'Og þetta er hamíngjan sjálf: að bíða í eftirvæntingu komandi dags.',
'49.kafli.',
'Sjálfstætt fólk',
'1934 - 193'
), (
'Þú getur haft mig fyrir því, að frelsið er meira vert en lofthæðin í bænum ...',
'2. kafli',
'Sjálfstætt fólk',
'1934 - 193'
), (
'En á meðan ég sælist ekki eftir annarra manna gróða, þá kæri ég mig heldur ekki um að bera annarra manna töp.',
'32. kafli.',
'Sjálfstætt fólk',
'1934 - 193'
), (
'Maður verður aldrei svo als vesall að hamíngjan eigi ekki eftir að brosa við manni einusinni áðuren maður deyr.',
'49. kafli.',
'Sjálfstætt fólk',
'1934 - 193'
), (
'Er nokkrum of gott að vera fífl?',
'60. kafli.',
'Sjálfstætt fólk',
'1934 - 193'
), (
'...við Íslendingar höfum nú einusinni aldrei tekið mark á konúngum, nema fjallkóngum..',
'60. kafli. Einar í Undirhlíð',
'Sjálfstætt fólk',
'1934 - 193'
), (
'Þrá er suðkindin en hvað er það á móts við kvenkindina.',
'14. kafli. Bjartur',
'Sjálfstætt fólk',
'1934 - 193'
), (
'En það er eins og ég segi, bjánaskapurinn er góður meðan einhver hefur gang af honum.',
'60. kafli. Bjartur',
'Sjálfstætt fólk',
'1934 - 193'
), (
'Það er leitt að geta ekki skorið úr, hvenær þið ljúgið og hvenær þið segið satt...En best gæti ég trúað að þið lygjuð altaf',
'67. kafli. Bjartur',
'Sjálfstætt fólk',
'1934 – 193'
), (
'Ekkert er eins miskunnarlaust og mannlífið. Það er einnig mjög erfitt að afsaka mannlífið, einkum við hinar ómælandi skepnur í kringum oss',
'34. kafli.',
'Sjálfstætt fólk',
'1934 – 193'
), (
'...tvær manneskjur eiga svo bágt með að skilja hvor aðra, ekkert er eins sorglegt og tvær manneskjur.',
'47. kafli',
'Sjálfstætt fólk',
'1934 – 193'
), (
'...mannssálin hneigist að hinu ótrúlega en efar hið trúlega.',
'44. kafli',
'Sjálfstætt fólk',
'1934 – 193'
), (
'Maður lifir fyrir vorið, og þó er einsog maður trúi ekki á það fyren það er komið. Einn fífill, eitt lóukvak, það var einsog alt væri að koma, alt sem maður lifir fyrir uns maður deyr',
'37. kafli',
'Sjálfstætt fólk',
'1934 - 193'
), (
'O það er nú ekki mikill vandi að yrkja einsog þessi nútímaskáld...Það er einsog ræpan. Tómt flatbytna rím',
'68. kafli. Bjartur',
'Sjálfstætt fólk',
'1934 – 193'
), (
'En ég trúi ekki á neitt og síst á orð',
'54. kafli. Bjartur',
'Sjálfstætt fólk',
'1934 – 193'
), (
'Skammdegið og réttlærið eru af sama toga, maður skilur það best á vorin þegar sólin skín, að þau voru jafn vond.',
'46. kafli',
'Sjálfstætt fólk',
'1934 – 193'
), (
'Fátt þroskar betur skáldgáfuna en einvera á laungum fjallferðum',
'15. kafli',
'Sjálfstætt fólk',
'1934 – 193'
), (
'Maður veit aldrei hvernig fer, og þessvegna er áríðandi að hallast aldrei of leingi til einnar hliðar, allrasíst í stjórnmálunum..',
'66. kafli. Fjallkóngurinn',
'Sjálfstætt fólk',
'1934 – 193'
), (
'...mannlífið er svo stutt að almenníngur hefur ekki efni á því að vera til..',
'45. kafli. Ólafur í Ystadal',
'Sjálfstætt fólk',
'1934 – 193'
), (
'Sá sem ekki þekkir skaparann þarf tóbak',
'48. kafli. Nonni',
'Sjálfstætt fólk',
'1934 – 193'
), (
'Aldrei finnast manni sálmarnir leingri en á dögum bernskunnar, aldrei er land þeirra og túngumál fjarskyldara sálinni. Um ellina er þessu öfugt farið, þá eru sálmarnir of stuttir fyrir dagana',
'26. kafli',
'Sjálfstætt fólk',
'1934 – 193'
), (
'En ég trúi ekki á neitt og síst á orð',
'54. kafli. Bjartur',
'Sjálfstætt fólk',
'1934 – 193'
), (
'Mennirnir settust, tóku upp struntur sínar og byrjuðu að skrafa um tíðarfarið af hinni djúpu alvörugefni, vísindalegu hægð og óraskandi stílfestu, sem þessu umræðuefni er helgað, á unantekníngar',
'10. kafli',
'Sjálfstætt fólk',
'1934 – 193'
), (
'Fátt veldur öllu meiri vonbrigðum í sál mannsins en að vakna, einkanlega snemma á morgnana, meðan aðrir sofa',
'25. kafli',
'Sjálfstætt fólk',
'1934 – 193'
), (
'Hann grét einsog börn gráta því aðeins þau verði fyrir ránglæti af þeim sem eru meiri máttar, sá er sárastur grátur á jörðu.',
'1.kafli.',
' Heimsljós. Kraftbirtíngarhljómur guðdómsins',
'1937'
), (
'Sá sem hefur heyrt gamalmenni gráta mun ekki gleyma því síðan ...',
'9. kafli',
'Heimsljós. Kraftbirtíngarhljómur guðdómsins',
'1937'
), (
'Það er hægt að fremja hefndarverk á börnum og réttlæta það fyrir sjálfum sér og guði og heiminum, lífið sjálft réttlætir nefnilega alt, sættir æskuna við alt; en ekkert er til sem getur bætt fyrir ránglæti framið við gamalt fólk á Íslandi',
'9. kafli',
'Heimsljós. Kraftbirtíngarhljómur guðdómsins',
'1937'
), (
'...öll skáld eru hévítis ræflar og óbótamenn, nema hann Hallgrímur heitinn Pétursson',
'2. kafli. Kamarilla',
'Heimsljós. Kraftbirtíngarhljómur guðdómsins',
'1937'
), (
'...frá ómunatíð hafði íslenska þjóðin orðið að standa í stríði við menn sem kölluðu sig skáld og vildu ekki vinna fyrir sér',
'8. kafli',
'Heimsljós. Kraftbirtíngarhljómur guðdómsins',
'1937'
), (
'En þegar maður er bæði andlega og líkamlega veikur, þá verður maður ósjálfrátt skáld, maður getur ekki að því gert.',
'11. kafli. Ólafur Kárason',
'Heimsljós. Kraftbirtíngarhljómur guðdómsins',
'1937'
), (
'Þegar koma tveir góðvirðismorgnar í röð á Íslandi, þá er einsog allar áhyggjur lífsins hafi kvatt fyrir fult og alt',
'25. kafli',
'Heimsljós. Kraftbirtíngarhljómur guðdómsins',
'1937'
), (
'Að þekkja hana var samskonar gleði og að blómstra, að skilja við hana fagurt einsog ólæknandi sorg',
'25. kafli',
'Heimsljós. Kraftbirtíngarhljómur guðdómsins',
'1937'
), (
'...kvenmaðurinn er í fyrsta lagi staður og stund',
'27. kafli',
'Heimsljós. Höll sumarlandsins',
'1938'
), (
'Jafnvel skítur er mikilsvirði. Það eru bara manneskjur sem eru einskisvirði.',
'19. kafli. Júel J. Júel',
'Heimsljós. Höll sumarlandsins',
'1938'
), (
'...hafi maður mist það sem hann elskar heitast þarf ekki að yrkja, hreimurinn í rödd manns segir allan skáldskap lífsins',
'11. kafli',
'Heimsljós. Höll sumarlandsins',
'1938'
), (
'Ekkert kvikindi sem skríður á jörðinni er eins auðvirðilegt og viðbjóðslegt og auðugur maður með samvisku',
'20. kafli. Hólmfríður',
'Heimsljós. Höll sumarlandsins',
'1938'
), (
'Maður á að neita staðreyndum ef þær koma sér illa..',
'19. kafli. Júel J. Júel',
'Heimsljós. Höll sumarlandsins',
'1938'
), (
'Allir sem halda að þeir séu skáld eru vitlausir',
'29. kafli. Læknirinn',
'Heimsljós. Höll sumarlandsins',
'1938'
), (
'Mikið er fyrsta kynferðisreynsla æskunnar fjarskyld hennar fyrst ástum, það er álíka munur og á dögun og degi',
'17. kafli',
'Heimsljós. Höll sumarlandsins',
'1938'
), (
'Sönn ást er stuttorð ...',
' 4 kafli.',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Kærleikur, það er að finna til með öðrum ...',
'12.kafli.',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Hraust og kát börn koma aungvum við, látum þau eiga sig sjálf, vér höfum skyldur aðeins við þá sem þjást, vér elskum aðeins þá sem eiga bágt.',
'1. kafli.',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Ég held það sé synd að ala upp skepnur í kringum sig til að drepa þær, það er einsog að gera fólk að vinum sínum í því skyni að eiga svo hægara með að myrða það.',
'1.kafli.',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Ekkert er eins dásamlegt á jörðinni og hafa verið í dýflissu og frelsast.',
'19. kafli.',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Ekkert er að drýgja glæp hjá því að vera staðinn að því ...',
'2. kafli.',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Maðurinn lifir umfram alt á ófullkomleika sínum og fyrir hann',
'12. kafli. Ólafur Kárason',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Maðurinn lifir á fullkomnun sinni og fyrir hana..',
'12. kafli. Örn Úlfar',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Sá sem kýs ekki réttlæti, hann er ekki maður',
'12. kafli. Örn Úlfar',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Maðurinn byrjar fyrst að vera til þegar búið er að taka alt frá honum',
'11. kafli. Ólafur Kárason',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Sá sem kýs ekki réttlæti, hann er ekki maður',
'12. kafli. Örn Úlfar',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Að vera háður óhamíngju annarra, það er að eiga hús',
'1. kafli',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Þegar maður heyrir laglegar stúlkur tala heldur maður ósjálfrátt að jafnvel hin léttfleygustu svör þeirra geymi djúpa djúpa merkíngu, já dulda speki, - og eftilvill gera þau það..',
'7. kafli',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Það er hægt að sjá á árunni hvort menn eru sannir íslendíngar eða ekki, þeir sem ekki leggja eitthvað á sig fyrir atvinnuvegina á þessum erfiðu tímum eru ekki sannir íslendíngar',
'5. kafli. Pétur Þríhross',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Að vera einn, það er að vera skáld',
'1. kafli',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Þann dag sem heimurinn er orðinn góður hættir skáldið að finna til, en fyr ekki. En um leið hættir hann líka að vera skáld',
'3. kafli. Ólafur Kárason',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Og skáld hugsa hugsanir manns betur en maður sjálfur',
'4. kafli. Jórunn',
'Heimsljós. Hús skáldsins',
'1939'
), (
'...það er miklu erfiðara að vera skáld og yrkja um heiminn en vera  maður og lifa í heiminum',
'20. kafli. Ólafur Kárason',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Að vera skáld, það er að vera gestur á fjarlægri strönd þángað til maður deyr',
'3. kafli. Ólafur Kárason',
'Heimsljós. Hús skáldsins',
'1939'
), (
'...sú þjóð sem á anda skáldskaparins er eilíf.',
'11. kafli. Ólafur Kárason',
'Heimsljós. Hús skáldsins',
'1939'
), (
'Þegar maður hefur séð fegurðina hættir annað að vera til.',
'23. kafli.',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Altaf þegar ég sé og heyri eitthvað fallegt þá fyrirgef ég öllum alt ...',
' 3.kafli.',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Með einu tilliti geta augu fegurðarinnar, vitrari en allar bækur, svift burt kvíða, sekt og ángri heillar mannsævi.',
'221. kafli.',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Þar sem jökulinn ber við loft hættir landið að vera jarðneskt, en jörðin fær hlutdeild í himninum, þar búa ekki framar neinar sorgir og þessvegna er gleðin ekki nauðsynleg, þar ríkir fegurðin ein, ofar hverri kröfu.',
'1.kafli.',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Að vera aungvum háður í lífinu, að þurfa aldrei að sækja neitt til annarra, það er hið sama og hafa hlotið allar manndygðir í vöggugjöf.',
'2. kafli.',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Sá ríki kemur þér undantekningalaust í bölvun ef þú stelur frá honum, sá fátæki nennir ekki einusinni að minnast á það. Þessvegna hafa allir sannir þjófar vit á að stela frá þeim fátæku.',
'2. kafli.',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Að gera er jafnrétt og að gera ekki, að vera er jafnrétt og að vera ekki',
'6. kafli. Ólafur Kárason',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Við ein takmörk hættir maðurinn að skifta skapi, en í stað þess vex honum annar hæfileiki, í senn hagnýtara vopn og öflugri hlíf: hæfileikinn til að þola',
'9. kafli.',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Hver maður er sinn eigin heimur',
'9. kafli. Ólafur Kárason',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Það er einkennilegt hvað innantukthússmenn eru líkir utantukthússmönnum..',
'15. kafli',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Hugsaðu um mig þegar þú ert í miklu sólskini',
'22. kafli. Bera',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Að hafa mist það sem maður elskaði heitast, það er eftilvill hið sanna líf, að minsta kosti sá sem ekki skilur það, hann veit ekki hvað er að lifa; hann kann ekki að lifa; og það sem verra er, hann kann ekki að deya.',
'1. kafli',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Það leirskáld er ekki til sem getur myrt fegurð himinsin',
'23. kafli. Ólafur Kárason',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Sá sem óskar þráir vin; en þegar óskirnar hafa ræst eru vinirnir það sem við gleymum fyrst',
'13. kafli',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Fegurðin er hið eina skiftir máli, og í rauninni á skáld aungvar skyldur við neinn, nema hana',
'2. kafli',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Ástir eru skáldum því aðeins nokkurs virði að þeir geti súngið um þær á strætum og gatnamótum einsog hjálpræðisherinn um guð',
'52. kafli. Örnólfur',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'...sá sem hefur aungva hugmynd um skyldur karlmannsins við kvenmanninn, hann verður aldrei stórskáld.',
'9. kafli. Reimar skáld',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'...það útheimtist meira skáld til að dylja tilfinníngar sínar en að láta þær í ljós',
'20. kafli. Ólafur Kárason',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'...skáldskapurinn er frelsari mannkynsins',
'5. kafli. Ekkjan á Suðureyri',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'...skáldskapurinn er endurlausnari sálarinnar..',
'3. kafli. Ólafur Kárason',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Sumun fátækum mönnum kann að vera það huggun að vita volduga menn komna af lágum ættum..',
'2. kafli. Ólafur Kárason',
'Heimsljós. Fegurð himinsins',
'1940'
), (
'Hef ég drepið mann eða hef ég ekki drepið mann? Hver hefur drepið mann og hver hefur ekki drepið mann? Hvenær drepur maður mann og hvenær drepur maður ekki mann? Fari í helvíti sem ég drap mann. Og þó.',
'17. kafli.',
'Íslandsklukkan.',
'1943'
), (
'Íslendíngum var af miskunnsömum guði sendur aðeins einn sannleiki og hann heitir: brennivín.',
'18. kafli.',
'Íslandsklukkan.',
'1943'
), (
'Vinur hví dregurðu mig inní þetta skelfilega hús?',
'3. kafli.',
'Íslandsklukkan.',
'1943'
), (
'Jafnvel helvíti þykir dönskum ómerkilegt ef það er á Íslandi',
'15. kafli',
'Íslandsklukkan.',
'1943'
), (
'Heldur þann versta en þann næstbesta..',
'10. kafli. Snæfríður',
'Íslandsklukkan.',
'1943'
), (
'...eingin kona er svo voldug að hún skilji ekki aðra konu',
'6. kafli. Móðir Jóns Hreggviðssonar',
'Íslandsklukkan.',
'1943'
), (
'Til eru ungar stúlkur sem gera alt jafn ótrygt í kríngum sig, loft, jörð og vatn..',
'9. kafli. Eydalín lögmaður',
'Íslandsklukkan.',
'1943'
), (
'Konu sem þekt hefur ágætan mann finst góður maður hlægilegur',
'9. kafli. Snæfríður',
'Íslandsklukkan.',
'1943'
), (
'...einfaldur hór er mál sem menn eiga fyrst og fremst við samvisku sína',
'9. kafli. Eydalín lögmaður',
'Íslandsklukkan.',
'1943'
), (
'...vér sveinpiltar höfum þann veikleik þegar vér sitjum með fögrum konum, þá viljum vér sýnast ögn gáfaðri en vér erum, ef hægt væri, í stað þess að hlusta á þeirra fagrar raddir.',
'8. Kafli. Arnas Arnæus',
'Íslandsklukkan. Hið ljósa man.',
'1944'
), (
'Kona sem hrasar í barndómi þroskast ekki',
'1. kafli. Magnús í Bræðratungu',
'Íslandsklukkan. Hið ljósa man.',
'1944'
), (
'Vont er þeirra ránglæti, verra þeirra réttlæti',
'20. kafli. Jón Hreggviðsson',
'Íslandsklukkan. Hið ljósa man.',
'1944'
), (
'... Í landi þar sem fólkinu líður vel eru ekki framdir glæpir.',
'12. kafli.',
'Íslandsklukkan. Eldur í Kaupinhafn',
'1946'
), (
'Íslendingur er þakklátur að hitta útlendan mann sem hefur heyrt land hans nefnt. Og enn þakklátari að heyra sagt það eigi gott skilið.',
'1. Kafli. Arnas Arnæus',
'Íslandsklukkan. Eldur í Kaupinhafn',
'1946'
), (
' „Lauslátar konur eru ekki til, sagði organistinn. Það er hjátrú. Afturámóti eru bæði til kvenmenn sem sofa þrjátíu sinnum hjá einum karlmanni og kvenmenn sem sofa einu sinni hjá þrjátíu karlmönnum." 3. kafli.',
'null',
'Atómstöðin.',
'1948'
), (
'Af hverju eiga þeir aldrei neitt sem vinna?',
'2.kafli.',
'Atómstöðin.',
'1948'
), (
'Alþýðumál á Íslandi segir að börn barna verði lukkumenn.',
'13. kafli.',
'Atómstöðin.',
'1948'
), (
'Allir sem kunna að stela eru vel stæðir ... Allir sem ekki kunna að stela eru illa stæðir. Vandinn er að kunna að stela.',
'3. kafli.',
'Atómstöðin.',
'1948'
), (
'Og sá sem grætur deyr ekki; grátur er lífsmerki: gráttu, og líf þitt er aftur nokkurs vert.',
'16. kafli.',
'Atómstöðin.',
'1948'
), (
'Á einu stigi elskar stúlka alla kallmenn án þess að skifta þeim í persónur; elskar kallmanninn. Og það getur verið merki þess að hún elski aungvan kallmann.',
'9. kafli. Ugla',
'Atómstöðin.',
'1948'
), (
'Maður sem segir hvað hann hugsar er hlægilegur; að minnsta kosti í augum kvenmanns',
'6. kafli. Ugla',
'Atómstöðin.',
'1948'
), (
'Það er einkenni mikillar listar að þeim sem ekkert kann finst hann gæti búið þetta til sjálfur – ef hann væri nógu heimskur',
'3. kafli. Organistinn',
'Atómstöðin.',
'1948'
), (
'Ef maður vill stela í þjófafélagi, þá verður að stela samkvæmt lögum; og helst að hafa tekið þátt í því að setja lögin sjálfur',
'26. kafli, Organistinn',
'Atómstöðin.',
'1948'
), (
'Það er alveg sama hvort menn eru kallaðir vondir eða góðir: við erum allir hér; nú; það er aðeins til einn heimur og í honum ríkir annaðhvort hagkvæmt eða óhagkvæmt ástand fyrir þá sem lifa.',
'13. kafli. Organistinn',
'Atómstöðin.',
'1948'
), (
'Þeir sem þekkja náttúruna heyra hana fremur en sjá; finna hana fremur en heyra; þefa hana, já mikil ósköp – en éta hana þó fyrst og fremst',
'5. kafli',
'Atómstöðin.',
'1948'
),(
'...sá sem kemur að norðan; og hefur átt heima á móti fjalli, skilur ekki fjall á mynd fyrir sunnan',
'5. kafli. Ugla',
'Atómstöðin.',
'1948'
), (
'Til þess talar maður að leyna hugsun sinni',
'6. kafli. Feimna lögreglan',
'Atómstöðin.',
'1948'
), (
'Heilbrigður maður skilur ekki heimspeki',
'14. kafli. Búi Árland',
'Atómstöðin.',
'1948'
), (
'Mér var kent að trúa aldrei orði sem stendur í blöðum, og aungvu nema því sem stendur í íslendíngasögum..',
'6. kafli. Ugla',
'Atómstöðin.',
'1948'
), (
'Sá sem heldur peníngar séu veruleiki er vitlaus..',
'21. kafli. Ugla',
'Atómstöðin.',
'1948'
), (
'Ég held ást sé skemtun hjá geldfólki í kaupstöðum og komi í staðinn fyrir einfalt líf',
'9. kafli. Ugla',
'Atómstöðin.',
'1948'
), (
'Fólk hefur ekki ímyndunarafl til að skilja stjórnmálamenn. Fólk er of saklaust',
'24. kafli. Feimna lögreglan',
'Atómstöðin.',
'1948'
), (
'...ef til er synd þá er synd að kunna ekki hljóðfæri..',
'2. kafli. Ugla',
'Atómstöðin.',
'1948'
), (
'...gamlárskvöld er sú stund sem minnir okkur best á vanmátt sjálfsins í tímanum',
'14. kafli. Búi Árland',
'Atómstöðin.',
'1948'
), (
'Er það þá trúin, að trúa því sem maður veit með vissu að ekki er..',
'22. kafli. Ugla',
'Atómstöðin.',
'1948'
), (
'Ekta peníngar eru ekki til...Það eru allir peníngar falskir',
'3. kafli. Guðinn briljantín',
'Atómstöðin.',
'1948'
), (
'Af hverju eiga þeir aldrei neitt sem vinna',
'2. kafli. Ugla',
'Atómstöðin.',
'1948'
), (
'Það vildi ég drottinn sendi mér tóbak, brennivín og þrjár frillur.',
' 1. þáttur.',
'Snæfríður Íslandssól',
'1950'
), (
'Kona sem geingur til karlmanns á næturþeli á ekki nema eitt erindi.',
'2. þáttur. Dómkirkjupresturinn',
'Snæfríður Íslandssól',
'1950'
), (
'Sá sem treystir yfirvöldunum er ekki maður',
'2. þáttur. Jón Hreggviðsson',
'Snæfríður Íslandssól',
'1950'
), (
'Því verða menn skáld og hetjur, að þeir búa eigi við hamíngju sína.',
'11. kafli.',
'Gerpla.',
'1952'
), (
'Verður sem oftar að mönnum sést yfir þá huggun að jafnan kemur maður í manns stað, og svo konúngur í konúngs, en þó einkum penníngur í stað penníngs.',
'44.kafli',
'Gerpla.',
'1952'
), (
'Sannast mála er að eingi vinátta er betur fest en sú tveir menn eru slíkir kappar að hvorugur þarf til hins að leita í nokkru efni, uns annar er fallinn; mun þá hinn fara til og hefna hans',
'19. kafli. Þorgeir Hávarson',
'Gerpla.',
'1952'
), (
'Er ekki endirinn á öllum Íslendíngasögum sá að Njáll er brenndur',
'14. kafli',
'Heiman eg fór',
'1952'
), (
'Það er svo lítill vandi að vera gáfaður, ef maður á þess ekki kost að tala við aðra en sjálfan sig',
'20. kafli',
'Heiman eg fór',
'1952'
), (
'Vinátta er verslun með kærleika',
'10. kafli',
'Heiman eg fór',
'1952'
), (
'Alt hefur verðbréfagildi umhverfis frægan listamann.',
'1. þáttur, Feilan.',
'Silfurtúnglið',
'1954'
), (
'...í rauninni er maður aldrei hræddur við neitt nema sjálfan sig',
'1. þáttur. Lóa',
'Silfurtúnglið',
'1954'
), (
'Einginn þekti mig og ég aungvan. Mér fanst ég ekki vera ég sjálfur leingur. Það var af því að einginn þekti mig.',
'Nokkrar sögur. Kvæði',
'Þættir',
'1954'
), (
'Vitur maður hefur sagt að næst því að missa móður sína sé fátt hollara úngum börnum en missa föður sinn.',
'1.kafli',
'Brekkukotsannáll ',
'1957'
), (
'Auðæfi eru það sem ekki aðrir ná af manni.',
'33. kafli.',
'Brekkukotsannáll ',
'1957'
), (
'Eitt er sem maður má aldrei gera skepnan mín, því það er ljótt ... Drepa aldrei flugur í annarra manna húsum ...',
'5. kafli.',
'Brekkukotsannáll ',
'1957'
), (
'Rjómatíkina? ... Hvaða tík er það?',
'15. kafli.',
'Brekkukotsannáll ',
'1957'
), (
'Hann lenti í ferðalögum ... Það er ólánið sem því veldur að menn fara í ferðalög ...',
'5.kafli.',
'Brekkukotsannáll ',
'1957'
), (
'Hún móðir mín sendi mig einusinni út að kaupa pipar og ég er ekki kominn heim enn.',
'17. kafli.',
'Brekkukotsannáll ',
'1957'
), (
'Menn sem ætla sér að verða heimsfrægir tolla sjaldan leingi á skólabekk.',
'22. kafli ',
'Brekkukotsannáll ',
'1957'
), (
'Ég álít að upphaf vellíðunar sé fólgið í því að vera ekki að skifta sér af hvurt aðrir menn ætla.',
'16. kafli.',
'Brekkukotsannáll ',
'1957'
), (
'Eins og þú veist, þá er ekki til neitt körpuyrði sem íslendíng svíður undan, nema  ef sagt er að hann sé danskur.',
'16. kafli. Eftirlitsmaðurinn',
'Brekkukotsannáll ',
'1957'
), (
'Það sem maður er sjálfur, það er það eina sem maður er ekki. Það sem aðrir halda að maður sé, það er maður.',
'36. kafli. Garðar Hólm.',
'Brekkukotsannáll ',
'1957'
), (
'Eftir þeirri einkennilegu aðferð sem höfð var á Íslandi áður fyr ef átti að sýna rausn, þá var byrjað á því að veita gestum kaffi og sætabrauð á undan matnum',
'35. kafli',
'Brekkukotsannáll ',
'1957'
), (
'Að vakna við að maður hefur mist alt og veit að maður á ekki leingur neitt, er það þá að vera manneskja?',
'27. kafli.',
'Brekkukotsannáll ',
'1957'
), (
'...kallmaður er kallmaður og kvenmaður er kvenmaður – það sem þar er til viðbótar eru ytri atvik',
'37. kafli. Álfgrímur',
'Brekkukotsannáll ',
'1957'
), (
'Ég varð fyrir því óláni að verða dúx í skóla og það er sagt að dúxar verði aldrei að manni',
'36. kafli. Álfgrímur.',
'Brekkukotsannáll ',
'1957'
), (
'Þar sem blautfiskinum sleppir á Íslandi, þar tekur latínan við',
'20. kafli',
'Brekkukotsannáll ',
'1957'
), (
'Yfirleitt orkaði nútímaskáldskapur á okkur einsog væri verið að klóra striga',
'10. kafli. Álfgrímur',
'Brekkukotsannáll ',
'1957'
), (
'Í Brekkukoti voru orðin of dýr til þess að nota þau – af því þau þýddu eitthvað; okkar tal var einsog óverðbólgnir peníngar: reynslan var of djúp til þess að hægt væri að segja hana..',
'22. kafli',
'Brekkukotsannáll ',
'1957'
), (
'Mér hefur verið kent að það væru ekki nema óheiðarlegir menn eða bjánar sem hefðu svar á reiðum höndum við öllum spurníngum',
'31. kafli. Næturgestur í Brekkukoti',
'Brekkukotsannáll ',
'1957'
), (
'Það er ekki til ekta gull börnin góð...Gull er í eðli sínu óekta',
'17. kafli. Garðar Hólm',
'Brekkukotsannáll ',
'1957'
), (
'En þó ég sé ekki góður að sýngja, þá veit ég að til er einn tónn og hann er hreinn',
'12. kafli. Séra Jóhann',
'Brekkukotsannáll ',
'1957'
), (
'Sá sem sýngur öðrum til skemtunar er fífl, og þó enn meira fífl sá sem sýngur sjálfum sér til skemtunar',
'26. kafli. Garðar Hól',
'Brekkukotsannáll ',
'1957'
), (
'...veröldin er saungur, en við vitum ekki hvort hún er góður saungur, af því við höfum ekki annað til samanburðar',
'36. kafli. Garðar Hólm',
'Brekkukotsannáll ',
'1957'
), (
'Það er aðeins til einn tónn sem er allur tónninn...sá sem hefur heyrt hann þarf einskis að biðja.',
'26. kafli. Garðar Hólm',
'Brekkukotsannáll ',
'1957'
), (
'Auðæfi eru það sem ekki aðrir ná af manni',
'33. kafli. Amma',
'Brekkukotsannáll ',
'1957'
), (
'Lærðu að hlakka ekki til...Það er upphaf þess að kunna að taka öllu.',
'18. kafli. Kona úr Landbroti',
'Brekkukotsannáll ',
'1957'
), (
',,Sá hefur besta kenníngu sem getur sýnt frammá að hann hafi mest að éta; og góða skó.”',
'22. kafli',
'Paradísarheimt',
'1960 '
), (
'Sá sem kemur aftur er annar maður en sá sem fór.',
'24. kafli.',
'Paradísarheimt',
'1960 '
), (
'Ekkert er nú hvað menn verða að þola af guði hjá því sem guð verður að þola af mönnum í þessu landi.',
'7. kafli.',
'Paradísarheimt',
'1960 '
), (
'Á þeim dögum var enn talið ljótt í sveitum að sinna nokkrum hlut vegna þess eins að hann væri skemtilegur.',
'3. kafli',
'Paradísarheimt',
'1960 '
), (
'Aldrei er prestsskepnu leingur boðinn biti síðan kaffið uppfanst. Þetta er þrítugasti og sjöundi bollinn minn í dag. Bráðum gef ég alt frá mér vegna magans einsog aðrir prestar. Kanski ég klóri þó upp það sem hér hefur borið til áður en ég dey.',
'15. kafli. Presturinn',
'Paradísarheimt',
'1960 '
), (
'Að vakna við að maður hefur mist alt og veit að maður á ekki leingur neitt, er það þá að vera manneskja',
'27. kafli. Steina',
'Paradísarheimt',
'1960 '
), (
'Í þann tíð voru sumurin laung á Íslandi. Á mornana og kvöldin voru túnin svo græn að þau voru rauð og á daginn var víðáttan svo blá að hún var græn.',
'1. kafli',
'Paradísarheimt',
'1960 '
), (
'Að mínum dómi er ekkert ljótt sem sólin skín á..',
'20. kafli. Steinar',
'Paradísarheimt',
'1960 '
), (
'Það fljóta alsnægtir að mönnum sem hafa ekki skoðun á neinu',
'25. kafli. Húsfreyjan í Hlíðum',
'Paradísarheimt',
'1960 '
), (
'Á þeim dögum var enn talið ljótt í sveitum að sinna nokkrum hlut vegna þess eins að hann væri skemmtilegur.',
'3. kafli',
'Paradísarheimt',
'1960 '
), (
'Það þótti ekki sæmilegt að ógift æskufólk træði hvert öðru um tær nema í hæsta lagi til að eignast launbörn',
'3. kafli',
'Paradísarheimt',
'1960 '
), (
'Því heilagur andi býr ekki í orðum þó hann neyðist stundum til að hafa slíkt uppi við saunglausa menn. Heilagur andi býr í saung',
'17. kafli. Þjóðrekur biskup',
'Paradísarheimt',
'1960 '
), (
'Við lifum í landi þar sem að minsta kosti mataráhyggjurnar eru ekta; þar sem flestir álíta að ekkert skifti máli nema þær.',
'2. þáttur. Saungprófessorinn',
'Strompleikurinn',
'1961'
), (
'Útþrá hefur falleg augu.',
'1.þáttur',
'Prjónastofan Sólin',
'1962'
), (
'Gjafir eru táknrænar, en þær bæta ekki úr neinu.',
'1.þáttur.',
'Prjónastofan Sólin',
'1962'
), (
'...veruleikinn fær ekki meiníngu fyren í endurminníngunni',
'1. þáttur. Ibsen Ljósdal',
'Prjónastofan Sólin',
'1962'
), (
'Alt er í réttu horfi meðan einginn man hvað ráðherrarnir heita. Ég aðhyllist forna speki sem segir, duglaus ríkisstjórn er mikil blessun fyrir þjóðina.',
'2. þáttur. Ibsen Ljósdal',
'Prjónastofan Sólin',
'1962'
), (
'Eingin jarðnesk skepna hefur jafn augljósa meðvitund um syndina og hundur.',
'null',
'Sjöstafakverið',
'1964 '
), (
'Þegar mannskepnan sagði fyrsta orðið einhverntíma í fyrndinni, þá byrjaði lygin.',
'Fugl á garðstaurnum',
'Sjöstafakverið',
'1964 '
), (
'Staðreyndir afsanna allar kenníngar',
'Fulg á garðstaurnum',
'Sjöstafakverið.',
'1964 '
), (
'Þetta hefur líklega ekki verið nema meðalgáfuð kona. Hún var samt nógu gáfuð til þess að fara aldrei útí heimspeki',
'Tryggur staður',
'Sjöstafakverið.',
'1964 '
), (
'...eingin jarðnesk skepna hefur jafn augljósa meðvitund um syndina og hundur',
'Tryggur staður',
'Sjöstafakverið.',
'1964 '
), (
'Símaskráin er eina bókin þar sem merkilegir menn standa við hliðina á ómerkilegum mönnum. Jafnvel maður einsog ég stend þar. Þessvegna hallast ég að þeirri bók.',
'1.þáttur.',
'Dúfnaveislan',
'1966 '
), (
'Heyrst hefur um hjónabönd þar sem hjónin eru að seigdrepa hvort annað lánga ævi. Það er sosum eins gott að ljúka því af fyrsta daginn ef ilt á að ske á annað borð.',
'5. þáttur.',
'Dúfnaveislan',
'1966 '
), (
'...sá sem hefur ekki skírnarvottorð er ekki til. Það er ekki tekið mark á honum ef hann deyr.',
'1. þáttur. Pressarinn',
'Dúfnaveislan',
'1966 '
), (
'Sá sem hefur kartöflur og soðníngu þarf hvorki hugsjón né miljón',
'2. þáttur. Pressarinn',
'Dúfnaveislan',
'1966 '
), (
'Ég hef lært að veröldin hefur einn kost...Og hann er sá að hún gerir aungvan mann vitrari í dag en hann var í gær',
'Pressarinn',
'Dúfnaveislan',
'1966 '
), (
'Það er leiðinlegt að við skulum ekki blístra hvor á annan einsog fuglarnir. Orð eru villandi.',
'17. kafli.',
'Kristnihald undir Jökli.',
'1968'
), (
'Kanski fær maður að deya við kertaljós um jólin meðan jörðin siglir inní myrkur alheimsins þar sem guð á heima og allir jólasveinarnir.',
'26. kafli',
'Kristnihald undir Jökli.',
'1968'
), (
'Maðkaflugan er kanaríufugl öreigans ...',
'6.kafli.',
'Kristnihald undir Jökli.',
'1968'
), (
'Auk þess hef ég heyrt að afreksverk verði ekki unnin eftir embættismannataxta.',
'1. kafli ',
'Kristnihald undir Jökli.',
'1968'
), (
'Hver neitar því að kikjan sé hrossamarkaður sálarinnar',
'35. kafli. Helgi bóndi',
'Kristnihald undir Jökli.',
'1968'
), (
'Gleymið ekki að fáir eru líklegir til að segja nema soldið satt, einginn mjög satt, því síður hreina satt',
'2. kafli. Biskup',
'Kristnihald undir Jökli.',
'1968'
), (
'Þegar byrjað er að ljúga er vandi að fara að segja satt á eftir',
'8. kafli',
'Kristnihald undir Jökli.',
'1968'
), (
'Þegar ég komst að því að sagnfræði er fabúla, og hún er vond, þá fór ég að leita að skárri fabúlu og fann guðfræðina',
'16. kafli. Séra Jón Prímus',
'Kristnihald undir Jökli.',
'1968'
), (
'Munurinn á sagnaskáldi og sagnfræðíngi er sá að hann sem ég nefndi fyr lýgur vísvitandi að gamni sínu; sagnfræðingurinn lýgur í einfeldni sinni og ímyndar sér að hann sé að segja satt',
'17. kafli. Séra Jón Prímus',
'Kristnihald undir Jökli.',
'1968'
), (
'Það hefur ekki verið siður hér undir Jökli að bera heldra fólki fisk. Ég ætla ekki að verða fyrst til að bjóða lærðum manni fisk. Ég mundi verða úthrópuð um alla sýsluna.',
'21. kafli. Fröken Hnallþóra',
'Kristnihald undir Jökli.',
'1968'
), (
'En það er ekki siður í sveitum að taka menn trúanlega ef þeir afþakka kaffi og meðþví..',
'9. kafli',
'Kristnihald undir Jökli.',
'1968'
), (
'Hér stóð það borð saman sem fult er með nógleik allra krása einsog í Máríusögu, - að einni krás undanskilinni: ætum mat.',
'21. kafli',
'Kristnihald undir Jökli.',
'1968'
), (
'Það var moldarbragð af kaffinu, og ef satt skal segja féllust mér hendur að sjá svo fjölment sætabrauð samankomið kríngum svo vont kaffi. Mér fanst konan stæði yfir mér af samskonar skyldu og þegar verið er að gá hvort skepnur éti þar sem látið er fyrir þær',
'5. kafli. Umbi',
'Kristnihald undir Jökli.',
'1968'
), (
'Nútíminn bustar í sér tennurnar í staðinn fyrir að fara með kvöldbæn.',
'27. kafli. Séra Jón Prímus',
'Kristnihald undir Jökli.',
'1968'
), (
'Sá sem ekki lifir í skáldskap lifir ekki af hér á jörðinni',
'41. kafli. Séra Jón Prímus',
'Kristnihald undir Jökli.',
'1968'
), (
'Leiðinlegt er ekki neitt nema skemta sér',
'38. kafli. Úa',
'Kristnihald undir Jökli.',
'1968'
), (
'Fyrst er að vilja; afgángurinn er tækni',
'2. kafli. Biskup',
'Kristnihald undir Jökli.',
'1968'
), (
'Afturámóti var mér kent að einginn stigmunur sé á verkum, aðeins á vandvirkni',
'13. kafli. Umbi',
'Kristnihald undir Jökli.',
'1968'
), (
'... alt fer á hausinn hjá því opinbera, nema skattstofan.',
'21. kafli.',
'Innansveitarkronika',
'1970 '
), (
'Að svipstundu liðinni kemur únglíngsstúlka, vinnukona prestsins frammí dyrnar, Guðrún að nafni Jónsdóttir, nokkuð fáklædd, og spyr hvort gestirnir vilji ekki hunskast inní eldhús og drekka nærbuxnaskólp hjá sér.',
'7. kafli.',
'Innansveitarkronika',
'1970 '
), (
'...getur nokkur nokkurntímann verið nokkrum trúr nema sjálfum sér',
'12. kafli',
'Innansveitarkronika',
'1970 '
), (
'Þér eruð skáld af því þér kunnið að ljúga svo maður trúir; og maður trúir eins fyrir því þó maður viti að þér eruð að ljúga',
'21. kafli. Bergrún Hjálmarson',
'Guðsgjafarþula',
'1972'
), (
'Litúrgía kirkjuársins er sú leiklist sem mannkynið hefur fundið til að ljá tímanum táknlegt innihald, árstíð frá árstí',
'17. kafli',
'Í túninu heima',
'1975'
), (
'Maður verður listamaður á því einu að vanda smáatriðin – alt hitt gerir sig sjálft.',
'19. kafl',
'Í túninu heima',
'1975'
), (
'Hún var með öllu laus við tilfinníngasemi, líklega af því hvað hún var mikil tilfinníngamanneskja',
'13. kafli',
'Í túninu heima',
'1975'
), (
'...mér þótti hann næstum of ótrúlegur til að vera sannur; og of sannur til þess að vera trúlegur',
'19. kafli',
'Í túninu heima',
'1975'
), (
'...það er vandasamara að stíla laust mál en yrkja bundið',
'19. kafli',
'Í túninu heima',
'1975'
), (
'Ég heyrði föður minn segja að allir sem í æsku stunduðu músík yrðu heiðarlegir menn, af því að í tónlist má aldrei slá falska nótu, né láta neinu skakka í hljóðfallinu; enda kæmi aldrei fyrir að maður sem iðkaði tónlist væri tekinn fyrir glæp',
'20. kafli',
'Í túninu heima',
'1975'
), (
'Matur er afstæðastur gæða',
'7. kafli',
'Úngur eg var',
'1976'
), (
'...ef manni þætti ekki alt skrýtið í heiminum, á hverri stundu sem lifir, þá væri maður víst búinn að vera. Skrýtnastur er maður sjálfur – og þó ekki leinguren maður heldur áfram að spyrja: hvað næst',
'8. kafli',
'Úngur eg var',
'1976'
), (
'Vandinn að skrifa er í því fólginn að þegja yfir nógu mörgu',
'11. kafli',
'Úngur eg var',
'1976'
), (
'Alt sem yfir dynur í mannlegu félagi, slys og hörmúngar, er skáldum fundið fé',
'15. kafli.',
'Úngur eg var',
'1976'
), (
'Mentabraut er þaraðauki það óbreyttasta sem til er; nema maður útaf henni',
'12. kafli',
'Sjömeistarasagan',
'1978'
), (
'Síðasta verk, hvað sem það er vont, gerir mann venjulega blindan á fyrri verk sín, meðal annars af því að á líðandi stund er maður það sem maður er, hvað sem maður var áður og hvað sem maður á eftir að verða',
'24. kafli',
'Sjömeistarasagan',
'1978'
), (
'Ég vona að þeir vitru menn heimsins hafi rétt fyrir sér, sem segja að ekkert sé til rétt nema sá veruleiki sem birtist í verkum góðra manna',
'20. kafli',
'Sjömeistarasagan',
'1978'
), (
' „Ættjarðarljóð“ fara íslendíngum illa, því eingin þjóð hefur svo kunnugt sé spilt Íslandi viljandi af annarri eins hörku heimsku og heiftúð og við sjálfir, ekki einusinni danakonúngar.',
'17. kafl',
'Grikklandsárið',
'1980'
), (
'Hefur ekki verið sagt að þegar manni þyki ekki leingur skrýtið að finna sjálfan sig staddan í heiminum, þann dag sé sá maður búinn að vera',
'23. kafli',
'Grikklandsárið',
'1980'
), (
'Það er auðvelt að vera seinnitímamaður og finna upp skothvellinn þegar aðrir hafa fundið upp púðrið',
'21. kafli.',
'Grikklandsárið',
'1980'
), (
'...fátt verður sagt í sögu þó laung sé, en mart í fábreyttu orði ef það er stutt',
'22. kafli',
'Grikklandsárið',
'1980'
), (
'Mannréttindi eru fólgin í því að hver fái að vera svo heimskur sem hann vill',
'15. kafli',
'Grikklandsárið',
'1980'
), (
'...tíminn skiftir ekki máli þegar verið er að semja skáldverk, og ekki held ég nein sú innri orusta sé of laung sem leynist bakvið rétt formað setníngarbrot í skrifuðum texta',
'1. kafli. Friðrik Brekkan',
'Grikklandsárið',
'1980'
), (
'Ljóðið er kastali háttvísinnar',
'15. kafli',
'Grikklandsárið',
'1980'
), (
'Vel skrifuð setning “situr„ einsog blóm sem vex á jörðinni; fer vel',
'21. kafli',
'Grikklandsárið',
'1980'
), (
'...tíminn virðist líða afturábak í ám og vatnið renna uppámóti',
'20. kafli',
'Grikklandsárið',
'1980'
), (
'Nú eiga flestir dýrmæt hljóðfæri, einkum þeir sem eru laglausir',
'3. kafli',
'Grikklandsárið',
'1980'
);