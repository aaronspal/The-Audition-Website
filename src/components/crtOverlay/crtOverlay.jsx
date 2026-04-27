import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './crtOverlay.css'

function CrtOverlay() {
    const noiseRef = useRef(null);
    const scanlinesRef = useRef(null);
    const frameIdRef = useRef(null);

    useEffect(() => {
        const noiseCanvas = noiseRef.current;
        const noiseCtx = noiseCanvas.getContext('2d');

        const scanlineCanvas = scanlinesRef.current;
        const renderer = new THREE.WebGLRenderer({
            canvas: scanlineCanvas,
            alpha: true
        });

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const scanlinesMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                opacity: { value: 0.2 },
                lines: { value: 800.0 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform float opacity;
                uniform float lines;
                varying vec2 vUv;

                void main() {
                    float scan = sin(vUv.y * lines + time) * 0.5 + 0.5;
                    gl_FragColor = vec4(vec3(scan), opacity);
                }
            `,
            transparent: true
        });

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            scanlinesMaterial
        );
        scene.add(plane);

        const resize = () => {
            const parent = scanlineCanvas.parentElement;
            const width = parent.offsetWidth;
            const height = parent.offsetHeight;
            noiseCanvas.width = width;
            noiseCanvas.height = height;
            renderer.setSize(width, height);
        };
        resize();

        const createNoise = () => {
            const imageData = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
            const data = imageData.data;
            const pixelSize = 2;

            for (let y = 0; y < noiseCanvas.height; y += pixelSize) {
                for (let x = 0; x < noiseCanvas.width; x += pixelSize) {
                    const noise = Math.random() * 255;
                    for (let py = 0; py < pixelSize && y + py < noiseCanvas.height; py++) {
                        for (let px = 0; px < pixelSize && x + px < noiseCanvas.width; px++) {
                            const i = ((y + py) * noiseCanvas.width + (x + px)) * 4;
                            data[i] = noise;
                            data[i + 1] = noise;
                            data[i + 2] = noise;
                            data[i + 3] = 15;
                        }
                    }
                }
            }
            return imageData;
        };

        let lastNoiseUpdate = 0;
        const noiseInterval = 200;
        let time = 0;

        const animate = () => {
            const currentTime = Date.now();

            if (currentTime - lastNoiseUpdate > noiseInterval) {
                noiseCtx.putImageData(createNoise(), 0, 0);
                lastNoiseUpdate = currentTime;
            }

            time += 0.05;
            scanlinesMaterial.uniforms.time.value = time;
            renderer.render(scene, camera);

            frameIdRef.current = requestAnimationFrame(animate);
        };
        animate();

        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(frameIdRef.current);
            renderer.dispose();
            scene.remove(plane);
            plane.geometry.dispose();
            plane.material.dispose();
        };
    }, []);

    return (
        <>
            <canvas ref={noiseRef} className="crtCanvas crtNoise" />
            <canvas ref={scanlinesRef} className="crtCanvas crtScanlines" />
        </>
    );
}

export default CrtOverlay;
