/**
 * 角が丸い四角形のパスを作成する
 * @param  {CanvasRenderingContext2D} ctx コンテキスト
 * @param  {Number} x   左上隅のX座標
 * @param  {Number} y   左上隅のY座標
 * @param  {Number} w   幅
 * @param  {Number} h   高さ
 * @param  {Number} r   半径
 */
function createRoundRectPath(ctx: any, x: any, y: any, w: any, h: any, r: any) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arc(x + w - r, y + r, r, Math.PI * (3 / 2), 0, false);
  ctx.lineTo(x + w, y + h - r);
  ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * (1 / 2), false);
  ctx.lineTo(x + r, y + h);
  ctx.arc(x + r, y + h - r, r, Math.PI * (1 / 2), Math.PI, false);
  ctx.lineTo(x, y + r);
  ctx.arc(x + r, y + r, r, Math.PI, Math.PI * (3 / 2), false);
  ctx.closePath();
}
/**
 * 角が丸い四角形を描画
 * @param  {CanvasRenderingContext2D} ctx コンテキスト
 * @param  {Number} x   左上隅のX座標
 * @param  {Number} y   左上隅のY座標
 * @param  {Number} w   幅
 * @param  {Number} h   高さ
 * @param  {Number} r   半径
 */
function strokeRoundRect(ctx: any, x: any, y: any, w: any, h: any, r: any) {
  createRoundRectPath(ctx, x, y, w, h, r);
  ctx.stroke();
}
    
export default (context: any, inject: any) => {
  inject('strokeRoundRect', strokeRoundRect);
}