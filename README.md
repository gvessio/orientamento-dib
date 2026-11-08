# Orientamento per le scuole — Dipartimento di Informatica UniBa

Primo prototipo di **pagina di servizio istituzionale**, sviluppato con Hugo e senza temi esterni, framework JavaScript o immagini generate.

## Avvio locale

1. Installare Hugo (versione recente, standard o extended).
2. Aprire un terminale nella cartella del progetto.
3. Eseguire `hugo server -D`.
4. Aprire l'indirizzo locale indicato dal comando (di norma `http://localhost:1313/`).

Per generare il sito statico: `hugo --minify`. L'output si trova in `public/`.

## Struttura

- `hugo.toml`: configurazione generale e recapiti.
- `layouts/index.html`: contenuti e struttura della pagina.
- `layouts/_default/baseof.html`: layout HTML comune.
- `static/css/style.css`: palette, tipografia, layout responsive.
- `static/js/site.js`: menu mobile accessibile.
- `static/images/dib-facciata.png`: fotografia fornita dall'utente.

## Prima della pubblicazione

- Sostituire `baseURL` in `hugo.toml` con l'URL effettivo di pubblicazione.
- Verificare i collegamenti esterni, le denominazioni e la disponibilità delle iniziative.
- Confermare l'autorizzazione al riutilizzo della fotografia e gli eventuali crediti.
- Inserire **logo UniBa ufficiale** seguendo il manuale di identità visiva: il monogramma `UB` attuale è un semplice segnaposto grafico, **non** il logo istituzionale.
- Verificare i quattro messaggi del vademecum rispetto alla formulazione finale desiderata.
- Verificare eventuali recapiti aggiuntivi, privacy e accessibilità prima della pubblicazione.

## Filosofia editoriale

Questa pagina presenta attività e servizi per scuole e referenti scolastici. Non replica l'offerta formativa, le procedure di ammissione, gli avvisi o il calendario ufficiale del sito DIB.


## Aggiornamenti v2
- Logo UniBa vettoriale fornito dall'utente (convertito da PDF CMYK in SVG e ritagliato alla grafica).
- Fotografia del DIB in cornice bianca, arrotondata e ridotta nella hero.
- Cinque schede di pari dimensione e maggiore leggibilità.
- Sezione mappa OpenStreetMap con coordinate indicative della sede di Bari (41.109643, 16.8816364).
- Contatti con maggiore contrasto e senza descrizione ridondante del ruolo.
- Eliminati i collegamenti alla pagina di orientamento DIB; rimane il link generale al Dipartimento.

La mappa incorporata richiede connettività Internet; il resto del sito è statico.


## Versione 3
Ripristinato footer chiaro; logo UniBa ridotto; fotografia in cartolina più piccola e cliccabile per aprire OpenStreetMap; eliminata sezione mappa; aumentati font; contatto con sfondo blu e testo bianco; cinque servizi equivalenti. CSS con parametro v=3 per evitare cache.


## Aggiornamento v4
- Logo UniBa e cartolina DIB leggermente ingranditi. La fotografia apre la posizione su OpenStreetMap.
- Sesta scheda: progetto OSCAR, senza riprodurre la lettera d'invito. Dettagli della sessione 2027 da aggiornare prima della pubblicazione.
- Nota esplicita sulla convenzione scuola–Dipartimento necessaria per FSL.
- Titolo delle quattro idee reso più ampio; rimosso «Prof.» dal contatto.
- Barbara Lupelli indicata come referente amministrativo, con indirizzo email cliccabile.
