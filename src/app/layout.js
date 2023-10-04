import { Navbar, Footer } from '@/components';
import './globals.css'
import { Montserrat  } from 'next/font/google'
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';

const montserrat = Montserrat({
  weight: ['300', '400', '500',  '700'],
  subsets: ['cyrillic'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});


export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='container'>
              <div className='wrapper'>
                <Navbar />
                  {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
