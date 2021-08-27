<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

        <v-card>
          <v-card-title class="headline">
            チャット生成ツール
          </v-card-title>
          <v-card-text class="pb-0">
            <p>
              注意：変換すると勝手にクリップボードにコピーします。
            </p>
            <p>
              処理前の文章
            </p>
            <v-textarea
              outlined
              name="input1"
              label="処理したい文章をここに入れる"
              row-height="15"
              v-model="beforeText"
              :rules="rule"
              ref="beforeText"
            ></v-textarea>
          </v-card-text>
          <v-card-actions
            class="my-0 py-0"
          >
            <v-spacer />
            <v-checkbox
              v-model="isFromParty"
              :label="'パーティーチャットからの発言'">
            </v-checkbox>
            <v-spacer />
            <v-select
              :items="ses"
              v-model="selectedSe"
              label="SE"
              dense
              outlined
              style="max-width: 100px;"
              class="mr-2 pt-6"
            ></v-select>
            <v-btn
              class="mx-2 mr-10"
              fab
              dark
              small
              color="pink"
              @click="insertSe(selectedSe)"
            >
              <v-icon dark>
                mdi-music-note
              </v-icon>
            </v-btn>
            <v-spacer />
          </v-card-actions>
          <v-card-actions>
            <v-spacer />
                <v-btn color="primary" @click="formatParty()">
                  <v-icon class="mr-1">mdi-arrow-down</v-icon> Party
                </v-btn>
                <v-btn color="primary" @click="formatEcho()">
                  <v-icon class="mr-1">mdi-arrow-down</v-icon> Echo
                </v-btn>
            <v-spacer />
              </v-card-actions>
        </v-card>
        <v-card>
          <v-card-text>
            <p>
              処理後の文章
            </p>
            <v-textarea
              outlined
              name="input2"
              label="処理後の文章がここに入る"
              row-height="15"
              v-model="afterText"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
              <v-btn color="primary" @click="writeToClipboard()" class="mb-3">
                <v-icon class="mr-1">mdi-clipboard-text-outline</v-icon> Copy!
              </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
    </v-col>
    <v-snackbar v-model="snackbar">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="snackbar = false"
          :timeout=1000
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

type dataType = {
  afterText: string;
  beforeText: string;
  rule: any;
  snackbar: boolean;
  text: string;
  ses: string[];
  selectedSe: string;
  isFromParty: boolean;
}

export default Vue.extend ({
  components: {},
  data(): dataType {
    return {
      afterText: '',
      beforeText: '',
      rule: [(v: any) => v.split('\n').length <= 15 || '15行を超えています(このまま普通に処理はできます)'],
      snackbar: false,
      text: `処理後のテキストをコピーしました！`,
      ses: ['1', '2','3','4','5','6','7','8','9','10','11','12', '13', '14', '15'],
      selectedSe: '5',
      isFromParty: false
    };
  },
  methods: {
    removeWhiteSpace(str: string): string {
      console.log(this.beforeText)
      return str.replace(/\n\n/g, '');
    },
    formatParty(): void {
      let strRemovedWhiteSpace = this.removeWhiteSpace(this.beforeText);
      if (this.isFromParty) {
        strRemovedWhiteSpace = this.substringSpeakerName(strRemovedWhiteSpace);
      }
      this.afterText = '/p ' + strRemovedWhiteSpace.replace(/\n/g, '\n/p ');
      this.writeToClipboard();
      return;
    },
    formatEcho(): void {
      let strRemovedWhiteSpace = this.removeWhiteSpace(this.beforeText);
      if (this.isFromParty) {
        strRemovedWhiteSpace = this.substringSpeakerName(strRemovedWhiteSpace);
      }
      this.afterText = '/e ' + strRemovedWhiteSpace.replace(/\n/g, '\n/e ');
      this.writeToClipboard();
      return;
    },
    writeToClipboard(): void {
      navigator.clipboard.writeText(this.afterText).catch((e) => {
        console.error(e);
      });
      this.snackbar = true;
      return;
    },
    insertSe(seNum: string): void {
      const se = ` <se.${seNum}>`;
      var area = (this.$refs.beforeText as Vue).$refs.input as HTMLInputElement;
      if (area.selectionStart !== null) {
      this.beforeText =
          area.value.substr(0, area.selectionStart)
          + se
          + area.value.substr(area.selectionStart);
      }
      return;
    },
    substringSpeakerName(text: string): string {
      return text.substring(text.indexOf(')') + 2);
    }
  },
});
</script>
