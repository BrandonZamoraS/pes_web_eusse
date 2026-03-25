import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const pageSource = await readFile(
  new URL("../app/(unidades-negocio)/gimnasio-balance-fit/page.tsx", import.meta.url),
  "utf8",
);

assert.match(pageSource, /caption: "Sala principal con maquinas de fuerza y espacio amplio para entrenar"/);
assert.match(pageSource, /caption: "Recepcion del gimnasio con exhibicion de suplementos y productos"/);
assert.match(pageSource, /caption: "Espacio de cycling indoor con bicicletas y vista exterior"/);

assert.match(pageSource, /alt: "Area de maquinas y entrenamiento en Balance Fit"/);
assert.match(pageSource, /alt: "Recepcion y exhibicion de suplementos en Balance Fit"/);
assert.match(pageSource, /alt: "Sala de spinning con bicicletas frente a ventanales"/);

assert.doesNotMatch(pageSource, /caption: "Entrenamientos funcionales con equipo de última generación"/);
assert.doesNotMatch(pageSource, /caption: "Áreas diferenciadas para fuerza, cardio y movilidad"/);
assert.doesNotMatch(pageSource, /caption: "Coaches certificados acompañándote en cada sesión"/);
assert.doesNotMatch(pageSource, /alt: "Coach guiando una sesión personalizada"/);
