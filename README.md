# @maurodruwel/howest-resto 🍽️

[![CI](https://github.com/MauroDruwel/howest-resto-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/MauroDruwel/howest-resto-ts/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Quality Gate](https://img.shields.io/badge/Mauro%20Quality%20Gate-Passed-brightgreen)](https://github.com/MauroDruwel/quality-gate)

Official typed TypeScript / Node.js client library for **Howest University of Applied Sciences** student restaurant menus, generated from the [canonical OpenAPI specification](https://github.com/MauroDruwel/howest-resto).

---

## 📦 Installation

```bash
npm install @maurodruwel/howest-resto
# or
pnpm add @maurodruwel/howest-resto
```

---

## 🚀 Quickstart

```typescript
import { HowestRestoClient } from '@maurodruwel/howest-resto';

const client = new HowestRestoClient();

// List all Howest campuses
const campuses = client.getCampuses();
console.log(campuses);

// Get today's menu for Kortrijk ('t Obeetje)
const today = await client.getTodayMenu({ campus: 'GKG' });
if (today) {
  console.log(`Today's lunch (${today.date}):`);
  console.log('Dutch:', today.dutchDishes);
  console.log('English:', today.englishDishes);
}

// Fetch next week's menu for Brugge (YUM)
const nextWeek = await client.getMenu({ campus: 'RSS', week: 'next' });
console.log(`Next week at ${nextWeek.campusName}:`);
for (const day of nextWeek.days) {
  console.log(`[${day.day} ${day.date}]`, day.dutchDishes);
}
```

---

## 🏫 Supported Campuses

| Code | Campus / Restaurant | City | Address |
| :---: | :--- | :--- | :--- |
| **`GKG`** | **'t Obeetje** *(Default)* | Kortrijk | Graaf Karel de Goedelaan 5 |
| **`PENTA`** | **Plaza** | Kortrijk | Sint-Martens-Latemlaan 1B |
| **`RSS`** | **YUM** | Brugge | Rijselstraat 5 |
| **`RSS1`** | **DAD** | Brugge | Spoorwegstraat 4 |
| **`SIC`** | **BSI** | Brugge | Nijverheidsstraat 112 |
| **`TS`** | **The Square** | Kortrijk | Luipaardstraat 12A |

---

## 📜 License

MIT © [Mauro Druwel](https://maurodruwel.be)
