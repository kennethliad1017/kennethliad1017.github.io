import * as THREE from "three";
import {useLoader} from "@react-three/fiber";
import {useEffect} from "react";
import {Simulate} from "react-dom/test-utils";


function useTexturesLoad(input: string[], colorSpaces: THREE.ColorSpace[]): THREE.Texture[] {
    const textures: THREE.Texture[] = useLoader(THREE.TextureLoader, input);

    useEffect(() => {
        textures.forEach((texture) => {
            texture.flipY = false;
            colorSpaces.forEach((colorSpace) => {
                texture.colorSpace = colorSpace
            })
        })
    }, []);

    return textures;

}

export default useTexturesLoad;