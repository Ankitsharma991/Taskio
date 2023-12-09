import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: React.ReactElement }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
