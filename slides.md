---
# try also 'default' to start simple
theme: light-icons
colorSchema: light

fonts:
  # like font-family in css, you can use `,` to separate multiple fonts for fallback
  sans: 'Lato, Noto Sans JP'
  serif: 'Lato, Noto Sans JP'

# first page
layout: image-right
image: 'https://vitejs.dev/logo.svg'
---

<style>
  body {
    font-size: 20px;
  }
  h1 {
    line-height: 1.4 !important;
    font-weight: bold !important;
  }
  body ul {
    padding-left: 24px;
  }
  ul ul {
    font-size: .9rem;
  }
  li {
    list-style-type: initial;
  }
  li + li {
    margin-top: .8rem;
  }
</style>

# 次世代フロントエンドツールVite入門会

2021/10/30(Sat) 10:00〜 / 主催: [@Meijin_garden](https://twitter.com/Meijin_garden)

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-cover.svg
---

# イベント概要

- **環境構築** - [Vite](http://vitejs.dev/)の公式ガイドに則って、環境構築から一通りの機能を使うところまで進めます
- **プラスアルファ** - 終わったらStorybookを入れたり、プラグインを入れたり、Vercelにホスティングしたり各自興味のある活動をします

<br />

※なんとなくイベント立ち上げたらめっちゃ登録数があっておののいています

※なので、**チャットや会話で盛り上げて**いただけると助かりますｗ


---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-cover.svg
---

# 予定

- 自己紹介
  - 主催
  - 話す枠の方々
- 画面共有して環境構築開始
  - HMR, pre-bundle, plugin, CSS Modules, env variables and mode...など
  - あくまで入門会なので、公式ドキュメントを順になぞります
- 感想など雑談
  - この場で皆に質問したいことがあればチャット等で募集とか
- 時間に余裕があればプラスアルファなにかやる
- 解散

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-cover.svg
---

# 自己紹介

- 「名人」というニックネームで活動
- Twitter: <span class="ml-2 text-[#1d9bf0] font-bold">@Meijin_garden</span>
- Webエンジニア6年目
- 好きな分野はWebフロントエンド
- 好きなエディタのテーマはPanda
- 趣味は将棋（初段くらい）
- 株式会社NoSchool CTO
  - オンライン家庭教師マナリンク -> https://manalink.jp

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-cover.svg
---

# 話す枠の方々の自己紹介

- お名前
- 好きな技術
- Viteとの関わり

---
layout: image-header-intro
---

# Viteに入門しよう！

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# create vite app

- https://vitejs.dev/guide/#scaffolding-your-first-vite-project

<br />

React & TypeScriptで書きたい場合

```shell
yarn create vite react-application --template react-ts
```

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# use templates (optional)

- degitを使えばtemplateから簡単に開始できます。

```shell
npx degit TeXmeijin/vite-react-ts-tailwind-firebase-starter vite-hoge
```

- 以下は自作のテンプレです

![スクリーンショット 2021-10-28 17 42 51](https://user-images.githubusercontent.com/7464929/139220749-6fc1579f-e271-4aaa-a922-102ef5230d4f.png)

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# yarn dev

```shell
yarn
yarn dev
```

<img width="300" alt="スクリーンショット 2021-10-28 17 55 24" src="https://user-images.githubusercontent.com/7464929/139222686-9fe40fd3-46c9-4c4c-a26c-d6f78344d5db.png">

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# 〜ファイル更新時の反映の速さを体感する時間〜

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# index.html

- SPAなのでHTMLはindex.htmlのみ
- 基本的にはドキュメントルートにindex.htmlがあります
- `<html>`のlang="ja"とかはここで変える

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# pre-bundle

- https://vitejs.dev/guide/features.html#npm-dependency-resolving-and-pre-bundling
- esbuildが依存をバンドルして`node_modules/.vite`以下に配置してくれる

```shell
Pre-bundling dependencies:
  react
  react-dom
  react/jsx-dev-runtime
(this will be run only when your dependencies or config have changed)
```

<img width="775" alt="スクリーンショット 2021-10-28 18 22 10" src="https://user-images.githubusercontent.com/7464929/139227554-2347fc39-48de-4aab-b4a5-ad6980a90e84.png" />

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# pre-bundle (2)

- 起動中にライブラリを追加し、新しいimportを追加すると再度Prebundleが走るっぽい

```shell
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

```tsx
import { Button, ButtonGroup } from "@chakra-ui/react"
// 本当はProviderとか要るけど雑に追加
        <Button>
          hoge
        </Button>
```

```shell
18:26:01 [vite] ✨ dependencies updated, reloading page...
```

<img width="681" alt="スクリーンショット 2021-10-28 18 29 24" src="https://user-images.githubusercontent.com/7464929/139228661-a7eff376-b232-49ee-a0be-6c67f0eebe39.png" />


---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# pre-bundle (3)

- TSXコンポーネントを作ったり、Hookを切ってimportすると、それらも別個のファイルでリクエストされる
- 手元の実運用中のViteアプリケーションでは1画面で300以上のリクエストが飛んでる
  - 手元のNuxtアプリケーションでは170程度なので多いほうと思われる
  - 依存しているファイル数だけリクエストが増えるので当然といえば当然

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# plugin

- vite本体はシンプルな機能で、プラグインを足していく

Reactの場合のデフォルトは:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
```

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# plugin (2)

たとえばSentryの場合

```ts
import viteSentry from 'vite-plugin-sentry';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), viteSentry(getSentryConfig(mode))],
```

- mode(後述)を受け取れる関数として定義するとmodeごとに違うSentry設定を反映できる

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# plugin (3)

- 本番ビルドのVisualize方法気になりますよね？
- 設定は以下の記事がおすすめ（手前味噌

https://zenn.dev/meijin/articles/vite-bundle-analyzer

![スクリーンショット 2021-10-28 18 48 47](https://user-images.githubusercontent.com/7464929/139232101-c4f15c0f-7151-4355-acfb-e0e00c25e653.png)

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# CSS Modules

- デフォルトでCSS Modulesに対応してます(すごい)
- https://vitejs.dev/guide/features.html#css-modules
- `.scss`ももちろん対応できます

```shell
yarn add -D sass
```

たとえば↓

```tsx
import { ReactNode } from 'react';
import styles from './ErrorText.module.scss';

export const ErrorText = ({ children }: { children: ReactNode }) => <span className={styles.text}>{children}</span>;
```

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# env variables

- みんな気になる環境変数
- https://vitejs.dev/guide/env-and-mode.html

```conf
VITE_FIREBASE_APIKEY=hogehogehogehogehogehoge
```

- `VITE_`から始まる変数だけクライアント側に放出される
- `import.meta.env.HOGE`でアクセスできるが、型安全でないため、`env.d.ts`といったファイルを定義してstringにしておく

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# modes

- `vite build`でProduction Buildができるけど、検証環境と本番環境で環境変数などを切り分けたいケースはある
- `vite build --mode staging`といった`mode`引数が指定できる。便利。CIもこれで組める
- `.env.[mode]`のファイル名の環境変数を読み込んでくれる
- `vite.config.ts`で指定するconfigを関数にできるのでその引数にmodeが含まれる

```ts
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
```

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# まとめ

- だいたいこれで実装するときに必要な知識は網羅できた...？
- 個人的に良いなと思っているところ
  - とにかくHMRの反映が速い
  - シンプルかつ拡張可能な仕組み
  - 本番ビルドはrollupなので安定してる
    - https://vitejs.dev/guide/why.html#why-bundle-for-production

---
layout: image-header-intro
---

自由時間に入る前に...

# 告知

---
layout: center-image
---

<style>
  body h1 {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }
  body .text-center {
    text-align: left;
  }
  body .col-span-12 {
    margin: auto 48px;
  }
</style>

# マナリンクではエンジニアを採用中です！

<p className="text-[#777] mb-4">
オンライン家庭教師マナリンク(<a target=_blank href=https://manalink.jp>https://manalink.jp</a>)は以下の課題を解決しています。
</p>

<div className="flex w-full gap-3">
  <div className="flex-1 p-4 rounded-md border-2 border-[#07389866]">
    <h2 className="font-bold">先生を直接指名できない</h2>
    <p className="text-xs mt-2">多くの家庭教師サービスは、先生ではなく「運営会社に資料請求」するので希望した先生にならないこともあります。<br />マナリンクでは一人ひとりの先生のプロフィールページを用意し、<b>YouTube上に自己紹介動画も公開</b>しています。もちろん直接指名できます。</p>
    <img className="mt-4 mx-auto w-[200px]" src="https://manalink.jp/_ipx/f_webp,s_400x246/img/components/top/feature02.jpg" />
  </div>
  <div className="flex-1 p-4 rounded-md border-2 border-[#07389866]">
    <h2 className="font-bold">保護者から指導が見えない</h2>
    <p className="text-xs mt-2">教育サービスの大きな課題は<b>価値を受ける人（生徒）と対価を支払う人（親）が別人</b>なことです。<br />マナリンクでは専用のReact Native製アプリで先生-生徒間の指導を実施していただき、保護者さんに閲覧権限を与えることで指導内容を可視化、解約を防ぎます。</p>
    <img className="mt-4 mx-auto w-[160px]" src="https://prtimes.jp/i/40725/16/resize/d40725-16-eb211c51287f6ba5bd44-0.png" />
  </div>
  <div className="flex-1 p-4 rounded-md border-2 border-[#07389866]">
    <h2 className="font-bold">職業自体の認知度が低い</h2>
    <p className="text-xs mt-2">オンライン家庭教師自体はここ数年でZoom等の普及によって生まれた新しい職業です。<br />そのため、単に先生を募集するのではなく、オンライン家庭教師という仕事についてマナリンクから発信するために、マナリンクTeachersというメディアを公開・運営しています。</p>
    <img className="mt-4 mx-auto w-[240px]" src="https://user-images.githubusercontent.com/7464929/139240626-0b2408e8-95a0-4563-a4aa-6637862029d0.png" />
  </div>
</div>

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# カジュアル面談を随時受付中

詳しく訊きたいと思っていただいた方はMeetyでぜひご連絡を！

https://meety.net/matches?q=%23%E3%83%9E%E3%83%8A%E3%83%AA%E3%83%B3%E3%82%AF

<br />
<br />

# テックブログも公開中

採用技術はTypeScript(React, React Native, Vue, AWS CDK, Vite, Firebase), PHP(Laravel), AWSなどです。

https://zenn.dev/manalink

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# 個人的な告知

- Twitterフォローしてね
  - <span class="ml-2 text-[#1d9bf0] font-bold">@Meijin_garden</span>
- ZennでViteの記事なども書いているので、本日の内容が勉強になったという方がいらっしゃったらサポートください💰
  - https://zenn.dev/meijin

---
layout: image-right
image: https://raw.githubusercontent.com/lightvue/slidev-theme-light-icons/master/static/light-icons-illustration.svg
---

# 自由時間

## ・感想など雑談

<br />
<br />

## ・プラスアルファ
デプロイ、Storybook、プラグイン探しなどなど
