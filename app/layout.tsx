import '../styles/globals.css';
import '../styles/components.css';
import '../styles/hero.css';
import '../styles/forms.css';

export const metadata = {
  title: 'Sakura Institute of Technology | Admissions',
  description: 'Apply now to our premier B.Tech, AI, and Design programs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}