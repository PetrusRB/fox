// on Web, we don't use React Navigation, so we avoid the provider altogether
// instead, we just have a no-op here

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactElement
}) => <>{children}</>
