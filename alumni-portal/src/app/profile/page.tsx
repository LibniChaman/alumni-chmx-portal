import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Briefcase, GraduationCap, FileText, MapPin } from "lucide-react";

const Perfil = () => {
  const skills = ["JavaScript", "React", "Node.js", "TypeScript", "SQL", "Python"];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-2xl">MG</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">María González</h2>
                    <p className="text-muted-foreground">Ingeniera de Software</p>
                  </div>
                  <Button className="w-full">Editar Perfil</Button>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>maria.gonzalez@email.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Ciudad de México</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span>Ingeniería en Sistemas - 2020</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <Button variant="link" className="h-auto p-0">Ver CV</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>Acerca de</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ingeniera de Software con 3 años de experiencia en desarrollo web full-stack. 
                  Apasionada por crear soluciones tecnológicas innovadoras y trabajar en equipo. 
                  Busco nuevas oportunidades para crecer profesionalmente en un ambiente dinámico.
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Aptitudes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Experiencia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-primary mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold">Software Engineer</h3>
                      <p className="text-sm text-muted-foreground">TechCorp • 2022 - Presente</p>
                      <p className="mt-2 text-sm">
                        Desarrollo de aplicaciones web usando React y Node.js. 
                        Colaboración en equipo ágil para entregar features de alta calidad.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-primary mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold">Junior Developer</h3>
                      <p className="text-sm text-muted-foreground">StartupXYZ • 2020 - 2022</p>
                      <p className="mt-2 text-sm">
                        Desarrollo de features frontend y mantenimiento de código legacy.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application Status */}
            <Card>
              <CardHeader>
                <CardTitle>Estado de Aplicaciones</CardTitle>
                <CardDescription>Seguimiento de tus postulaciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Senior Frontend Developer</p>
                    <p className="text-sm text-muted-foreground">Tech Solutions Inc.</p>
                  </div>
                  <Badge>En revisión</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Full Stack Engineer</p>
                    <p className="text-sm text-muted-foreground">Innovation Labs</p>
                  </div>
                  <Badge variant="secondary">Entrevista programada</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
