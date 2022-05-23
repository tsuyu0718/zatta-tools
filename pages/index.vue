<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          おしながき
        </v-card-title>
        <v-card-text class="pb-0">
          <p>
            適当に作ったものたち・・・
          </p>
        </v-card-text>
        
        <v-list>
          <v-list-item-group
            color="primary"
          >
            <v-list-item two-line
              to="/chat"
              router
            >
              <v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-message-text</v-icon>
                </v-list-item-action>
                <v-list-item-title>チャット生成ツール</v-list-item-title>
                <v-list-item-subtitle>ゲーム中のチャットをコマンド化したりマクロを作ったりするやつ</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line
              to="/mobmap"
              router
            >
              <v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-map</v-icon>
                </v-list-item-action>
                <v-list-item-title>モブハントマップ</v-list-item-title>
                <v-list-item-subtitle>暁月モブハン(既にその機能が参考元サイトにあった...)</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line
              to="/tea"
              router
            >
              <v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-rocket</v-icon>
                </v-list-item-action>
                <v-list-item-title>絶アレキ固定覚書</v-list-item-title>
                <v-list-item-subtitle>絶アレキがんばろう</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line
              to="/healer"
              router
            >
              <v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-hospital-box-outline</v-icon>
                </v-list-item-action>
                <v-list-item-title>ヒーラー魔法/スキル覚書</v-list-item-title>
                <v-list-item-subtitle>ケアルケアルケアル</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend ({
  components: {},
});
</script>
