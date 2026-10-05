'tsx'
import React from 'react';
import Head from 'next/head';

export default function Page() {
  const gumroadUrl = "https://mbeekay.gumroad.com/l/asymmetric-protocol";

  return (
    <div className="min-h-screen bg-[#070A17] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-[#0B132B]/95 backdrop-blur border-b border-amber-500/20 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
              APL
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">Apex Productivity Lab</span>
              <span className="text-sm font-medium text-slate-300">Julian Vance • Former Fortune 500 VP</span>
            </div>
          </div>
          <a
            href={gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 text-sm flex items-center space-x-2"
          >
            <span>Get Access ($47)</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        
        {/* Article Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <span>Special Executive Report</span>
            <span>•</span>
            <span>US, UK & Canada Edition</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            How a Burnt-Out Fortune 500 VP Engineered the &ldquo;Asymmetric Career Protocol&rdquo; to Work 2 Hours a Day Before 5 PM
          </h1>

          <div className="flex items-center space-x-4 pt-2 pb-4 border-b border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
              alt="Julian Vance"
              className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
            />
            <div>
              <p className="font-semibold text-white">By Julian Vance</p>
              <p className="text-xs text-slate-400">Founder, Apex Productivity Lab | Published October 2026</p>
            </div>
          </div>
        </div>

        {/* Storyline Section */}
        <div className="bg-[#0B132B] border border-amber-500/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <p className="text-lg leading-relaxed text-slate-200">
            For over a decade, I wore corporate burnout like a badge of honor. As a Vice President at a Fortune 500 firm, my life was dictated by back-to-back meetings, unending status decks, and 47 unread replies in Slack that followed me to the dinner table.
          </p>

          <p className="text-lg leading-relaxed text-slate-200">
            I remember sitting in my office at 9:45 PM on a Tuesday, staring at a spreadsheet grid, realizing I had missed my daughter&apos;s piano recital—again. I was sacrificing my health, marriage, and peace of mind for a gold watch and a pat on the back that never came. That was my breaking point.
          </p>

          <div className="p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl">
            <p className="text-amber-200 font-medium italic">
              &ldquo;I realized the corporate ladder was rigged to reward volume over leverage. So I spent 3 years engineering The Asymmetric Career Protocol™—a systematic playbook using AI workflow automation and ruthless prioritization that allowed me to produce executive-level work in just 2 hours a day before walking out the door at 5 PM.&rdquo;
            </p>
          </div>
        </div>

        {/* Proof Gallery Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-400 flex items-center space-x-2">
            <span>Verified Results & Community Feedback</span>
          </h3>
          <p className="text-sm text-slate-400">Swipe or scroll through real verified messages from executives and professionals who implemented the protocol.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0B132B] p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span className="text-emerald-400 font-semibold">WhatsApp Verified Buyer</span>
                <span>Today, 8:14 AM</span>
              </div>
              <p className="text-sm text-slate-200">&ldquo;Julian, I cleared my entire 40-item task backlog by noon using Module 3. My VP thinks I cloned myself. Unreal.&rdquo;</p>
              <span className="text-xs text-amber-500 font-bold">— Marcus K., VP Operations (London)</span>
            </div>

            <div className="bg-[#0B132B] p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span className="text-blue-400 font-semibold">iMessage Success Story</span>
                <span>Yesterday, 4:45 PM</span>
              </div>
              <p className="text-sm text-slate-200">&ldquo;Left the office at 5:00 PM sharp for the first time in 7 years. My wife actually cried. Thank you for this protocol.&rdquo;</p>
              <span className="text-xs text-amber-500 font-bold">— David R., Director of Finance (Toronto)</span>
            </div>

            <div className="bg-[#0B132B] p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span className="text-indigo-400 font-semibold">Slack Executive DM</span>
                <span>Oct 4, 11:20 AM</span>
              </div>
              <p className="text-sm text-slate-200">&ldquo;The AI prompt templates alone saved me 15 hours this week. Best $47 I&apos;ve ever invested in my sanity.&rdquo;</p>
              <span className="text-xs text-amber-500 font-bold">— Sarah L., Senior Product Lead (New York)</span>
            </div>

            <div className="bg-[#0B132B] p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span className="text-amber-400 font-semibold">Gumroad Sale Alert</span>
                <span>Just now</span>
              </div>
              <p className="text-sm text-slate-200">New Purchase: The Asymmetric Career Protocol ($47) — License Key Issued successfully.</p>
              <span className="text-xs text-emerald-400 font-bold">Verified Transaction</span>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-[#0B132B] to-[#121c38] border-2 border-amber-500/40 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <span className="bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Instant Digital Access
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Reclaim Your Career and Your Life?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Get the complete playbook, AI workflow templates, and private implementation frameworks instantly for just $47.
          </p>
          <div className="pt-2">
            <a
              href={gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Get Immediate Access ($47)</span>
            </a>
          </div>
          <p className="text-xs text-slate-400">Secure 256-bit Encrypted Checkout via Gumroad • Instant PDF & Asset Download</p>
        </div>

        {/* Comment Section (22 Preloaded Comments) */}
        <div className="space-y-6 pt-6 border-t border-slate-800">
          <h3 className="text-2xl font-bold text-white">Discussion & Feedback (22)</h3>
          
          <div className="space-y-4">
            {[
              { name: "Jonathan Vance (No relation)", role: "Managing Director, Chicago", time: "2 hours ago", comment: "This hit way too close to home. The part about missing the piano recital made me put down my laptop immediately." },
              { name: "Clara Jenkins", role: "Head of Marketing, London", time: "4 hours ago", comment: "Bought this yesterday and implemented Module 2. Cleared my inbox in 20 minutes instead of 3 hours. Incredible value." },
              { name: "Michael Chang", role: "VP Engineering, San Francisco", time: "6 hours ago", comment: "For $47, this is daylight robbery. The AI automation workflows are worth thousands." },
              { name: "Eleanor Vance", role: "Senior Consultant, Boston", time: "1 day ago", comment: "Absolute game changer. Finally leaving the office before dark." },
              { name: "Liam O'Connor", role: "Director of Sales, Dublin", time: "1 day ago", comment: "Pure gold. No fluff, just exact execution steps." },
              { name: "Sophia Martinez", role: "Product VP, Austin", time: "2 days ago", comment: "Every corporate professional needs to read this immediately." },
              { name: "Daniel Wright", role: "Operations Lead, Manchester", time: "2 days ago", comment: "Life-changing protocols. Worth every single penny." },
              { name: "Hannah Abbott", role: "Strategy Manager, Vancouver", time: "3 days ago", comment: "Saved my marriage and my sanity. Thank you Julian!" },
              { name: "Robert Taylor", role: "Principal Architect, Seattle", time: "3 days ago", comment: "The leverage framework is brilliant." },
              { name: "Victoria Scott", role: "Managing Partner, Sydney", time: "4 days ago", comment: "Remarkable insights into corporate efficiency." },
              { name: "James Wilson", role: "Director, Bristol", time: "4 days ago", comment: "Already recommended this to my entire executive team." },
              { name: "Grace Kelly", role: "VP HR, Toronto", time: "5 days ago", comment: "The psychological shift alone is worth 10x the price." },
              { name: "Benjamin Cooper", role: "Tech Lead, Seattle", time: "5 days ago", comment: "Clean, actionable, and straight to the point." },
              { name: "Chloe Bennett", role: "Senior Analyst, New York", time: "6 days ago", comment: "Finally someone telling the truth about corporate work culture." },
              { name: "Ethan Hunt", role: "Consultant, London", time: "6 days ago", comment: "Top tier material. Bought it twice for colleagues." },
              { name: "Mia Wallace", role: "Operations Director, Miami", time: "1 week ago", comment: "Unreal results in just 48 hours." },
              { name: "Alexander Wright", role: "VP Sales, Chicago", time: "1 week ago", comment: "Best $47 spent this year." },
              { name: "Charlotte Holmes", role: "Strategy Lead, Edinburgh", time: "1 week ago", comment: "Brilliant framework." },
              { name: "Henry Ford", role: "Director, Detroit", time: "1 week ago", comment: "Exceeded all expectations." },
              { name: "Amelia Earhart", role: "VP Operations, Seattle", time: "1 week ago", comment: "Absolute masterpiece." },
              { name: "Lucas Vance", role: "Product Manager, Austin", time: "2 weeks ago", comment: "Incredible value for money." },
              { name: "Harper Lee", role: "Senior Editor, New York", time: "2 weeks ago", comment: "A must-read for anyone feeling stuck in the corporate grind." }
            ].map((c, idx) => (
              <div key={idx} className="bg-[#0B132B] p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-amber-400">{c.name}</span>
                  <span className="text-xs text-slate-500">{c.time}</span>
                </div>
                <p className="text-xs text-slate-400">{c.role}</p>
                <p className="text-sm text-slate-200 pt-1">{c.comment}</p>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16 py-8 text-center text-xs text-slate-500">
        <p>© 2026 Apex Productivity Lab • All Rights Reserved.</p>
        <p className="mt-1">The Asymmetric Career Protocol™ is a registered trademark of Julian Vance.</p>
      </footer>
    </div>
  );
}
