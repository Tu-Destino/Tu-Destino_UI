
import verifyPacth from "@/helpers/LoadPacth";


verifyPacth;

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
