# Pocket Curator

Pocket Curator is a miniature garden museum for SPECS, designed to be explored in Lens Studio's laptop preview. A flower, bee, and mushroom sit on a virtual display shelf. Choosing one reveals a short fact and brings that exhibit to life: the flower sways, the bee hovers and flaps its wings, and the mushroom gently pulses. A quiet, locally generated music bed accompanies the scene.

## Open and try it

1. Open the repository's `Pocket-Curator.esproj` file in Lens Studio **5.23.2**.
2. Open the Preview panel and use an interactive SPECS preview. The museum appears in front of the camera. Move around the simulated scene if needed.
3. Use the preview's mouse interaction to select **Flower**, **Bee**, or **Mushroom** on the guide. Each button updates the explanation and starts the matching motion. You may need to hover briefly before clicking.

The museum uses a virtual shelf; it does not recognize or anchor itself to a real table. A SPECS device is not required for the laptop preview.

## Project contents

- `Assets/Scene.scene` contains the authored scene and references to the experience scripts.
- `Assets/Scripts/PocketCuratorMain.ts` connects the guide and exhibits and starts the music.
- `Assets/Scripts/PocketCuratorPanelUI.ts` builds the guide with Spectacles UIKit controls.
- `Assets/Scripts/PocketGardenModels.ts` generates the garden geometry and animates the selected exhibit.
- `Assets/GeneratedSFX/GardenMuseum.wav` is the locally synthesized music bed. Its generator source is included beside it; regenerating it requires the CLAD build-music tools and produces a new randomized take.
- `Assets/SimpleVertexBaseColor.lspkg` supplies the vertex-color material used by the procedural geometry.
- `Packages/` contains the Lens Studio packages used by the scene, including Spectacles Interaction Kit and Spectacles UIKit and their bundled dependencies.

The project started from Lens Studio's SPECS Base Template. The exhibit geometry and audio were generated locally for this project with CLAD workflows; the included template, packages, and material retain their respective upstream terms.

## Development and testing

The concept was a playful tabletop museum for exploring a few exhibits. Devpost Learn planning guidance was consulted during the build, and the Lens was assembled using CLAD guidance and Lens Studio MCP. The original build did **not** include the skill's learner interview or a generated design brief; any retrospective planning record should be understood in that context.

In Lens Studio 5.23.2, the three guide buttons were exercised in the laptop preview, and the final TypeScript compile and runtime log were clean. The automated preview-inspection helper could not be used because its example scripts referenced package names absent from this project, so interactions were checked using the preview controls. LEAF tests, physical-device hand tracking, comfort, and audio quality have not been verified.
