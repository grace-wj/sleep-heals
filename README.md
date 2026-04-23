# sleep heals

A little website about sleep. Everything on the page is hand-drawn — the sun, the hands, the eyes, the words, the background texture, even the cursors. The frames cycle so it feels a bit alive: the sun wobbles, the hands drift, the eyes follow your mouse.

## How it works

Click the word on the sun's face to flip between **wake** and **sleep**.

- **Wake** — warm colors, eyes open, hands up. Six words float in around the sun (*emotions, creativity, focus, memory, immunity, metabolism*). Each one links to a study about what sleep does for it.
- **Sleep** — cool colors, eyes closed, the words fade out.

## Running it

Plain static site, no build step, no dependencies. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server
```

## Credits

Drawings, writing, and code by Grace Juan. Font is *Meno Display* via Adobe Fonts. Study links go to PubMed, Nature, and JAMA.
