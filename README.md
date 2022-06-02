# 🚀 MF-PanoramaImage

> 基于`THREE.js`的移动端陀螺仪全景图片

## 注意事项：
 项目基于`THREE.js`, 控制器使用的是`DeviceOrientationControls`,但是从`three@0.134.0`版本开始，移除了这个控制器, 具体可移步[Removed DeviceOrientationControls. #22654](https://github.com/mrdoob/three.js/pull/22654)。 所以想使用陀螺仪控制相机, 要么使用`three@0.133.1`及其以下版本，或者监听`deviceorientation`事件手动调整相机。


## 预览

预览提示： 推荐使用移动端浏览器打开, pc端预览请打开 `调试工具`-`More tools` - `Sensors`,调整`Orientation`模拟手机陀螺仪


[在线预览](https://fengtianxi001.github.io/MF-PanoramaImage/)
