
import verifyPacth from "@/helpers/LoadPath";


verifyPacth;

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
