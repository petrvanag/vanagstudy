---
name: VANAGSTUDY
description: Online school of exact sciences and olympiad preparation, set as a printed olympiad problem sheet.
colors:
  red: "#c02a1b"
  red-deep: "#9e1f13"
  red-wash: "#f6e1dc"
  ink: "#16171b"
  ink-2: "#43464f"
  ink-3: "#62656e"
  paper: "#fbfaf6"
  paper-2: "#f2f0e8"
  sheet: "#ffffff"
  rule: "#d9d5c9"
typography:
  display:
    fontFamily: "PT Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 6.2vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "PT Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 4.2vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "PT Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.35rem, 2.2vw, 1.8rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  problem:
    fontFamily: "PT Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(17px, 1.5vw, 19px)"
    fontWeight: 400
    lineHeight: 1.5
  numeral:
    fontFamily: "PT Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.4rem, 4vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "lnum"
  body:
    fontFamily: "Golos Text, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Golos Text, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
  pen:
    fontFamily: "Marck Script, Segoe Script, cursive"
    fontSize: "1.45rem"
    fontWeight: 400
    lineHeight: 1.15
rounded:
  none: "0px"
  control: "3px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  measure: "1180px"
  column: "clamp(32px, 6vw, 88px)"
  head: "clamp(40px, 6vw, 72px)"
  section: "clamp(72px, 10vw, 128px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.sheet}"
  button-primary-active:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.sheet}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "transparent"
    textColor: "{colors.red}"
  button-small:
    rounded: "{rounded.control}"
    padding: "10px 16px"
    height: "42px"
  answer-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px 2px"
    height: "48px"
  format-choice:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
  answer-box:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 3.4vw, 40px)"
  problem-card:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(22px, 3vw, 34px)"
  quiz-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.problem}"
    padding: "13px 0"
    height: "52px"
  pen-note:
    textColor: "{colors.red}"
    typography: "{typography.pen}"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
---

# Design System: VANAGSTUDY

## Overview

**Creative North Star: "Олимпиадный листок"**

Every page is one printed olympiad problem sheet lying on a desk: warm off-white paper, near-black ink, and a single red that belongs to the teacher checking the work. Sections are separated the way a printed sheet separates parts, with a double ink rule across the measure; content inside a section is set as numbered conditions, ruled lists and two-column "statement / solution" rows. Nothing is a floating card in a grid of cards; the page reads top to bottom like a document.

The system shows thinking instead of claiming it. The hero carries an actual problem with its picture-proof, a sum-of-odd-numbers square assembled from L-shaped layers, and the red pen annotates it in handwriting. Teacher photos are printed in grey like a lyceum yearbook and take their colour back when the reader points at them. The application form is "Задача 0", an answer box drawn with a heavy ink frame and underline answer lines.

Density is calm and editorial: generous section spacing, a 1180px measure, hairline rules doing the work that boxes and shadows do elsewhere. The voice is honest and plain; the only theatrical moment is one short motion sequence in the hero.

**Key Characteristics:**
- One paper ground, black ink, one red (with a deeper press state and a pale wash for selection).
- PT Serif for headings, problem text, quotes and price numerals; Golos Text for body, labels and UI; Marck Script only in red for pen notes.
- 3px double ink rules divide sections; 1px warm hairlines divide rows.
- Recurring 5 : 7 two-column split (statement left, working right) that collapses to one column on phones.
- Square corners everywhere except 3px on controls.
- Greyscale photography that regains colour on hover or keyboard focus.
- One orchestrated motion (hero square assembles, pen tick draws), fully off under reduced motion.

## Colors

A printed-sheet palette: three paper tones, three ink tones, one warm hairline, and a single red family for the teacher's pen.

### Primary
- **Teacher's Pen Red** (`red`): the only chromatic colour. Pen-script notes, the hand-drawn underline under the hero keyword, the drawn tick, the last layer of the hero square, the answer in the hero equation, short red dashes that mark subject list items, the active-filter highlighter swash, the ruler thumb, the pen marks, the brand half "STUDY", link and button hover, the focus ring, the input caret and focus underline, and validation errors.
- **Pressed Red** (`red-deep`): the active (pressed) state of the primary button and the text colour of selected text.
- **Red Wash** (`red-wash`): text-selection background only.

