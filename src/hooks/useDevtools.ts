import { Ref } from 'vue';
export function useDevTools(canvas: Ref<HTMLCanvasElement | undefined>, src: string) {
  const context: Ref<CanvasRenderingContext2D | undefined> = ref();
  let width = 0;
  let height = 0;
  const marker: Ref<[number, number, number]> = ref([0, 0, 0] as [number, number, number]);
  onMounted(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const rate = image.width / image.height;
      width = canvas.value?.width as number;
      height = width / rate;
      context.value = canvas.value?.getContext('2d') as CanvasRenderingContext2D;
      context.value.drawImage(image, 0, 0, width, height);
      canvas.value?.addEventListener('click', onDrawer);
    };
  });
  const onDrawer = (event: MouseEvent) => {
    const { offsetX: x, offsetY: y } = event;
    const ctx = context.value as CanvasRenderingContext2D;
    // ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = '#f40';
    ctx.fill();
    ctx.closePath();
    onTransform(x, y);
  };
  const onTransform = (x: number, y: number) => {
    const ox = width / 4;
    const oy = 0;
    const dx = ox - x;
    const dy = oy - y;
    const θ = (dy / height) * Math.PI;
    const φ = (dx / width) * Math.PI * 2;
    const rx = 10 * Math.sin(θ) * Math.sin(φ);
    const ry = 10 * Math.cos(θ);
    const rz = 10 * Math.sin(θ) * Math.cos(φ);
    marker.value = [rx, ry, rz];
    console.log(marker.value);
  };
  return {
    marker,
  };
}
