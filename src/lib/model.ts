import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import type { Scene, Object3D } from 'three';
import type { GLTF } from 'three/addons/loaders/GLTFLoader.js';

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: 'js' });
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

interface LoadOptions {
	receiveShadow?: boolean;
	castShadow?: boolean;
}

export function loadGLTFModel(
	scene: Scene,
	glbPath: string,
	options: LoadOptions = { receiveShadow: true, castShadow: true }
): Promise<Object3D> {
	const { receiveShadow = true, castShadow = true } = options;
	return new Promise((resolve, reject) => {
		const loader = new GLTFLoader();
		loader.setDRACOLoader(draco);

		loader.load(
			glbPath,
			(gltf: GLTF) => {
				const obj = gltf.scene;
				obj.name = 'dog';
				obj.position.y = 0;
				obj.position.x = 0;
				obj.receiveShadow = receiveShadow;
				obj.castShadow = castShadow;
				scene.add(obj);

				obj.traverse(function (child) {
					if ((child as any).isMesh) {
						child.castShadow = castShadow;
						child.receiveShadow = receiveShadow;
					}
				});
				resolve(obj);
			},
			undefined,
			function (error: unknown) {
				reject(error);
			}
		);
	});
}
