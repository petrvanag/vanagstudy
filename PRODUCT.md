# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Delegated (user left the choice to Claude): plain static HTML/CSS with a little vanilla JS, no build step. Reason: the site is already served from GitHub Pages (`petrvanag/vanagstudy`, branch `main`), and a custom domain `vanagstudy.ru` will be attached later. A GitHub Pages site cannot receive form posts, so the application form needs an external destination (open decision below).

## Users
Primary: parents of school students (grades 6–11) who decide, pay and write in. Secondary: the students themselves, 9–11 grade, aiming at ОГЭ/ЕГЭ, Всероссийская олимпиада школьников (ВсОШ) and other olympiads, and admission to strong math lyceums (179, СУНЦ, Лицей ВШЭ) or to top universities without exams (БВИ). Russian-language audience; most visits are likely from Telegram and phones.

## Product Purpose
VanagStudy is an online tutoring school for exact sciences and olympiad preparation: mathematics, informatics, physics, economics. Teachers are young winners and prize-winners of ВсОШ and graduates or students of МФТИ, ВШЭ, МГУ, МИФИ. Success for the site: a parent leaves an application for a diagnostic session (the single primary action).

## Positioning
Olympiad-level thinking as the route to strong exam results ("we teach to think, not to drill templates"), delivered by people who recently won the same competitions. Individual 1-on-1 lessons are the main format.

## Operating Context
Online lessons on a Miro board with Zoom or Telegram video, handwriting on graphics tablets, notes kept by the student. Weekly written report to parents after each week. Founder: Пётр Ванаг. Public channel: https://t.me/vanagstudy (also the source of teacher profiles and seasonal intensive programs). Site was previously on Tilda (now switched off); domain `vanagstudy.ru` is owned by the user and its DNS likely still points at Tilda.

## Capabilities and Constraints
- Formats and prices as on the current site: individual lessons 2 500 ₽ per 60 min; mini-groups up to 10 people 500–800 ₽ per hour (waiting list). The olympiad geometry intensive is discontinued (owner, 2026-10-07).
- Directions: mathematics (ОГЭ/ЕГЭ to ВсОШ), informatics (Python, C++), physics, economics.
- Team on the site (owner's update 2026-10-07): Пётр Ванаг (founder), Георгий Евстигнеев (head methodologist), Егор Лопатин, Анна Ящук, Михаил Далингер, Павел Маляренко, Олег Тутукин, Алексей Нестеров, Анастасия Растегаева, Андрей Сырчин (physics). 
- The owner assigns each student to a teacher personally after the application; the site must not recommend or auto-match teachers (the old quiz was removed).
- Seasonal intensives announced in the channel (regional ВсОШ, Физтех, ММО, Математический праздник for grades 6–7, ЕГЭ/ОГЭ marathons) have dates that go stale; do not hard-code dates without confirmation.
- The old page had an application modal. IMPORTANT FACT: the old form sends nothing (it only shows a success message), so leads were lost. The new application path is an open decision (see below).
- A page `vanagstudy.ru/prep` was advertised in the channel (ЕГЭ preparation); it lived on Tilda and must be recreated.
- Facts quoted on the site (grants of 100/300/500 thousand ₽ from the Moscow mayor, БВИ rules) come from the user's existing copy and should be re-checked by the user before publishing.

## Brand Commitments
Name VANAGSTUDY, logo mark "VS", subtitle "Школа точных наук". Voice in existing copy: direct, confident, a little informal, anti-drilling. Existing text is the content source of truth and is to be preserved.

## Evidence on Hand
- Teacher profiles and 14 photos from the Telegram channel in `assets/team/` (about 600×800 px, casual snapshots, mixed crops). Full channel export in `../tg/posts.json` (outside the repo).
- No student testimonials on the site yet. Add them only when the owner supplies real ones with parents' consent; never invent testimonials, results or counts.
- No reviews with screenshots, no video, no public statistics beyond what the copy states. Do not fabricate testimonials, counts or results.
- Consent of teachers to appear on the site is the user's responsibility and is not yet confirmed.

## Open decisions
- Applications: form → Cloudflare Worker `vanagstudy-leads` (https://vanagstudy-leads.vanagstudy.workers.dev, code in `worker/`) → @VanagStudyBot → owner's Telegram. Live since 2026-10-07. Allowed origins: vanagstudy.ru, www.vanagstudy.ru, petrvanag.github.io. Fallback `TELEGRAM_CONTACT` = PetrVanag (owner).
- Whether the domain is attached now or after review.

## Product Principles
1. Trust before price: show real people and real results first; a parent must understand who teaches their child within one screen.
2. Preserve the existing copy; improve its presentation, not its claims.
3. One primary action: apply for a diagnostic session. Telegram is secondary.
4. Honest and calm, never hype or exam-panic marketing.
5. Works on a phone first; fast, no heavy dependencies.

## Accessibility & Inclusion
Readable contrast and sizes for parents on phones, full keyboard navigation, respect for reduced motion. Content is Russian only.
