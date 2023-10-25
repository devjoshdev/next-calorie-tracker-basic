export const metadata = {
  title: 'Calorie Tracker',
  description: 'Generated by Joshy',
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
