import { StylesProvider } from './styles-provider'
import { Layout } from 'app/layout'
import '../global.css'

export const metadata = {
  title: 'Fox Mídia',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Layout>
          <StylesProvider>{children}</StylesProvider>
        </Layout>
      </body>
    </html>
  )
}
