import { Helmet } from "react-helmet-async"
import { siteConfig } from "@/siteConfig"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/page/Hero"
import { Courses } from "@/components/page/Courses"
import { About } from "@/components/page/About"
import { Results } from "@/components/page/Results"
import { WhyUs } from "@/components/page/WhyUs"
import { Reviews } from "@/components/page/Reviews"
import { CTA } from "@/components/page/CTA"
import { Contact } from "@/components/page/Contact"
import { Projects } from "@/components/page/Projects"

function App() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.svg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Muhammad Iqbol ko'chasi, 88-uy",
      "addressLocality": "Buxoro",
      "addressRegion": "Buxoro",
      "addressCountry": "UZ"
    },
    "telephone": "+998200254545",
  }

  return (
    <>
      <Helmet>
        <html lang="uz" />
        <title>{siteConfig.description.split('.')[0]}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords.join(", ")} />
        <link rel="canonical" href={siteConfig.url} />
        
        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteConfig.url} />
        <meta name="twitter:title" content={siteConfig.name} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={siteConfig.ogImage} />
        
        {/* Theme Light Mode */}
        <meta name="theme-color" content="#FAFCFF" />

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col pt-16 overflow-x-hidden relative bg-bg">
        <Header />
        
        <main className="flex-1">
          <Hero />
          <Courses />
          <About />
          <Results />
          <Projects />
          <WhyUs />
          <Reviews />
          <CTA />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
