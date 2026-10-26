---
title: "Hur bra är AI på svenska, egentligen? Det säger forskningen"
description: "AI-tjänster lovar perfekt svenska. Här är vad oberoende mätningar visar om taligenkänning på svenska, och varför siffrorna från testerna sällan stämmer med ett riktigt möte."
date: "2026-10-26"
tags: ["AI", "Svenska", "Forskning"]
---

"Perfekt svenska" är en av de vanligaste löftena i marknadsföringen av AI-verktyg för möten. Det är också ett löfte som är svårt att kontrollera. Vad betyder det i siffror? Mot vilket test? Och stämmer testet med hur ni faktiskt pratar på ett styrelsemöte eller en personalträff?

Tilk är en svensk mötesapp, så vi har ett egenintresse. Därför går vi igenom vad som faktiskt är mätt, av vem, och vad ingen har mätt. Vi påstår inte här att Tilk är bäst. Vi har inte publicerat någon mätning av Tilk på svenska möten, och vi hittade ingen oberoende sådan.

## Kort sammanfattat

- På **uppläst** svenska i standardtester är dagens bästa modeller bra. Svenska bibliotekets finjusterade modell hamnar på ungefär 4–5 procents ordfel.
- Samma test visar att **svenska är ett mindre språk i de stora modellernas träningsdata**, och att en riktad finjustering kan ge stor förbättring.
- Testerna mäter mest uppläst tal. De få mätningar av **spontant svenskt tal** vi hittade ger betydligt högre felfrekvens. De är dock små och går inte att jämföra rakt av.
- Vi hittade **ingen oberoende mätning på svenska möten** med flera talare, avbrott, brus och fackord.

## Så mäts det: ordfelsfrekvens

Det vanligaste måttet kallas WER (word error rate), ordfelsfrekvens. Det räknar hur stor andel av orden i en facit-text som har blivit fel, saknas eller har lagts till i transkriptionen. 5 procent betyder ungefär ett fel per tjugo ord. Måttet säger inget om hur allvarliga felen är: ett felstavat "och" och ett felaktigt belopp räknas lika.

## Varför svenska börjar på efterkälken

OpenAI:s Whisper-modeller, som ligger bakom många transkriptionstjänster, tränades enligt sin artikel på 680 000 timmar ljud. Av dem täckte 117 000 timmar 96 andra språk än engelska. Resten, ungefär 563 000 timmar enligt vår egen subtraktion, är alltså engelska. Svenska delar med andra ord utrymmet med nästan hundra språk.

Det spelar roll, för Whisper-forskarna fann ett tydligt samband mellan mängden träningsdata per språk och felfrekvensen: ordfelen halverades ungefär för varje 16-dubbling av träningsdata, och sambandet förklarade en stor del av skillnaderna mellan språk (kvadrerad korrelation 0,83). Det är ett genomsnittligt mönster mellan språk, inget exakt värde för svenska.

## Vad svensk finjustering gav

Kungliga biblioteket och dess AI-labb KBLab tränade vidare Whisper på svenska och publicerade resultaten på Interspeech 2025. Jämförelsen mot OpenAI:s Whisper large-v3, i procent ordfel (lägre är bättre):

| Testmaterial | OpenAI large-v3 | KBLab large-v3 |
|---|---|---|
| FLEURS | 7,8 | 5,4 |
| Common Voice | 9,5 | 4,1 |
| NST | 11,3 | 5,2 |

Författarna anger att ordfelen i genomsnitt blev 47 procent lägre. De mindre modellerna gynnades ännu mer: KBLabs *small*-modell klarade alla tre testerna bättre än OpenAI:s *large-v3*. Modellerna är öppna och släpps under licensen Apache 2.0.

Tre saker att ha med sig:

1. **Det är författarnas egna mätningar** av sina egna modeller. Det är ett granskat konferensbidrag, men vi har inte hittat någon fristående upprepning.
2. **Träningsmaterialet är inte kontorsmöten.** Av drygt 56 000 timmar i första träningssteget kom ungefär 22 000 från riksdagen och 34 000 från undertexter till tv och YouTube. Inspelningar av svenska dialekter utgör 54 timmar. Det är vår läsning av författarnas tabell, och den visar en slagsida mot formellt tal och tv-svenska.
3. **Författarna nämner själva en begränsning.** De valde ut träningsdata med hjälp av OpenAI:s modell, så svåra dialekter som den modellen missar kan ha sorterats bort. Undertexter är dessutom ofta kortade i stället för ordagranna.

## Vad testerna egentligen mäter

FLEURS bygger på meningar som togs från engelska Wikipedia, översattes och lästes in av tre personer per mening, ungefär 12 timmar per språk. I Common Voice läser frivilliga upp meningar som visas på skärmen, med de mikrofoner de själva har. Det är värdefulla testmaterial, men de är **uppläst tal**. Ingen avbryter, ingen byter mitt i en mening, och ingen säger "eh, alltså, vi tar det sen".

## Och när folk pratar på riktigt?

Vi hittade två svenska studier som ger en fingervisning. Båda är små.

