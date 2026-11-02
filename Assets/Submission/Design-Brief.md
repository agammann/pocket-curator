# Pocket Curator — retrospective design brief

**Status:** Draft for review

**Prepared:** November 1, 2026, after the first build

This document records the idea, the implemented design, and the next checks using the Learn AR with SPECS planning guidance. It was written after the first build; it is not a contemporaneous pre-build brief and does not represent a completed learner interview or approval.

## Experience

A visitor finds a playful miniature museum on a tabletop, explores a small group of exhibits, and selects one to see it animate and learn a short fact. The original request specified an inviting miniature museum with selectable exhibits, animation, and explanation. The garden theme and the defaults below were selected during the build at the user's request for routine decisions to be made autonomously.

The current collection contains a flower, a bee, and a mushroom. It is a virtual product in the visitor's space: no object recognition or camera analysis is needed. Its spatial value is the ability to look around a small collection at a natural size while keeping the selection controls near it. Whether the experience feels better on glasses than on a laptop remains a design question to evaluate.

## Placement and appearance

- A virtual shelf and three plinths stand in for a real tabletop; they do not detect or attach to physical furniture.
- The authored exhibit root is approximately 110 cm in front of the initial camera and 24 cm below it. The procedural shelf is approximately 58 cm wide and 16 cm deep. These are implementation defaults, not measurements supplied by the user.
- A 42 × 19 cm guide panel appears near the exhibits, with light text and three approximately 12 × 6 cm selection buttons. Its position is authored in the scene.
- The exhibits are colorful simplified sculptures. A quiet generated music bed is included; audible quality needs a listening check.

## Interaction and timing

The visitor selects Flower, Bee, or Mushroom with a standard UI button; a mouse click simulates the interaction in the laptop preview. Initially, the guide invites a choice. After selection, it displays the chosen exhibit's title and fact. Only the chosen exhibit animates: the flower sways, the bee hovers and flaps, or the mushroom pulses. Selecting another switches the explanation and motion.

The shelf, guide, and buttons stay visible during the experience. There is no voice control, out-of-view attention cue, persistence, or real-world recognition.

## Preview acceptance checks

1. The shelf, three distinct exhibits, and guide appear together in the interactive preview.
2. Select Flower: the flower sways and its nectar fact appears.
3. Select Bee: the bee hovers and flaps and its pollen fact appears.
4. Select Mushroom: the mushroom pulses and its fungi fact appears.
5. Select a different exhibit and verify that the prior motion stops and the guide updates. Check that the text is legible from the initial viewpoint.

The first build was manually checked in the laptop preview, with clean compile and runtime logs reported in the build session. LEAF scenarios were not created or run. Recheck these criteria after packaging the project and before recording the final demo.

## Boundaries and remaining questions

- This is a self-contained preview demonstration, not a detector of real flowers, insects, mushrooms, or tabletops.
- Comfort over time, real hand tracking, reach, actual field of view, audio quality, and behavior on physical SPECS are **unproven**.
- The apparent scale and legibility should be checked while moving around the simulated room, not only from a single screenshot.
- Automated LEAF coverage and clean-copy reopening remain to be checked.
- The developer tools used were Lens Studio, the Lens Studio MCP, CLAD guidance and packages, and the Devpost Learn skill guidance. The design was documented after construction. Whether this sequence satisfies the hackathon's planning requirement should be confirmed with the organizers; do not describe this document as an approved pre-build brief.

## Before submission

Review the experience in Interactive Preview: move around the scene, test every button, listen to the music, and check placement and readability. Distinguish what the preview demonstrates from what only physical hardware can establish. Record the working flow and verify the project reopens from the clean public-repository copy.
