import {IMetadata} from './IMetadata';
import {IEarthquake} from './IEarthquake';

export interface IResponse {
  type: string;
  metadata: IMetadata;
  features: IEarthquake[];
  bbox: number[];
}
