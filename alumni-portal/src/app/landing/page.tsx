import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, TrendingUp, Award } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const Landing = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Vacantes Exclusivas",
      description: "Accede a oportunidades laborales diseñadas para exalumnos",
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Conecta con otros exalumnos y comparte experiencias",
    },
    {
      icon: TrendingUp,
      title: "Desarrollo Profesional",
      description: "Cursos y recursos para impulsar tu carrera",
    },
    {
      icon: Award,
      title: "Perfil Profesional",
      description: "Crea un perfil destacado y sé visible para reclutadores",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Impulsa Tu Carrera Profesional
          </h1>
          <p className="text-xl text-muted-foreground">
            Conecta con oportunidades laborales, comparte experiencias y crece junto a la comunidad de exalumnos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="/login">Explorar Vacantes</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/community">Unirse a la Comunidad</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Qué Ofrecemos?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="p-12 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Comienza Tu Búsqueda Hoy
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Únete a cientos de exalumnos que ya encontraron su próxima oportunidad profesional
            </p>
            <Button size="lg" variant="secondary" className="mt-4">
              Crear Perfil
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Landing;
