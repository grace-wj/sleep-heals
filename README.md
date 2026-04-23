# sleep heals

An interactive art piece about sleep, disguised as a little website.

Every image on the page — the sun, the hands, the eyes, the hand-lettered words, the grainy backgrounds, even the cursors — was drawn by hand. The site stitches those drawings together into a loose flipbook: frames cycle, the sun breathes, the hands drift, the pupils follow your mouse around the room.

## Two states

Click the word in the center of the sun's face to toggle between **wake** and **sleep**.

- **Wake** — warm palette, eyes open, hands up. Six hand-drawn words float into view around the sun — *emotions, creativity, focus, memory, immunity, metabolism* — each one linking out to a study about what sleep does for it.
- **Sleep** — cool palette, eyes closed, the words fade away. The sun rests.

## Running it

It's a plain static site — no build step, no dependencies. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server
```

## Credits

Drawings, writing, and code by Grace Juan. Typeface *Meno Display* via Adobe Fonts. Research links point to PubMed, Nature, and JAMA.
