import {PocketCuratorPanelUI} from "./PocketCuratorPanelUI"
import {PocketGardenModels} from "./PocketGardenModels"

const gardenMusic = requireAsset("../GeneratedSFX/GardenMuseum.wav") as AudioTrackAsset

@component
export class PocketCuratorMain extends BaseScriptComponent {
  @input panel!: PocketCuratorPanelUI
  @input garden!: PocketGardenModels

  onAwake(): void {
    const musicObject = global.scene.createSceneObject("Garden music")
    const music = musicObject.createComponent("Component.AudioComponent") as AudioComponent
    music.audioTrack = gardenMusic
    music.volume = 0.2
    music.playbackMode = Audio.PlaybackMode.LowPower
    music.play(-1)
    this.createEvent("OnStartEvent").bind(() => {
      this.panel.onSelect.add((index: number) => this.select(index))
      this.panel.showExhibit(-1)
      this.garden.setSelection(-1)
      print("Pocket Curator ready: choose Flower, Bee, or Mushroom")
    })
  }

  private select(index: number): void {
    this.panel.showExhibit(index)
    this.garden.setSelection(index)
    print("Pocket Curator selected exhibit " + index)
  }
}
