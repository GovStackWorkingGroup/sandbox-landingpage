import { type ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

const gsTheme: ThemeDefinition = {
  dark: false,
  colors: {
    'gs-black': '#000000',
    'gs-white': '#ffffff',
    'gs-primary': '#003087',
    'gs-primary-light': '#e6efff',
    'gs-primary-dark': '#0f3d51',
    'gs-disabled': '#7687a5',
    'gs-body': '#0f2e66',
    'gs-surface-light': '#f9fbff',
    'gs-green': '#3cd18c',
    'gs-orange': '#ffb4ab',
  },
}

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'gsTheme',
    themes: {
      gsTheme,
    },
  },
})
