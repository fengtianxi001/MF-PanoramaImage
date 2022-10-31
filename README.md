# 🧱 MF-PanoramaImage

> 一个基于threejs的VR全景图片，服务地址：https://fengtianxi001.github.io/MF-PanoramaImage/

## 项目说明

当前项目包含两个分支

- `master`: 使用`threejs`实现VR全景图案例
  
- `devtools`: 是VR全景图的配套开发工具(打点工具)
  

##

## 项目简介

项目主要做了如下功能:

- [x] 实现VR全景图的手动控制器和陀螺仪控制器
  
- [x] 实现VR全景图的点位和label显示
  
- [x] 实现VR全景图的打点功能(2维坐标转3维)
  

## 注意事项：

项目基于`THREE.js`, 控制器使用的是`DeviceOrientationControls`,但是从`three@0.134.0`版本开始，移除了这个控制器, 具体可移步[Removed DeviceOrientationControls. #22654](https://github.com/mrdoob/three.js/pull/22654)。 所以想使用陀螺仪控制相机, 要么使用`three@0.133.1`及其以下版本，或者监听`deviceorientation`事件手动调整相机。
