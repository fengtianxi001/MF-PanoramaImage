import { markerType } from '#/index';
import { Ref } from 'vue';
import { convert2dCoordinatesTo3dCoordinates } from '@/utils/index';
export function useImage(container: Ref<HTMLElement>, markers: Array<markerType>, src: string) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const history = [];
  const state = reactive({
    zoom: 1,
    style: {
      transformOrigin: '0 0',
      transform: 'scale(1)',
    },
  });
  const onWheel = (event: MouseEvent) => {
    const { offsetX: x, offsetY: y } = event;
    //@ts-ignore
    const cache = event.wheelDelta / 1200;
    state.zoom += cache;
    if (state.zoom < 1) state.zoom = 1;

    if (cache >= 0) {
      state.style.transformOrigin = `${x}px ${y}px`;
    }
    state.style.transform = `scale(${state.zoom})`;
  };
  const onClick = (event: MouseEvent) => {
    // console.log(event);
    drawMarker(event);
  };
  const drawMarker = (event: MouseEvent) => {
    const { offsetX, offsetY } = event;
    ctx.beginPath();
    ctx.arc(offsetX, offsetY, 6, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    //每次标注完成后, 写入快照
    // this.onSnapshoot();
    // console.log(this.history.length)
    //记录markers
    markers.push({
      coordinates_2d: [offsetX, offsetY],
      coordinates_3d: [...convert2dCoordinatesTo3dCoordinates([canvas.width, canvas.height], [offsetX, offsetY])],
      name: `#${markers.length}`,
    });
  };
  onMounted(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      canvas.width = container.value.clientWidth;
      canvas.height = image.height * (container.value.clientWidth / image.width);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      container.value.appendChild(canvas);
      canvas.addEventListener('wheel', onWheel);
      canvas.addEventListener('click', onClick);
    };
  });
  watch([state.style], () => {
    canvas.style.transform = state.style.transform;
    canvas.style.transformOrigin = state.style.transformOrigin;
  });
  return {
    canvas,
  };
}
