import { Time } from '@angular/common';

export interface IProperties {
    mag: number;
    place: string;
    time: string;
    updated: number;
    tz?: any;
    url: string;
    detail: string;
    felt?: number;
    cdi?: number;
    mmi?: number;
    alert?: string;
    status: string;
    tsunami: number;
    sig: number;
    net: string;
    code: string;
    ids: string;
    sources: string;
    types: string;
    nst?: number;
    dmin?: number;
    rms: number;
    gap?: number;
    magType: string;
    type: string;
    title: string;
}
