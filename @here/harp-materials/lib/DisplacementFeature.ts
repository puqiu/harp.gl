/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { HiddenThreeJSMaterialProperties } from "./MapMeshMaterials";

/**
 * Parameters used when constructing a new implementor of [[DisplacementFeature]].
 */
export interface DisplacementFeatureParameters {
    /**
     * Texture used for vertex displacement along their normals.
     */
    displacementMap?: THREE.Texture;
}

export interface DisplacementFeature
    extends HiddenThreeJSMaterialProperties,
        DisplacementFeatureParameters {
    setDisplacementMap(map: THREE.Texture | undefined): void;
}
