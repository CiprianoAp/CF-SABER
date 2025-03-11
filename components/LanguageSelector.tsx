'use client';

import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const languages = {
  pt: 'Português',
  en: 'English',
};

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState('pt');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">{languages[currentLang as keyof typeof languages]}</span>
          <span className="sm:hidden">PT</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px]">
        <DropdownMenuItem 
          onClick={() => setCurrentLang('pt')}
          className="cursor-pointer"
        >
          Português
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setCurrentLang('en')}
          className="cursor-pointer"
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 