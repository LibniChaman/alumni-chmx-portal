"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";  
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  Users, 
  Building2,
  CheckCircle2,
  Bookmark,
  Share2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Datos unificados de trabajos con detalles completos
const mockJobs = [
  {
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
    description: `Buscamos un Desarrollador Full Stack Senior con experiencia en tecnologías modernas para unirse a nuestro equipo de ingeniería. Trabajarás en proyectos innovadores que impactan a millones de usuarios.`,
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
  {
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
    description: `Empresa líder en marketing digital busca Gerente para liderar estrategias de marketing en múltiples canales digitales.`,
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
  },
  {
    id: 3,
    title: "Analista de Datos Junior",
    company: "Data Insights",
    companyLogo: "",
    location: "Guadalajara",
    salary: "$40,000 - $60,000",
    industry: "Tecnología",
    seniority: "Junior",
    posted: "Hace 3 días",
    type: "Tiempo Completo",
    teamSize: "5-10 empleados",
    description: `Buscamos un Analista de Datos Junior para unirse a nuestro equipo de análisis. Trabajarás con grandes volúmenes de datos y ayudarás a tomar decisiones basadas en datos.`,
    responsibilities: [
      "Analizar datos y generar reportes",
      "Crear visualizaciones de datos",
      "Colaborar con equipos de negocio",
      "Mantener bases de datos",
      "Identificar tendencias y patrones"
    ],
    requirements: [
      "1-2 años de experiencia en análisis de datos",
      "Conocimiento de SQL y Python",
      "Experiencia con herramientas de visualización",
      "Habilidades analíticas fuertes",
      "Buenas habilidades de comunicación"
    ],
    benefits: [
      "Salario competitivo",
      "Capacitación continua",
      "Ambiente de trabajo colaborativo",
      "Crecimiento profesional",
      "Beneficios de ley"
    ],
    postedBy: {
      name: "Luis García",
      role: "Gerente de Datos",
      isAlumni: true
    }
  },
  {
    id: 4,
    title: "Product Manager",
    company: "Innovate Solutions",
    companyLogo: "",
    location: "Ciudad de México",
    salary: "$90,000 - $130,000",
    industry: "Tecnología",
    seniority: "Senior",
    posted: "Hace 1 día",
    type: "Tiempo Completo",
    teamSize: "50-100 empleados",
    description: `Buscamos un Product Manager con experiencia en productos digitales para liderar el desarrollo de nuevas funcionalidades y mejorar la experiencia del usuario.`,
    responsibilities: [
      "Definir la visión y estrategia del producto",
      "Colaborar con equipos de diseño y desarrollo",
      "Analizar métricas y KPIs del producto",
      "Gestionar el roadmap del producto",
      "Comunicar con stakeholders"
    ],
    requirements: [
      "5+ años de experiencia como Product Manager",
      "Experiencia con metodologías ágiles",
      "Habilidades analíticas y de resolución de problemas",
      "Excelente comunicación y liderazgo",
      "Conocimiento de herramientas de analytics"
    ],
    benefits: [
      "Salario competitivo",
      "Stock options",
      "Seguro médico premium",
      "Home office flexible",
      "Presupuesto para desarrollo profesional"
    ],
    postedBy: {
      name: "Patricia López",
      role: "VP de Producto",
      isAlumni: true
    }
  },
  {
    id: 5,
    title: "Diseñador UX/UI",
    company: "Creative Studio",
    companyLogo: "",
    location: "Remoto",
    salary: "$50,000 - $75,000",
    industry: "Tecnología",
    seniority: "Mid",
    posted: "Hace 4 días",
    type: "Tiempo Completo",
    teamSize: "10-20 empleados",
    description: `Estamos buscando un Diseñador UX/UI creativo para unirse a nuestro equipo de diseño. Trabajarás en proyectos innovadores creando experiencias de usuario excepcionales.`,
    responsibilities: [
      "Diseñar interfaces de usuario atractivas y funcionales",
      "Realizar investigación de usuarios",
      "Crear wireframes y prototipos",
      "Colaborar con desarrolladores",
      "Realizar pruebas de usabilidad"
    ],
    requirements: [
      "3+ años de experiencia en diseño UX/UI",
      "Dominio de Figma, Sketch o Adobe XD",
      "Portafolio sólido de proyectos",
      "Conocimiento de principios de diseño",
      "Habilidades de comunicación"
    ],
    benefits: [
      "Trabajo 100% remoto",
      "Equipo de diseño de última generación",
      "Capacitación en nuevas herramientas",
      "Ambiente creativo y colaborativo",
      "Horario flexible"
    ],
    postedBy: {
      name: "Roberto Sánchez",
      role: "Director de Diseño",
      isAlumni: false
    }
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudTech",
    companyLogo: "",
    location: "Monterrey",
    salary: "$70,000 - $100,000",
    industry: "Tecnología",
    seniority: "Mid",
    posted: "Hace 5 días",
    type: "Tiempo Completo",
    teamSize: "20-50 empleados",
    description: `Buscamos un DevOps Engineer para optimizar nuestros procesos de desarrollo y despliegue. Trabajarás con tecnologías cloud y automatización.`,
    responsibilities: [
      "Gestionar infraestructura en la nube",
      "Automatizar procesos de CI/CD",
      "Monitorear y optimizar sistemas",
      "Colaborar con equipos de desarrollo",
      "Implementar prácticas de seguridad"
    ],
    requirements: [
      "3+ años de experiencia en DevOps",
      "Conocimiento de AWS, Azure o GCP",
      "Experiencia con Docker y Kubernetes",
      "Conocimiento de herramientas de CI/CD",
      "Scripting en Python o Bash"
    ],
    benefits: [
      "Salario competitivo",
      "Certificaciones pagadas",
      "Seguro médico",
      "Home office 3 días a la semana",
      "Equipo de trabajo moderno"
    ],
    postedBy: {
      name: "Fernando Martínez",
      role: "Lead DevOps",
      isAlumni: true
    }
  },
  {
    id: 7,
    title: "Contador Público",
    company: "Finance Experts",
    companyLogo: "",
    location: "Ciudad de México",
    salary: "$45,000 - $65,000",
    industry: "Finanzas",
    seniority: "Mid",
    posted: "Hace 2 días",
    type: "Tiempo Completo",
    teamSize: "30-50 empleados",
    description: `Buscamos un Contador Público certificado para unirse a nuestro equipo financiero. Trabajarás en contabilidad, auditoría y reportes financieros.`,
    responsibilities: [
      "Preparar estados financieros",
      "Realizar auditorías internas",
      "Gestionar procesos contables",
      "Cumplir con obligaciones fiscales",
      "Colaborar con equipos de finanzas"
    ],
    requirements: [
      "Licenciatura en Contaduría Pública",
      "Cédula profesional activa",
      "3+ años de experiencia",
      "Conocimiento de normas contables",
      "Manejo de software contable"
    ],
    benefits: [
      "Prestaciones superiores",
      "Horario de oficina",
      "Capacitación continua",
      "Bonos por desempeño",
      "Vales de despensa"
    ],
    postedBy: {
      name: "María González",
      role: "Directora Financiera",
      isAlumni: false
    }
  },
  {
    id: 8,
    title: "Ingeniero de Software Backend",
    company: "TechStart",
    companyLogo: "",
    location: "Remoto",
    salary: "$65,000 - $95,000",
    industry: "Tecnología",
    seniority: "Mid",
    posted: "Hace 6 días",
    type: "Tiempo Completo",
    teamSize: "15-30 empleados",
    description: `Buscamos un Ingeniero de Software Backend para desarrollar APIs robustas y escalables. Trabajarás con tecnologías modernas y arquitecturas microservicios.`,
    responsibilities: [
      "Desarrollar APIs RESTful y GraphQL",
      "Diseñar arquitecturas de backend",
      "Optimizar rendimiento de bases de datos",
      "Implementar sistemas de autenticación",
      "Colaborar con frontend y DevOps"
    ],
    requirements: [
      "3+ años de experiencia en backend",
      "Dominio de Node.js, Python o Java",
      "Experiencia con bases de datos SQL y NoSQL",
      "Conocimiento de arquitecturas de microservicios",
      "Experiencia con APIs"
    ],
    benefits: [
      "100% trabajo remoto",
      "Salario competitivo",
      "Equipo de trabajo moderno",
      "Capacitación técnica",
      "Horario flexible"
    ],
    postedBy: {
      name: "Diego Ramírez",
      role: "CTO",
      isAlumni: true
    }
  },
  {
    id: 9,
    title: "Especialista en Recursos Humanos",
    company: "HR Solutions",
    companyLogo: "",
    location: "Guadalajara",
    salary: "$35,000 - $50,000",
    industry: "Recursos Humanos",
    seniority: "Junior",
    posted: "Hace 1 semana",
    type: "Tiempo Completo",
    teamSize: "20-40 empleados",
    description: `Buscamos un Especialista en Recursos Humanos para gestionar procesos de reclutamiento, onboarding y desarrollo de talento.`,
    responsibilities: [
      "Gestionar procesos de reclutamiento",
      "Realizar entrevistas y selección",
      "Coordinar onboarding de nuevos empleados",
      "Administrar políticas de RH",
      "Apoyar en desarrollo organizacional"
    ],
    requirements: [
      "Licenciatura en Psicología, Administración o afín",
      "1-2 años de experiencia en RH",
      "Conocimiento de leyes laborales",
      "Habilidades de comunicación",
      "Manejo de sistemas de RH"
    ],
    benefits: [
      "Salario competitivo",
      "Prestaciones de ley",
      "Capacitación en RH",
      "Ambiente de trabajo positivo",
      "Crecimiento profesional"
    ],
    postedBy: {
      name: "Laura Hernández",
      role: "Gerente de RH",
      isAlumni: false
    }
  },
  {
    id: 10,
    title: "Arquitecto de Soluciones Cloud",
    company: "Cloud Innovations",
    companyLogo: "",
    location: "Ciudad de México",
    salary: "$100,000 - $150,000",
    industry: "Tecnología",
    seniority: "Senior",
    posted: "Hace 3 días",
    type: "Tiempo Completo",
    teamSize: "50-100 empleados",
    description: `Buscamos un Arquitecto de Soluciones Cloud para diseñar e implementar arquitecturas escalables en la nube. Liderarás proyectos de migración y optimización.`,
    responsibilities: [
      "Diseñar arquitecturas cloud escalables",
      "Liderar proyectos de migración a la nube",
      "Optimizar costos y rendimiento",
      "Mentorear a equipos técnicos",
      "Evaluar nuevas tecnologías cloud"
    ],
    requirements: [
      "7+ años de experiencia en arquitectura cloud",
      "Certificaciones en AWS, Azure o GCP",
      "Experiencia con arquitecturas distribuidas",
      "Conocimiento de seguridad cloud",
      "Habilidades de liderazgo"
    ],
    benefits: [
      "Salario muy competitivo",
      "Bonos por desempeño",
      "Certificaciones pagadas",
      "Seguro médico premium",
      "Home office flexible"
    ],
    postedBy: {
      name: "Carlos Mendoza",
      role: "Director de Arquitectura",
      isAlumni: true
    }
  },
];

const Vacantes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [industry, setIndustry] = useState("all");
  const [seniority, setSeniority] = useState("all");
  const [selectedJob, setSelectedJob] = useState<typeof mockJobs[0] | null>(null);
  const { toast } = useToast();

  // Seleccionar el primer trabajo por defecto
  useEffect(() => {
    if (mockJobs.length > 0 && !selectedJob) {
      setSelectedJob(mockJobs[0]);
    }
  }, []);

  const handleApply = () => {
    if (selectedJob) {
      toast({
        title: "Aplicación enviada",
        description: `Tu solicitud para ${selectedJob.title} ha sido enviada exitosamente.`,
      });
    }
  };

  const handleSave = () => {
    if (selectedJob) {
      toast({
        title: "Trabajo guardado",
        description: `${selectedJob.title} ha sido guardado en tus trabajos guardados.`,
      });
    }
  };

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = industry === "all" || job.industry.toLowerCase() === industry;
    const matchesSeniority = seniority === "all" || job.seniority.toLowerCase() === seniority;
    
    return matchesSearch && matchesIndustry && matchesSeniority;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Vacantes Disponibles</h1>
          <p className="text-muted-foreground">Encuentra la oportunidad perfecta para tu carrera</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          <Input
            placeholder="Buscar por título o empresa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Industria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las industrias</SelectItem>
              <SelectItem value="tecnología">Tecnología</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="finanzas">Finanzas</SelectItem>
            </SelectContent>
          </Select>
          <Select value={seniority} onValueChange={setSeniority}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Nivel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los niveles</SelectItem>
              <SelectItem value="junior">Junior</SelectItem>
              <SelectItem value="mid">Mid</SelectItem>
              <SelectItem value="senior">Senior</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Main Layout: Listado izquierda, Detalle derecha */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-6">
          {/* Panel Izquierdo - Listado */}
          <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
            {filteredJobs.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center text-muted-foreground">
                  No se encontraron trabajos con los filtros seleccionados.
                </CardContent>
              </Card>
            ) : (
              filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className={`cursor-pointer transition-all hover:border-primary ${
                    selectedJob?.id === job.id ? "border-primary border-2 bg-primary/5" : ""
                  }`}
                  onClick={() => setSelectedJob(job)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-lg leading-tight line-clamp-2">
                          {job.title}
                        </h3>
                        <Badge variant="secondary" className="shrink-0">
                          {job.seniority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{job.posted}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Panel Derecho - Detalle */}
          <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
            {selectedJob ? (
              <Card className="border-0 shadow-none">
                <CardContent className="p-6 space-y-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 pb-6 border-b">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={selectedJob.companyLogo} />
                      <AvatarFallback>
                        <Building2 className="h-8 w-8" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold mb-2">{selectedJob.title}</h1>
                      <p className="text-xl text-muted-foreground mb-4">{selectedJob.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{selectedJob.location}</span>
                        </div>
                        <span>•</span>
                        <span>{selectedJob.type}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{selectedJob.posted}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{selectedJob.salary}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{selectedJob.teamSize}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={handleApply} className="flex-1">
                          Aplicar fácilmente
                        </Button>
                        <Button variant="outline" size="icon" onClick={handleSave}>
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Descripción */}
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Acerca del trabajo</h2>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {selectedJob.description}
                    </p>
                  </div>

                  <Separator />

                  {/* Responsabilidades */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Responsabilidades</h2>
                    <ul className="space-y-3">
                      {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  {/* Requisitos */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Requisitos</h2>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  {/* Beneficios */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Beneficios</h2>
                    <ul className="space-y-3">
                      {selectedJob.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  {/* Publicado por */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Publicado por</h2>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {selectedJob.postedBy.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{selectedJob.postedBy.name}</p>
                        <p className="text-sm text-muted-foreground">{selectedJob.postedBy.role}</p>
                        {selectedJob.postedBy.isAlumni && (
                          <Badge variant="outline" className="mt-1">Exalumno</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-12 text-center text-muted-foreground">
                  <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Selecciona un trabajo para ver los detalles</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacantes;
