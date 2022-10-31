// export function fetchURL(src: string) {
//   return new URL(src, import.meta.url).href;
// }

export function convert2dCoordinatesTo3dCoordinates(size: [number, number], coordinates: [number, number]) {
  const [width, height] = size;
  const [x, y] = coordinates;
  const ox = width / 4;
  const oy = 0;
  const dx = ox - x;
  const dy = oy - y;
  const θ = (dy / height) * Math.PI;
  const φ = (dx / width) * Math.PI * 2;
  const rx = 10 * Math.sin(θ) * Math.sin(φ);
  const ry = 10 * Math.cos(θ);
  const rz = 10 * Math.sin(θ) * Math.cos(φ);
  return [rx, ry, rz];
}
