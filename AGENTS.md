# Tibia Idle Game — AI Agent Context

A browser-based idle/clicker game built as a personal tribute to the classic MMORPG [Tibia](https://www.tibia.com/). Fan project — no IP ownership claimed.

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (Pages Router) | 15.x |
| UI | React | 18.x |
| Components | Chakra UI | 2.x |
| Animations | Framer Motion | 11.x |
| CSS-in-JS | Emotion | 11.x |
| Language | TypeScript | 6.x |
| Linting | ESLint (flat config) | 10.x |
| Formatting | Prettier | 3.x |

## Git Commits

All commits must start with a [gitmoji](https://gitmoji.dev/) emoji.

```
<emoji> <short imperative description>
```

Common emojis: ✨ feature · 🐛 fix · ♻️ refactor · ⬆️ dep bump · 🎨 formatting · 📝 docs · 🔧 config · 🏷️ types · 💄 UI

```bash
# ✅ Good
git commit -m "✨ add idle gold accumulation mechanic"
git commit -m "⬆️ bump Next.js to v15 and React to v18"

# ❌ Bad
git commit -m "fix stuff"
```

## Commands

```bash
yarn dev          # Start dev server (localhost:3000)
yarn build        # Production build
yarn type-check   # tsc --noEmit
yarn lint         # next lint
yarn format       # prettier --write .
```

## Project Structure

```
tibia/
├── pages/
│   ├── _app.tsx          # ChakraProvider wrapper
│   └── index.tsx         # All game state lives here (single-page app)
├── components/
│   ├── Backpack/         # Gold display as stacked coin denominations
│   │   └── coins/        # calculateCoins(): gold → gold/platinum/crystal breakdown
│   ├── Character/        # Player sprite
│   ├── Equipment/        # Equipment slots (helmet, armor, weapon, shield, etc.)
│   ├── Images/           # All image path constants
│   │   ├── Images.ts     # defaultItems (empty slots), purchasable items list
│   │   ├── Monsters.ts   # Level → monster mapping (rat → dragon)
│   │   ├── Outfits.ts    # Player outfit paths
│   │   ├── Tiles.ts      # Map tile paths
│   │   ├── Misc.ts       # Misc image paths
│   │   └── index.tsx     # Re-exports all image references
│   ├── Item/             # Generic panel/container used by Skills, Backpack, Store, etc.
│   ├── Map/              # Map display
│   ├── Media/            # GitHub link overlay
│   ├── Monster/
│   │   ├── monster.tsx   # Monster with HP bar, click-to-attack
│   │   └── battle.tsx    # Battle panel UI
│   ├── Skills/           # XP, level, XP progress bar
│   ├── Statusbar/        # Player HP/Mana bars
│   └── Store/            # "Murilo, the Seller" NPC shop
├── hooks/
│   └── setInterval.ts    # Declarative useInterval hook (Dan Abramov pattern)
├── types/
│   └── index.ts          # ItemType, ItemsType, Status
├── styles/
│   └── globals.css       # Global CSS (text-shadow utility class)
└── public/images/        # All game assets (GIFs/PNGs)
    ├── monsters/         # 17 monster GIFs
    ├── items/            # Equipment GIFs
    ├── coins/            # Gold/platinum/crystal coin GIFs
    ├── outfits/          # Player outfit PNGs
    └── tiles/            # Tile GIFs
```

## Core Game Logic

All game state lives in `pages/index.tsx` as flat `useState` — no global store.

### State

| State | Type | Description |
|---|---|---|
| `status` | `Status` | Player HP/Mana (current + max) |
| `gold` | `number` | Current gold balance |
| `idleGold` | `number` | Gold earned passively (10 every 5s) |
| `skills` | `{ xp, level }` | Player XP and level |
| `hp` | `number` | Current monster HP (0–100+) |
| `characterDamage` | `number` | Attack power (increases on item buy / level-up) |
| `equipments` | `typeof defaultItems` | Equipped items keyed by slot name |

### Key Flows

- **Click monster** → `attack()` reduces monster HP by `characterDamage`; at 0 triggers `onKillMonster()`
- **Kill monster** → awards fixed XP (25) + gold (15), spawns new monster with `hp = 100 + level * 10`
- **Level up** → auto-triggered in `Skills` component when XP threshold is reached; increases max HP/Mana and damage
- **Buy item** → deducts gold, increases `characterDamage` by `item.attack`, fills equipment slot
- **Idle gold** → `useInterval` fires every 5s to passively add `idleGold`

### XP Formula

Uses the official Tibia XP-to-level formula:

```
xpForLevel(L) = (50/3)·L³ − 100·L² + (850/3)·L − 200
```

### Monster Progression

Levels 1–16 map to specific monsters (rat → minotaur). Level 17+ always spawns Dragon.

### Coin Denominations

Gold is broken into visual stacks:
- **Gold coins**: 1–99 gp (denominations: 1, 2, 3, 4, 5, 10, 25)
- **Platinum coins**: 100–999 gp (each = 100 gp)
- **Crystal coins**: 1000+ gp (each = 10,000 gp)

## TypeScript Notes

- `strict: true` is enabled — all new code must be fully typed
- Path aliases configured: `@/*`, `@/components/*`, `@/hooks/*`, `@/types/*`, `@/styles/*`
- `moduleResolution: "bundler"` (Next.js 15 default)

## Architecture Decisions

- **No global state** — All state is passed via props from `pages/index.tsx`. If the app grows, consider Zustand or React Context.
- **Pages Router** — Using Next.js Pages Router (not App Router). Migrating to App Router would require wrapping all Chakra components in a `"use client"` boundary.
- **Chakra UI v2** — Intentionally staying on v2 (not v3). Chakra v3 is a full rewrite with breaking API changes; migration would require updating all component imports and prop names.
- **CSS Modules** — Some components use `.module.css` for local scoping alongside Chakra's style props.

## Known Issues / TODOs

- XP and gold rewards from monsters are fixed constants — should scale with monster level
- No persistence — all state resets on page refresh (consider localStorage or a simple backend)
- `backpack.test.js` is a plain JS test file with no test runner configured — needs Jest/Vitest setup
- Equipment slots allow buying the same category multiple times (no slot conflict check)
