"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MapPin, 
  DollarSign, 
  Briefcase, 
  Clock, 
  Users, 
  Building2,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockJobDetails = {
  "1": {
    id: 1,
    title: "Desarrollador Full Stack Senior",
    company: "TechCorp",
    companyLogo: "",
    location: "Remoto",
    salary: "$80,000 - $120,000",
    industry: "Tecnología",
    seniority: "Senior",
    posted: "Hace 2 días",
    type: "Tiempo Completo",
    teamSize: "20-50 empleados",
    description: `
      Buscamos un Desarrollador Full Stack Senior con experiencia en tecnologías modernas 
      para unirse a nuestro equipo de ingeniería. Trabajarás en proyectos innovadores 
      que impactan a millones de usuarios.
    `,
    responsibilities: [
      "Diseñar y desarrollar aplicaciones web escalables",
      "Colaborar con equipos multidisciplinarios",
      "Realizar revisiones de código y mentorear a desarrolladores junior",
      "Optimizar el rendimiento de aplicaciones existentes",
      "Participar en la arquitectura de soluciones técnicas"
    ],
    requirements: [
      "5+ años de experiencia en desarrollo full stack",
      "Dominio de React, Node.js y TypeScript",
      "Experiencia con bases de datos SQL y NoSQL",
      "Conocimiento de prácticas de DevOps y CI/CD",
      "Excelentes habilidades de comunicación"
    ],
    benefits: [
      "Salario competitivo y bonos por desempeño",
      "100% trabajo remoto",
      "Seguro médico mayor",
      "15 días de vacaciones + días personales",
      "Presupuesto para capacitación y conferencias",
      "Equipo de trabajo de última generación"
    ],
    postedBy: {
      name: "Ana Martínez",
      role: "Reclutadora Senior",
      isAlumni: true
    }
  },
  "2": {
    id: 2,
    title: "Gerente de Marketing Digital",
    company: "Marketing Pro",
    companyLogo: "",
    location: "Ciudad de México",
    salary: "$60,000 - $90,000",
    industry: "Marketing",
    seniority: "Mid",
    posted: "Hace 1 semana",
    type: "Tiempo Completo",
    teamSize: "10-20 empleados",
    description: `
      Empresa líder en marketing digital busca Gerente para liderar estrategias 
      de marketing en múltiples canales digitales.
    `,
    responsibilities: [
      "Desarrollar estrategias de marketing digital",
      "Gestionar campañas en redes sociales y Google Ads",
      "Analizar métricas y ROI de campañas",
      "Coordinar equipo de marketing",
      "Crear reportes ejecutivos"
    ],
    requirements: [
      "3+ años de experiencia en marketing digital",
      "Conocimiento de Google Analytics y SEO",
      "Experiencia liderando equipos",
      "Inglés avanzado",
      "Certificaciones en marketing digital (deseable)"
    ],
    benefits: [
      "Prestaciones superiores",
      "Horario flexible",
      "Home office 2 días a la semana",
      "Vales de despensa",
      "Bono anual"
    ],
    postedBy: {
      name: "Carlos Ruiz",
      role: "Director de RH",
      isAlumni: false
    }
  }
};

const JobDetail = () => {
  const params = useParams();
  const id = params.id as string;
  const { toast } = useToast();
  const job = mockJobDetails[id as keyof typeof mockJobDetails];

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Vacante no encontrada</h1>
          <Button asChild>
            <Link href="/jobs">Volver a Vacantes</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    toast({
      title: "Aplicación enviada",
      description: "Tu solicitud ha sido enviada exitosamente. El reclutador revisará tu perfil pronto.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/jobs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Vacantes
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={job.companyLogo} />
                    <AvatarFallback>
                      <Building2 className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2">{job.title}</CardTitle>
                    <p className="text-xl text-muted-foreground mb-4">{job.company}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{job.seniority}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                      <Badge variant="outline">{job.industry}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{job.posted}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{job.teamSize}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Descripción del Puesto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Responsabilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requisitos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Beneficios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Aplicar a esta Vacante</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg" onClick={handleApply}>
                  Enviar Aplicación
                </Button>
                <Separator />
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✓ Tu perfil será revisado en 24-48 horas</p>
                  <p>✓ Recibirás notificaciones de seguimiento</p>
                  <p>✓ Puedes rastrear el estado en tu perfil</p>
                </div>
              </CardContent>
            </Card>

            {/* Posted By */}
            <Card>
              <CardHeader>
                <CardTitle>Publicado por</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {job.postedBy.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{job.postedBy.name}</p>
                    <p className="text-sm text-muted-foreground">{job.postedBy.role}</p>
                    {job.postedBy.isAlumni && (
                      <Badge variant="outline" className="mt-1">Exalumno</Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share */}
            <Card>
              <CardHeader>
                <CardTitle>Compartir Vacante</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full">
                  Compartir en la Comunidad
                </Button>
                <Button variant="outline" className="w-full">
                  Copiar Enlace
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;

