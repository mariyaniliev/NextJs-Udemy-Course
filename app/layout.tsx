import { ReactNode } from 'react';
import Link from 'next/link'
import './globals.css'

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({children}:LayoutProps){
    return(
        <html lang="en" suppressHydrationWarning={true}>
            <body  suppressHydrationWarning={true} >
                <header>
                  <nav>
                    <ul>
                      <li>
                        <Link href="/"> Home</Link>
                      </li>
                      <li>
                        <Link href="/reviews"> Reviews</Link>
                      </li>
                      <li>
                        <Link href="/about"> About</Link>
                      </li>
                    </ul>
                  </nav>
                </header>
                <main>
                  {children}
                </main>
                <footer>
                  Game data and images courtesy 
                  of <a href="https://rawg.io" target='_blank'>RAWG</a>
                </footer>
                
            </body>
        </html>
    )
}