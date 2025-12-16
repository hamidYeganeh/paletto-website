declare module "three" {
  export interface IUniform {
    value: unknown;
  }

  export class Color {
    constructor(color?: unknown);
  }

  export class Object3D {}

  export class BufferGeometry {}

  export class Material {}

  export class PlaneGeometry extends BufferGeometry {
    constructor(...args: unknown[]);
  }

  export class ShaderMaterial extends Material {
    uniforms: Record<string, IUniform>;
  }

  export class Mesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material = Material,
  > extends Object3D {
    geometry: TGeometry;
    material: TMaterial;
    scale: { set: (x: number, y: number, z: number) => void };
  }
}
