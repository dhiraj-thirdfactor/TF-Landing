// then import the component
import UnicornScene from "unicornstudio-react";

// documentation: https://www.npmjs.com/package/unicornstudio-react
export default function HeroBackground() {
  return (
    <UnicornScene
      projectId="g4CIAdf0n516sfK7IfXv"
     className=" relative z-[-1]"
      scale={1}
      dpi={1.5}
      sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.1/dist/unicornStudio.umd.js"
    />
  );
}