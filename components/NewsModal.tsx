'use client';

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag, Share2, Bookmark, Link as LinkIcon, Check } from "lucide-react";
import { toast } from "sonner";

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  news: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
    content: string;
  };
}

export function NewsModal({ isOpen, onClose, news }: NewsModalProps) {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: news.title,
          text: news.excerpt,
          url: `${window.location.origin}/noticias/${news.id}`,
        });
      } else {
        setShowShareOptions(true);
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  };

  const copyLink = async () => {
    try {
      const link = `${window.location.origin}/noticias/${news.id}`;
      await navigator.clipboard.writeText(link);
      setCopied(true);
      toast.success('Link copiado com sucesso!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar link:', error);
      toast.error('Erro ao copiar link');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="relative h-64 rounded-lg overflow-hidden mb-6">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${news.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                {news.category}
              </span>
            </div>
          </div>
          <DialogTitle className="text-3xl font-bold text-gradient">{news.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* News Info */}
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-purple-600" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-purple-600" />
              <span>{news.readTime} de leitura</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">{news.excerpt}</p>
            <div className="space-y-4">
              {news.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-6 border-t">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5" />
                </Button>
                {showShareOptions && (
                  <div className="absolute bottom-full left-0 mb-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50">
                    <div className="space-y-2">
                      <button
                        onClick={copyLink}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <LinkIcon className="h-4 w-4" />
                        <span>{copied ? 'Link copiado!' : 'Copiar link'}</span>
                        {copied && <Check className="h-4 w-4 text-green-500 ml-auto" />}
                      </button>
                      <button
                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${window.location.origin}/noticias/${news.id}`)}`, '_blank')}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span>Compartilhar no Facebook</span>
                      </button>
                      <button
                        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${window.location.origin}/noticias/${news.id}`)}&text=${encodeURIComponent(news.title)}`, '_blank')}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        <span>Compartilhar no Twitter</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bookmark className="h-5 w-5" />
              </Button>
            </div>
            <Button 
              className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-yellow-500 text-white hover:shadow-lg transition-all duration-300 hover-scale"
              onClick={onClose}
            >
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 