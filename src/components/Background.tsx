import type { Engine } from "@tsparticles/engine";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import { particlesLinks } from "@styles/particles-links";
// import { particlesTris } from "@styles/particles-triangles";


export default function Background() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <div>
      <div className="absolute inset-0 z-[-5]">
        <div className="absolute inset-0 z-[-4] bg-surface" />
        <Particles
          id="layer-1"
          options={particlesLinks}
          className="absolute inset-0 z-[-3]"
        />
        {/*<Particles
          id="layer-2"
          options={particlesLinks}
          className="absolute inset-0 z-[-2]"
        />*/}
        {/*<Particles
          id="layer-3"
          options={particlesTris}
          className="absolute inset-0 z-[-1]"
        />*/}
      </div>
      <div className="absolute inset-0 z-0 backdrop-blur-sm pointer-events-none" />
    </div>
  );
}
