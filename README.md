# vue-fullPage
> 基于vue过渡实现全屏滚动效果

### 参数
 参数| 说明 |   类型  |  是否必要  | 默认值 | 
---------|------|-------|--------|------|
pages| 需要几屏| Number   | 必要 |  | 
bgColor  | 每一屏对应的背景色，如果当前屏不设置背景色可传空字符串    |  Array     | 不必要   |  |    
baseBgc  | 默认背景色    |  String     | 不必要   | #fff |    

### slot
```
<template slot="slot2" scope="props">
  <page1 :state="props.state" :page="props.page" :index="props.index"></page1>
</template>
```
必须按如下格式传递对应组件：对应屏的slot属性必须为slot+对应下标(从1开始)，要向slot分发的组件传递三个参数：state、index、page  
  
 参数| 说明 |   值  | 
---------|------|-------|
state| 对应过渡或动画的状态|enter、leave、transitionend   | 
index  | 当前slot对应的下标    |      | 
page  | 焦点屏对应的下标    |      | 
```
 watch: {
    //监听page或state,并做相应的业务逻辑处理
  }
```