import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [pageSource, cardSource] = await Promise.all([
  readFile(new URL("../app/(unidades-negocio)/gimnasio-balance-fit/page.tsx", import.meta.url), "utf8"),
  readFile(new URL("../ui/components/Companies/gym_class_card.tsx", import.meta.url), "utf8"),
]);

assert.doesNotMatch(pageSource, /cupos limitados/i);
assert.doesNotMatch(cardSource, /cupos limitados/i);
