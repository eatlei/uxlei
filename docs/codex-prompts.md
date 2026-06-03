# 给 Codex 的素材生成提示词（可直接复制粘贴）

> 用法：每个段落是一个独立的 Codex 提示词，复制整段发给 Codex 即可。
> Codex 会按要求**直接写 SVG 文件**到指定路径，构建后自动替换占位封面，无需改其他代码。
>
> 全站 base 是 `/uxlei`，所有 `public/...` 资源最终通过 `/uxlei/...` 访问。
> 设计基调（每个 prompt 已写明，方便单独使用，但请保持统一）：
> - 主色 accent `#3b6fd4`，辅助 signal/青 `#11aeb5`，强调 heat/暖橙 `#e3a72e`
> - 中性：纸白 `#f6f8fb`、墨 `#14171d`、灰 `#5e6675`、线 `#e3e7ee`
> - 字体气质：Space Grotesk（标题）、JetBrains Mono（标签）。在 SVG 里用 `Arial, PingFang SC, sans-serif` 兜底
> - 整体克制、编辑感、不要 AI 廉价渐变和糖果色

---

## 1. TikTok 案例封面（AI 后设计 · 必做）

```
请覆盖写入文件 public/work/covers/tiktok-case.svg。

要求：
- 尺寸 1600x1000，viewBox 0 0 1600 1000，外圆角 rx=44。
- 主题：AI 时代的设计探索，深色 / 未来 / 克制。
- 配色：深底 #0E1320 → #1A2236 线性渐变；点缀使用 accent #3B6FD4 与 signal #11AEB5；不要霓虹堆砌、不要候选色之外的颜色。
- 视觉元素：
  - 整图弥漫一颗柔和径向光晕（center 50% 42%，r 约 0.6），accent 蓝带 0.5 透明，向外渐隐。
  - 中心或右侧画一组抽象 UI 节点连线（5–8 个圆点 + 线段构成的图），代表 AI 系统化设计；线宽 1px，颜色 #3B6FD4 / #11AEB5，透明度 0.3-0.6。
  - 左下角或上方布置 3–5 个细小星点（半径 3–6），点缀星空感。
  - 左上角放一个小角标 "01" 圆形（半径 22），白底 8% 透明，1px 边框，font-mono 数字。
  - 中央偏上 wordmark "TikTok"：font-family "Arial, PingFang SC, sans-serif"，font-weight 800，font-size 150，letter-spacing -4，fill #FFFFFF。
  - wordmark 下方副标 "AI 时代的设计探索"：font-size 34，fill #9FB4DC。
  - 再下方一个胶囊 pill（width 300 height 64 rx 32），背景白色 8% 透明，1px 边框 #3B6FD4 / 0.5；pill 内文字 "进行中 · COMING SOON"，font-size 25，font-weight 600，letter-spacing 2，fill #7FA6EE。
- 不要使用任何外部字体文件。
- 不要加任何 JS / animation tag。
- 写完后只输出文件内容本身，不要 markdown 围栏。
```

## 2. 抖音 & TikTok 案例封面（AI 前设计 · 必做）

```
请覆盖写入文件 public/work/covers/douyin-case.svg。

要求：
- 尺寸 1600x1000，viewBox 0 0 1600 1000，外圆角 rx=44。
- 主题：字节跳动 · 抖音 & TikTok，产品 & 运营设计；浅色编辑风，与 tiktok-case.svg（深色）形成"亮/暗"呼应。
- 配色：浅底，渐变 #F8FBFF → #EEF5FF → #D9E9FF；点缀 accent #3B6FD4；不要使用粉红、紫色等冲突色。
- 视觉元素：
  - 背景三个柔和圆斑：左上 (228,213) r=157 白 60%；右下 (1376,794) r=224 蓝 #7DB9FF 16%；上中 (1178,156) r=102 暖红 #FF7387 10%。
  - 中央偏上放 3–5 个抽象的"产品/运营设计"母题图形（如：漏斗轮廓、模块卡片、链路箭头），线条风格、1.5–2px stroke、颜色 #3B6FD4 30% 透明；位置错落但不抢标题。
  - 左上角小角标 "01"（半径 22），白底 90% + 1px 边框 #C9D9F3，内嵌 mono 数字。
  - 中央 wordmark "抖音 & TikTok"：font-family "Arial, PingFang SC, sans-serif"，font-weight 800，font-size 104，letter-spacing -2，fill #14171D，居中（x=800, y=470）。
  - wordmark 下副标 "产品 & 运营设计 · 2025"：font-size 34，fill #5E6675。
  - 再下方 pill（width 280 height 64 rx 32），背景白色 82% + 1px 边框 #C9D9F3；pill 内 "内容待补充"，font-size 25，font-weight 600，letter-spacing 2，fill #1C55C6。
- 不引外部字体；不放 JS / animation；输出文件内容本体。
```

