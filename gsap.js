console.log("GSAP")
import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";


gsap.registerPlugin(Draggable);
Draggable.create("#text", {
  type: "rotation",
  inertia: true,
});