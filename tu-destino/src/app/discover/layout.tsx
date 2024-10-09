import '../../styles/globals.css'

export default function layout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <>
      {children}
    </>
  )
}