### Neutral
- **Printing Ink** (`ink`): headings, body emphasis, primary button fill, double section rules, the answer-box frame, input underlines, the rule under sheet headers.
- **Soft Ink** (`ink-2`): running paragraph text inside sections, nav links, list items.
- **Pencil Grey** (`ink-3`): captions, meta lines (roles, units, counts, legal text), placeholders. Holds 5.6:1 on paper, so it is safe at 13-14px.
- **Desk Paper** (`paper`): the page ground and masthead.
- **Shaded Paper** (`paper-2`): the photo frame behind loading teacher portraits and the generated-message block after submit.
- **Clean Sheet** (`sheet`): surfaces that are a separate sheet laid on the desk: the hero problem card, the answer box, the featured (individual lessons) price column, the mobile menu panel; also text on red.
- **Hairline** (`rule`): 1px row dividers in every list, price column dividers, masthead bottom border, unselected choice borders, the ruler is ink.

### Named Rules
**The One Red Rule.** Red is the teacher's pen and the page's signal of attention: marks, corrections, hover, focus and errors. It never becomes a section background, a card fill or a second accent hue. The red-filled hero layer and the hover state of the primary button are the largest red areas the system allows.

**The Ink Hierarchy Rule.** Text steps down ink, ink-2, ink-3 by importance; never lighter than ink-3 for anything a reader must read.

## Typography

**Display Font:** PT Serif (with Georgia, Times New Roman)
**Body Font:** Golos Text (with system-ui, Segoe UI)
**Pen Font:** Marck Script (with Segoe Script, cursive)

**Character:** A Cyrillic textbook serif with true italics carries everything that is "printed on the sheet" (headings, problems, quotes, sums), while a clean Cyrillic grotesk handles the reading and operating layer. The script is the teacher's hand, never the typesetter's.

### Hierarchy
- **Display** (700, clamp(2.6rem, 6.2vw, 5.4rem), 1.02, -0.025em): the hero H1 only; on /prep a sibling at clamp(2.4rem, 5.6vw, 4.6rem).
- **Headline** (700, clamp(2rem, 4.2vw, 3.4rem), 1.08): section H2s in the section head; the apply heading runs one step larger (up to 3.8rem); subject names reuse this size as a printed label.
- **Title** (700, clamp(1.35rem, 2.2vw, 1.8rem), 1.08): numbered conditions, story, price and sub-block H3s; teacher names at a fixed 21px; FAQ questions in serif bold at clamp(18px, 1.7vw, 21px).
- **Problem** (400, clamp(17px, 1.5vw, 19px), 1.5-1.6): problem statements, student stories; italic for the principle and the founder quote (founder quote runs up to 24px).
- **Numeral** (700, clamp(2.4rem, 4vw, 3.2rem), 1, lining figures): prices; grant sums use the same face at clamp(22px, 2.4vw, 28px) with tabular lining figures.
- **Body** (400, 17px, 1.6): running text; lead paragraphs scale to 19-20px; paragraph measure held at 30-42em.
- **Label** (500-600, 13-15px): field labels, teacher roles, nav links, meta lines, units beside prices. Sentence case, no tracking, never uppercase.
- **Pen** (400, 1.45rem, 1.15, red): marginal notes, usually rotated -2deg to -4deg.

### Named Rules
**The Printed vs Handwritten Rule.** Serif is what the sheet says, sans is how you use it, script is what the teacher wrote on it. Marck Script appears only in red and only as an annotation beside existing content.

**The Hanging Numeral Rule.** Numbered conditions hang their numeral in a 1.6em outdent so the heading text aligns flush; numerals use lining tabular figures.

## Layout

Single column of full-width sections, each holding a centred measure of min(1180px, 100% - 2 x gutter) with a fluid gutter (16-40px). Every section after the hero opens with a 3px double ink rule across the measure, then fluid section padding (72-128px) above and below; the footer opens with the same rule.

The recurring grid is a 5 : 7 split with a fluid column gap (32-88px): section heads (H2 left, intro paragraph right, bottom-aligned), numbered conditions, subjects, stories and the apply block all use it. The hero inverts it to 7 : 5 (copy left, problem card right); the founder block uses 4 : 8. The teacher roster is a 4-column grid that steps to 3 (1080px), 2 (760px) and finally to a horizontal photo-left row at 440px. Prices are three columns joined by hairline dividers between ink top and bottom rules, stacking under 900px.

