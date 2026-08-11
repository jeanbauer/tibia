# Tibia Idle Game — AI Agent Context

A browser-based idle/clicker game built as a personal tribute to the classic MMORPG [Tibia](https://www.tibia.com/). Fan project — no IP ownership claimed.

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (Pages Router) | 16.x |
| UI | React | 18.x |
| Components | Chakra UI | 3.x |
| CSS-in-JS | Emotion | 11.x |
| State | Zustand | 5.x |
| Language | TypeScript | 6.x |
| Linting | ESLint (flat config) | 10.x |
| Formatting | Prettier | 3.x |
| Unit tests | Vitest | 4.x |
| E2E tests | Playwright | 1.x |

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
yarn test         # Vitest unit tests
yarn test:e2e     # Playwright e2e tests
```

## Project Structure

```
tibia/
├── pages/
│   ├── _app.tsx          # ChakraProvider + Toaster
│   └── index.tsx         # Layout shell + idle gold timer
├── store/
│   └── useGameStore.ts   # Zustand store — all game state + actions
├── lib/
│   └── game/             # Pure game rules (XP formula, rewards, etc.)
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
│   ├── Map/              # Map display (not currently wired into the main layout)
│   ├── Media/            # GitHub link overlay
│   ├── Monster/
│   │   ├── monster.tsx   # Monster with HP bar, click-to-attack
│   │   └── battle.tsx    # Battle panel UI
│   ├── Skills/           # XP, level, XP progress bar (display only)
│   ├── Statusbar/        # Player HP/Mana bars
│   ├── Store/            # "Murilo, the Seller" NPC shop
│   └── ui/
│       └── toaster.tsx   # Chakra v3 toaster singleton
├── hooks/
│   └── setInterval.ts    # Declarative useInterval hook (Dan Abramov pattern)
├── types/
│   └── index.ts          # ItemType, ItemsType, Status
├── e2e/                  # Playwright end-to-end tests
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

All game state lives in `store/useGameStore.ts` (Zustand). Components subscribe to slices they need — no prop drilling.

### State

| State | Type | Description |
|---|---|---|
| `status` | `Status` | Player HP/Mana (current + max) |
| `gold` | `number` | Current gold balance |
| `skills` | `{ xp, level }` | Player XP and level |
| `monsterHp` | `number` | Current monster HP |
| `characterDamage` | `number` | Attack power (increases on item buy / level-up) |
| `equipments` | equipment slots | Equipped items keyed by slot name |

### Key Flows

- **Click monster** → `attack()` reduces monster HP by `characterDamage`; at 0 triggers `killMonster()`
- **Kill monster** → awards XP + gold, then applies any earned level-ups in the store, spawns new monster with `hp = 100 + level * 10`
- **Level up** → applied in store when XP crosses the next threshold; increases max HP/Mana and damage
- **Buy item** → deducts gold, increases `characterDamage` by `item.attack`, fills equipment slot
- **Idle gold** → `useInterval` in `pages/index.tsx` fires every 5s to call `addIdleGold()` (+10 gp)

### XP Formula

Uses the official Tibia XP-to-level formula (`lib/game/xp.ts`):

```
xpForLevel(L) = (50/3)·L³ − 100·L² + (850/3)·L − 200
```

### Monster Progression

Levels 1–16 map to specific monsters (rat → minotaur). Level 17+ always spawns Dragon.

### Coin Denominations

Gold is broken into visual stacks (see `calculateCoins`):
- **Gold coins**: remainder under 100 gp
- **Platinum coins**: 100 gp each (`floor((gp % 1000) / 100)`)
- **Crystal coins**: 1000 gp each (`floor(gp / 1000)`)

## TypeScript Notes

- `strict: true` is enabled — all new code must be fully typed
- Path aliases configured: `@/*`, `@/components/*`, `@/hooks/*`, `@/types/*`, `@/styles/*`
- `moduleResolution: "bundler"` (Next.js default)

## Architecture Decisions

- **Zustand store** — All game state and actions live in `store/useGameStore.ts`. Prefer selectors that subscribe to only needed slices.
- **Pages Router** — Using Next.js Pages Router (not App Router). Migrating to App Router would require `"use client"` boundaries.
- **Chakra UI v3** — Uses `ChakraProvider value={defaultSystem}`, `colorPalette` (not `colorScheme`), and `createToaster` (not `useToast`).
- **CSS Modules** — Some components use `.module.css` for local scoping alongside Chakra's style props.
- **Pure game rules** — XP math and similar pure logic belong in `lib/game/`, not in React components.

## Known Issues / TODOs

- XP and gold rewards from monsters are fixed constants — should scale with monster level
- No persistence — all state resets on page refresh (consider localStorage or a simple backend)
- Equipment slots allow buying the same category multiple times (overwrites the slot; shop prevents rebuying the same named item)
- Mana is restored on kills but not spent by attacks yet
- Minimap is visible but travel is not implemented

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
