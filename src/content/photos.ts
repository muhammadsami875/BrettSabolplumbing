// Real photos from Brett Sabol Plumbing (client folder and the client's own
// website). Every photo is used at or below its native resolution.
import type { StaticImageData } from "next/image";

import truckVan from "@/assets/photos/truck-van-side.jpg";
import truckBox from "@/assets/photos/truck-box-angled.jpg";
import brettSons from "@/assets/photos/brett-sabol-with-sons.jpg";
import brettSon from "@/assets/photos/brett-sabol-and-son.jpg";
import kenworth from "@/assets/photos/kenworth-door-logo.jpg";
import family from "@/assets/photos/sabol-family.jpg";
import copperValves from "@/assets/photos/copper-valve-repair.jpg";
import restroom from "@/assets/photos/commercial-restroom.jpg";
import radiant from "@/assets/photos/radiant-heat-manifold.jpg";
import heaterRoom from "@/assets/photos/commercial-water-heater-room.jpg";
import sewerSnow from "@/assets/photos/sewer-excavation-winter.jpg";
import crewCleanouts from "@/assets/photos/crew-sewer-cleanouts.jpg";
import homeWaterHeater from "@/assets/photos/residential-water-heater.jpg";
import sewerDig from "@/assets/photos/sewer-pipe-repair-dig.jpg";
import drivewayRestore from "@/assets/photos/driveway-restoration.jpg";
import sidewalkRestore from "@/assets/photos/sidewalk-restoration.jpg";
import toilet from "@/assets/photos/toilet-installation.jpg";
import yardDig from "@/assets/photos/yard-excavation.jpg";
import thumbShoring from "@/assets/photos/thumb-trench-shoring.jpg";
import thumbSewerWater from "@/assets/photos/thumb-sewer-and-water-line.jpg";
import thumbBackhoe from "@/assets/photos/thumb-backhoe-yard-dig.jpg";
import thumbStump from "@/assets/photos/thumb-stump-removal.jpg";
import thumbTrench from "@/assets/photos/thumb-front-yard-trench.jpg";
import thumbPvcTruck from "@/assets/photos/thumb-pvc-line-and-truck.jpg";

export type Photo = { src: StaticImageData; alt: string; caption: string };

export const photos = {
  truckVan: {
    src: truckVan,
    alt: "Brett Sabol service van lettered Plumbing, Heating and Jet Drain Cleaning, with Master Plumber license 43391 and the phone number 215.666.3086",
    caption: "One of the Brett Sabol service vans.",
  },
  truckBox: {
    src: truckBox,
    alt: "Brett Sabol box truck with the company logo and phone number parked on a gravel job site beside a house",
    caption: "Box truck on a job site.",
  },
  brettSons: {
    src: brettSons,
    alt: "Brett Sabol on a porch holding his baby son, with his older son standing beside him",
    caption: "Brett with his two boys.",
  },
  brettSon: {
    src: brettSon,
    alt: "Brett Sabol taking a selfie with his son, who is pulling a funny face",
    caption: "Brett and his son.",
  },
  kenworth: {
    src: kenworth,
    alt: "Brett's son smiling from the window of a blue Brett Sabol truck with the company logo on the door",
    caption: "Riding along in one of the company trucks.",
  },
  family: {
    src: family,
    alt: "Brett's wife and their young son outdoors on a spring day",
    caption: "The family behind the business.",
  },
  copperValves: {
    src: copperValves,
    alt: "Copper supply piping with new shutoff valves inside an opened wall access panel",
    caption: "Copper supply lines and shutoff valves behind an access panel.",
  },
  restroom: {
    src: restroom,
    alt: "Wall-mounted urinal in a commercial restroom with wood-paneled walls",
    caption: "Commercial restroom fixture.",
  },
  radiant: {
    src: radiant,
    alt: "Basement boiler room with red and blue radiant heat tubing run neatly to a manifold beside the boiler controls",
    caption: "Radiant heat tubing run to a manifold in a boiler room.",
  },
  heaterRoom: {
    src: heaterRoom,
    alt: "Two large storage water heaters piped in copper next to wall-mounted tankless water heaters in a commercial basement",
    caption: "High-capacity water heater installation in a commercial basement.",
  },
  sewerSnow: {
    src: sewerSnow,
    alt: "Sewer line excavation in a snowy front yard with a mini excavator, a track loader and new pipe beside the trench",
    caption: "Winter sewer line dig in a front yard.",
  },
  crewCleanouts: {
    src: crewCleanouts,
    alt: "Two crew members in red shirts setting tall PVC cleanout risers on a new sewer line in an open trench",
    caption: "Setting cleanout risers on a new sewer line.",
  },
  homeWaterHeater: {
    src: homeWaterHeater,
    alt: "Newly installed electric tank water heater in a home utility room",
    caption: "Residential water heater installation.",
  },
  sewerDig: {
    src: sewerDig,
    alt: "Crew member in a Brett Sabol hoodie beside a new green sewer pipe in a deep, braced excavation",
    caption: "New sewer pipe in a braced excavation.",
  },
  drivewayRestore: {
    src: drivewayRestore,
    alt: "Crew member running a plate compactor on a patched section of pavement in front of a house, with the company van parked behind",
    caption: "Compacting the patch after a dig, with the van on site.",
  },
  sidewalkRestore: {
    src: sidewalkRestore,
    alt: "Crew member running a plate compactor on the stone base of a sidewalk section before new concrete",
    caption: "Rebuilding the sidewalk base after the work underneath is done.",
  },
  toilet: {
    src: toilet,
    alt: "Plumber in a Brett Sabol hoodie wiping down a newly installed toilet in a finished bathroom",
    caption: "Toilet installation in a finished bathroom.",
  },
  yardDig: {
    src: yardDig,
    alt: "Crew member kneeling beside a deep excavation in a lawn with a ladder in the hole and a mini excavator behind",
    caption: "Digging down to a line in a backyard.",
  },
  thumbShoring: {
    src: thumbShoring,
    alt: "Hydraulic trench shoring holding back the walls of a sewer trench while a crew member works inside",
    caption: "Trench shoring on a sewer job.",
  },
  thumbSewerWater: {
    src: thumbSewerWater,
    alt: "New black sewer pipe laid in a trench next to a copper water line",
    caption: "Sewer pipe beside a copper water line.",
  },
  thumbBackhoe: {
    src: thumbBackhoe,
    alt: "Backhoe bucket digging an access hole beside a house",
    caption: "Opening an access hole beside a house.",
  },
  thumbStump: {
    src: thumbStump,
    alt: "Large tree stump lifted out of the ground by an excavator during a dig",
    caption: "A stump pulled out during an excavation.",
  },
  thumbTrench: {
    src: thumbTrench,
    alt: "Long trench dug across a front lawn",
    caption: "A long trench across a front lawn.",
  },
  thumbPvcTruck: {
    src: thumbPvcTruck,
    alt: "PVC pipe and an open dig in a front yard with the Brett Sabol van parked behind",
    caption: "PVC line work with the van on site.",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
