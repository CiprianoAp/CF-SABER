import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail, Phone, MapPin, Clock, GraduationCap, BookOpen, Users, Calendar, LogIn } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSelector } from '@/components/LanguageSelector';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SocialIcons } from '@/components/SocialIcons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Toaster } from "sonner";
import { NavLink } from "@/components/ui/nav-link";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CF-Saber - Curso de Agregação Pedagógica',
  description: 'Centro de formação pedagógica de excelência',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        {/* Top Info Bar */}
        <div className="bg-gradient-to-r from-purple-600 to-yellow-500 text-white py-2 hidden md:block animate-gradient">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center hover-lift">
                <Mail className="h-4 w-4 mr-2" />
                infor-cfsaber@gmail.com
              </span>
              <span className="flex items-center hover-lift">
                <Phone className="h-4 w-4 mr-2" />
                +244 936321139
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <span className="flex items-center hover-lift">
                  <MapPin className="h-4 w-4 mr-2" />
                  Talatona, Luanda-Angola
                </span>
                <span className="flex items-center hover-lift">
                  <Clock className="h-4 w-4 mr-2" />
                  Seg-Sex: 9:00 - 18:00
                </span>
              </div>
              <SocialIcons iconSize={18} variant="white" />
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 glass">
          <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gradient hover-scale">
              CF-Saber
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gradient">Sobre</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-gradient-to-r from-purple-600 to-yellow-500 animate-gradient">
                      <div className="grid gap-3 p-6 w-[400px]">
                        <div className="grid grid-cols-2 gap-4">
                          <Link href="/sobre" className="group block space-y-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
                            <div className="flex items-center gap-2 text-white">
                              <GraduationCap className="h-5 w-5" />
                              <span className="font-medium">Nossa História</span>
                            </div>
                            <p className="text-sm text-white/90">Conheça nossa trajetória e missão na educação.</p>
                          </Link>
                          <Link href="/sobre#equipe" className="group block space-y-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
                            <div className="flex items-center gap-2 text-white">
                              <Users className="h-5 w-5" />
                              <span className="font-medium">Equipe</span>
                            </div>
                            <p className="text-sm text-white/90">Nossa equipe de profissionais qualificados.</p>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gradient">Programa</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-gradient-to-r from-purple-600 to-yellow-500 animate-gradient">
                      <div className="grid gap-3 p-6 w-[400px]">
                        <div className="grid grid-cols-2 gap-4">
                          <Link href="/programa" className="group block space-y-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
                            <div className="flex items-center gap-2 text-white">
                              <BookOpen className="h-5 w-5" />
                              <span className="font-medium">Currículo</span>
                            </div>
                            <p className="text-sm text-white/90">Estrutura curricular e disciplinas.</p>
                          </Link>
                          <Link href="/programa#calendario" className="group block space-y-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
                            <div className="flex items-center gap-2 text-white">
                              <Calendar className="h-5 w-5" />
                              <span className="font-medium">Calendário</span>
                            </div>
                            <p className="text-sm text-white/90">Datas importantes e cronograma.</p>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/cursos" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-gradient hover:scale-105 transition-all duration-300 font-medium">
                        Cursos
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/docentes" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-gradient hover:scale-105 transition-all duration-300 font-medium">
                        Docentes
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contato" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-gradient hover:scale-105 transition-all duration-300 font-medium">
                        Contato
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/parceiros" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-gradient hover:scale-105 transition-all duration-300 font-medium">
                        Parceiros
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/noticias" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-gradient hover:scale-105 transition-all duration-300 font-medium">
                        Notícias
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-4">
                <LanguageSelector />
                <Button
                  className="bg-gradient-to-r from-purple-600 to-yellow-500 text-white hover:from-purple-700 hover:to-yellow-600 transition-all duration-300 button-glow"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Área do Aluno
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] glass">
                <nav className="flex flex-col gap-4">
                  <div className="border-b pb-4 mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Contato</h4>
                    <div className="space-y-3">
                      <p className="flex items-center text-sm hover-lift">
                        <Mail className="h-4 w-4 mr-2" />
                        contato@fc-saber.pt
                      </p>
                      <p className="flex items-center text-sm hover-lift">
                        <Phone className="h-4 w-4 mr-2" />
                        +351 123 456 789
                      </p>
                      <p className="flex items-center text-sm hover-lift">
                        <MapPin className="h-4 w-4 mr-2" />
                        Lisboa, Portugal
                      </p>
                    </div>
                  </div>
                  <div className="px-2 mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Redes Sociais</h4>
                    <SocialIcons />
                  </div>
                  <div className="flex items-center justify-between px-2 mb-2">
                    <span className="text-sm text-gray-500">Idioma</span>
                    <LanguageSelector />
                  </div>
                  <Link
                    href="/sobre"
                    className="block px-2 py-1 text-lg text-gradient hover:scale-105 transition-all duration-300"
                  >
                    Sobre
                  </Link>
                  <Link
                    href="/programa"
                    className="block px-2 py-1 text-lg text-gradient hover:scale-105 transition-all duration-300"
                  >
                    Programa
                  </Link>
                  <Link
                    href="/cursos"
                    className="block px-2 py-1 text-lg text-gradient hover:scale-105 transition-all duration-300"
                  >
                    Cursos
                  </Link>
                  <Link
                    href="/docentes"
                    className="block px-2 py-1 text-lg text-gradient hover:scale-105 transition-all duration-300"
                  >
                    Docentes
                  </Link>
                  <Link
                    href="/contato"
                    className="block px-2 py-1 text-lg text-gradient hover:scale-105 transition-all duration-300"
                  >
                    Contato
                  </Link>
                  <Link
                    href="/parceiros"
                    className="block px-2 py-1 text-lg text-gradient hover:scale-105 transition-all duration-300"
                  >
                    Parceiros
                  </Link>
                  <Link
                    href="/noticias"
                    className="block px-2 py-1 text-lg text-gradient hover:scale-105 transition-all duration-300"
                  >
                    Notícias
                  </Link>
                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-yellow-500 text-white hover:from-purple-700 hover:to-yellow-600 transition-all duration-300 button-glow">
                    <LogIn className="h-4 w-4 mr-2" />
                    Área do Aluno
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </header>
        {children}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 animate-gradient">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gradient">FC-Saber</h3>
              <p className="text-gray-400 mb-6">
                Excelência em formação pedagógica desde 2025.
              </p>
              <SocialIcons variant="white" className="mt-4" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gradient">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors hover-lift">Início</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition-colors hover-lift">Sobre</Link></li>
                <li><Link href="/programa" className="hover:text-white transition-colors hover-lift">Programa</Link></li>
                <li><Link href="/cursos" className="hover:text-white transition-colors hover-lift">Cursos</Link></li>
                <li><Link href="/noticias" className="hover:text-white transition-colors hover-lift">Notícias</Link></li>
                <li><Link href="/contato" className="hover:text-white transition-colors hover-lift">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gradient">Contato</h3>
              <address className="text-gray-400 not-italic">
                Talatona, Luanda-Angola<br />
                Luanda, Angola<br />
                infor-cfsaber@gmail.com<br />
                +244 936321139
              </address>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 FC-Saber. Todos os direitos reservados.</p>
          </div>
        </footer>
        <WhatsAppButton />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
