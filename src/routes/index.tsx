import { createFileRoute } from "@tanstack/react-router";
import { Check, Calendar, MapPin, Users, Target, TrendingUp, AlertOctagon } from "lucide-react";
import mentoresAsset from "../assets/lidera-mentores-v2.jpg.asset.json";
import alessandraAsset from "../assets/lidera-alessandra-v3.jpg.asset.json";
import eduAsset from "../assets/lidera-edu-v2.jpg.asset.json";
import logoAsset from "../assets/lidera-logo.png.asset.json";
import heroBg from "../assets/hero-bg.jpg";
import { Reveal } from "../components/Reveal";
import { WordReveal } from "../components/WordReveal";
import { ProgressBar } from "../components/ProgressBar";

const mentoresImg = mentoresAsset.url;
const alessandraImg = alessandraAsset.url;
const eduImg = eduAsset.url;
const logoImg = logoAsset.url;
const heroBgImg = heroBg;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lidera Empresas | Imersão Prática de Gestão e Planejamento Estratégico" },
      {
        name: "description",
        content:
          "Em 2 dias, construa um plano estratégico aplicável ao seu negócio ao lado de mentores. Imersão presencial em Belém, 14 e 15 de Agosto. Vagas limitadas.",
      },
      { property: "og:title", content: "Lidera Empresas — Imersão Prática de Gestão" },
      {
        property: "og:description",
        content: "14 e 15 de Agosto, presencial em Belém. Garanta seu lugar.",
      },
      { property: "og:image", content: logoImg },
    ],
  }),
  component: Index,
});

const beneficios = [
  {
    title: "Diagnóstico da sua empresa",
    text: "Identificação exata dos gargalos operacionais e financeiros.",
  },
  {
    title: "Metas claras",
    text: "Objetivos reais desenhados para o seu segundo semestre.",
  },
  {
    title: "Plano de ação",
    text: "O passo a passo detalhado do que cada setor deve executar.",
  },
  {
    title: "Indicadores de desempenho",
    text: "Métricas simples (OKRs) para medir o sucesso real.",
  },
  {
    title: "Networking estratégico",
    text: "Conexão direta com empresários que vivem o mesmo momento de mercado.",
  },
];

const gargalos = [
  {
    label: "Falta de Planejamento",
    pct: 100,
    impact: "O ralo invisível que queima o patrimônio",
  },
  {
    label: "Processos Desorganizados",
    pct: 75,
    impact: "Gera retrabalho e dependência do dono",
  },
  {
    label: "Equipe Desalinhada",
    pct: 50,
    impact: "Falta de iniciativa e metas perdidas",
  },
  {
    label: "Decisões sem Indicadores",
    pct: 50,
    impact: "Guiar a empresa apenas por intuição",
  },
  {
    label: "Baixa Previsibilidade",
    pct: 25,
    impact: "Faturar alto, mas fechar o mês sem ver o lucro",
  },
];

const numeros = [
  { value: "18+", label: "Empresas Participantes" },
  { value: "2", label: "Dias de Imersão Profunda" },
  { value: "100%", label: "Presencial e Prático" },
  { value: "1", label: "Plano Estratégico Pronto para Executar" },
];

const timeline = [
  {
    tag: "[DIA 1] MANHÃ",
    title: "Diagnóstico & Alinhamento",
    text: "Identificação dos pontos cegos do negócio e gargalos ocultos.",
  },
  {
    tag: "[DIA 1] TARDE",
    title: "Planejamento 360°",
    text: "Desenho das metas e posicionamento de mercado.",
  },
  {
    tag: "[DIA 2] MANHÃ",
    title: "Estratégias & Indicadores",
    text: "Estruturação de OKRs, ferramentas de gestão e processos.",
  },
  {
    tag: "[DIA 2] ENCERRAMENTO",
    title: "Plano de Ação Pronto",
    text: "Fechamento do cronograma prático para Black Friday, Natal e 2026.",
  },
];

const qualificacao = [
  "É empresário ou gestor e precisa parar de apenas \u201Capagar incêndios\u201D diariamente.",
  "Lidera equipes e quer o time engajado, sabendo exatamente o que deve ser feito.",
  "Quer crescer com estratégia, trocando o crescimento por acaso por previsibilidade de caixa.",
  "Precisa organizar processos e deseja descentralizar as decisões para sair do operacional.",
  "Quer preparar a empresa para as melhores oportunidades comerciais do mercado.",
];

