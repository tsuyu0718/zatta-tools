<template>
  <v-row justify="center" align="center">
    <v-col cols="12">

        <v-card>
          <v-card-title class="headline">
            モブハントマップ
          </v-card-title>

          <v-card-text class="pb-0">
            <p>
              参考：<a href="http://yumemage.blog.fc2.com/blog-entry-506.html">【FF14】パッチ6.0 暁月エリアのモンスター配置場所 | 夢でもFF14</a>
            </p>
          <!-- <template v-slot:extension> -->
            <v-tabs
              fixed-tabs
              v-model="selectArea"
              show-arrows
            >
              <v-tabs-slider color="yellow"></v-tabs-slider>

              <v-tab
                v-for="item in areas.map((area) => area.nameJ)"
                :key="item"
              >
                {{ item }}
              </v-tab>
            </v-tabs>
          <!-- </template> -->

          <v-tabs-items v-model="selectArea">
            <!-- TODO: v-forのせいでDOMレンダリング先行を強制させられない？調査 -->
            <!-- <v-tab-item
              v-for="item in areas"
              :key="item.nameE"
              eager
            >
              <v-card-actions
                class="my-0 py-0"
              >
                <v-select
                  v-model="select[item.nameE]"
                  @change="listener($event, item.nameE)"
                  :items="mobs[item.nameE]"
                  item-text="name"
                  item-value="name"
                  :menu-props="{ maxHeight: '500' }"
                  :label="item.nameJ + 'のモブ'"
                  multiple
                  persistent-hint
                  return-object
                  chips
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index == 0">
                      <span>{{ item.name }}</span>
                    </v-chip>
                    <span
                      v-if="index === 1"
                      class="grey--text text-caption"
                    >
                      (+{{ select[item.nameE].length - 1 }} others)
                    </span>
                  </template>
                </v-select>

              </v-card-actions>
              <canvas :ref="item.nameE" :width="width" :height="width" class="canvas"></canvas>
            </v-tab-item> -->

            <!-- ラヴィリンソス -->
            <v-tab-item eager> 
              <v-card-actions
                class="my-0 py-0"
              >
                <v-select
                  v-model="select['Labyrinthos']"
                  @change="listener($event, 'Labyrinthos')"
                  :items="mobs['Labyrinthos']"
                  item-text="name"
                  item-value="name"
                  :menu-props="{ maxHeight: '500' }"
                  label="ラヴィリンソスのモブ名"
                  multiple
                  persistent-hint
                  return-object
                  chips
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index == 0">
                      <span>{{ item.name }}</span>
                    </v-chip>
                    <span
                      v-if="index === 1"
                      class="grey--text text-caption"
                    >
                      (+{{ select['Labyrinthos'].length - 1 }} others)
                    </span>
                  </template>
                </v-select>

              </v-card-actions>
              <canvas ref="Labyrinthos" :width="width * adjust" :height="width * adjust" class="canvas"></canvas>
             </v-tab-item>

            <!-- サベネア島 -->
            <v-tab-item eager>
              <v-card-actions
                class="my-0 py-0"
              >
                <v-select
                  v-model="select['Thavnair']"
                  @change="listener($event, 'Thavnair')"
                  :items="mobs['Thavnair']"
                  item-text="name"
                  item-value="name"
                  :menu-props="{ maxHeight: '500' }"
                  label="サベネア島のモブ名"
                  multiple
                  persistent-hint
                  return-object
                  chips
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index == 0">
                      <span>{{ item.name }}</span>
                    </v-chip>
                    <span
                      v-if="index === 1"
                      class="grey--text text-caption"
                    >
                      (+{{ select['Thavnair'].length - 1 }} others)
                    </span>
                  </template>
                </v-select>

              </v-card-actions>
              <canvas ref="Thavnair" :width="width" :height="width" class="canvas"></canvas>
            </v-tab-item>

            <!-- ガレマルド -->
            <v-tab-item eager>
              <v-alert
                dense
                class="my-2"
                type="error"
              >
                未実装です。まだ動きません！
              </v-alert>
              <v-card-actions
                class="my-0 py-0"
              >
                <v-select
                  disabled
                  v-model="select['Garlemald']"
                  @change="listener($event, 'Garlemald')"
                  :items="mobs['Garlemald']"
                  item-text="name"
                  item-value="name"
                  :menu-props="{ maxHeight: '500' }"
                  label="ガレマルドのモブ名"
                  multiple
                  persistent-hint
                  return-object
                  chips
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index == 0">
                      <span>{{ item.name }}</span>
                    </v-chip>
                    <span
                      v-if="index === 1"
                      class="grey--text text-caption"
                    >
                      (+{{ select['Garlemald'].length - 1 }} others)
                    </span>
                  </template>
                </v-select>

              </v-card-actions>
              <canvas ref="Garlemald" :width="width" :height="width" class="canvas"></canvas>
            </v-tab-item>

            <!-- 嘆きの海 -->
            <v-tab-item eager>
              <v-alert
                dense
                class="my-2"
                type="error"
              >
                未実装です。まだ動きません！
              </v-alert>
              <v-card-actions
                class="my-0 py-0"
              >
                <v-select
                  disabled
                  v-model="select['Mare_Lamentorum']"
                  @change="listener($event, 'Mare_Lamentorum')"
                  :items="mobs['Mare_Lamentorum']"
                  item-text="name"
                  item-value="name"
                  :menu-props="{ maxHeight: '500' }"
                  label="嘆きの海のモブ"
                  multiple
                  persistent-hint
                  return-object
                  chips
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index == 0">
                      <span>{{ item.name }}</span>
                    </v-chip>
                    <span
                      v-if="index === 1"
                      class="grey--text text-caption"
                    >
                      (+{{ select['Mare_Lamentorum'].length - 1 }} others)
                    </span>
                  </template>
                </v-select>

              </v-card-actions>
              <canvas ref="Mare_Lamentorum" :width="width" :height="width" class="canvas"></canvas>
            </v-tab-item>

            <!-- エルピス -->
            <v-tab-item eager>
              <v-alert
                dense
                class="my-2"
                type="error"
              >
                未実装です。まだ動きません！
              </v-alert>
              <v-card-actions
                class="my-0 py-0"
              >
                <v-select
                  disabled
                  v-model="select['Elpis']"
                  @change="listener($event, 'Elpis')"
                  :items="mobs['Elpis']"
                  item-text="name"
                  item-value="name"
                  :menu-props="{ maxHeight: '500' }"
                  label="エルピスのモブ"
                  multiple
                  persistent-hint
                  return-object
                  chips
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index == 0">
                      <span>{{ item.name }}</span>
                    </v-chip>
                    <span
                      v-if="index === 1"
                      class="grey--text text-caption"
                    >
                      (+{{ select['Elpis'].length - 1 }} others)
                    </span>
                  </template>
                </v-select>

              </v-card-actions>
              <canvas ref="Elpis" :width="width" :height="width" class="canvas"></canvas>
            </v-tab-item>

            <!-- ウルティマ・トゥーレ -->
            <v-tab-item eager>
              <v-alert
                dense
                class="my-2"
                type="error"
              >
                未実装です。まだ動きません！
              </v-alert>
              <v-card-actions
                class="my-0 py-0"
              >
                <v-select
                  disabled
                  v-model="select['Ultima_Thule']"
                  @change="listener($event, 'Ultima_Thule')"
                  :items="mobs['Ultima_Thule']"
                  item-text="name"
                  item-value="name"
                  :menu-props="{ maxHeight: '500' }"
                  label="ウルティマ・トゥーレのモブ"
                  multiple
                  persistent-hint
                  return-object
                  chips
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index == 0">
                      <span>{{ item.name }}</span>
                    </v-chip>
                    <span
                      v-if="index === 1"
                      class="grey--text text-caption"
                    >
                      (+{{ select['Ultima_Thule'].length - 1 }} others)
                    </span>
                  </template>
                </v-select>

              </v-card-actions>
              <canvas ref="Ultima_Thule" :width="width" :height="width" class="canvas"></canvas>
            </v-tab-item>

          </v-tabs-items>
          </v-card-text>
        </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import mobs from '../assets/mobs.json'
