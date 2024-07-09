import Tile from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import TileGrid from 'ol/tilegrid/TileGrid';
import { Projection, addProjection, addCoordinateTransforms } from 'ol/proj';
import projzh from 'projzh';

const bd09Extent = [-20037726.37, -12474104.17, 20037726.37, 12474104.17];
const baiduMercator = new Projection({
  code: 'baidu',
  extent: bd09Extent,
  units: 'm'
});
addProjection(baiduMercator);
addCoordinateTransforms('EPSG:4326', baiduMercator, projzh.ll2bmerc, projzh.bmerc2ll);
addCoordinateTransforms('EPSG:3857', baiduMercator, projzh.smerc2bmerc, projzh.bmerc2smerc);

const bmercResolutions = Array.from({ length: 19 }, (_, index) => Math.pow(2, 18 - index));

export default function (url: string) {
  return new Tile({
    source: new XYZ({
      projection: 'baidu',
      maxZoom: 18,
      tileUrlFunction: function (tileCoord) {
        let x: number | string = tileCoord[1];
        let y: number | string = -tileCoord[2] - 1;
        const z = tileCoord[0];
        if (x < 0) {
          x = 'M' + -x;
        }
        if (y < 0) {
          y = 'M' + -y;
        }

        const index = Math.ceil(Math.random() * 5);
        return url
          .replace(/{x}/g, x.toString())
          .replace(/{y}/g, y.toString())
          .replace(/{z}/g, z.toString())
          .replace(/{n}/g, index.toString());
      },
      tileGrid: new TileGrid({
        resolutions: bmercResolutions,
        origin: [0, 0]
      }),
      tilePixelRatio: 2,
      tileSize: [512, 512]
    })
  });
}
