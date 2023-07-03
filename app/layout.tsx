import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode 
}

export default function RootLayout({children}:LayoutProps){
    return(
        <html lang="en" suppressHydrationWarning={true}>
            <body  suppressHydrationWarning={true} >
                <header>
                  [header]
                </header>
                <main>
                  {children}
                </main>
                <footer>
                  [footer]
                </footer>
                
            </body>
        </html>
    )
}