export type Mobs = typeof mobs;
import areas from '../assets/maps.json'
export type Area = typeof areas;
import aetherytes from '../assets/aetheryte.json'
export type Aetherytes = typeof aetherytes;

type dataType = {
  select: {[name: string]: Mob[]},
  mobs: Mobs,
  canvas: {[name: string]: any},
  context: {[name: string]: any},
  img: {[name: string]: any},
  maps: string[],
  px: number,
  areas: Area,
  width: number,
  adjust: number,
  aetherytes: Aetherytes,
  selectArea: any
};

type Mob = {
  name: string,
  coordinate: number[],
  order: number
}

export default Vue.extend ({
  components: {},
  data(): dataType{
    return {
      select: {
        Labyrinthos: [],
        Thavnair: [],
        Garlemald: [],
        Mare_Lamentorum: [],
        Elpis: [],
        Ultima_Thule: []
      },
      mobs: mobs,
      canvas: {},
      context: {},
      img: {},
      maps: Object.keys(mobs),
      px: 2,
      areas: areas,
      width: 700,
      adjust: 1,
      aetherytes: aetherytes,
      selectArea: 0
    }
  },
  mounted() {
    this.$nextTick( () => {
      window.addEventListener('resize', this.handleResize);
      for (const [i, map] of this.maps.entries())  {
        let self = this;
        self.canvas[map] = self.$refs[map]
      if (self.canvas[map] === null || self.canvas[map] === undefined) return;
        self.context[map] = self.canvas[map].getContext("2d");
        self.img[map] = new Image();
        self.img[map].src = '/zatta-tools/map/' + map + '.png';
        self.img[map].onload = function() {
          self.initializeMap(self, map);
        }
        this.canvas[map] = self.canvas[map];
        this.context[map] = self.context[map];
        this.img[map] = self.img[map];
      }
    });
  },
  methods: {
    draw(map: string, mob: Mob) {
      let ctx = this.context[map];
      ctx.lineWidth = this.px;
      ctx.fillStyle = "rgba(0, 180, 255, 0.3)";

      // 矩形の描画
      // 1箇所以上に描画する場合
      if (mob.coordinate.length > 4) {
        for (let i = 0; i < mob.coordinate.length / 4; i++ ) {
          const tmpCoordinate = mob.coordinate.slice(i * 4, (i + 1) * 4);
          this.strokeRoundRect(ctx, tmpCoordinate[0] * this.adjust, tmpCoordinate[1] * this.adjust, tmpCoordinate[2] * this.adjust, tmpCoordinate[3] * this.adjust, 5);
          this.fillRoundRect(ctx, tmpCoordinate[0] * this.adjust, tmpCoordinate[1] * this.adjust, tmpCoordinate[2] * this.adjust, tmpCoordinate[3] * this.adjust, 5);
          this.drawText(ctx, mob, tmpCoordinate[0] * this.adjust, tmpCoordinate[1] * this.adjust);
        }
      } else {
        this.strokeRoundRect(ctx, mob.coordinate[0] * this.adjust, mob.coordinate[1] * this.adjust, mob.coordinate[2] * this.adjust, mob.coordinate[3] * this.adjust, 5);
        this.fillRoundRect(ctx, mob.coordinate[0] * this.adjust, mob.coordinate[1] * this.adjust, mob.coordinate[2] * this.adjust, mob.coordinate[3] * this.adjust, 5);
        this.drawText(ctx, mob, mob.coordinate[0] * this.adjust, mob.coordinate[1] * this.adjust);
      }
    },
    drawText(ctx: any, mob: Mob, textX: number, textY: number) {
      // テキストの描画
      ctx.save();
      const fontSize = 13 * this.adjust;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = "5";
      ctx.lineJoin = 'round';
      ctx.fillStyle = "#03f";
      ctx.font = "Bold " + fontSize + "px sans-serif";
      let adjust = 0;
      if (mob.order > 0) {
        adjust += fontSize * mob.order;
      }
      for (const [i, text] of mob.name.split('\n').entries()) {
        const x = textX + i * fontSize;
        const y = textY + i * fontSize;
        ctx.strokeText(text, x, y - adjust - 5);
        ctx.fillText(text, x, y - adjust - 5);
      }
      ctx.restore();
    },
    listener(event: any, mapName: string) {
      // 対象canvasを一旦クリア
      let ctx = this.context[mapName];
      ctx.clearRect(0, 0, this.width, this.width);
      let self = this;
      self.initializeMap(self, mapName);

      // 対象canvasを描画
      if (event.length !== 0) {
        for (const item of this.select[mapName]) {
          this.draw(mapName, item);
        }
      }
    },
    initializeMap(self: any, map: any) {
      self.context[map].save();
      self.context[map].drawImage(self.img[map], 0, 0, this.width * this.adjust, this.width * this.adjust);
      // エーテライトのラベル描画
      const key: keyof typeof aetherytes = map as any;
      for (const area of self.aetherytes[key]) {
        const textX = area.coordinate[0] * this.adjust;
        const textY = area.coordinate[1] * this.adjust;
        this.drawLabelText(self, area.name, textX, textY, map);
      }
      self.context[map].restore();
    },
    drawLabelText(self: any, text: string, textX: number, textY: number, map: string) {
      const fontSize = 10 * this.adjust;
      self.context[map].font = "Bold " + fontSize + "px sans-serif";
      let measured = self.context[map].measureText(text);
      /*先に背景ボックスを描画*/
      const lineWith = fontSize / 2;
      self.context[map].fillStyle = 'rgba(0, 80, 50, 0.7)';
      self.context[map].fillRect(textX - measured.width / 2 - fontSize / 2, textY, measured.width + fontSize, fontSize * 2);
      
      self.context[map].fillStyle = 'rgb(255, 255, 255)';
      self.context[map].textBaseline = 'middle';
      self.context[map].fillText(text, textX - measured.width / 2, textY + lineWith * 2);
    },
    // https://qiita.com/PG0721/items/6fb9e9c02675be832402
    /**
     * 角が丸い四角形のパスを作成する
     * @param  {CanvasRenderingContext2D} ctx コンテキスト
     * @param  {Number} x   左上隅のX座標
     * @param  {Number} y   左上隅のY座標
     * @param  {Number} w   幅
     * @param  {Number} h   高さ
     * @param  {Number} r   半径
     */
    createRoundRectPath(ctx: any, x: any, y: any, w: any, h: any, r: any) {
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
    },
    /**
     * 角が丸い四角形を塗りつぶす
     * @param  {CanvasRenderingContext2D} ctx コンテキスト
     * @param  {Number} x   左上隅のX座標
     * @param  {Number} y   左上隅のY座標
     * @param  {Number} w   幅
     * @param  {Number} h   高さ
     * @param  {Number} r   半径
     */
    fillRoundRect(ctx: any, x: any, y: any, w: any, h: any, r: any) {
      this.createRoundRectPath(ctx, x, y, w, h, r);
      ctx.fill();
    },
    /**
     * 角が丸い四角形を描画
     * @param  {CanvasRenderingContext2D} ctx コンテキスト
     * @param  {Number} x   左上隅のX座標
     * @param  {Number} y   左上隅のY座標
     * @param  {Number} w   幅
     * @param  {Number} h   高さ
     * @param  {Number} r   半径
     */
    strokeRoundRect(ctx: any, x: any, y: any, w: any, h: any, r: any) {
      this.createRoundRectPath(ctx, x, y, w, h, r);
      ctx.stroke();
    },
    handleResize() {
      if (window.innerWidth < 800) {  // レスポンシブもどき
        this.adjust = 0.4;
      } else {
        this.adjust = 1.0;
      }
      for (const map of Object.keys(this.mobs)) {
        this.listener(['DUMMY'], map);  // [0] is dummy
      }
    },
  },
  watch: {
    select: {
      handler(val: Mob[], oldVal: Mob[]) {
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize);
  }
});
</script>
