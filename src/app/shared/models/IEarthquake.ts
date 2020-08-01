import {IProperties} from './IProperties';
import {IGeometry} from './IGeometry';

export interface IEarthquake {
    type: string;
    properties: IProperties;
    geometry: IGeometry;
    id: string;
}
