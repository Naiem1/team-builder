import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
