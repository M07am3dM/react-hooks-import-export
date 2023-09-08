import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunction from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(RMFunction.trees);
  RMFunction.wildlife();

  return (
    <>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
    </>
  );
}
