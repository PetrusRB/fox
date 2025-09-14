const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

export default {
  // Modos Light/Dark
  light: {
    text: '#2ECC71', // texto principal (verde)
    textSecondary: '#4A4A4A', // texto secundário / labels
    background: '#f5f5f5', // fundo principal
    backgroundSidebar: '#E6F8EA', // fundo da sidebar light (verde suave)
    card: '#f5f5f5', // fundo de cards
    tint: tintColorLight, // links / botões
    tabIconDefault: '#8e8e93', // ícones inativos
    tabIconSelected: '#2ECC71', // ícones ativos
    tabBarBackground: '#ffffff',
    tabBarShadow: '#00000033',
    desactived: '#A0A0A0',
    border: '#D1D1D1',
    accent: '#A0FFA0', // hover / feedback
    shadow: '#00000033',
    primaryText: '#1c1c1e', // texto principal mais escuro para contraste
    icon: '#2ECC71', // ícones na sidebar e botões
  },
  dark: {
    text: '#2ECC71',
    textSecondary: '#C4C4C4',
    background: '#121212',
    backgroundSidebar: '#1c1c1e', // fundo da sidebar dark
    card: '#121212',
    tint: tintColorDark,
    tabIconDefault: '#8e8e93',
    tabIconSelected: '#2ECC71',
    tabBarBackground: '#1c1c1e',
    tabBarShadow: '#00000055',
    desactived: '#777777',
    border: '#2c2c2e',
    accent: '#70FF70',
    shadow: '#00000055',
    primaryText: '#FFFFFF', // texto principal no dark mode
    icon: '#2ECC71', // ícones
  },

  // Cores gerais
  primary: '#2ECC71',
  secondary: '#FFFFFF',
  zinc: '#1c1c1e',
  accent: '#A0FFA0',
  error: '#f44336',
  accentDark: '#70FF70',
  shadow: '#00000033',
  border: '#D1D1D1',
  borderDark: '#2c2c2e',
  backgroundCard: '#fdfefd',
  buttonBackground: '#e7e7e7',
  buttonBackgroundDark: '#0e0e0f',
  backgroundCardDark: '#1c1c1e',
  textSecondary: '#4A4A4A',
  textSecondaryDark: '#C4C4C4',
  backgroundSidebar: '#E6F8EA',
  backgroundSidebarDark: '#1c1c1e',
  primaryText: '#1c1c1e',
  primaryTextDark: '#FFFFFF',
  icon: '#2ECC71',
}
