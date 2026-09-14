# Media Assistant

<img src="./docs/assets/logo_full.png" width="25%" border="2" align="right" />

Istruzioni per la trasmissione dei video da telefono a Media Assistant (includendo il supporto ai video di YouTube).


> [!WARNING]
> Per lo script e i comandi rapidi è stato usato un IP di prova: modificare l'IP della propria Roku nell'azione HTTP dentro la macro/comando rapido e nello script cast.py. Stare attenti inoltre a non usare VPN o Proxy, in quanto potrebbero alterare i risultati di certe operazioni.

## 🍎 iOS

###  Installare:
- [Web Video Cast](https://apps.apple.com/it/app/web-video-cast-browser-to-tv/id1400866497)
- [a-Shell mini](https://apps.apple.com/it/app/a-shell-mini/id1543537943)
- [Comando Rapido](https://www.icloud.com/shortcuts/397d35768e7b4f01a355654ad0f109c3)

###  Procedimento:
- Andare su a-Shell mini e incollare questo script:

> `pip install --upgrade yt-dlp && curl -sL "https://gist.githubusercontent.com/streifics/db8b8cfcdb35094b9875b51fc7311af0/raw/cast.py" -o cast.py`

- Condividere il video da Web Video Cast (sulla pagina di un video qualsiasi, appena si prova a guardarlo cliccando play, si illuminerà in alto il segno play in arancione: cliccarlo, andare sui tre puntini e cliccare "Apri in un'altra app": scorrere e cliccare su "Invia a NOW TV") o da YouTube (attraverso il tasto "Condividi" cliccando allo stesso modo il Comando Rapido")

## 💚 Android

###  Installare:
- [Web Video Cast](https://play.google.com/store/apps/details?id=com.instantbits.cast.webvideo)
- [MacroDroid](https://dl.apkvision.org/macrodroid-device-automation/macrodroid-5.63.11-pro-apkvision.apk)
- [Termux](https://f-droid.org/repo/com.termux_1002.apk)
- [Termux:Tasker](https://f-droid.org/repo/com.termux.tasker_1002.apk)
- [Macro](https://drive.google.com/file/d/1-IxkHdLcJ-3B1wVWbQkfl2elNOuC9tCf/view?usp=sharing)

###  Procedimento:
- Attivare i seguenti permessi dalle impostazioni del telefono:

    - MacroDroid: disattivare ottimizzazione batteria; consentire l'esecuzione di comandi in ambiente Termux; consentire di potersi mostrare sopra altre app
    - Termux: disattivare ottimizzazione batteria, consentire di potersi mostrare sopra altre app

- Andare su Termux e incollare questo script:

> `pkg update -y && pkg upgrade -y && pkg install -y python curl && pip install yt-dlp && mkdir -p ~/.termux/tasker/ && curl -sL "https://gist.githubusercontent.com/streifics/db8b8cfcdb35094b9875b51fc7311af0/raw/cast.py" -o ~/.termux/tasker/cast.py && printf '#!/data/data/com.termux/files/usr/bin/bash\npython3 ~/.termux/tasker/cast.py "$1"\n' > ~/.termux/tasker/cast_roku.sh && chmod +x ~/.termux/tasker/cast_roku.sh`

- Aprire con MacroDroid la Macro scaricata e aggiungerla tra le macro col tasto in basso a destra.
- Condividere il video da Web Video Cast (sulla pagina di un video qualsiasi, appena si prova a guardarlo cliccando play, si illuminerà in alto il segno play in arancione: cliccarlo, andare sui tre puntini e cliccare "Condividi": scorrere e cliccare su MacroDroid, possibilmente non cliccando "Solo una volta") o da YouTube (attraverso il tasto "Condividi..." e cliccando allo stesso modo su MacroDroid")
