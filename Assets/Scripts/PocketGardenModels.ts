/**
 * A tiny, locally generated garden collection. The three sculptures share one
 * vertex-colour material and are composed from smooth, animated solids.
 * Coordinates are centimetres relative to the museum's tabletop centre.
 */
@component
export class PocketGardenModels extends BaseScriptComponent {
    @input
    material: Material

    private flower: SceneObject
    private bee: SceneObject
    private mushroom: SceneObject
    private leftWing: SceneObject
    private rightWing: SceneObject
    private selected: number = -1
    private elapsed: number = 0

    onAwake(): void {
        this.build()
        this.createEvent('UpdateEvent').bind(() => this.update())
    }

    /** Select flower (0), bee (1), mushroom (2), or -1 for no selection. */
    public setSelection(index: number): void {
        this.selected = index >= 0 && index <= 2 ? index : -1
        this.elapsed = 0
    }

    private child(name: string, parent: SceneObject, x: number, y: number, z: number): SceneObject {
        const obj = global.scene.createSceneObject(name)
        obj.setParent(parent)
        obj.getTransform().setLocalPosition(new vec3(x, y, z))
        return obj
    }

    private build(): void {
        // A floating display shelf and three separate raised specimen bases.
        const shelf = this.child('Museum shelf', this.sceneObject, 0, -1.5, 0)
        this.solid(shelf, [{x: 0, y: 0, z: 0, rx: 29, ry: 1.2, rz: 8, color: [0.32, 0.73, 0.67, 1]}])
        for (let i = 0; i < 3; i++) {
            const plinth = this.child('Specimen plinth ' + (i + 1), this.sceneObject, (i - 1) * 19, 0, 0)
            this.solid(plinth, [{x: 0, y: 0, z: 0, rx: 7, ry: 1.3, rz: 6.5, color: [0.75, 0.91, 0.79, 1]}])
        }

        this.flower = this.child('Flower exhibit', this.sceneObject, -19, 1.2, 0)
        const petals: Shape[] = [
            {x: 0, y: 4.1, z: 0, rx: 0.9, ry: 4.2, rz: 0.9, color: [0.22, 0.66, 0.36, 1]},
            {x: -2.2, y: 3.1, z: 0, rx: 2.7, ry: 1.1, rz: 0.6, angle: 0.5, color: [0.3, 0.78, 0.43, 1]},
            {x: 2.1, y: 4.7, z: 0, rx: 2.7, ry: 1.1, rz: 0.6, angle: -0.5, color: [0.3, 0.78, 0.43, 1]}
        ]
        for (let i = 0; i < 8; i++) {
            const a = i * Math.PI / 4
            petals.push({x: Math.cos(a) * 2.4, y: 10 + Math.sin(a) * 2.4, z: 0,
                rx: 2.5, ry: 1.2, rz: 0.7, angle: a, color: [1, 0.55, 0.45, 1]})
        }
        petals.push({x: 0, y: 10, z: 0.7, rx: 1.65, ry: 1.65, rz: 1, color: [1, 0.86, 0.35, 1]})
        this.solid(this.flower, petals)

        this.bee = this.child('Bee exhibit', this.sceneObject, 0, 6.3, 0)
        this.solid(this.bee, [
            {x: 0, y: 0, z: 0, rx: 4.2, ry: 2.8, rz: 2.5, color: [1, 0.78, 0.22, 1], striped: true},
            {x: -3.4, y: 0.1, z: 0, rx: 1.9, ry: 1.9, rz: 1.9, color: [0.25, 0.22, 0.25, 1]},
            {x: -4.1, y: 0.5, z: 1.7, rx: 0.33, ry: 0.33, rz: 0.25, color: [1, 1, 0.94, 1]},
            {x: 4.2, y: 0, z: 0, rx: 0.9, ry: 0.45, rz: 0.45, color: [0.25, 0.22, 0.25, 1]}
        ])
        this.leftWing = this.child('Bee wing left', this.bee, -1, 2.5, 0)
        this.rightWing = this.child('Bee wing right', this.bee, 1.5, 2.4, -0.3)
        this.solid(this.leftWing, [{x: -0.6, y: 1.3, z: 0, rx: 1.2, ry: 2.3, rz: 0.4, angle: 0.4, color: [0.7, 0.9, 1, 1]}])
        this.solid(this.rightWing, [{x: 0.7, y: 1.3, z: 0, rx: 1.2, ry: 2.3, rz: 0.4, angle: -0.4, color: [0.7, 0.9, 1, 1]}])

        this.mushroom = this.child('Mushroom exhibit', this.sceneObject, 19, 1.2, 0)
        this.solid(this.mushroom, [
            {x: 0, y: 3.3, z: 0, rx: 1.9, ry: 3.5, rz: 1.8, color: [0.98, 0.88, 0.7, 1]},
            {x: 0, y: 7.3, z: 0, rx: 5.6, ry: 3.3, rz: 4.4, color: [0.93, 0.35, 0.33, 1]},
            {x: -2.8, y: 8.4, z: 3.65, rx: 0.9, ry: 0.75, rz: 0.45, color: [1, 0.94, 0.81, 1]},
            {x: 0, y: 9.2, z: 3.65, rx: 1.1, ry: 0.8, rz: 0.45, color: [1, 0.94, 0.81, 1]},
            {x: 2.9, y: 7.9, z: 3.8, rx: 0.85, ry: 0.7, rz: 0.45, color: [1, 0.94, 0.81, 1]}
        ])
    }

