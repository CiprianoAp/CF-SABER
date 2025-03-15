'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, CheckCircle2, BookOpen } from "lucide-react";

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    description: string;
    duration: string;
    students: string;
    level: string;
    modules: string[];
    benefits: string[];
  };
}

export function CourseModal({ isOpen, onClose, course }: CourseModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gradient">{course.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Course Info */}
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-purple-600" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-purple-600" />
              <span>{course.students} alunos</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-purple-600" />
              <span>{course.level}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Sobre o Curso</h3>
            <p className="text-gray-600">{course.description}</p>
          </div>

          {/* Modules */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-purple-600" />
              Módulos do Curso
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {course.modules.map((module, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span className="text-gray-700">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {course.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-4">
            <Button 
              className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-yellow-500 text-white hover:shadow-lg transition-all duration-300 hover-scale"
              onClick={onClose}
            >
              Inscreva-se Agora
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 