import { useRef, useState, Suspense } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody, useRopeJoint, useSphericalJoint, CuboidCollider } from '@react-three/rapier'
import { OrbitControls, Environment, ContactShadows, Center, Text } from '@react-three/drei'
import { RenderTexture, PerspectiveCamera } from '@react-three/drei'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import * as THREE from 'three'

extend({ MeshLineGeometry, MeshLineMaterial })

function BadgeWithCord({ name, title }) {
  const card = useRef()
  const band = useRef()
  const fixed = useRef()
  const j1 = useRef()
  const j2 = useRef()
  const j3 = useRef()
  
  const { width, height } = useThree((state) => state.size)
  const vec = new THREE.Vector3()
  const ang = new THREE.Vector3()
  const rot = new THREE.Vector3()
  const dir = new THREE.Vector3()
  const [dragged, drag] = useState(false)
  const [offset, setOffset] = useState(new THREE.Vector3())
  
  const [curve] = useState(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 2, 0),
    new THREE.Vector3(0, 1.5, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0.5, 0)
  ]))

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])
  useSphericalJoint(j3, card, [[0, 0, 0], [0, -1.45, 0]])

  useFrame((state) => {
    if (!card.current) return
    
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      card.current.setNextKinematicTranslation({ 
        x: vec.x - offset.x, 
        y: vec.y - offset.y, 
        z: vec.z - offset.z 
      })
    }

    ang.copy(card.current.angvel())
    rot.copy(card.current.rotation())
    card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })

    curve.points[0].copy(j3.current.translation())
    curve.points[1].copy(j2.current.translation())
    curve.points[2].copy(j1.current.translation())
    curve.points[3].copy(fixed.current.translation())
    
    if (band.current?.geometry) {
      band.current.geometry.setPoints(curve.getPoints(32))
    }
  })

  const handlePointerDown = (e) => {
    e.stopPropagation()
    if (!card.current) return
    const translation = card.current.translation()
    setOffset(new THREE.Vector3(
      e.point.x - translation.x,
      e.point.y - translation.y,
      e.point.z - translation.z
    ))
    drag(true)
    document.body.style.cursor = 'grabbing'
  }

  const handlePointerUp = () => {
    drag(false)
    document.body.style.cursor = 'grab'
  }

  return (
    <>
      <RigidBody ref={fixed} type="fixed" position={[0, 2, 0]} />
      
      <RigidBody ref={j1} position={[-0.3, 1.5, 0]}>
        <mesh>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
        </mesh>
      </RigidBody>
      
      <RigidBody ref={j2} position={[-0.6, 1, 0]}>
        <mesh>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
        </mesh>
      </RigidBody>
      
      <RigidBody ref={j3} position={[-0.9, 0.5, 0]}>
        <mesh>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
        </mesh>
      </RigidBody>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial 
          color="white" 
          resolution={[width, height]} 
          lineWidth={2} 
          transparent
          opacity={0.9}
        />
      </mesh>

      <RigidBody 
        ref={card} 
        type={dragged ? 'kinematicPosition' : 'dynamic'}
        position={[0, -1.2, 0]}
        colliders={false}
        linearDamping={0.5}
        angularDamping={0.5}
      >
        <CuboidCollider args={[0.8, 1.1, 0.02]} />
        <mesh
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <boxGeometry args={[1.6, 2.2, 0.04]} />
          <meshPhysicalMaterial
            clearcoat={1}
            clearcoatRoughness={0.15}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 2400]}
            metalness={0.5}
            roughness={0.3}
            color="#f0f0f0"
          >
            <RenderTexture attach="map" width={1000} height={1400}>
              <PerspectiveCamera makeDefault manual aspect={0.73} position={[0, 0, 2]} />
              
              <mesh>
                <planeGeometry args={[2, 2.73]} />
                <meshBasicMaterial color="#1a1a1a" />
              </mesh>

              <Center middle>
                <Text
                  fontSize={0.22}
                  color="#ffffff"
                  anchorX="center"
                  anchorY="middle"
                  position={[0, 0.15, 0.01]}
                >
                  {name}
                </Text>
              </Center>

              <Center middle>
                <Text
                  fontSize={0.12}
                  color="#26d6ad"
                  anchorX="center"
                  anchorY="middle"
                  position={[0, -0.25, 0.01]}
                >
                  {title}
                </Text>
              </Center>
            </RenderTexture>
          </meshPhysicalMaterial>
        </mesh>
      </RigidBody>
    </>
  )
}

export default function Scene3D({ name = 'Felipe González', title = 'Ingeniero Informático' }) {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['transparent']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -5, 5]} intensity={0.3} color="#26d6ad" />
        <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={0.5} />
        
        <Suspense fallback={null}>
          <Physics gravity={[0, -9.81, 0]}>
            <BadgeWithCord name={name} title={title} />
          </Physics>
          
          <ContactShadows
            position={[0, -4, 0]}
            opacity={0.3}
            scale={10}
            blur={2}
            far={4}
          />
        </Suspense>
        
        <Environment preset="city" />
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          onStart={() => document.body.style.cursor = 'grab'}
          onEnd={() => document.body.style.cursor = 'auto'}
        />
      </Canvas>
    </div>
  )
}