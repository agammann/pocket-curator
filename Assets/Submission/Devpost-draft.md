# Pocket Curator — Devpost draft

This is draft copy for review. Replace the placeholders and personal responses before submitting. Nothing in this document has been submitted.

## Project name

Pocket Curator

## Elevator pitch

A tiny garden museum for SPECS: choose an exhibit to see it move and reveal a bite-sized nature fact.

## About the project

### Inspiration

Pocket Curator starts with a simple idea: make exploring a museum feel playful and close at hand. Instead of a full-size gallery, it presents a small collection of garden life on a virtual tabletop in front of the visitor. The flower, bee, and mushroom turn familiar subjects into an invitation to look closer.

### What it does

Choose one of the three large exhibit buttons in the Lens Studio preview. The guide displays a short fact, and the selected miniature comes to life: the flower sways, the bee hovers and flaps its wings, and the mushroom pulses. Selecting another exhibit changes both the explanation and the animation. A generated music bed accompanies the scene.

The display uses a virtual shelf positioned in the preview; it does not detect or attach itself to a real tabletop. The experience was designed to be demonstrated in the laptop preview, without a SPECS device.

### How it was built

Pocket Curator is a SPECS Lens built in Lens Studio 5.23.2 with TypeScript. The Lens Studio MCP and CLAD workflows were used to assemble the scene and check it in preview. Spectacles Interaction Kit and Spectacles UIKit provide the interaction and guide controls. The garden sculptures are procedurally generated with MeshBuilder and animated by script; a locally generated audio track provides the music.

The Devpost Learn skill pack's AR design and preview guidance informed the choice of one spatial moment, a small number of large targets, and short explanations. **Planning-process note for review:** the original build did not include the skill's learner interview or a generated design brief. Update this paragraph only to describe any subsequent planning work actually completed; do not imply those steps happened earlier.

### Challenges and testing

An early preview exposed a UIKit layout initialization error. The layout configuration was corrected and the three exhibit buttons were then exercised in the laptop preview. The final TypeScript compile and runtime log were clean at that check. The automated runtime-inspection helper was incompatible with package names in this project, so interaction checks were performed through the preview controls instead.

Real-device comfort, hand tracking, and audible music quality have not yet been verified. [Update this sentence if additional testing is completed.]

### What we learned / what's next

[Add your own reflections and any next steps you want to share.]

## Built with

- Lens Studio
- SPECS
- TypeScript
- Spectacles Interaction Kit
- Spectacles UIKit
- CLAD
- Lens Studio MCP
- Devpost Learn skill pack

## Required technology explanation — draft

Pocket Curator is a SPECS Lens built in Lens Studio 5.23.2. CLAD and the Lens Studio MCP were used during the build and preview workflow. TypeScript and Lens Studio's MeshBuilder create and animate the garden exhibits; Spectacles Interaction Kit and Spectacles UIKit provide the selection controls. The Devpost Learn skill pack's spatial design and laptop-preview guidance informed the design.

**Before submitting:** Check the organizer's planning requirement against the actual process, including any planning completed after the original build. The initial build did not produce the skill pack's interview or design brief; do not claim it did. The submission form asks whether CLAD built what a design brief described, so choose an answer only when it can be answered truthfully or seek clarification from the organizer.

## Links to add

- Public GitHub, GitLab, or Bitbucket project repository: [ADD PUBLIC REPOSITORY URL]
- Public YouTube demonstration: [ADD PUBLIC YOUTUBE URL]
- Optional social post: [ADD ONLY IF APPLICABLE]

## Suggested demonstration video — approximately 1 minute 45 seconds

Record the real Lens Studio preview and show the actual interactions. Keep the final video under three minutes.

| Time | Show | Suggested narration |
| --- | --- | --- |
| 0:00–0:15 | Pocket Curator title and the whole garden shelf | “Pocket Curator is a miniature garden museum for SPECS, designed to be explored in Lens Studio's laptop preview.” |
| 0:15–0:35 | Select Flower; hold on its fact and sway | “Choose the flower to see it sway and learn how flowers attract pollinators.” |
| 0:35–0:55 | Select Bee; show hovering and wing motion | “The bee hovers and flaps as the guide explains how bees carry pollen.” |
| 0:55–1:15 | Select Mushroom; show its fact and pulse | “The mushroom pulses while its label introduces fungi's fruiting bodies.” |
| 1:15–1:35 | Move around the virtual display in preview, if the actual capture supports it | “The collection sits on a virtual shelf, with a small set of large controls and concise explanations.” |
| 1:35–1:45 | Show the full project and name | “The Lens was built with Lens Studio, CLAD, the Lens Studio MCP, and the Spectacles interaction and UI kits.” |

Check the recording for legible text and audible music. Do not claim real-tabletop detection or hardware testing in the video.

## Information for the entrant to supply

- Submitter type and country of residence; confirm all eligibility statements personally.
- Your previous Lens Studio experience, most time-consuming step, AI-cost experience, likelihood of using the tools again, and your own learning reflections.
- Your account of where you got stuck and what you would ask Snap to improve. The build log records the initial sign-in gate and incompatible automated inspection helper as possible factual examples, if they reflect your experience.
