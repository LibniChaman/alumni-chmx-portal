import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Share2 } from "lucide-react";

const mockPosts = [
  {
    id: 1,
    author: "María González",
    avatar: "",
    role: "Ingeniera de Software",
    time: "Hace 2 horas",
    content: "¡Gran noticia! Acabo de conseguir una posición en una startup de IA. Gracias a todos por el apoyo durante mi búsqueda.",
    likes: 24,
    comments: 8,
    category: "Logro",
  },
  {
    id: 2,
    author: "Carlos Ruiz",
    avatar: "",
    role: "Coordinador de Vida y Carrera",
    time: "Hace 1 día",
    content: "Curso gratuito de LinkedIn Learning sobre negociación salarial. ¡Muy recomendado para quienes están en proceso de entrevistas!",
    likes: 45,
    comments: 12,
    category: "Recurso",
  },
  {
    id: 3,
    author: "Ana Martínez",
    avatar: "",
    role: "Marketing Manager",
    time: "Hace 3 días",
    content: "¿Alguien tiene experiencia con entrevistas técnicas para posiciones de Product Manager? Me encantaría escuchar sus consejos.",
    likes: 18,
    comments: 15,
    category: "Pregunta",
  },
];

const Comunidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Comunidad</h1>
          <p className="text-muted-foreground">Conecta, comparte y aprende de otros exalumnos</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <Button className="w-full">Crear Nueva Publicación</Button>
              </CardContent>
            </Card>

            {mockPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{post.author}</CardTitle>
                          <CardDescription>{post.role} • {post.time}</CardDescription>
                        </div>
                        <Badge>{post.category}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{post.content}</p>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageSquare className="h-4 w-4" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Compartir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Temas Populares</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="outline" className="mr-2">#Entrevistas</Badge>
                <Badge variant="outline" className="mr-2">#RemotoMX</Badge>
                <Badge variant="outline" className="mr-2">#DesarrolloWeb</Badge>
                <Badge variant="outline" className="mr-2">#Networking</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eventos Próximos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Taller de CV</p>
                  <p className="text-sm text-muted-foreground">15 de Enero, 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Networking Virtual</p>
                  <p className="text-sm text-muted-foreground">20 de Enero, 7:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comunidad;
