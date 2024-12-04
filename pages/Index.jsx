// src/pages/Index.jsx
import { useEffect, useState } from 'react'
import GradientText from '../src/components/GradientText'
import Accordion from '../src/components/Accordion'
import ComprehensiveGuidelines from '../src/components/ComprehensiveGuidelines'

export default function Index() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

    // Update document title using useEffect instead of Next.js Head
    useEffect(() => {
      document.title = 'Migration guide'
    }, [])
  

  if (!mounted) return null

  const data = [
    {
      title: "What is MFE (Micro Frontend)?",
      description: `MFE creates a web application where every component lives and runs on its own server. Unlike traditional apps where everything runs in one place, MFE parts are hosted separately and come together in your browser.\n\nEach remote piece works independently with its own code, deployment and/or tech stack. Then they are connected at runtime inside main (host) app.
      \n\nFor example, your nav bar might load from one server, your product catalog from another, and your shopping cart from a third. All these remote parts appear as one smooth app to users.
      This setup lets teams own their parts fully - they can update, deploy, and scale their section without touching others. When users visit the app, it fetches all these remote pieces and assembles them seamlessly.`
    },
    {
      title: "What are the benefits of using MFE?",
      description: "Teams can update their parts without touching the whole app. They work & deploy independently without getting in each other's way. It's easy to add new features or remove old ones without affecting other parts. \n\nDifferent parts can use different technologies when needed. Problems in one part won't break the entire application."
    },
    {
      title: "What are the challenges and disadvantages of MFE?",
      description: `Initial setup needs careful planning and extra tools. Multiple separate apps might have duplicate dependencies if not managed well. \n\nKeeping UI/UX consistent across different teams needs more coordination. Teams need time to learn new concepts like module federation. \n\n\n\nLoading multiple applications can slow initial load time. Managing shared dependencies between MFEs needs careful version control. Integration testing gets more complex with multiple independent parts.`
    },
    {
      title: "How are we migrating CSP to MFE?",
      description: "### Webpack Updates\nWe need to upgrade to Webpack 5 to support Module Federation. This includes updating web-react-build-config and adding MFE configuration.\n\n### Package Dependencies\nSeveral dependencies need specific versions to work with Webpack 5, including core packages and build tools.\n\n### Deployment Changes\nEach remote UI needs its own deployment pipeline to AWS, making resources available when needed.\n\n### Version Management\nWe're using Contentful for version control through a manifest file. The main UI reads this to load correct remote versions.\n\n### Fallback Strategy\nWe're keeping the existing build process as backup, allowing use of repositories from node_modules if needed.\n\n### Migration Plan\nAfter proof of concept, we'll migrate 2-3 repositories per sprint. Once complete, we'll clean up old configurations and possibly move away from Gulp."
    }
  ]


  return (
    <div className="flex flex-col">
      <main className="flex-grow flex flex-col justify-end p-10">
        <GradientText size="7xl" className={'mx-auto pb-3'}>
          CSP MFE Migration
        </GradientText>
        <p className="text-neutral-100 max-w-xl text-center mx-auto mt-6 mb-10">
          Some of the high level details for MFE project and Comprehensive guide.
        </p>
        <Accordion items={data} />
        <ComprehensiveGuidelines />
      </main>
    </div>
  )
}