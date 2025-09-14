# 🦊 F.O.X

**F** – Future-ready
**O** – Open & Cross-platform
**X** – eXpressive

## 🔦 Sobre

Um aplicativo para **expressar ideias e criatividade** com foco na comunidade **Gamer**.
Construído em um monorepo moderno com **Expo + Next.js**.

## 📦 Tecnologias principais

- ⚡ Expo SDK 53 (mobile)
- ⚡ Next.js 15 (web)
- ⚡ React 19 + React Compiler
- ⚡ Solito (navegação cross-platform)
- ⚡ Moti (animações fluidas)
- ⚡ React Navigation 7

## 🏁 Executar

- Instale o package manager: `yarn`

- Para rodar a Web (NextJS) execute: `yarn web`
  - Depois disso vai ser executado automaticamente: `cd apps/next && yarn next`
- Para rodar a Nativo (Expo) execute: `yarn mob`
  - Depois disso vai ser executado automaticamente: `cd apps/expo && yarn start`

## 🆕 Adicionar dependências

### Dependências (cross platform)

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Dependências Nativas

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

## 📌 Roadmap

- 🔥 Autenticação de usuários
- 🔥 Perfil com customização gamer
- 🔥 Sistema de posts (texto, imagem, vídeo)
- 🔥 Integração com comunidade web + mobile
- 🔥 Avatares 3D (com threejs)
- 🔥 Sistema de live (compartilhar tela quando esta jogando)

## 🎙 Créditos

Baseado no boilerplate Solito criado por Fernando Rojo
Customizado e expandido para o F.O.X 🦊.
