'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowRight
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular uma chamada de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Aqui você implementaria a lógica real de autenticação
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-grid-pattern opacity-10"></div>
      
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Seção de Imagem e Mensagem */}
        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/education-bg.jpg"
              alt="Educação profissional"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-20"
            />
          </div>
          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-3xl font-bold">Bem-vindo à Plataforma Educacional</h2>
            <p className="text-slate-300 text-lg max-w-md">
              Acesse sua área exclusiva e aproveite todo o conteúdo disponível para sua formação profissional
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold">100+</h3>
                <p className="text-sm text-slate-300">Cursos Disponíveis</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold">5000+</h3>
                <p className="text-sm text-slate-300">Alunos Formados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de Login */}
        <Card className="w-full p-8 shadow-xl relative overflow-hidden bg-white/80 backdrop-blur-sm">
          {/* Cabeçalho */}
          <div className="text-center mb-8 relative">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Área do Estudante</h1>
            <p className="text-slate-600">Faça login para acessar sua conta</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="pl-10 bg-white border-slate-200"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 bg-white border-slate-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember" className="text-sm text-slate-600">
                  Lembrar-me
                </Label>
              </div>
              <Button
                variant="link"
                className="text-sm text-slate-700 hover:text-slate-900"
              >
                Esqueceu a senha?
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-800 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Entrando...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Entrar
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>
          </form>

          {/* Rodapé */}
          <div className="mt-8 text-center text-sm text-slate-600">
            <p>
              Ainda não tem uma conta?{' '}
              <Button
                variant="link"
                className="text-slate-800 hover:text-slate-900 p-0 font-semibold"
              >
                Cadastre-se
              </Button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
} 