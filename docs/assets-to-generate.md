# 待生成素材清单（交给 Codex 生成后填充）

> 这份清单列出可以进一步提升「作品」页质感的图片素材。
> 每项包含：用途 · 目标路径 · 尺寸/格式 · 风格说明 · 可直接用的生成 prompt。
> 当前带 `（占位）` 的文件是临时 SVG 占位，生成正式素材后**同名替换**即可，无需改代码。

设计基调（所有素材统一遵循）：
- 主色 accent `#3b6fd4`，辅助 signal/青 `#11aeb5`，强调 heat/暖橙 `#e3a72e`。
- 中性：纸白 `#f6f8fb`、墨 `#14171d`、灰 `#5e6675`、线 `#e3e7ee`。
- 字体气质：Space Grotesk（标题）+ JetBrains Mono（标签/数字）。
- 整体：克制、编辑感、轻微颗粒，不要 AI 廉价渐变和糖果色。

---

## 1. TikTok 案例封面（替换占位）

- **用途**：`/work` 页「AI 后设计」TikTok 卡片封面 + 详情页头图
- **路径**：`public/work/covers/tiktok-case.svg` （占位，可换成 `.png`，同时改 `src/content/work/tiktok.md` 的 `cover`）
- **尺寸/格式**：1600 × 1000，SVG 优先（清晰可缩放）；PNG 亦可
- **风格**：深色（`#0e1320`→`#1a2236`），未来/AI 感，TikTok 原生气质但克制；可有抽象 UI 碎片、节点连线、轻微辉光（用 accent/signal，不要霓虹堆砌）
- **prompt**：`Dark editorial cover, 1600x1000, deep navy gradient #0E1320 to #1A2236, abstract floating UI fragments and node-link graph, subtle blue (#3B6FD4) and teal (#11AEB5) glow, "TikTok / AI 时代的设计探索" wordmark, premium minimal, fine grain, no candy colors`

## 2. 抖音 & TikTok 案例封面（替换占位）

- **用途**：`/work` 页「AI 前设计」第一张卡片封面 + 详情页头图
- **路径**：`public/work/covers/douyin-case.svg` （占位；换 PNG 时改 `src/content/work/douyin.md` 的 `cover`）
- **尺寸/格式**：1600 × 1000
- **风格**：浅色编辑风，双品牌气质（抖音 + TikTok），产品/运营设计母题（漏斗、模块、链路），与 1 形成「亮/暗」呼应
- **prompt**：`Light editorial cover, 1600x1000, soft blue-white gradient, abstract product/ops design motifs (funnels, modular blocks, flow links), 抖音 & TikTok wordmark, accent #3B6FD4, restrained, fine grain`

## 3. 「AI 分界」Hero 装饰图（可选，提升氛围）

- **用途**：`/work` 顶部 hero 背景叠加，强化「AI 前/后」分界叙事
- **路径**：`public/work/hero/ai-divide.png`（新增；需要时我再接到 `.work-hero` 背景）
- **尺寸/格式**：2400 × 1000，PNG 透明背景，**极淡**（叠加在文字下方，不能影响可读性）
- **风格**：一条从左到右的「分界线」——左侧手绘网格/活动玩法符号，右侧规整的 AI/系统化节点；中间渐变过渡
- **prompt**：`Ultra-subtle wide banner 2400x1000, transparent PNG, a left-to-right transition: hand-drawn campaign sketches on the left morphing into clean systematic AI nodes on the right, monochrome with faint #3B6FD4, ~8% opacity feel, editorial blueprint`

## 4. 颗粒纹理（可选，替换 CSS 噪点）

- **用途**：全站 `body::before` 的纹理，换成真实颗粒更细腻
- **路径**：`public/textures/grain.png`
- **尺寸/格式**：512 × 512，可平铺，PNG，灰度
- **prompt**：`Seamless tileable 512x512 fine film grain, grayscale, very subtle, high frequency noise`

## 5. 社交分享图 OG image（推荐）

- **用途**：`/work` 及各案例页分享到 IM/社媒的预览图（`<meta og:image>`，目前未配置）
- **路径**：`public/og/work.png`、`public/og/baidu.png`、`public/og/meituan.png` 等
- **尺寸/格式**：1200 × 630，PNG
- **风格**：左侧大标题（项目名 + 一句话），右侧关键指标（如 `+771%`），底部 `Leon · 交互/产品设计`
- **prompt**：`1200x630 social share card, left bold title in Space Grotesk, right one hero metric +771%, paper background #F6F8FB, accent #3B6FD4, footer "Leon · Designer", clean editorial`

## 6. TikTok / 抖音 案例正文设备图（内容就绪后）

- **用途**：两个待补充案例的正文设备画廊（与百度/美团一致的竖屏 UI 截图）
- **路径**：`public/work/shots/tiktok-*.jpg`、`public/work/shots/douyin-*.jpg`
- **尺寸/格式**：竖屏，高约 1200–2400px，JPG（质量 ~85）
- **说明**：每个案例 3–6 张关键界面；正文里用 `<div class="devices"><figure><img .../><figcaption>…</figcaption></figure>…</div>` 排布即可（参考 `baidu.md`）

---

### 填充方式备忘
- 封面：把生成图放到对应 `public/work/covers/` 路径（同名覆盖 SVG，或改 frontmatter `cover` 指向新文件）。
- 正文设备图：放到 `public/work/shots/`，在对应 `.md` 里用 `devices` / `figure.wide` 结构引用，路径形如 `/uxlei/work/shots/xxx.jpg`。
- 所有 `public/` 下资源在线上通过 `/uxlei/...` 访问（站点 base 为 `/uxlei`）。
