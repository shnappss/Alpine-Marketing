import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPageTemplate({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Nav />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
            <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-invert prose-sm max-w-none
            prose-headings:font-bold prose-headings:text-white prose-headings:mt-10 prose-headings:mb-4
            prose-h2:text-2xl prose-h2:border-t prose-h2:border-white/5 prose-h2:pt-8
            prose-h3:text-lg prose-h3:text-white/90
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-muted-foreground prose-li:mb-1
            prose-ul:my-4 prose-ol:my-4
            prose-strong:text-white prose-a:text-primary prose-a:underline
            prose-blockquote:border-l-2 prose-blockquote:border-primary/40 prose-blockquote:pl-4 prose-blockquote:text-muted-foreground
          ">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
