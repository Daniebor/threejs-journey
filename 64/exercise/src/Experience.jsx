import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'

import {useControls, Leva} from 'leva'

export default function Experience()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    const iframePos = useControls('Iframe Positioning', {
        XAxis: { value: 0, min: -1, max: 1 },
        YAxis: { value: 0.35, min: -1, max: 2 },
        ZAxis: { value: -1.4, min: -2, max: 2}
    })

    return <>

        <Leva hidden/>

        <Environment preset='city' />

        <color args={['#241a1a']} attach="background" />

        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{mass: 2, tension: 400}}
            snap={{mass: 4, tension: 400}}
        >
            <Float rotationIntensity={0.4}>
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#C0373C' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />
                <primitive 
                    object={computer.scene} 
                    position-y={-1.2}
                />
                <Html
                    transform
                    wrapperClass='htmlScreen'
                    distanceFactor={1.17}
                    position={ [ iframePos.XAxis, iframePos.YAxis, iframePos.ZAxis ] }
                    rotation-x={ - 0.256 }
                >
                    <iframe src="https://beyondmission.ch" />
                </Html>

                <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize={0.75}
                    position={ [ 2, 0.75, 0.25 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={2}
                    textAlign='center'
                >
                    BEYOND MISSION
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />
    </>
}