**Samtal jämfört med uppläsning (2024).** En studie testade tre system på svenska: Googles och Microsofts tjänster med standardinställningar samt en öppen svensk modell. Systemen var alltså inte Whisper. För infödda talare var felfrekvensen **11–16 procent** på uppläst text men **36–41 procent** på samtal för Google och Microsoft. Men det är två olika dataset, med bara sex infödda talare i vardera, och korta yttranden (i snitt 4–7 ord). Skillnaden kan därför inte skrivas rakt av på "samtal är svårare", även om riktningen är den väntade. Studien jämförde också infödda och icke-infödda talare, och för uppläst tal blev felfrekvensen ungefär dubbelt så hög för de icke-infödda. Där var talarna nybörjare till medelnivå i svenska och systemen andra än Whisper, så det säger lite om en arbetsplats där många talar svenska flytande med brytning.

**Berättande spontantal (2026).** Forskare testade KB-Whisper och OpenAI:s Whisper på 30 personer, 57–78 år, som berättade en tänkt resa till Stockholm, cirka 80 minuter ljud totalt. Gruppen bestod av friska personer och personer med lindrig eller subjektiv kognitiv svikt. Bästa resultatet för KB-Whisper large var **14,7 procent** ordfel mot **22,4 procent** för OpenAI:s large. Författarna skriver att urvalet är för litet för att dra statistiska slutsatser, och siffrorna är det bästa resultatet per modell bland flera testade inställningar. De fann att modellerna ofta missar små ord som "väl" och "ju", blandar ihop "å" och "och" och har svårt med egennamn. OpenAI-modellen hamnade dessutom i en slinga där samma textstycke upprepades. Whisper-artikeln beskriver samma fel, upprepningsslingor och påhittad text som inte finns i ljudet, som kända svagheter.

Siffrorna går inte att jämföra direkt med varandra eller med 5,4 procent ovan, eftersom material, talare och mätsätt skiljer. Men de pekar i samma riktning: **spontant tal är svårare än uppläst**, och i de studier vi hittade hade den svenska finjusteringen fördelar även där.

## Vad vi inte vet

- **Hur modellerna klarar riktiga möten.** Vi hittade ingen oberoende svensk mätning på möten med flera talare som avbryter varandra, rumsklang, brus och facktermer.
- **Hur stor skillnaden mellan dialekter är.** Det finns lite träningsmaterial och vi hittade inga jämförbara siffror per dialekt.
- **Hur kommersiella tjänster presterar.** Det är sällan tydligt vilken modell en app använder, och leverantörens egna siffror är leverantörspåståenden tills någon annan har kontrollerat dem. Det gäller även oss.
- **Hur bra sammanfattningen blir.** Allt ovan gäller transkriptionen. Hur väl en AI sedan fångar beslut och åtaganden ur texten är en annan fråga, och mäts inte av WER.

## Så kan du själv bedöma det

Det här är våra egna råd, inte forskningsresultat:

1. **Testa på ett riktigt möte, inte på en demo.** Ta ett möte ni redan har anteckningar från och jämför.
2. **Leta efter det som spelar roll**: namn, siffror, datum, fackord och beslut. Ett fåtal fel av just den typen kan vara värre än många obetydliga.
3. **Läs igenom sammanfattningen innan den skickas ut.** Det gäller oavsett verktyg.
4. **Tänk på ljudet.** Placera telefonen nära dem som pratar och försök att inte tala i mun på varandra. Vi har inte mätt hur stor skillnad det gör, men indata av dålig kvalitet kan inte bli bättre än den är.

Vill du kontrollera Tilk på svenska? Gratisplanen ger 60 minuter. [Ladda ner Tilk på App Store](https://apps.apple.com/se/app/tilk/id6759267312) och jämför med dina egna anteckningar. Och kom ihåg att berätta för alla att mötet spelas in, se [vad som gäller i Sverige](/blog/ar-det-lagligt-att-spela-in-moten-i-sverige).

## Källor

- Vesterbacka, L., Rekathati, F., Kurtz, R., Sikora, J. & Toftgård, A. (2025). [Swedish Whispers; Leveraging a Massive Speech Corpus for Swedish Speech Recognition](https://www.isca-archive.org/interspeech_2025/vesterbacka25_interspeech.html). *Interspeech 2025*, s. 758–762. Fulltext och tabeller: [arXiv:2505.17538](https://arxiv.org/html/2505.17538v2).
- KBLab, Kungliga biblioteket. [KB-Whisper Large](https://huggingface.co/KBLab/kb-whisper-large) (modellsida med resultattabeller och licens).
- Radford, A. m.fl. (2022). [Robust Speech Recognition via Large-Scale Weak Supervision](https://ar5iv.labs.arxiv.org/html/2212.04356), OpenAI. Träningsdata (680 000 timmar, 117 000 timmar på 96 andra språk), sambandet mellan datamängd och felfrekvens samt kända felmönster.
- Conneau, A. m.fl. (2022). [FLEURS: Few-shot Learning Evaluation of Universal Representations of Speech](https://arxiv.org/pdf/2205.12446).
- Ardila, R. m.fl. (2020). [Common Voice: A Massively-Multilingual Speech Corpus](https://arxiv.org/pdf/1912.06670).
- [You don't understand me!: Comparing ASR results for L1 and L2 speakers of Swedish](https://arxiv.org/pdf/2405.13379) (2024). Jämförelse av Google, Microsoft och en öppen svensk modell på uppläst och samtalsbaserat tal.
- Kokkinakis, D., Lange, H. & Muñoz Sánchez, R. (2026). [Disfluencies and ASR Performance on Swedish Spontaneous Speech from the 'Trip to Stockholm' Discourse Narrative Task](https://aclanthology.org/2026.rapid-1.3/). *Proceedings of the Sixth RaPID Workshop*, ELRA, s. 24–33.
