# Chuangqi Front Basic Framework

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

##目录结构

#前端视图、辅助类、路由、主入口
src
   components  #组件目录
   helper      #辅助类目录
   router      #路由设置
   store       #VueX Store目录
   view        #页面目录

#静态资源文件目录
static
   css         #css文件目录
   images      #图片文件目录
   js          #js文件目录

#项目依赖目录
node_modules

#项目配置目录
config

#项目构建、运行目录
build
