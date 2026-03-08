import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Zap, Activity, Newspaper, ArrowUpRight, Search, Bell, User, ChevronLeft, Mail, Shield, CreditCard } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

// --- DATA MAPPING ---
const STOCK_DATABASE = {
  "RELIANCE": { price: "2,945.20", prob: "84%", target: "3,092", sl: "2,856", color: "text-emerald-400" },
  "TCS": { price: "4,120.15", prob: "72%", target: "4,350", sl: "4,010", color: "text-emerald-400" },
  "INFY": { price: "1,630.50", prob: "51%", target: "1,700", sl: "1,590", color: "text-amber-400" },
  "HDFC BANK": { price: "1,440.00", prob: "22%", target: "1,510", sl: "1,410", color: "text-rose-400" }
};

const MOCK_CHART = [ {p:2800},{p:2820},{p:2810},{p:2890},{p:2850},{p:2945} ];

// --- COMPONENTS ---

const Dashboard = () => {
  const [selected, setSelected] = useState("RELIANCE");
  const stock = STOCK_DATABASE[selected];

  return (
    <div className="grid grid-cols-12 gap-6 p-6 max-w-[1600px] mx-auto">
      {/* Sidebar Scanner */}
      <aside className="col-span-12 lg:col-span-3 bg-[#161A1E] rounded-2xl border border-slate-800 p-5 shadow-2xl">
        <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6 px-2">Live AI Scanner</h3>
        <div className="space-y-1">
          {Object.keys(STOCK_DATABASE).map((s) => (
            <div key={s} onClick={() => setSelected(s)} 
              className={`flex justify-between items-center p-3 rounded-xl cursor-pointer transition-all ${selected === s ? 'bg-cyan-500/10 border border-cyan-500/30' : 'hover:bg-slate-800/50 border border-transparent'}`}>
              <span className="font-bold text-sm">{s}</span>
              <span className={`font-mono font-bold ${STOCK_DATABASE[s].color}`}>{STOCK_DATABASE[s].prob}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Analytics */}
      <main className="col-span-12 lg:col-span-6 space-y-6">
        <div className="bg-[#161A1E] rounded-3xl border border-slate-800 p-8 shadow-2xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-4xl font-black italic">{selected}</h2>
              <span className="text-emerald-400 text-sm font-bold flex items-center gap-1 mt-1"><ArrowUpRight size={16}/> +1.24% Today</span>
            </div>
            <div className="text-right">
              <p className="text-4xl font-mono font-black">₹{stock.price}</p>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-2xl p-6 flex flex-col items-center justify-center mb-8 border border-slate-800">
             <div className="text-4xl font-black text-cyan-400 mb-1">{stock.prob}</div>
             <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Bullish Probability</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Target</p><p className="text-emerald-400 font-bold">₹{stock.target}</p></div>
            <div className="text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Entry</p><p className="font-bold">₹{stock.price}</p></div>
            <div className="text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Stoploss</p><p className="text-rose-400 font-bold">₹{stock.sl}</p></div>
          </div>

          <div className="h-40 w-full">
            <ResponsiveContainer><AreaChart data={MOCK_CHART}><Area type="monotone" dataKey="p" stroke="#06B6D4" fill="rgba(6, 182, 212, 0.1)" strokeWidth={3} /></AreaChart></ResponsiveContainer>
          </div>
        </div>
      </main>

      {/* News Stream */}
      <aside className="col-span-12 lg:col-span-3 bg-[#161A1E] rounded-2xl border border-slate-800 p-5 shadow-2xl h-fit">
        <h3 className="flex items-center gap-2 text-slate-500 font-black text-[10px] uppercase tracking-widest mb-6"><Newspaper size={14}/> Sentiment Stream</h3>
        <div className="space-y-6">
          <div className="border-l-2 border-emerald-500 pl-4"><p className="text-xs font-bold mb-1">Q3 SURGE</p><p className="text-[11px] text-slate-400 italic">Profits up 12% led by retail growth.</p></div>
          <div className="border-l-2 border-cyan-500 pl-4"><p className="text-xs font-bold mb-1">NEW TECH</p><p className="text-[11px] text-slate-400 italic">AI Integration complete for ops.</p></div>
        </div>
      </aside>
    </div>
  );
};

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-[#161A1E] rounded-3xl border border-slate-800 shadow-2xl">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-cyan-400 text-sm font-bold mb-8 hover:opacity-70"><ChevronLeft size={16}/> Back to Dashboard</button>
      
      <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-800">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-3xl font-black">NF</div>
        <div>
          <h2 className="text-3xl font-black">Nida Fatma</h2>
          <p className="text-slate-500 font-medium">Pro Analyst Member</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer">
          <Mail className="text-cyan-400" size={20}/><div className="flex-1"><p className="text-[10px] text-slate-500 font-bold uppercase">Email</p><p className="font-bold">nida.fatma@example.com</p></div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer">
          <Shield className="text-cyan-400" size={20}/><div className="flex-1"><p className="text-[10px] text-slate-500 font-bold uppercase">Account Status</p><p className="font-bold text-emerald-400">Verified Professional</p></div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer">
          <CreditCard className="text-cyan-400" size={20}/><div className="flex-1"><p className="text-[10px] text-slate-500 font-bold uppercase">Subscription</p><p className="font-bold">Enterprise AI Plan</p></div>
        </div>
      </div>
    </div>
  );
};

// --- APP WRAPPER ---
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0B0E11] text-slate-200">
        <nav className="flex justify-between items-center px-8 py-4 border-b border-slate-800 bg-[#0B0E11]/80 backdrop-blur-md sticky top-0 z-50">
          <Link to="/" className="flex items-center gap-2">
            <Zap size={24} className="text-cyan-400 fill-cyan-400" />
            <h1 className="text-xl font-black tracking-tight">SMARTMARKET <span className="text-cyan-400">AI</span></h1>
          </Link>
          <div className="flex gap-4 items-center">
            <Link to="/profile" className="p-2 hover:bg-slate-800 rounded-full transition-all text-slate-400 hover:text-cyan-400">
              <User size={24} />
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}