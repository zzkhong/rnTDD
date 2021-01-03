import {track} from 'util/analytics';

export function add(x: number, y: number): number {
  return x + y;
}

export function addWithTrack(x: number, y: number): number {
  track('add');
  return x + y;
}
