import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SERVICES } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().regex(/^(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Enter a valid US phone number"),
  address: z.string().trim().min(3, "Enter an address or ZIP code").max(200),
  service: z.string().min(1, "Choose a service"),
  budget: z.string().min(1, "Choose a budget range"),
  contact: z.string().min(1, "Choose a contact method"),
  timeframe: z.string().min(1, "Choose a timeframe"),
  description: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
});
type FormValues = z.infer<typeof schema>;

function Field({ label, error, children, id }: { label: string; error?: string | undefined; children: React.ReactNode; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

export function EstimateForm() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    // Demonstration only: no backend is connected yet.
    await new Promise((r) => setTimeout(r, 900));
    setDone(true);
    reset();
  };

  if (done)
    return (
      <div role="status" className="rounded-2xl bg-card p-10 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-2xl font-extrabold">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">This is a demonstration form — your request was not sent. Please call us to discuss your project.</p>
        <button onClick={() => setDone(false)} className="btn-outline mt-6">Submit another</button>
      </div>
    );

  const a = (k: keyof FormValues) => ({ id: k, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined, ...register(k) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 rounded-2xl bg-card p-6 shadow-card md:grid-cols-2 md:p-8">
      <p className="rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground md:col-span-2">
        Demonstration form — submissions are not yet delivered to the company.
      </p>
      <Field id="name" label="Full name" error={errors.name?.message}><input className="field" autoComplete="name" {...a("name")} /></Field>
      <Field id="email" label="Email address" error={errors.email?.message}><input className="field" type="email" autoComplete="email" {...a("email")} /></Field>
      <Field id="phone" label="Phone number" error={errors.phone?.message}><input className="field" type="tel" autoComplete="tel" placeholder="(555) 123-4567" {...a("phone")} /></Field>
      <Field id="address" label="Project address or ZIP" error={errors.address?.message}><input className="field" {...a("address")} /></Field>
      <Field id="service" label="Service required" error={errors.service?.message}>
        <select className="field" defaultValue="" {...a("service")}>
          <option value="" disabled>Select a service</option>
          {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Other</option>
        </select>
      </Field>
      <Field id="budget" label="Estimated budget" error={errors.budget?.message}>
        <select className="field" defaultValue="" {...a("budget")}>
          <option value="" disabled>Select a range</option>
          <option>Under $25,000</option><option>$25,000 – $75,000</option><option>$75,000 – $150,000</option><option>$150,000+</option><option>Not sure yet</option>
        </select>
      </Field>
      <Field id="contact" label="Preferred contact method" error={errors.contact?.message}>
        <select className="field" defaultValue="" {...a("contact")}>
          <option value="" disabled>Select a method</option><option>Phone</option><option>Email</option><option>Text message</option>
        </select>
      </Field>
      <Field id="timeframe" label="Desired start" error={errors.timeframe?.message}>
        <select className="field" defaultValue="" {...a("timeframe")}>
          <option value="" disabled>Select a timeframe</option><option>As soon as possible</option><option>1–3 months</option><option>3–6 months</option><option>Just exploring</option>
        </select>
      </Field>
      <div className="md:col-span-2">
        <Field id="description" label="Project description" error={errors.description?.message}><textarea rows={5} className="field" {...a("description")} /></Field>
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-primary md:col-span-2">
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : "Request My Free Estimate"}
      </button>
    </form>
  );
}
