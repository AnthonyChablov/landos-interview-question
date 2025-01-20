export interface NavLink {
  id: string;
  name: string;
  href: string;
  type: "regular" | "gray" | "black"; // Ensure valid types for `type`
}

export const navLinks: NavLink[] = [
  { id: "Initio", name: "Initio", href: "/initio", type: "regular" },
  { id: "Serviços", name: "Serviços", href: "/servicos", type: "regular" },
  {
    id: "Communidade",
    name: "Communidade",
    href: "/communidade",
    type: "regular",
  },
  { id: "Recursos", name: "Recursos", href: "/recursos", type: "regular" },
  { id: "Preços", name: "Preços", href: "/precos", type: "regular" },
  { id: "Contacto", name: "Contacto", href: "/contacto", type: "regular" },
  { id: "Sign in", name: "Sign In", href: "/signin", type: "gray" },
  { id: "Registrar", name: "Registrar", href: "/registrar", type: "black" },
];
