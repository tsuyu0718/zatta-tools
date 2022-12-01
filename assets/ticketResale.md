## チケットリセール自動チェックスクリプト
- リセールページで押下可能な購入ボタンが無ければ自動でリセールページをリロードする。押下可能なボタンがあればビープ音を鳴らして押下しリロードをやめる。
- 注意：このスクリプトはスクウェア・エニックスのチケットリセールサイトに負荷をかけることを目的としていません。人力でも入力可能なレベルに更新間隔を設けることでアクセス頻度を調節しています。高負荷になり得るアクセスは行わないでください。

## スクリプト実行に使用したもの
- Chrome拡張機能: ScriptAutoRunner
- Webページ上で任意のJavascriptを走らせる
- 使用方法: [不要なリンク、不要な広告をブロックできる！「そう、JavaScriptならね」 ScriptAutoRunner のご紹介（Google Chrome 拡張機能）](https://qiita.com/yamazaki3104/items/4073a4fd98cd7c4afe0d "不要なリンク、不要な広告をブロックできる！「そう、JavaScriptならね」 ScriptAutoRunner のご紹介（Google Chrome 拡張機能）")

## スクリプト
- 適当なのであんまり見ないでください
- ビープ音関数参考: [http://var.blog.jp/archives/84027358.html](http://var.blog.jp/archives/84027358.html "ブラウザ JavaScript で通知音を鳴らす")

```javascript
// see http://var.blog.jp/archives/84027358.html
function sound(type, sec) {
  const ctx = new AudioContext()
  const osc = ctx.createOscillator()
  osc.type = type
  osc.connect(ctx.destination)
  osc.start()
  osc.stop(sec)
}

const elements = document.getElementsByClassName('resale-event-card-right collapsed');
setTimeout(() => {
  for (const element of elements) {
    element.click();
  }

  if (document.getElementsByClassName('button_gray_fill no-pointer-event').length !== 8) {
    sound('square', 0.3);
    const buttons = document.getElementsByClassName('button_red_fill');
    buttons[0].click();
  } else {
    window.location.reload();
  }
}, getRandomInt(3, 4)*500);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min) + min;
}
```

- なんとなくリロードタイミングに若干ゆらぎをもたせたが、一律2,000ミリ秒でも良さそう