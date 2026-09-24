import { Group } from "three";
import { addFacet, octahedron } from "../../style/facets";
import { C } from "../../style/palette";
import { flatMat } from "../../style/facets";
import type { CreatureRecipe } from "../../catalog/recipes";
import { attachBody, bodyMaterial } from "./bodies";
import { attachHead } from "./heads";
import { attachTail } from "./tails";
import { attachLimbs, attachMane, attachWings } from "./limbs";

const backEyeMat = flatMat(C.eye, { emissive: "#331111", emissiveIntensity: 0.45 });

export function assemble(recipe: CreatureRecipe): Group {
  const g = new Group();
  const bodyMat = bodyMaterial(recipe.body, recipe.bodyPelt === "tiger");
  const sockets = attachBody(g, recipe.body, bodyMat, recipe.serpentine);
  attachHead(g, recipe.head, sockets.head, {
    tint: recipe.headTint ?? "default",
    lookBack: recipe.lookBack,
    extraEars: recipe.extraEars,
    humanFace: recipe.humanFace,
  });
  attachTail(g, recipe.tail, sockets.rump, bodyMat);
  attachLimbs(g, recipe.limbs, sockets, bodyMat);
  attachWings(g, sockets, recipe.wings ?? "none");
  if (recipe.mane) attachMane(g, sockets, bodyMat);
  if (recipe.backEye) {
    addFacet(g, octahedron(0.045), backEyeMat, 0, sockets.head.y + 0.12, sockets.hips.z);
  }
  g.scale.setScalar(recipe.scale ?? 1);
  return g;
}
