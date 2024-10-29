import { Float, Grid } from "@react-three/drei";
import { OldComputer } from "../models/oldComputer/OldComputer";
import { RigidBody } from "@react-three/rapier";
import {
  EffectComposer,
  Outline,
  Selection,
} from "@react-three/postprocessing";
import Floor from "../models/Floor";
import { Table } from "../models/Table";
import { Chair } from "../models/Chair";
import { Plant } from "../models/Plant";
import { Board } from "../models/Board";

export default function Stage({ debug }) {
  return (
    <>
      {debug && <Grid position={[0, 0, 0]} args={[10, 10]} cellSize={1} />}

      {/* <RigidBody colliders="hull" canSleep gravityScale={0.9}> */}
      <Selection>
        <EffectComposer autoClear={false}>
          <Outline blur hiddenEdgeColor="white" edgeStrength={100} />
        </EffectComposer>
        <OldComputer position={[0, 0.29, 0]} />
      </Selection>
      {/* </RigidBody> */}

      <Plant />
      <Board />

      <RigidBody colliders="hull">
        <Chair />
      </RigidBody>

      <RigidBody colliders="hull">
        <Table />
      </RigidBody>

      <RigidBody colliders="cuboid">
        <Floor />
      </RigidBody>
    </>
  );
}
