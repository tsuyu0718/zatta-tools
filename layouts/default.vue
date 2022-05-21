<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      disable-resize-watcher
      disable-route-watcher
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-btn
        href="https://twitter.com/2utsu"
        text
        color="link"
        min-height="20"
        class="x-small post-link align-center py-1 px-2 ml-4"
      >
        <v-icon>mdi-twitter</v-icon>twitter
      </v-btn>
      <span class="ml-2">
        commit: {{ commitHash }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      commitHash: process.env.NUXT_ENV_GIT_COMMIT_HASH,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'ホーム',
          to: '/',
        },
        {
          icon: 'mdi-message-text',
          title: 'チャット生成',
          to: '/chat',
        },
        {
          icon: 'mdi-map',
          title: 'モブハントマップ',
          to: '/mobmap',
        },
        {
          icon: 'mdi-rocket',
          title: '絶アレキ固定覚書',
          to: '/tea',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ものおき',
    }
  },
}
</script>
