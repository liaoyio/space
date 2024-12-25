
# 实现一个最简单的评分组件

1. 有一个受控属性 `value`，如果有值，点击评分组件什么都不会变，只会把最新的值通过 `onChange` 给到你
2. 默认用 `emptyIcon` 渲染出 `5` 个未激活的小星星
3. 点击之后激活的小星星用 `icon` 渲染


```tsx
function Demo() {
  const [value, setValue] = useState(1.5)
  return <Rate
  value={value}
  onChange={setValue}
  count={5}
  icon={<Star color="#0858d9" />}
  emptyIcon={<Star />}
  />
}
```

### 简单实现

```tsx
function Rate(props) {
  const { count } = props;
  const [value, setValue] = useControllableValue(props)
  const onClick = e => {
    // 点击评分组件的时候
    // 重新 setValue
  }
  return <div onClick={onClick}>
            [...Array(count)].map((_, key) => {
              return <div key={key}>'图标'</div>
            })
  </div>
}
```


原理很简单，用到了 `ahooks` 里面的 `useControllableValue` 实现受控属性


> [useControllableValue](https://ahooks.js.org/hooks/use-controllable-value) 默认读取 `props.value` 和 `props.onChange`，当然可以自定义


- `useControllableValue` 会读取 `<Rate />` 组件的 `props`，看看 `props` 上有没有 `value` 字段
- 如果没有 `value` 字段，你去执行 `setValue(val)`，`useControllableValue` 内部就会通过 `setState(val)` 去修改 `value`，那么用到 `useControllableValue` 这个组件就会重渲染, 并且还会把最新值给到 props上的 onChange 函数执行
- 如果有 `value` 字段，你去执行 `setValue(val)`，他只会把值 `val` 给到 `props` 上的 `onChange` 函数，就不会 `setState` 了，所以什么也没发生