## 3. 「AI 分界」Hero 装饰图（可选，提升氛围）

```
请新建文件 public/work/hero/ai-divide.svg。

要求：
- 尺寸 2400x1000，viewBox 0 0 2400 1000，透明背景（不要 rect 填充铺底）。
- 用作 /work hero 背景叠加层，整体不能影响文字可读性 —— 任何元素整体不透明度不超过 0.18。
- 主题：从左到右的"AI 前 → AI 后"分界过渡。
  - 左半 (x: 0..1100)：手绘风的活动设计符号 —— 简化的红包卡片轮廓、活动入口、漏斗、小图标；用单色 1px stroke #14171D 透明 0.12，自由错落。
  - 中间 (x: 1100..1300)：一条柔和的渐变过渡带，颜色从墨灰过到 accent #3B6FD4。
  - 右半 (x: 1300..2400)：规整的节点 / 网格 / 链路图（系统化的 AI 感觉）；1px stroke #3B6FD4 透明 0.12。
- 不要任何文字。不要硬阴影、不要噪点滤镜。
- 输出文件内容本体。
```

## 4. 颗粒纹理（可选）

```
请生成一张 512x512 的可平铺胶片颗粒灰度 PNG，存到 public/textures/grain.png。
要求：高频细颗粒、灰度、整体偏暗（中位灰约 #2b2b2b），无方向性、无可见 seam。
（如果你的环境无法直接产 PNG，可改为 SVG noise turbulence 写到 public/textures/grain.svg，但请保证尺寸 512x512、grayscale。）
```

## 5. 社交分享 OG 卡 —— 作品索引

```
请新建文件 public/og/work.svg。

要求：
- 尺寸 1200x630，viewBox 0 0 1200 630，外圆角 rx=24。
- 浅底渐变 #F8FBFF → #EEF5FF。
- 左侧（x≈60, y≈140 起）大标题，两行：
  - 第 1 行 "从活动玩法到"
  - 第 2 行 "增长系统的设计记录"
  font-family "Arial, PingFang SC, sans-serif"，font-weight 800，font-size 72，line-height 1.04，letter-spacing -1，fill #14171D。
- 标题下方副标 "Leon · 交互 / 产品设计 · 2015–至今"，font-size 22，fill #5E6675。
- 右侧（x≈800..1140, y≈90..540）放一个垂直堆叠的"指标卡"列表：
  - 块 1：大数字 "+771%"（font-size 64, weight 800, fill #3B6FD4）+ 小字"端外页回流率"。
  - 块 2：大数字 "75%" + 小字"百度果园活动参与率"。
  - 块 3：大数字 "23" + 小字"长线活动概念方案"。
  - 三块之间用 1px 线 #E3E7EE 分隔。
- 底部 (y=580) 一行 "WORK · UXLEI.GITHUB.IO/UXLEI"，font-mono 风字体，font-size 16，letter-spacing 3，fill #5E6675。
- 不引外部字体；输出文件内容本体。
```

## 6. 社交分享 OG 卡 —— 百度案例（可复用模板）

```
请新建文件 public/og/baidu.svg。

按 og/work.svg 的版式，但：
- 左侧标题改为单行 "百度"，副标 "2015 · 2020–2022 · 产品 / 运营 / 交互设计"。
- 右侧指标卡：+771% / 75% / 14 项设计专利。
- 其余配色、尺寸、字号一致。
```

---

## 给 Codex 的"批量做一遍"指令

如果想一次让 Codex 把 1–6 都做了：

```
仓库根目录有一份 docs/codex-prompts.md，里面定义了 6 个素材生成任务。
请按顺序逐个执行：写文件到指定路径、覆盖同名文件、保持每个 prompt 内的尺寸 / 颜色 / 文案 / 字体定义。
完成后跑 `npm run build` 确认无报错。
全程不要修改 prompt 之外的其它源代码。
```
