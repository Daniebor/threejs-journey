import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import CustomObject from "./CustomObject";

extend({OrbitControls})

export default function Experience()
{
    const {camera, gl} = useThree()

    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) =>
    {
        /* const angle = state.clock.elapsedTime

        state.camera.position.x = Math.sin(angle) * 8
        state.camera.position.z = Math.cos(angle) * 8
        state.camera.lookAt(0, 0, 0) */
        

        cubeRef.current.rotation.y += delta
        //groupRef.current.rotation.y += delta
    })

    return <>
        <directionalLight position={[1, 2, 3]} intensity={4.5}></directionalLight>
        <ambientLight intensity={1.5}></ambientLight>

        {<orbitControls args={[camera, gl.domElement]}></orbitControls>}

        <CustomObject></CustomObject>

        <group ref={groupRef}>
            <mesh position-x={-2}>
                <sphereGeometry></sphereGeometry>
                <meshStandardMaterial color="orange"></meshStandardMaterial>
            </mesh>
            <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                <boxGeometry/>
                <meshStandardMaterial color="mediumpurple"/>
            </mesh>
        </group>
        <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
            <planeGeometry></planeGeometry>
            <meshStandardMaterial color="greenyellow"></meshStandardMaterial>
        </mesh>
    </>
}