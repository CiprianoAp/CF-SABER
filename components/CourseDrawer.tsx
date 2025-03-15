import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Clock, Users, BookMarked, GraduationCap, Calendar, Target, CheckCircle2 } from "lucide-react";

interface CourseDetails {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  students: string;
  startDate: string;
  instructor: string;
  price: string;
  objectives: string[];
  requirements: string[];
}

interface CourseDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  course: CourseDetails;
}

export function CourseDrawer({ isOpen, onClose, course }: CourseDrawerProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:w-[540px] overflow-y-auto">
        <SheetHeader className="space-y-4">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>
          <SheetTitle className="text-2xl font-bold">{course.title}</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Course Overview */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 bg-purple-50 p-3 rounded-lg">
              <Clock className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Duração</p>
                <p className="font-medium">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 p-3 rounded-lg">
              <BookMarked className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Nível</p>
                <p className="font-medium">{course.level}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 p-3 rounded-lg">
              <Users className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Alunos</p>
                <p className="font-medium">{course.students}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 p-3 rounded-lg">
              <Calendar className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Início</p>
                <p className="font-medium">{course.startDate}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Course Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Sobre o Curso</h3>
            <p className="text-gray-600 leading-relaxed">{course.description}</p>
          </div>

          <Separator />

          {/* Course Objectives */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Objetivos do Curso</h3>
            <ul className="space-y-2">
              {course.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Course Requirements */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Pré-requisitos</h3>
            <ul className="space-y-2">
              {course.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Course Instructor */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Instrutor</p>
              <p className="font-medium">{course.instructor}</p>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="sticky bottom-0 bg-white pt-4">
            <Separator className="mb-4" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Investimento</p>
                <p className="text-2xl font-bold text-purple-600">{course.price}</p>
              </div>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 