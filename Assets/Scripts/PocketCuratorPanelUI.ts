import Event, {PublicApi} from "SpectaclesInteractionKit.lspkg/Utils/Event"
import {BackPlate} from "SpectaclesUIKit.lspkg/Scripts/BackPlate"
import {Button} from "SpectaclesUIKit.lspkg/Scripts/Components/Button/Button"
import {ElementContent} from "SpectaclesUIKit.lspkg/Scripts/Components/Content/ElementContent"
import {FlexLayout} from "SpectaclesUIKit.lspkg/Scripts/Components/Layout2D/Flex/FlexLayout"
import {FlexItem} from "SpectaclesUIKit.lspkg/Scripts/Components/Layout2D/Flex/FlexItem"
import {FlexAlign, FlexAlignSelf, FlexDirection, FlexJustify} from "SpectaclesUIKit.lspkg/Scripts/Components/Layout2D/Flex/FlexTypes"

// A single, static label beside the miniature garden. Sizes are in cm.
const WIDTH = 42
const HEIGHT = 19
const PAD = 1.1

@component
export class PocketCuratorPanelUI extends BaseScriptComponent {
  private readonly selectEvent = new Event<number>()
  public readonly onSelect: PublicApi<number> = this.selectEvent.publicApi()
  private titleText: Text | null = null
  private factText: Text | null = null
  private selectedIndex = -1

  onAwake(): void {
    this.sceneObject.createComponent("Component.Canvas")
    const plate = this.sceneObject.createComponent(BackPlate.getTypeName()) as BackPlate
    plate.size = new vec2(WIDTH, HEIGHT)

    const content = this.child(this.sceneObject, "Museum label")
    content.getTransform().setLocalPosition(new vec3(0, 0, 0.6))
    const column = content.createComponent(FlexLayout.getTypeName()) as FlexLayout
    column.autoDiscoverItemsOnStart = false
    column.width = WIDTH
    column.height = HEIGHT
    column.direction = FlexDirection.Column
    column.alignItems = FlexAlign.Stretch
    column.justifyContent = FlexJustify.Start
    column.rowGap = 0.5
    column.paddingTop = PAD
    column.paddingBottom = PAD
    column.paddingLeft = PAD
    column.paddingRight = PAD

    this.titleText = this.addTextRow(content, column, "POCKET CURATOR", 80, 3.2)
    this.factText = this.addTextRow(content, column, "Choose a garden guest to bring it to life.", 68, 4.6)
    this.factText.horizontalOverflow = HorizontalOverflow.Wrap
    this.addButtons(content, column)
    this.showExhibit(this.selectedIndex)
  }

  /** Called by the scene controller whenever the active exhibit changes. */
  public showExhibit(index: number): void {
    this.selectedIndex = index
    if (!this.titleText || !this.factText) return
    const titles = ["FLOWER", "BEE", "MUSHROOM"]
    const facts = [
      "Flowers make nectar that attracts pollinators.",
      "Bees carry pollen between flowers as they forage.",
      "Mushrooms are the fruiting bodies of some fungi."
    ]
    if (index < 0 || index >= titles.length) {
      this.titleText.text = "POCKET CURATOR"
      this.factText.text = "Choose a garden guest to bring it to life."
      return
    }
    this.titleText.text = titles[index]
    this.factText.text = facts[index]
  }

  private addTextRow(parent: SceneObject, layout: FlexLayout, value: string, size: number, height: number): Text {
    const row = this.child(parent, "Label")
    const text = row.createComponent("Component.Text") as Text
    text.text = value
    text.size = size
    ;(text as Text & {weight?: number}).weight = size > 40 ? 700 : 500
    text.depthTest = true
    text.horizontalAlignment = HorizontalAlignment.Center
    text.verticalAlignment = VerticalAlignment.Center
    text.horizontalOverflow = HorizontalOverflow.Overflow
    text.verticalOverflow = VerticalOverflow.Overflow
    text.layoutRect = Rect.create(-0.5, 0.5, -0.5, 0.5)
    const item = row.createComponent(FlexItem.getTypeName()) as FlexItem
    item.alignSelf = FlexAlignSelf.Stretch
    item.overrideHeight = height
    layout.addItems([item])
    return text
  }

  private addButtons(parent: SceneObject, column: FlexLayout): void {
    const row = this.child(parent, "Exhibit choices")
    const rowItem = row.createComponent(FlexItem.getTypeName()) as FlexItem
    rowItem.alignSelf = FlexAlignSelf.Stretch
    rowItem.overrideHeight = 6
    column.addItems([rowItem])

    const layout = row.createComponent(FlexLayout.getTypeName()) as FlexLayout
    layout.autoDiscoverItemsOnStart = false
    layout.width = WIDTH - 2 * PAD
    layout.height = 6
    layout.direction = FlexDirection.Row
    layout.alignItems = FlexAlign.Center
    layout.justifyContent = FlexJustify.Center
    layout.columnGap = 0.8

    const labels = ["Flower", "Bee", "Mushroom"]
    for (let i = 0; i < labels.length; i++) {
      const target = this.child(row, "Choose " + labels[i])
      const button = target.createComponent(Button.getTypeName()) as Button
      button.size = new vec3(12, 6, 1)
      const label = target.createComponent(ElementContent.getTypeName()) as ElementContent
      label.text = labels[i]
      label.textSize = 60
      const item = target.createComponent(FlexItem.getTypeName()) as FlexItem
      item.overrideWidth = 12
      item.overrideHeight = 6
      layout.addItems([item])
      const index = i
      button.onTriggerUp.add(() => this.selectEvent.invoke(index))
    }
  }

  private child(parent: SceneObject, name: string): SceneObject {
    const child = global.scene.createSceneObject(name)
    child.setParent(parent)
    return child
  }
}
