import { Backdrop } from "@/components/Backdrop";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact — StarFighters Arcade",
  description: "Reach out to StarFighters Arcade in Mesa, AZ. Phone, email, hours, and location.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Backdrop />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-cyan">◆ GET IN TOUCH ◆</p>
          <h1 className="mt-6 font-display font-black uppercase text-5xl sm:text-7xl text-ink leading-[0.95]">
            We'd love to <span className="text-neon-magenta">hear from you.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Questions, comments, or just want to talk arcades? Hit us up. We're a community of gamers and pinball
            enthusiasts and we're always glad to hear from future Starfighters.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <div className="card-neon rounded-2xl p-7">
            <Phone className="text-neon-magenta" />
            <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Call or text</h2>
            <ul className="mt-4 space-y-2">
              {site.phones.map((p) => (
                <li key={p.number}>
                  <a href={`tel:${p.number.replace(/\s/g,"")}`} className="text-ink hover:text-neon-cyan">{p.number}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-neon rounded-2xl p-7">
            <Mail className="text-neon-cyan" />
            <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Email</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={`mailto:${site.email}`} className="text-ink hover:text-neon-cyan">{site.email}</a></li>
              <li><a href={`mailto:${site.pinballEmail}`} className="text-ink hover:text-neon-cyan">{site.pinballEmail}</a> <span className="text-ink-dim">— pinball / tournaments</span></li>
            </ul>
          </div>

          <div className="card-neon rounded-2xl p-7">
            <MapPin className="text-neon-amber" />
            <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Location</h2>
            <address className="mt-4 not-italic text-ink-muted">
              {site.address.line1}<br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
          </div>

          <div className="card-neon rounded-2xl p-7">
            <Clock className="text-neon-green" />
            <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Hours</h2>
            <ul className="mt-4 space-y-2">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm">
                  <span className="text-ink">{h.day}</span>
                  <span className="text-ink-muted">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-neon rounded-2xl p-7 sm:p-9">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-amber">◆ SEND A MESSAGE</p>
          <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Drop us a line</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
