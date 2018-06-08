/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { ALayer } from './layer';
import * as ol from 'openlayers';
import { EuiIcon } from '@elastic/eui';

export class TileLayer extends ALayer {

  constructor(tmsSource) {
    super();
    this._tmsSource = tmsSource;
  }

  getLayerName() {
    return this._tmsSource.getDisplayName();
  }

  renderSmallLegend() {
    return (<EuiIcon type="grid" />);
  }

  async getOLLayer() {
    const urlTemplate = await this._tmsSource.getUrlTemplate();
    return new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: urlTemplate
      })
    });
  }
}