    private update(): void {
        this.elapsed += getDeltaTime()
        const t = this.elapsed
        this.flower.getTransform().setLocalRotation(quat.angleAxis(this.selected === 0 ? Math.sin(t * 2.8) * 0.12 : 0, vec3.forward()))
        this.bee.getTransform().setLocalPosition(new vec3(0, 6.3 + (this.selected === 1 ? Math.sin(t * 3.5) * 1.5 : 0), 0))
        const flap = this.selected === 1 ? Math.sin(t * 14) * 0.5 : 0
        this.leftWing.getTransform().setLocalRotation(quat.angleAxis(flap, vec3.forward()))
        this.rightWing.getTransform().setLocalRotation(quat.angleAxis(-flap, vec3.forward()))
        const pulse = this.selected === 2 ? 1 + 0.08 * Math.sin(t * 3) : 1
        this.mushroom.getTransform().setLocalScale(new vec3(pulse, pulse, pulse))
    }

    private solid(parent: SceneObject, shapes: Shape[]): void {
        const vertices: number[] = []
        const indices: number[] = []
        const rings = 12
        const segments = 20
        for (const shape of shapes) {
            const base = vertices.length / 7
            const angle = shape.angle || 0
            const ca = Math.cos(angle), sa = Math.sin(angle)
            for (let r = 0; r <= rings; r++) {
                const theta = Math.PI * r / rings
                const st = Math.sin(theta), ny = Math.cos(theta)
                for (let s = 0; s <= segments; s++) {
                    const phi = 2 * Math.PI * s / segments
                    const nx = st * Math.cos(phi), nz = st * Math.sin(phi)
                    const px = nx * shape.rx, py = ny * shape.ry
                    const shade = 0.78 + 0.22 * Math.max(0, ny * 0.65 + nz * 0.35)
                    const band = shape.striped && ((nx > -0.38 && nx < -0.08) || (nx > 0.28 && nx < 0.58))
                    const c = band ? [0.25, 0.22, 0.25, 1] : shape.color
                    vertices.push(shape.x + px * ca - py * sa, shape.y + px * sa + py * ca, shape.z + nz * shape.rz,
                        c[0] * shade, c[1] * shade, c[2] * shade, c[3])
                }
            }
            for (let r = 0; r < rings; r++) {
                for (let s = 0; s < segments; s++) {
                    const a = base + r * (segments + 1) + s
                    const b = a + segments + 1
                    indices.push(a, a + 1, b, a + 1, b + 1, b)
                }
            }
        }
        const builder = new MeshBuilder([{name: 'position', components: 3}, {name: 'color', components: 4}])
        builder.topology = MeshTopology.Triangles
        builder.indexType = MeshIndexType.UInt16
        builder.appendVerticesInterleaved(vertices)
        builder.appendIndices(indices)
        const visual = parent.createComponent('Component.RenderMeshVisual') as RenderMeshVisual
        visual.mesh = builder.getMesh()
        visual.mainMaterial = this.material
        builder.updateMesh()
    }
}

interface Shape {
    x: number; y: number; z: number
    rx: number; ry: number; rz: number
    color: number[]
    angle?: number
    striped?: boolean
}
