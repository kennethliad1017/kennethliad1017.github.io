import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect } from "react";


function useTextureLoad(
  input: string | string[],
  colorSpace: THREE.ColorSpace = THREE.SRGBColorSpace
): THREE.Texture {
    const texture: THREE.Texture = useLoader(THREE.TextureLoader, input);

    useEffect(() => {
      texture.flipY = false;
      texture.colorSpace = colorSpace
    }, []);

    return texture;
}

export default useTextureLoad;
