import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { loadGLTFModel } from '../../lib/model';

function easeOutCirc(x: number) {
	return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelDog = () => {
	const refContainer = useRef<HTMLDivElement>(null);
	const [loading, setLoading] = useState(true);
	const refRenderer = useRef<THREE.WebGLRenderer | null>(null);
	const urlDogGLB = '/dog.glb';

	const handleWindowResize = useCallback(() => {
		const renderer = refRenderer.current;
		const container = refContainer.current;
		if (container && renderer) {
			const scW = container.clientWidth;
			const scH = container.clientHeight;

			renderer.setSize(scW, scH);
		}
	}, []);

	useEffect(() => {
		const container = refContainer.current;
		if (container) {
			const scW = container.clientWidth;
			const scH = container.clientHeight;

			const renderer = new THREE.WebGLRenderer({
				antialias: true,
				alpha: true
			});
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(scW, scH);
			renderer.outputColorSpace = THREE.SRGBColorSpace;
			container.appendChild(renderer.domElement);
			refRenderer.current = renderer;
			const scene = new THREE.Scene();

			const target = new THREE.Vector3(-0.5, 1.2, 0);
			const initialCameraPosition = new THREE.Vector3(
				20 * Math.sin(0.2 * Math.PI),
				10,
				20 * Math.cos(0.2 * Math.PI)
			);

			const scale = scH * 0.005 + 4.8;
			const camera = new THREE.OrthographicCamera(
				-scale,
				scale,
				scale,
				-scale,
				0.01,
				50000
			);
			camera.position.copy(initialCameraPosition);
			camera.lookAt(target);


			const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI);
			scene.add(ambientLight);


			const controls = new OrbitControls(camera, renderer.domElement);
			controls.autoRotate = true;
			controls.target = target;

			loadGLTFModel(scene, urlDogGLB, {
				receiveShadow: false,
				castShadow: false
			}).then((gltf) => {
				gltf.scale.set(1.2, 1.2, 1.2);
				animate();
				setLoading(false);
			});

			let req: number | null = null;
			let frame = 0;
			const animate = () => {
				req = requestAnimationFrame(animate);

				frame = frame <= 100 ? frame + 1 : frame;

				if (frame <= 100) {
					const p = initialCameraPosition;
					const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

					camera.position.y = 10;
					camera.position.x =
						p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
					camera.position.z =
						p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
					camera.lookAt(target);
				} else {
					controls.update();
				}

				renderer.render(scene, camera);
			};

			return () => {
				if (req !== null) {
					cancelAnimationFrame(req);
				}
				renderer.domElement.remove();
				renderer.dispose();
			};
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize, false);
		return () => {
			window.removeEventListener('resize', handleWindowResize, false);
		};
	}, [handleWindowResize]);

	return (
		<div
			ref={refContainer}
			className="voxel-dog relative mx-auto h-[280px] w-[280px] md:h-[480px] md:w-[480px]"
		>
			{loading && (
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<div className="size-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
				</div>
			)}
		</div>
	);
};

export default VoxelDog;