Breakpoints in use: 1080 (nav collapses to menu), 900 (hero and prices stack), 860 (apply stacks), 800 (section heads stack), 760 (conditions, subjects, stories, founder stack), 640 (masthead subtitle and header CTA hide), 440 / 420 (single-column team and choices).

Rows inside lists are separated by 1px hairlines with 8-14px vertical padding for short items and 28-48px for content rows; the last row of a list closes with its own hairline.

## Elevation & Depth

Flat paper by default; depth comes from rules and tonal sheets, not shadows. Two objects are allowed to sit physically above the desk: the hero problem card (a white sheet rotated -0.8deg with a soft contact shadow) and the mobile menu panel (a dropdown sheet). The masthead is sticky on 94% paper with a light backdrop blur.

### Shadow Vocabulary
- **Laid sheet** (`box-shadow: 0 1px 2px rgba(22, 23, 27, .06), 0 24px 48px -28px rgba(22, 23, 27, .45)`): the hero problem card only.
- **Dropdown sheet** (`box-shadow: 0 18px 40px -16px rgba(22, 23, 27, .35), 0 2px 6px rgba(22, 23, 27, .08)`): the mobile menu panel.

### Named Rules
**The Rules Not Boxes Rule.** Separate content with ink and hairline rules; a new surface (sheet white) is reserved for something that is genuinely a separate sheet: the problem, the answer box, the featured price.

## Shapes

Square corners are the default for every surface, photo and rule. Controls (buttons, the menu toggle, format choices) take a barely-there 3px radius, the focus ring 2px. Borders carry meaning by weight: 3px double for section breaks, 2px solid ink for the answer box, 1px ink for sheet headers, prices and inputs, 1px warm hairline for rows. Hand-drawn marks (the hero underline, the tick, the filter highlighter swash) are the only organic shapes, and they are always red. Teacher portraits are 4 : 5 crops.

## Components

### Buttons
Solid, quiet, typographic: an ink slab that turns to pen red when touched.
- **Shape:** gently squared (3px), minimum 52px tall.
- **Primary:** ink fill, paper text, Golos 600 16px, 14px 24px padding, optional 18px stroke arrow after the label.
- **Hover / Active:** fill and border shift to red with white text over 0.25s ease-out; pressed goes to red-deep. Focus is the global 2px red outline at 3px offset.
- **Ghost:** transparent with a 1px ink border and ink text; hover recolours text and border to red without a fill. Used for secondary prices and "copy text".
- **Small:** 42px tall, 10px 16px, 15px text; used in the masthead.
- **Text link with arrow:** underlined Golos 600 with an arrow that nudges 3px right on hover.

### Chips (format choice)
- **Style:** two side-by-side options with a 1px hairline border and 3px radius; label in Golos 600 16px with a 14px ink-3 sub-line.
- **State:** selected tightens to an ink border plus a 1px inset ink ring; keyboard focus draws the red outline. Native radio is visually hidden.

### Cards / Containers
- **Corner Style:** square (0).
- **Background:** sheet white on paper, used only for the problem card, the answer box and the featured price column.
- **Shadow Strategy:** only the problem card carries the laid-sheet shadow (see Elevation).
- **Border:** the answer box has a 2px ink frame; price columns sit between 1px ink rules with hairline dividers.
- **Internal Padding:** fluid, 22-40px.

### Inputs / Fields
- **Style:** answer lines, not boxes: transparent background, a single 1px ink underline, 48px tall, Golos 17px, red caret; labels above in Golos 600 14px ink-2. Selects share the line with an ink chevron.
- **Focus:** the underline thickens to 2px red; no outline box.
- **Error:** underline turns red and a 14px red message appears under the line, announced politely; focus moves to the first invalid field.

### Navigation
- **Style:** masthead with the serif wordmark (VANAG in ink, STUDY in red, 21px 700) and a Golos 13px subtitle; nav links Golos 500 15px in ink-2.
- **Hover:** link darkens to ink and a red underline fades in 0.35em below.
- **Mobile:** under 1080px links collapse to a bordered "Меню" disclosure that opens a white dropdown sheet with hairline-separated links and a full-width primary button; closes on link click, outside click or Escape.

