import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, Mail, Send, Share2 } from 'lucide-react'
import { siteConfig } from '../data/portfolio'
import { fadeUp, springHover } from '../utils/motion'

const { contact } = siteConfig

const linkedinDisplay = 'linkedin.com/in/kaviprakash-s-9a9626287'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
  },
  {
    icon: Share2,
    label: 'LinkedIn',
    value: linkedinDisplay,
    href: contact.linkedin,
    external: true,
  },
]

const inputClass =
  'w-full rounded-xl border border-zinc-700/60 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 backdrop-blur-sm transition-all duration-300 focus:border-blue-500/50 focus:shadow-[0_0_16px_rgba(59,130,246,0.15)] focus:outline-none'

export function Contact() {
  const formRef = useRef(null)
  const [showForm, setShowForm] = useState(false)
  const [status, setStatus] = useState('idle')

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setStatus('config_error')
      return
    }

    setStatus('sending')

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28">
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-pink-500/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-cyan-400 sm:text-sm">
            GET IN TOUCH
          </p>
          <h2 className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            I&apos;m currently open to new opportunities — full-time roles, freelance projects, and collaborations. Feel free to reach out — I'll get back to you as soon as possible!
          </p>
        </motion.div>

        {/* Central glass card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] via-transparent to-pink-500/[0.03]"
          />

          <div className="relative space-y-1">
            {channels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <motion.div
                  key={channel.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.45 }}
                >
                  <a
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-4 transition-all duration-300 hover:border-zinc-700/60 hover:bg-zinc-950/40"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-700/60 bg-zinc-950/50 transition-all duration-300 group-hover:border-blue-500/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.12)]">
                      <Icon className="h-5 w-5 text-blue-400 transition-colors duration-300 group-hover:text-pink-400" />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
                        {channel.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-zinc-200 transition-colors duration-300 group-hover:text-white sm:text-base">
                        {channel.value}
                      </p>
                    </div>
                  </a>

                  {index < channels.length - 1 && (
                    <div className="mx-3 border-b border-zinc-800/60" />
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Expandable message form */}
          <AnimatePresence>
            {showForm && (
              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative mt-4 space-y-4 overflow-hidden border-t border-zinc-800/60 pt-6"
              >
                <input type="hidden" name="to_email" value={contact.email} />

                <div className="space-y-1.5">
                  <label htmlFor="from_name" className="text-xs font-medium text-zinc-400">
                    Your Name
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className={inputClass}
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="from_email" className="text-xs font-medium text-zinc-400">
                    Your Email
                  </label>
                  <input
                    id="from_email"
                    name="reply_to"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                    disabled={status === 'sending'}
                  />
                </div>

                {status === 'success' && (
                  <p className="text-center text-sm text-emerald-400" role="status">
                    Message sent successfully!
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-center text-sm text-red-400" role="alert">
                    Failed to send. Please try again or email directly.
                  </p>
                )}
                {status === 'config_error' && (
                  <p className="text-center text-sm text-amber-400" role="alert">
                    Configure EmailJS in your <code className="text-amber-300">.env</code> file.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'config_error'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={springHover}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {status === 'sending' ? 'Sending...' : 'Submit Message'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* CTA button */}
          {!showForm && (
            <motion.button
              type="button"
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={springHover}
              className="group relative mt-6 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.35)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-pink-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <Send className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              <span className="relative">Send Me a Message</span>
            </motion.button>
          )}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 text-center text-sm text-zinc-600"
        >
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="bg-gradient-to-r from-blue-400/70 to-pink-400/70 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
