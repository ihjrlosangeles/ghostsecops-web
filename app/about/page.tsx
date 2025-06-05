import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="max-w-3xl py-12 px-6 text-left">
      <h1 className={title()}>About</h1>
      <p className="mt-6 text-lg text-default-600 leading-relaxed">
        Ghost SecOps was founded by a seasoned Site Reliability Engineer with
        over a decade of experience in high-stakes environments. Having led
        security architecture and infrastructure reliability efforts at global
        tech companies and enterprise cloud platforms, the founder brings deep,
        battle-tested expertise to every engagement.
      </p>
      <p className="mt-4 text-lg text-default-600 leading-relaxed">
        This consultancy is driven by a core belief: the best security is
        proactive. Ghost SecOps exists to help organizations fortify their cloud
        environments before incidents occur—by combining deep systems
        understanding with pragmatic, actionable guidance. From financial
        systems to hyperscale SaaS, every architecture is reviewed with one goal
        in mind: resilience through clarity.
      </p>
      <p className="mt-4 text-lg text-default-600 leading-relaxed">
        With a passion for prevention and a track record of delivering stability
        across thousands of cloud accounts and hundreds of microservices, Ghost
        SecOps helps teams make confident, compliant, and secure decisions—built
        on experience, not theory.
      </p>
    </div>
  );
}
