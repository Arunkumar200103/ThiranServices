"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X, MessageCircle, Sparkles, Phone, Mail, CheckCircle, Clock } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  quickReplies?: string[]
  serviceCards?: ServiceCard[]
  showFeedback?: boolean
}

interface ServiceCard {
  emoji: string
  title: string
  desc: string
  cta: string
}

interface ChatContext {
  userName?: string
  projectType?: string
  budget?: string
  stage: "intro" | "discovery" | "details" | "closing"
  interests: string[]
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [ctx, setCtx] = useState<ChatContext>({
    stage: "intro",
    interests: [],
  })
  const [feedbackGiven, setFeedbackGiven] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBot(
          "Hey there! 👋 I'm your Thiran360AI assistant.\n\nI'm here to help you build something amazing. What should I call you?",
          []
        )
      }, 400)
    }
  }, [isOpen, messages.length])

  const addBot = (text: string, replies?: string[], cards?: ServiceCard[], showFb?: boolean) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender: "bot",
      timestamp: new Date(),
      quickReplies: replies,
      serviceCards: cards,
      showFeedback: showFb,
    }])
  }

  const detectIntent = (msg: string): string => {
    const m = msg.toLowerCase()
    if (m.match(/\b(hi|hello|hey)\b/)) return "greet"
    if (m.match(/\b(name|call|i'm|i am)\b/) && m.split(" ").length < 5) return "name"
    if (m.match(/\b(web|website|site)\b/)) return "web"
    if (m.match(/\b(mobile|app|ios|android)\b/)) return "mobile"
    if (m.match(/\b(ai|chatbot|ml|automat)\b/)) return "ai"
    if (m.match(/\b(cloud|aws|devops)\b/)) return "cloud"
    if (m.match(/\b(price|cost|budget)\b/)) return "price"
    if (m.match(/\b(time|when|how long)\b/)) return "time"
    if (m.match(/\b(example|portfolio|work)\b/)) return "portfolio"
    if (m.match(/\b(start|begin|ready|yes)\b/)) return "start"
    if (m.match(/\b(contact|email|call)\b/)) return "contact"
    if (m.match(/\b(thank|thanks)\b/)) return "thanks"
    return "other"
  }

  const respond = (msg: string) => {
    const intent = detectIntent(msg)
    const { stage, userName } = ctx

    if (stage === "intro") {
      if (intent === "name" || (!userName && msg.split(" ").length <= 3)) {
        const name = msg.split(" ").find(w => w.length > 2 && w[0] === w[0].toUpperCase()) || msg.trim()
        setCtx(p => ({ ...p, userName: name, stage: "discovery" }))
        
        setTimeout(() => {
          const cards: ServiceCard[] = [
            { emoji: "🌐", title: "Web Development", desc: "Modern, responsive websites", cta: "Build a website" },
            { emoji: "📱", title: "Mobile Apps", desc: "iOS & Android solutions", cta: "Create an app" },
            { emoji: "🤖", title: "AI Integration", desc: "Chatbots & automation", cta: "Explore AI" },
            { emoji: "☁️", title: "Cloud Solutions", desc: "Scalable infrastructure", cta: "Cloud services" },
          ]
          
          addBot(
            `Awesome to meet you, ${name}! 🎉\n\nNow, let's explore what you need. What type of project interests you?`,
            [],
            cards
          )
        }, 700)
        return
      }
    }

    if (stage === "discovery") {
      if (intent === "web") {
        setCtx(p => ({ ...p, projectType: "web", stage: "details", interests: [...p.interests, "web"] }))
        setTimeout(() => {
          addBot(
            `Perfect choice${userName ? ", " + userName : ""}! 🌐\n\nWeb development is our forte. We build:\n\n✨ E-commerce platforms\n✨ SaaS applications\n✨ Corporate websites\n✨ Custom web portals\n\nTypical timeline: 4-12 weeks\nStarting from: $5K\n\nWhat's your budget range?`,
            ["Under $10K", "$10K-$25K", "$25K-$50K", "$50K+"]
          )
        }, 700)
        return
      }

      if (intent === "mobile") {
        setCtx(p => ({ ...p, projectType: "mobile", stage: "details", interests: [...p.interests, "mobile"] }))
        setTimeout(() => {
          addBot(
            `Great${userName ? ", " + userName : ""}! 📱\n\nMobile apps are our specialty:\n\n🚀 Native iOS/Android\n🚀 Cross-platform (React Native)\n🚀 E-commerce & Social apps\n🚀 Enterprise solutions\n\nTimeline: 8-16 weeks\nFrom: $8K\n\nWhen do you want to launch?`,
            ["1-2 months", "3-4 months", "5-6 months", "Flexible"]
          )
        }, 700)
        return
      }

      if (intent === "ai") {
        setCtx(p => ({ ...p, projectType: "ai", stage: "details", interests: [...p.interests, "ai"] }))
        setTimeout(() => {
          addBot(
            `Excellent${userName ? ", " + userName : ""}! 🤖\n\nAI can transform your business:\n\n💡 Custom chatbots (like me!)\n💡 Process automation\n💡 Predictive analytics\n💡 NLP & computer vision\n\nWe use: OpenAI, LangChain, TensorFlow\n\nWhat AI use case interests you?`,
            ["Build a chatbot", "Automate workflows", "Data analytics", "Custom solution"]
          )
        }, 700)
        return
      }

      if (intent === "cloud") {
        setCtx(p => ({ ...p, projectType: "cloud", stage: "details", interests: [...p.interests, "cloud"] }))
        setTimeout(() => {
          addBot(
            `Smart thinking${userName ? ", " + userName : ""}! ☁️\n\nCloud is essential for scale:\n\n⚡ AWS, GCP, Azure setup\n⚡ CI/CD pipelines\n⚡ Auto-scaling\n⚡ Cost optimization\n⚡ 99.9% uptime SLA\n\nWhat's your main cloud need?`,
            ["Migrate to cloud", "Setup DevOps", "Optimize costs", "Scale infrastructure"]
          )
        }, 700)
        return
      }
    }

    if (stage === "details") {
      if (intent === "price" || msg.match(/\d+k|\$/i)) {
        setCtx(p => ({ ...p, budget: msg }))
        setTimeout(() => {
          addBot(
            `Got it! Based on your budget, here's what's included:\n\n✅ Complete ${ctx.projectType || "solution"} development\n✅ Modern tech stack\n✅ QA & testing\n✅ 3 months support\n✅ Full documentation\n✅ Source code ownership\n\nReady for a detailed proposal?`,
            ["Yes, send proposal", "Tell me more", "Show examples", "Connect with sales"],
            [],
            false
          )
          
          setTimeout(() => {
            setCtx(p => ({ ...p, stage: "closing" }))
          }, 1000)
        }, 700)
        return
      }

      if (intent === "time") {
        setTimeout(() => {
          addBot(
            `Perfect timing! ⏱️\n\n**Our Process:**\n\n📋 Week 1-2: Planning & Design\n⚙️ Week 3-10: Development\n🧪 Week 11-12: Testing\n🚀 Week 13: Launch!\n\nWe provide weekly updates and demos throughout.\n\nShall we create a custom timeline for you?`,
            ["Yes please", "What about pricing?", "Show portfolio", "Start now"]
          )
        }, 700)
        return
      }

      if (intent === "portfolio") {
        setTimeout(() => {
          addBot(
            `${userName ? userName + ", " : ""}check out our wins! 🏆\n\n**ShopEasy** - E-commerce\n→ 150K users, $8M revenue\n\n**MediConnect** - Healthcare\n→ 25K doctors, 100K patients\n\n**FinDash** - Fintech\n→ $50M+ transactions\n\n**ChatGenius** - AI Bot\n→ 80% support automation\n\nWant detailed case studies?`,
            ["Yes, send case studies", "Impressive! Let's talk", "What's next?", "Pricing info"]
          )
        }, 700)
        return
      }
    }

    if (stage === "closing") {
      if (intent === "start" || msg.toLowerCase().includes("proposal")) {
        setTimeout(() => {
          addBot(
            `🎉 Fantastic${userName ? ", " + userName : ""}!\n\n**Next Steps:**\n\n1️⃣ **Free Consultation** (30 min)\n   Video call to discuss details\n\n2️⃣ **Custom Proposal** (48 hrs)\n   Scope, timeline, pricing\n\n3️⃣ **Kickoff!**\n   Let's build something amazing\n\nBook your free consultation?`,
            ["Book now", "Email me details", "Call me", "More questions"],
            [],
            true
          )
        }, 700)
        return
      }

      if (intent === "contact") {
        setTimeout(() => {
          addBot(
            `Perfect! Here's how to reach us:\n\n📧 hello@thiran360ai.com\n📱 +1 (555) 123-4567\n🌐 www.thiran360ai.com\n📅 thiran360ai.com/book\n\nOr share your email and we'll contact you in 24 hours!\n\nAnything else${userName ? ", " + userName : ""}?`,
            ["I'm ready!", "One more thing", "Send info"],
            [],
            true
          )
        }, 700)
        return
      }

      if (msg.toLowerCase().includes("ready") || msg.toLowerCase().includes("set")) {
        setTimeout(() => {
          addBot(
            `Wonderful${userName ? ", " + userName : ""}! 🌟\n\nI'm thrilled about your project. Our team is excited to turn your vision into reality!\n\n**Remember:**\n🔗 Portfolio: thiran360ai.com/work\n💼 LinkedIn: /company/thiran360ai\n📖 Blog: thiran360ai.com/blog\n\nSee you soon! 🚀`,
            [],
            [],
            true
          )
        }, 700)
        return
      }
    }

    if (intent === "thanks") {
      setTimeout(() => {
        addBot(
          `You're welcome${userName ? ", " + userName : ""}! 😊 Happy to help. What else can I answer?`,
          ["Pricing", "Examples", "Get started", "Talk to team"]
        )
      }, 500)
      return
    }

    setTimeout(() => {
      addBot(
        `I'd love to help you better! Could you tell me more about:\n\n• What type of project?\n• Your timeline?\n• Budget range?\n\nOr ask about our services, pricing, or portfolio!`,
        ["Show services", "Check pricing", "See work", "Start project"]
      )
    }, 700)
  }

  const send = (txt?: string) => {
    const msg = txt || input
    if (!msg.trim()) return

    setMessages(p => [...p, {
      id: Date.now().toString(),
      text: msg,
      sender: "user",
      timestamp: new Date(),
    }])
    setInput("")
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      respond(msg)
    }, 600)
  }

  const giveFeedback = (rating: "good" | "neutral" | "bad") => {
    setFeedbackGiven(true)
    const responses = {
      good: "🎉 Thank you! We're excited to work with you and create something incredible together!",
      neutral: "Thanks for the feedback! Anything I can clarify or help with?",
      bad: "I'm sorry to hear that. Let me connect you with our team for better assistance!"
    }
    setTimeout(() => addBot(responses[rating], rating === "bad" ? ["Yes, connect me", "No thanks"] : []), 400)
  }

  return (
    <>
      <AnimatePresence>
  {!isOpen && (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white"
    >
      <MessageCircle size={30} />
    </motion.button>
  )}
</AnimatePresence>


      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 40 }}
      transition={{ type: "spring", bounce: 0.3 }}
      className="fixed bottom-6 right-6 z-50 w-[450px] max-w-[calc(100vw-24px)] h-[680px] max-h-[85vh] 
        bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 
        rounded-3xl shadow-2xl border border-blue-500/20 
        flex flex-col overflow-hidden"
    >
      {/* Professional Header */}
      <div className="bg-black/20 backdrop-blur-xl border-b border-white/10 p-5">
        <div className="flex items-center justify-between">

          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Chat Support</h2>
              <p className="text-sm text-gray-400">Online & ready to help</p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white transition"
          >
            <X size={22} />
          </button>
        </div>
      </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-3xl text-sm leading-relaxed shadow-lg ${
                      msg.sender === "user"
                        ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-br-md"
                        : "bg-gray-800/90 text-gray-100 border border-white/10 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.serviceCards && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="grid grid-cols-2 gap-2 mt-3 w-full max-w-[90%]"
                    >
                      {msg.serviceCards.map((card, idx) => (
                        <button
                          key={idx}
                          onClick={() => send(card.cta)}
                          className="bg-gray-800/70 border border-white/10 rounded-2xl p-3 text-left hover:border-blue-400/50 transition-all hover:scale-105"
                        >
                          <div className="text-2xl mb-1">{card.emoji}</div>
                          <div className="font-semibold text-white text-xs mb-0.5">{card.title}</div>
                          <div className="text-[10px] text-gray-400">{card.desc}</div>
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="flex flex-wrap gap-2 mt-2 max-w-[90%]"
                    >
                      {msg.quickReplies.map((reply, idx) => (
                        <button
                          key={idx}
                          onClick={() => send(reply)}
                          className="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-full text-xs text-gray-300 hover:text-white transition-all"
                        >
                          {reply}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {msg.showFeedback && !feedbackGiven && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-3 bg-gray-800/50 border border-white/10 rounded-2xl"
                    >
                      <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                        <Sparkles size={12} className="text-yellow-400" />
                        Rate your experience:
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => giveFeedback("good")}
                          className="flex-1 py-1.5 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg text-xs text-green-300 transition-all"
                        >
                          😊 Great
                        </button>
                        <button
                          onClick={() => giveFeedback("neutral")}
                          className="flex-1 py-1.5 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/30 rounded-lg text-xs text-yellow-300 transition-all"
                        >
                          😐 Okay
                        </button>
                        <button
                          onClick={() => giveFeedback("bad")}
                          className="flex-1 py-1.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-xs text-red-300 transition-all"
                        >
                          😞 Poor
                        </button>
                      </div>
                    </motion.div>
                  )}

                  <span className="text-[9px] text-gray-600 mt-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </motion.div>
              ))}

              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex">
                  <div className="bg-gray-800/80 border border-white/10 px-4 py-3 rounded-3xl rounded-bl-md">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={endRef} />
            </div>

            <div className="border-t border-white/10 p-4 bg-gray-900/50 backdrop-blur-sm">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && send()}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all"
                />
                <button
                  onClick={() => send()}
                  disabled={!input.trim() || typing}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-40 text-white rounded-xl px-4 py-2.5 transition-all hover:scale-105 active:scale-95"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[9px] text-gray-600 text-center mt-2">
                Powered by Thiran360AI • <a href="#" className="hover:text-blue-400">thiran360ai.com</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}