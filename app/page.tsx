// Test comment for Vercel deployment
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Get <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">Audit-Ready</span>, Without the Overwhelm.</span>
        <div className={subtitle({ class: "mt-4" })}>
          We help you meet and exceed   
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
             PCI, HIPAA, SOC2, and ISO27001   
          </span>
          compliance using proven cloud architecture and security strategies
          shaped by real experience inside hyperscale tech environments.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/services"
        >
          Explore Our Services
        </Link>
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="[ISIDRO_BOOKING_LINK_PLACEHOLDER]"
        >
          Book Discovery Call
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>Expert insight for complex cloud environments</span>
        </Snippet>
      </div>
    </section>
  );
}