function Index() {
  return (
    <div className="texture-bg min-h-screen overflow-x-hidden text-foreground">
      {/* SEÇÃO 1 — HERO */}
      <header className="relative min-h-[92vh] w-full overflow-hidden">
        <img
          src={heroBgImg}
          alt="Imersão Lidera Empresas em Belém"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-background/40" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
          <Reveal>
            <img
              src={logoImg}
              alt="Lidera Empresas"
              className="mx-auto w-full max-w-lg md:max-w-xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            />
          </Reveal>

          <Reveal delay={120} as="h1" className="mt-8 mx-auto max-w-3xl text-2xl font-semibold leading-[1.6] tracking-tight text-cream md:text-4xl">
            A empresa que cresce sem planejamento cresce por acaso.
          </Reveal>

          <Reveal delay={220} as="p" className="mt-6 mx-auto max-w-2xl font-sans text-lg font-light leading-relaxed text-cream/90 md:text-xl">
            Em 2 dias, construa um plano estratégico aplicável ao seu negócio ao
            lado de mentores e garanta a previsibilidade do seu lucro.
          </Reveal>

          <Reveal delay={320} className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <span className="inline-flex items-center gap-2 text-base font-medium text-cream">
              <Calendar className="h-5 w-5 text-gold" /> 14 e 15 de Agosto
            </span>
            <span className="hidden text-gold/40 sm:inline">|</span>
            <span className="inline-flex items-center gap-2 text-base font-medium text-cream">
              <MapPin className="h-5 w-5 text-gold" /> Belém - PA
            </span>
          </Reveal>

          <Reveal delay={420}>
            <a
              href="#cta-final"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-soft to-gold px-10 py-5 font-sans text-base font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:scale-[1.03] gold-glow"
            >
              Garantir Minha Vaga
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>
      </header>

      {/* EMPRESAS QUE PASSARAM PELO LIDERA */}
      <section className="overflow-hidden border-y border-border/40 bg-background/60 py-14 backdrop-blur">
        <Reveal className="text-center">
          <p className="mx-auto mb-10 max-w-xl px-6 font-sans text-sm font-light uppercase tracking-[0.2em] text-muted-foreground">
            Empresas que já passaram pelo Lidera
          </p>
        </Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...Array(8)].map((_, i) => (
              <div key={`a-${i}`} className="mx-10 flex h-16 w-40 shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100">
                <img src={logoImg} alt="Lidera Empresas" className="max-h-10 w-auto object-contain" />
              </div>
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={`b-${i}`} className="mx-10 flex h-16 w-40 shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100">
                <img src={logoImg} alt="Lidera Empresas" className="max-h-10 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — BENEFÍCIOS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl font-semibold leading-[1.6] tracking-tight text-cream md:text-3xl">
            O que você vai levar para o seu&nbsp;<span className="text-gold">negócio?</span>
          </h2>
          <p className="mt-6 font-sans text-base font-light leading-relaxed text-muted-foreground">
            Esqueça teorias rasas que morrem no caderno. Nossa imersão prática foi
            desenhada para você escanear o cenário atual e agir. Você vai sair daqui&nbsp;com:
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => (
            <Reveal key={i} delay={i * 90}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-card/40 p-7 backdrop-blur transition-all duration-500 hover:border-gold/40">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-xl text-cream">{b.title}</h3>
                <p className="mt-2 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                  {b.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#cta-final"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-gold-soft to-gold px-9 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:scale-[1.03] gold-glow"
          >
            Quero Construir Meu Plano
          </a>
        </div>
      </section>

      {/* MENTORES */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl font-semibold leading-[1.6] tracking-tight text-cream md:text-3xl">
            Quem são os mentores do <span className="text-gold">Lidera</span>?
          </h2>
          <p className="mt-4 font-sans text-xl text-gold-soft">
            Duas mentes estratégicas preparadas para guiar o seu negócio ao próximo&nbsp;nível.
          </p>
        </Reveal>

        <Reveal className="relative mx-auto mt-14 max-w-3xl" delay={100}>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,oklch(0.74_0.12_85/0.18),transparent_65%)] blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-gold/25 shadow-2xl">
            <img src={mentoresImg} alt="Alê Bortolanza e Edu Rossi" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/30 bg-background/90 px-5 py-2 font-serif text-sm text-cream backdrop-blur">
            Alessandra Bortolanza &amp; Edu Rossi
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Reveal>
            <MentorCard
              img={alessandraImg}
              name="Alê Bortolanza"
              role="Estrategista de Posicionamento & Liderança Humanizada"
              text="Com mais de 12 anos de experiência transformando o ecossistema de marcas e negócios, Alê é a mente por trás do desenvolvimento de lideranças que inspiram e retêm talentos. Especialista em comportamento corporativo e posicionamento de mercado, ela une sensibilidade humana à agressividade comercial."
            />
          </Reveal>
          <Reveal delay={120}>
            <MentorCard
              img={eduImg}
              name="Edu Rossi"
              role="Estrategista de Negócios & Operações"
              text="Criador do método TBC com uma sólida bagagem em estruturação de processos e mentalidade ágil, Edu é o motor operacional por trás de grandes estratégias. Especialista em transformar caos em processos claros e lucrativos, ele vai te ensinar a desenhar um modelo de gestão onde os processos trabalham para a empresa."
            />
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO 3 — GRÁFICO DE DOR */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl font-semibold leading-[1.6] tracking-tight text-cream md:text-3xl">
            Onde as empresas mais perdem&nbsp;<span className="text-gold">resultado?</span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {gargalos.map((g, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="rounded-2xl border border-border bg-card/40 p-5 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 font-sans text-sm font-medium text-cream">
                    <AlertOctagon className="h-4 w-4 shrink-0 text-gold" />
                    {g.label}
                  </span>
                  <span className="shrink-0 font-serif text-2xl text-gold">{g.pct}%</span>
                </div>
                <ProgressBar pct={g.pct} delay={i * 90} />
                <p className="mt-2 font-sans text-xs font-light text-muted-foreground">{g.impact}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center font-sans text-sm font-light italic text-muted-foreground">
          Se a sua operação sofre com algum desses pontos, o gargalo do crescimento do seu negócio
          hoje pode ser a falta de&nbsp;método.
        </p>
      </section>

      {/* SEÇÃO 4 — RESULTADOS QUE IMPORTAM */}
      <section className="border-y border-border/40 bg-background/60 py-20 backdrop-blur md:py-28">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold leading-[1.6] tracking-tight text-cream md:text-3xl">
            Estrutura validada por quem <span className="text-gold">faz acontecer</span>
          </h2>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {numeros.map((n, i) => (
            <Reveal key={i} delay={i * 90} className="text-center">
              <p className="font-serif text-5xl text-gold md:text-6xl">{n.value}</p>
              <p className="mt-2 font-sans text-sm font-light text-muted-foreground">{n.label}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="#cta-final"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-gold-soft to-gold px-9 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:scale-[1.03] gold-glow"
          >
            Fazer Parte Desse Grupo
          </a>
        </div>
      </section>

      {/* SEÇÃO 5 — LINHA DO TEMPO */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl font-semibold leading-[1.6] tracking-tight text-cream md:text-3xl">
            O que acontece na&nbsp;<span className="text-gold">Imersão?</span>
          </h2>
          <p className="mt-4 font-sans text-base font-light text-muted-foreground">
            Uma jornada objetiva de 16 horas dividida em blocos estratégicos de evolução:
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col items-center">
          {timeline.map((step, i) => (
            <div key={i} className="flex w-full flex-col items-center">
              <div className="w-full max-w-xl rounded-3xl border border-gold/20 bg-card/40 p-7 text-center backdrop-blur md:p-8">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {step.tag}
                </span>
                <WordReveal
                  as="h3"
                  text={step.title}
                  stagger={70}
                  className="mt-2 block font-serif text-2xl text-cream md:text-3xl"
                />
                <WordReveal
                  as="p"
                  text={step.text}
                  startDelay={250}
                  stagger={35}
                  className="mt-3 block font-sans text-sm font-light leading-relaxed text-muted-foreground"
                />
              </div>
              {i < timeline.length - 1 && (
                <span className="my-4 animate-bounce font-serif text-3xl text-gold/70">↓</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 6 — QUEM PARTICIPA (Prova Social) */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <Reveal className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold leading-[1.6] tracking-tight text-cream md:text-3xl">
            A experiência de quem <span className="text-gold">já esteve lá</span>
          </h2>
        </Reveal>

        <Reveal as="blockquote" delay={100} className="relative mt-12 block rounded-3xl border border-gold/20 bg-card/40 p-8 text-center backdrop-blur md:p-12">
          <span className="absolute left-6 top-2 font-serif text-7xl leading-none text-gold/30">“</span>
          <p className="relative font-serif text-xl leading-relaxed text-cream md:text-2xl">
            Mentes fervilhando, troca de experiências reais e um ecossistema focado no próximo
            nível&nbsp;empresarial.
          </p>
        </Reveal>

        <div className="mt-10 text-center">
          <a
            href="#cta-final"
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-9 py-4 font-sans text-sm font-medium uppercase tracking-wider text-cream transition-all duration-300 hover:border-cream/60 hover:bg-cream/5"
          >
            Quero Estar Entre Eles
          </a>
        </div>
      </section>

      {/* SEÇÃO 7 — QUALIFICAÇÃO DO PÚBLICO */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <Reveal className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold leading-[1.6] tracking-tight text-cream md:text-3xl">
            O Lídera Empresas é para <span className="text-gold">você que:</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl space-y-4">
          {qualificacao.map((q, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Check className="h-4 w-4" />
                </span>
                <p className="font-sans text-sm font-light leading-relaxed text-cream/90">{q}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SEÇÃO 8 — OFERTA E FECHAMENTO */}
      <section id="cta-final" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl font-semibold leading-[1.6] tracking-tight text-cream md:text-3xl">
            O único formato estratégico focado no seu&nbsp;<span className="text-gold">CNPJ</span>
          </h2>
          <p className="mt-6 font-sans text-base font-light leading-relaxed text-muted-foreground">
            Diferente de cursos tradicionais, o Lídera Empresas permite que você traga pessoas-chave
            da sua equipe para desenhar o futuro do negócio no mesmo&nbsp;ambiente.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-3xl border border-border bg-card/40 p-8 backdrop-blur">
              <p className="font-serif text-2xl text-cream">Ingresso Comum</p>
              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                Foco total no plano estratégico completo de 2 dias.
              </p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="relative flex h-full flex-col rounded-3xl border border-gold/30 bg-gold/[0.06] p-8 backdrop-blur">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-b from-gold-soft to-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                Mais Recomendado
              </span>
              <p className="font-serif text-2xl text-gold">Ingresso VIP</p>
              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-cream/90">
                Garante os 2 dias de imersão + 3 meses de acompanhamento pós-evento com os mentores
                para assegurar que as metas saiam do&nbsp;papel.
              </p>
            </article>
          </Reveal>
        </div>

        <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gold/25 bg-gold/[0.05] px-6 py-4 text-center font-sans text-sm text-cream/90">
          As vagas são limitadas a no máximo <strong className="text-gold">30 empresas</strong> para
          manter a entrega personalizada de consultoria de mesa em&nbsp;mesa.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="inline-flex items-center gap-2 text-base font-medium text-cream">
            <MapPin className="h-5 w-5 text-gold" /> Belém - PA
          </span>
          <span className="hidden text-gold/40 sm:inline">|</span>
          <span className="inline-flex items-center gap-2 text-base font-medium text-cream">
            <Calendar className="h-5 w-5 text-gold" /> 14 e 15 de Agosto
          </span>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-gold-soft to-gold px-10 py-6 font-sans text-base font-bold uppercase tracking-wider text-primary-foreground transition-transform duration-300 hover:scale-[1.04] animate-pulse-glow md:text-lg"
          >
            Garantir Meu Lugar no Sucesso do Meu Negócio
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-serif text-xl text-cream">
            Lidera <span className="text-gold">Empresas</span>
          </p>
          <p className="font-sans text-xs tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} Lidera Empresas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function MentorCard({
  img,
  name,
  role,
  text,
}: {
  img: string;
  name: string;
  role: string;
  text: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur transition-all duration-500 hover:border-gold/40">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={name}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
      </div>
      <div className="-mt-16 flex flex-1 flex-col p-7">
        <h3 className="text-3xl font-semibold text-cream">{name}</h3>
        <p className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.15em] text-gold">
          {role}
        </p>
        <p className="mt-5 font-sans text-sm font-light leading-relaxed text-muted-foreground">
          {text}
        </p>
      </div>
    </article>
  );
}
