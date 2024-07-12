
import { Clone, useGLTF } from "@react-three/drei"
export default function Model()
{
    const model = useGLTF('./hamburger-draco.glb')

    return <>
        <Clone object={model.scene} scale={0.35} position-x={-4}></Clone>
        <Clone object={model.scene} scale={0.35} position-x={0}></Clone>
        <Clone object={model.scene} scale={0.35} position-x={4}></Clone>
    </>
    
}

useGLTF.preload('./hamburger-draco.glb')