### Problem Card (signature)
A white sheet, rotated -0.8deg, with a header row (bold title left, subject right) over a 1px ink rule, serif problem text, a centred formula, the layered-square figure (ink to grey to red), a result line with the answer in red, a red pen note set right and rotated, and a small ink-3 caption.

### Numbered Conditions (signature)
Ordered lists rendered as olympiad conditions: each row is a 5 : 7 split between hairlines, the serif title with a hanging numeral ("1.") and an optional Golos 14px ink-3 sub-line, and the explanation in ink-2 on the right.

### Ruler (signature interaction)
Under the hero square, a range input styled as a school ruler: an ink baseline with eight tick marks, numerals 1-8 in Golos 12px ink-3 below, and a red pen-tip thumb (14 by 24px, rounded bottom). Moving it rebuilds the square for n = 1-8 (new layers scale in with 90ms stagger) and rewrites the result line ("1 + 3 + … + 13 = 7²"). Hidden without JavaScript; the static 5 by 5 square stays.

### Pen Marks (signature)
The teacher checks the sheet as the reader scrolls: hand-drawn red SVG strokes (circle, underline, check) drawn once with `stroke-dashoffset` when the element enters the viewport (1s, page ease). Used sparingly: the hero keyword underline (draws at 1.1s on load), "95+" in the lead, the 2 500 ₽ price, the 500 тыс. ₽ grant, a check after each step of «Как устроено обучение», and the apply heading. Never on body copy, never more than one mark per element. Instant under reduced motion.

### Process Steps
«Как устроено обучение»: four steps in one row between ink top and bottom rules, hairline dividers between them; a large serif numeral, a serif title ending in a drawn red check, Golos ink-2 text; a right-aligned pen note closes the row. Two columns under 960px, numeral-left rows under 560px.

### Notebook Grid
The two surfaces a reader writes on, the problem card and the "Задача 0" answer box, carry a faint 22px squared-notebook grid (`--grid`, a blue-grey at 11%). No other surface is textured.

### Mobile Dock
Under 640px, a full-width ink button "Записаться на диагностику" slides up from the bottom once the hero actions leave the viewport and slides away while the apply section is visible.

### Teacher Roster
Greyscale (contrast 1.06) 4 : 5 portraits that return to colour and scale 2.5% on hover or focus-within over 0.6s; serif name, Golos role line, credential list on hairlines. A text filter above uses plain Golos buttons; the active one turns bold ink with a red highlighter swash behind it and a count beside it.

### Motion
One motion grammar, the teacher's pen: in the hero the five square layers scale in from 0.86 with 140ms stagger after 450ms, the result line and pen note fade in at 1.25s, the pen tick and keyword underline draw; further down, pen marks draw once as their elements scroll into view. All use `cubic-bezier(0.16, 1, 0.3, 1)`. Wrapped in `prefers-reduced-motion: no-preference`. Everything else is short state transitions (0.2-0.6s, same ease).

## Do's and Don'ts

### Do:
- **Do** open every section after the hero with the 3px double ink rule inside the 1180px measure.
- **Do** set statement-and-explanation content in the 5 : 7 split, separated by 1px hairlines (`rule`).
- **Do** number sequential points as conditions with hanging lining numerals.
- **Do** keep prices and sums in PT Serif 700 lining figures with units in Golos ink-3 beside them.
- **Do** write pen notes in Marck Script, red, rotated -2deg to -4deg, as an annotation next to content that already stands on its own.
- **Do** print people photos in greyscale and let colour return on hover and keyboard focus.
- **Do** use sheet white only for a surface that is a separate sheet (problem, answer box, featured price).
- **Do** gate any entrance motion behind `prefers-reduced-motion: no-preference`.

### Don't:
- **Don't** introduce a second accent hue or a lighter/brighter red; the red family is `red`, `red-deep`, `red-wash` only.
- **Don't** fill sections or cards with red, or with any tinted background beyond the three paper tones.
- **Don't** use Marck Script for headings, labels, buttons or anything a reader must parse to act.
- **Don't** draw inputs as boxes; they are answer lines.
- **Don't** round surfaces or photos; radius belongs to controls (3px) only.
- **Don't** add shadows to rows, sections or price columns; depth is reserved for the problem card and the dropdown menu.
- **Don't** use uppercase tracked labels or kickers above headings.
