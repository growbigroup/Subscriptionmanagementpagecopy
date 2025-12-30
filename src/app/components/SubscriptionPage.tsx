import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { 
  Coins, 
  CreditCard, 
  RefreshCw, 
  History, 
  Calendar, 
  CheckCircle, 
  Clock, 
  ChevronRight,
  Zap,
  CreditCard as CardIcon,
  User,
  Pencil,
  Bell,
  TriangleAlert,
  ShieldCheck,
  Mail,
  Smartphone,
  Sparkles,
  Check,
  X,
  LogOut,
  Download,
  Play,
  Crown,
  Flame,
  Video,
  Users,
  Timer,
  Circle,
  CircleCheck,
} from 'lucide-react';

import img_ef84584f884304432f2fcee2b4b5e4e60e6258e8 from "figma:asset/ef84584f884304432f2fcee2b4b5e4e60e6258e8.png";

export function SubscriptionPage() {
  const [status, setStatus] = useState<'active' | 'canceled' | 'none'>('active');
  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState('pro'); // starter, pro, enterprise
  const [selectedPlan, setSelectedPlan] = useState('12_months');

  const handleStatusChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (status === 'none') {
        setStatus('active');
      } else {
        setStatus(status === 'active' ? 'canceled' : 'active');
      }
      setIsLoading(false);
    }, 1500); 
  };

  const handlePlanChange = (newPlan: string) => {
    // לוגיקה לשינוי תוכנית
    setPlan(newPlan);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 p-4 md:p-8 font-sans selection:bg-orange-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#050505] to-[#050505] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-zinc-800/50">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-orange-900/20">
                U
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#050505] p-1 rounded-full">
                <div className="bg-green-500 w-3 h-3 rounded-full border border-[#050505]" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                User Settings
                <Badge variant="outline" className="border-orange-500/30 text-orange-400 bg-orange-500/5 text-[10px] py-0 h-5">PRO MEMBER</Badge>
              </h1>
              <p className="text-zinc-400 text-sm mt-1">Manage your account and subscription preferences.</p>
            </div>
          </div>
          
          <div className="flex gap-3 items-center">
             {/* Dev Toggle for testing states */}
             <div className="hidden md:flex items-center gap-1 mr-2 bg-zinc-900/50 p-1 rounded-lg border border-zinc-800">
               <button 
                 onClick={() => setStatus('active')}
                 className={`text-[10px] font-medium px-2 py-1 rounded-md transition-all ${status === 'active' ? 'bg-green-900/30 text-green-400 border border-green-900/50' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                 ACTIVE
               </button>
               <button 
                 onClick={() => setStatus('canceled')}
                 className={`text-[10px] font-medium px-2 py-1 rounded-md transition-all ${status === 'canceled' ? 'bg-red-900/30 text-red-400 border border-red-900/50' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                 CANCELED
               </button>
               <button 
                 onClick={() => setStatus('none')}
                 className={`text-[10px] font-medium px-2 py-1 rounded-md transition-all ${status === 'none' ? 'bg-blue-900/30 text-blue-400 border border-blue-900/50' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                 NEW
               </button>
             </div>

             <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800">
               <LogOut className="w-4 h-4 mr-2" /> Sign Out
             </Button>
          </div>
        </header>


        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN (8/12) - Subscription & Billing */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* 1. SUBSCRIPTION STATUS CARD */}
            {status === 'none' ? (
              <Card className="bg-[#08080a] border-zinc-800 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                  
                  <div className="flex flex-col md:flex-row h-full">
                    {/* LEFT SIDE - Content */}
                    <div className="w-full md:w-[60%] p-6 flex flex-col justify-between relative z-10 bg-[#08080a]">
                       <div>
                         <div className="flex items-center gap-3 mb-5">
                           <div className="bg-orange-500/10 p-2 rounded-xl border border-orange-500/20 shadow-[0_0_15px_-3px_rgba(249,115,22,0.3)]">
                             <Crown className="w-5 h-5 text-orange-500 fill-orange-500" />
                           </div>
                           <div className="px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 bg-orange-500/5 text-[10px] font-bold tracking-wide uppercase">
                             Limited Offer
                           </div>
                         </div>
                         
                         <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
                           Unlock <span className="text-orange-500">Pro</span> Access
                         </h2>
                         <p className="text-zinc-400 text-sm mb-6 leading-relaxed max-w-sm">
                           Get unlimited generations, 4K exports, and exclusive access to our newest AI models.
                         </p>

                         {/* Mini Benefits Grid */}
                         <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-300 bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-800/80">
                               <Check className="w-3.5 h-3.5 text-orange-500" /> NSFW Mode
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-300 bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-800/80">
                               <Check className="w-3.5 h-3.5 text-orange-500" /> 4K Export
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-300 bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-800/80">
                               <Check className="w-3.5 h-3.5 text-orange-500" /> Priority Gen
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-300 bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-800/80">
                               <Check className="w-3.5 h-3.5 text-orange-500" /> No Watermark
                            </div>
                         </div>
                       </div>

                       {/* Pricing List - No Scroll, Full Height */}
                       <div className="space-y-3">
                          {/* 12 Months */}
                          <div 
                             onClick={() => setSelectedPlan('12_months')}
                             className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group/item ${selectedPlan === '12_months' ? 'border-orange-500 bg-orange-500/5' : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40'}`}
                          >
                             <div className="flex items-center gap-4">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${selectedPlan === '12_months' ? 'border-orange-500 bg-orange-500 text-black' : 'border-zinc-600 group-hover/item:border-zinc-500'}`}>
                                  {selectedPlan === '12_months' && <Check className="w-3 h-3" strokeWidth={3} />}
                                </div>
                                <div>
                                   <div className="flex items-center gap-2 mb-0.5">
                                      <span className="text-base font-bold text-white">12 Months</span>
                                      <span className="text-[10px] font-bold bg-[#3a1d08] text-[#ff8c3a] px-2 py-0.5 rounded border border-[#5a2d0c]">BEST VALUE</span>
                                   </div>
                                   <div className="text-xs text-zinc-400">Save 80% • Billed yearly</div>
                                </div>
                             </div>
                             <div className="text-right">
                               <div className="text-lg font-bold text-orange-500">$7.99<span className="text-xs font-normal text-zinc-500">/mo</span></div>
                               <div className="text-xs text-zinc-600 line-through decoration-zinc-700">$39.99</div>
                             </div>
                          </div>

                          {/* 3 Months */}
                          <div 
                             onClick={() => setSelectedPlan('3_months')}
                             className={`relative flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 group/item ${selectedPlan === '3_months' ? 'border-orange-500 bg-orange-500/5 ring-1 ring-orange-500/20' : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40'}`}
                          >
                             <div className="flex items-center gap-4">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${selectedPlan === '3_months' ? 'border-orange-500 bg-orange-500 text-black' : 'border-zinc-600 group-hover/item:border-zinc-500'}`}>
                                  {selectedPlan === '3_months' && <Check className="w-3 h-3" strokeWidth={3} />}
                                </div>
                                <div>
                                   <div className="flex items-center gap-2 mb-0.5">
                                      <span className="text-base font-bold text-white">3 Months</span>
                                      <span className="text-[10px] font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700">POPULAR</span>
                                   </div>
                                   <div className="text-xs text-zinc-400">Save 60% • Billed quarterly</div>
                                </div>
                             </div>
                             <div className="text-right">
                               <div className="text-lg font-bold text-white">$15.99<span className="text-xs font-normal text-zinc-500">/mo</span></div>
                               <div className="text-xs text-zinc-600 line-through decoration-zinc-700">$39.99</div>
                             </div>
                          </div>

                          {/* 1 Month */}
                          <div 
                             onClick={() => setSelectedPlan('1_month')}
                             className={`relative flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 group/item ${selectedPlan === '1_month' ? 'border-orange-500 bg-orange-500/5 ring-1 ring-orange-500/20' : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40'}`}
                          >
                             <div className="flex items-center gap-4">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${selectedPlan === '1_month' ? 'border-orange-500 bg-orange-500 text-black' : 'border-zinc-600 group-hover/item:border-zinc-500'}`}>
                                  {selectedPlan === '1_month' && <Check className="w-3 h-3" strokeWidth={3} />}
                                </div>
                                <div>
                                   <div className="text-base font-bold text-white mb-0.5">1 Month</div>
                                   <div className="text-xs text-zinc-400">Flexible • Cancel anytime</div>
                                </div>
                             </div>
                             <div className="text-right">
                               <div className="text-lg font-bold text-white">$19.99<span className="text-xs font-normal text-zinc-500">/mo</span></div>
                             </div>
                          </div>

                          {/* 2 Day Trial */}
                          <div 
                             onClick={() => setSelectedPlan('2_days')}
                             className={`relative flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 group/item ${selectedPlan === '2_days' ? 'border-orange-500 bg-orange-500/5 ring-1 ring-orange-500/20' : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40'}`}
                          >
                             <div className="flex items-center gap-4">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${selectedPlan === '2_days' ? 'border-orange-500 bg-orange-500 text-black' : 'border-zinc-600 group-hover/item:border-zinc-500'}`}>
                                  {selectedPlan === '2_days' && <Check className="w-3 h-3" strokeWidth={3} />}
                                </div>
                                <div>
                                   <div className="flex items-center gap-2 mb-0.5">
                                      <span className="text-base font-bold text-white">2 Day Access</span>
                                      <span className="text-[10px] font-bold bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">TRIAL</span>
                                   </div>
                                   <div className="text-xs text-zinc-400">One time payment</div>
                                </div>
                             </div>
                             <div className="text-right">
                               <div className="text-lg font-bold text-white">$1.00</div>
                               <div className="text-xs text-zinc-500">/2 days</div>
                             </div>
                          </div>
                       </div>
                       
                       <div className="mt-8">
                          <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold h-12 text-lg shadow-lg shadow-orange-900/20 transition-all hover:scale-[1.02] active:scale-[0.98] rounded-xl">
                             {selectedPlan === '2_days' ? 'Start 2-Day Trial' : 'Upgrade to Pro'}
                          </Button>
                          <div className="text-center text-xs text-zinc-500 mt-3 flex items-center justify-center gap-1.5">
                            <ShieldCheck className="w-3 h-3" />
                            7-day money-back guarantee
                          </div>
                       </div>
                    </div>

                    {/* RIGHT SIDE - Video Preview */}
                    <div className="hidden md:block w-[40%] relative border-l border-zinc-800 bg-zinc-900 overflow-hidden shrink-0">
                       <img 
                         src={img_ef84584f884304432f2fcee2b4b5e4e60e6258e8}
                         className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                         alt="Premium Preview"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                       
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-transform cursor-pointer group shadow-2xl">
                             <Play className="w-6 h-6 text-white fill-white ml-1" />
                          </div>
                       </div>

                       <div className="absolute bottom-8 left-6 right-6">
                          <div className="flex items-center gap-3 mb-3">
                             <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-sm text-white font-bold shadow-lg">U</div>
                             <div>
                               <div className="text-sm text-white font-bold">@TopCreator</div>
                               <div className="text-[10px] text-orange-400 font-medium bg-orange-500/10 px-1.5 py-0.5 rounded inline-block mt-0.5">VERIFIED</div>
                             </div>
                          </div>
                          <div className="text-sm text-zinc-200 leading-relaxed font-medium">
                            "The 4K export feature is a game changer! My content quality skyrocketed. 🚀"
                          </div>
                       </div>
                    </div>
                  </div>
              </Card>
            ) : (

            <Card className={`relative overflow-hidden border transition-all duration-300 ${status === 'canceled' ? 'bg-zinc-900/20 border-zinc-800 grayscale-[0.5]' : 'bg-gradient-to-b from-zinc-900/50 to-zinc-950 border-zinc-800/80'}`}>
               
               {/* Decorative Top Line */}
               <div className={`absolute top-0 left-0 w-full h-1 ${status === 'active' ? 'bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500' : 'bg-zinc-700'}`} />

               <CardHeader className="flex flex-row items-start justify-between pb-6">
                 <div>
                   <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">Current Plan</div>
                   <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                     Pro Plan
                     {status === 'active' && <CheckCircle className="w-6 h-6 text-green-500" />}
                   </h2>
                   <p className="text-zinc-400 mt-2 max-w-md">
                     {status === 'active' 
                       ? "You have full access to all Pro features. Your plan renews automatically." 
                       : "Your subscription is canceled. You still have access until the end of the billing period."}
                   </p>
                 </div>
                 
                 <div className="text-right hidden sm:block">
                   <div className="text-3xl font-bold text-white">$29<span className="text-lg text-zinc-500 font-normal">.00</span></div>
                   <div className="text-zinc-500 text-sm">per month</div>
                 </div>
               </CardHeader>

               <CardContent className="grid gap-6">
                  {/* Status & Dates Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zinc-900 rounded-md text-zinc-400"><Calendar className="w-5 h-5" /></div>
                      <div>
                        <div className="text-xs text-zinc-500 font-semibold uppercase">Started On</div>
                        <div className="text-sm text-zinc-200">Dec 12, 2023</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-md ${status === 'canceled' ? 'bg-red-950/30 text-red-400' : 'bg-zinc-900 text-zinc-400'}`}>
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500 font-semibold uppercase">{status === 'canceled' ? 'Expires On' : 'Next Billing'}</div>
                        <div className={`text-sm ${status === 'canceled' ? 'text-red-400 font-medium' : 'text-zinc-200'}`}>Jan 12, 2024</div>
                      </div>
                    </div>
                  </div>

                  {/* Usage Progress */}
                  <div className="space-y-2">
                     <div className="flex justify-between items-center text-sm">
                       <span className="text-zinc-400">Monthly Usage (Credits)</span>
                       <span className="text-white font-medium">2,400 <span className="text-zinc-600">/</span> 5,000</span>
                     </div>
                     <Progress value={48} className="h-2 bg-zinc-800" indicatorClassName={status === 'canceled' ? 'bg-zinc-600' : 'bg-orange-500'} />
                  </div>
               </CardContent>

               <CardFooter className="bg-zinc-900/30 border-t border-zinc-800/50 py-4 flex flex-col sm:flex-row justify-between gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-white text-black hover:bg-zinc-200 font-semibold border-0">
                        Change Plan
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#050505] border-zinc-800 text-white max-w-2xl w-full p-6">
                      <DialogHeader className="mb-4">
                        <DialogTitle className="text-xl font-bold">Choose your plan</DialogTitle>
                        <DialogDescription className="text-zinc-400">Select the membership duration that suits you best.</DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-3">
                        {/* Option 1: 12 Months (Best Value) */}
                        <div className="relative rounded-xl border-2 border-orange-500 bg-zinc-900/20 p-4 cursor-pointer hover:bg-zinc-900/40 transition-colors group">
                           {/* Best Value Badge */}
                           <div className="absolute -top-[1px] -right-[1px] bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-md shadow-sm">
                             BEST VALUE
                           </div>
                           
                           <div className="flex items-center justify-between gap-4">
                             <div className="flex items-center gap-4">
                               <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white">
                                 <Check className="w-4 h-4" strokeWidth={3} />
                               </div>
                               <div>
                                 <div className="flex items-center gap-2 mb-1">
                                   <span className="font-bold text-lg text-white">12 Months</span>
                                   <span className="bg-[#3a1d08] text-[#ff8c3a] text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#5a2d0c]">80% SAVE</span>
                                 </div>
                                 <div className="flex items-baseline gap-2">
                                   <span className="text-2xl font-bold text-white">$95.88</span>
                                   <span className="text-sm text-zinc-500 line-through decoration-zinc-600">$479.00</span>
                                 </div>
                               </div>
                             </div>

                             <div className="text-right pr-2">
                               <div className="text-xs text-zinc-500 line-through decoration-zinc-600 mb-0.5">$39.99</div>
                               <div className="text-xl font-bold text-orange-500">$7.99</div>
                               <div className="text-[10px] text-zinc-500 font-medium">/MONTH</div>
                             </div>
                           </div>
                        </div>

                        {/* Option 2: 3 Months */}
                        <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 cursor-pointer hover:border-zinc-600 hover:bg-zinc-900/40 transition-all group">
                           <div className="flex items-center justify-between gap-4">
                             <div className="flex items-center gap-4">
                               <div className="w-6 h-6 rounded-full border border-zinc-600 group-hover:border-zinc-500" />
                               <div>
                                 <div className="flex items-center gap-2 mb-1">
                                   <span className="font-bold text-lg text-white">3 Months</span>
                                   <span className="bg-[#3a1d08] text-[#ff8c3a] text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#5a2d0c]">60% SAVE</span>
                                 </div>
                                 <div className="flex items-baseline gap-2">
                                   <span className="text-2xl font-bold text-white">$47.97</span>
                                   <span className="text-sm text-zinc-500 line-through decoration-zinc-600">$119.97</span>
                                 </div>
                               </div>
                             </div>

                             <div className="text-right pr-2">
                               <div className="text-xs text-zinc-500 line-through decoration-zinc-600 mb-0.5">$39.99</div>
                               <div className="text-xl font-bold text-white">$15.99</div>
                               <div className="text-[10px] text-zinc-500 font-medium">/MONTH</div>
                             </div>
                           </div>
                        </div>

                        {/* Option 3: 1 Month */}
                        <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 cursor-pointer hover:border-zinc-600 hover:bg-zinc-900/40 transition-all group">
                           <div className="flex items-center justify-between gap-4">
                             <div className="flex items-center gap-4">
                               <div className="w-6 h-6 rounded-full border border-zinc-600 group-hover:border-zinc-500" />
                               <div>
                                 <div className="flex items-center gap-2 mb-1">
                                   <span className="font-bold text-lg text-white">1 Month</span>
                                 </div>
                                 <div className="flex items-baseline gap-2">
                                   <span className="text-2xl font-bold text-white">$19.99</span>
                                 </div>
                               </div>
                             </div>

                             <div className="text-right pr-2">
                               <div className="text-xl font-bold text-white">$19.99</div>
                               <div className="text-[10px] text-zinc-500 font-medium">/MONTH</div>
                             </div>
                           </div>
                        </div>

                        {/* Option 4: 2 Day Membership */}
                        <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 cursor-pointer hover:border-zinc-600 hover:bg-zinc-900/40 transition-all group">
                           <div className="flex items-center justify-between gap-4">
                             <div className="flex items-center gap-4">
                               <div className="w-6 h-6 rounded-full border border-zinc-600 group-hover:border-zinc-500" />
                               <div>
                                 <div className="flex items-center gap-2 mb-1">
                                   <span className="font-bold text-lg text-white">2 Day Membership</span>
                                   <span className="bg-[#3a1d08] text-[#ff8c3a] text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#5a2d0c]">TRIAL</span>
                                 </div>
                                 <div className="flex items-baseline gap-2">
                                   <span className="text-2xl font-bold text-white">$1.00</span>
                                 </div>
                               </div>
                             </div>

                             <div className="text-right pr-2">
                               <div className="text-xl font-bold text-white">$1.00</div>
                               <div className="text-[10px] text-zinc-500 font-medium">/ 2 DAYS</div>
                             </div>
                           </div>
                        </div>
                      </div>
                      
                      <DialogFooter className="mt-6">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 text-lg">
                          Continue with 12 Months Plan
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  {status === 'active' ? (
                     <Dialog>
                       <DialogTrigger asChild>
                         <Button className="bg-zinc-900 text-red-500 hover:bg-zinc-800 hover:text-red-400 border border-zinc-800">
                           Cancel Subscription
                         </Button>
                       </DialogTrigger>
                       <DialogContent className="bg-zinc-950 border-zinc-800 text-white sm:max-w-md">
                         <DialogHeader>
                           <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mb-4 text-red-500 mx-auto">
                             <TriangleAlert className="w-6 h-6" />
                           </div>
                           <DialogTitle className="text-center">Cancel Subscription?</DialogTitle>
                           <DialogDescription className="text-center text-zinc-400">
                             Are you sure you want to cancel? You will lose access to <strong>Pro features</strong> and your remaining <strong>2,600 credits</strong> on Jan 12, 2024.
                           </DialogDescription>
                         </DialogHeader>
                         <div className="p-4 bg-zinc-900 rounded-lg text-sm text-zinc-300 mt-2 border border-zinc-800">
                            <ul className="space-y-2">
                              <li className="flex gap-2 text-zinc-400"><X className="w-4 h-4 text-red-500" /> Lose Priority Support</li>
                              <li className="flex gap-2 text-zinc-400"><X className="w-4 h-4 text-red-500" /> Limit to 100 credits/mo</li>
                            </ul>
                         </div>
                         <DialogFooter className="sm:justify-between gap-4 mt-4">
                           <Button variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800">Keep Subscription</Button>
                           <Button variant="destructive" onClick={handleStatusChange} className="w-full bg-red-600 hover:bg-red-700">
                             {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Yes, Cancel"}
                           </Button>
                         </DialogFooter>
                       </DialogContent>
                     </Dialog>
                  ) : (
                    <Button onClick={handleStatusChange} className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto shadow-[0_0_15px_rgba(22,163,74,0.3)]">
                       {isLoading ? <RefreshCw className="w-4 h-4 animate-spin mr-2" /> : <RefreshCw className="w-4 h-4 mr-2" />}
                       Reactivate Subscription
                    </Button>
                  )}
               </CardFooter>
            </Card>
            )}

            {/* 2. PAYMENT & INVOICES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Payment Method */}
              <Card className="bg-zinc-900/30 border-zinc-800/50">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base font-medium text-zinc-200">Payment Method</CardTitle>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 text-orange-500 hover:text-orange-400 hover:bg-orange-500/10">Edit</Button>
                      </DialogTrigger>
                      <DialogContent className="bg-zinc-950 border-zinc-800 text-white">
                        <DialogHeader><DialogTitle>Update Payment Method</DialogTitle></DialogHeader>
                        <div className="grid gap-4 py-4">
                           <div className="grid gap-2">
                             <Label>Card Information</Label>
                             <div className="flex gap-2 items-center border border-zinc-700 rounded-md px-3 bg-zinc-900">
                               <CreditCard className="w-4 h-4 text-zinc-400" />
                               <Input className="border-0 bg-transparent focus-visible:ring-0 p-0 h-10 placeholder:text-zinc-600" placeholder="0000 0000 0000 0000" />
                             </div>
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                             <div className="grid gap-2">
                               <Label>Expiry</Label>
                               <Input className="bg-zinc-900 border-zinc-700" placeholder="MM/YY" />
                             </div>
                             <div className="grid gap-2">
                               <Label>CVC</Label>
                               <Input className="bg-zinc-900 border-zinc-700" placeholder="123" />
                             </div>
                           </div>
                        </div>
                        <DialogFooter><Button className="bg-orange-500 text-white hover:bg-orange-600">Save Card</Button></DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                    <div className="w-12 h-8 bg-zinc-800 rounded flex items-center justify-center border border-zinc-700">
                       <div className="flex -space-x-1.5">
                         <div className="w-3.5 h-3.5 rounded-full bg-red-500/90" />
                         <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/90" />
                       </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">•••• 4242</div>
                      <div className="text-xs text-zinc-500">Expires 12/2025</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Invoices */}
              <Card className="bg-zinc-900/30 border-zinc-800/50">
                 <CardHeader className="pb-3">
                   <div className="flex justify-between items-center">
                     <CardTitle className="text-base font-medium text-zinc-200">Billing History</CardTitle>
                     <Dialog>
                       <DialogTrigger asChild>
                         <Button variant="ghost" size="sm" className="h-8 text-zinc-400 hover:text-white">See All</Button>
                       </DialogTrigger>
                       <DialogContent className="bg-zinc-950 border-zinc-800 text-white max-w-2xl">
                          <DialogHeader><DialogTitle>Invoices</DialogTitle></DialogHeader>
                          <div className="space-y-1 mt-4">
                             {[1,2,3,4,5].map((i) => (
                               <div key={i} className="flex items-center justify-between p-3 rounded hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800">
                                  <div className="flex items-center gap-4">
                                     <div className="p-2 bg-zinc-900 rounded text-zinc-400"><Download className="w-4 h-4" /></div>
                                     <div>
                                       <div className="text-sm font-medium text-white">Invoice #00{i}</div>
                                       <div className="text-xs text-zinc-500">Dec {10-i}, 2023</div>
                                     </div>
                                  </div>
                                  <div className="text-right">
                                     <div className="text-sm font-medium text-white">$29.00</div>
                                     <Badge variant="outline" className="text-[10px] h-5 border-green-900 text-green-500 bg-green-900/10">PAID</Badge>
                                  </div>
                               </div>
                             ))}
                          </div>
                       </DialogContent>
                     </Dialog>
                   </div>
                 </CardHeader>
                 <CardContent>
                    <div className="space-y-3">
                       <div className="flex items-center justify-between text-sm p-2 rounded hover:bg-zinc-800/50 transition-colors cursor-pointer group">
                          <div className="flex items-center gap-3">
                             <div className="text-zinc-500 group-hover:text-zinc-300"><History className="w-4 h-4" /></div>
                             <span className="text-zinc-300">Dec 12, 2023</span>
                          </div>
                          <span className="text-zinc-400">$29.00</span>
                       </div>
                       <div className="flex items-center justify-between text-sm p-2 rounded hover:bg-zinc-800/50 transition-colors cursor-pointer group">
                          <div className="flex items-center gap-3">
                             <div className="text-zinc-500 group-hover:text-zinc-300"><History className="w-4 h-4" /></div>
                             <span className="text-zinc-300">Nov 12, 2023</span>
                          </div>
                          <span className="text-zinc-400">$29.00</span>
                       </div>
                    </div>
                 </CardContent>
              </Card>

            </div>

          </div>

          {/* RIGHT COLUMN (4/12) - Profile & Settings */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Profile Info Card */}
            <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm">
               <CardHeader><CardTitle className="text-base font-medium">Profile Details</CardTitle></CardHeader>
               <CardContent className="space-y-5">
                  <div className="space-y-1.5">
                    <Label className="text-xs text-zinc-500 uppercase">Display Name</Label>
                    <div className="flex justify-between items-center group">
                       <div className="text-sm font-medium text-white">Unknown User</div>
                       <Dialog>
                          <DialogTrigger asChild><Button size="icon" variant="ghost" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"><Pencil className="w-3 h-3 text-zinc-500" /></Button></DialogTrigger>
                          <DialogContent className="bg-zinc-950 border-zinc-800 text-white"><DialogHeader><DialogTitle>Edit Name</DialogTitle></DialogHeader><div className="py-2"><Input className="bg-zinc-900 border-zinc-700" placeholder="Display Name" /></div><DialogFooter><Button className="bg-orange-500">Save</Button></DialogFooter></DialogContent>
                       </Dialog>
                    </div>
                  </div>
                  <Separator className="bg-zinc-800" />
                  <div className="space-y-1.5">
                    <Label className="text-xs text-zinc-500 uppercase">Gender</Label>
                    <div className="flex justify-between items-center group">
                       <div className="text-sm font-medium text-white">Male</div>
                       <Dialog>
                          <DialogTrigger asChild>
                            <Button size="icon" variant="ghost" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Pencil className="w-3 h-3 text-zinc-500" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-zinc-950 border-zinc-800 text-white sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Edit Gender</DialogTitle>
                              <DialogDescription className="text-zinc-400">Select the gender shown on your profile.</DialogDescription>
                            </DialogHeader>
                            <div className="py-4">
                               <RadioGroup defaultValue="male" className="grid gap-2">
                                <div className="flex items-center space-x-2 p-2 rounded hover:bg-zinc-900">
                                  <RadioGroupItem value="male" id="r-male" className="border-zinc-600 text-orange-500" />
                                  <Label htmlFor="r-male" className="flex-grow cursor-pointer text-zinc-200">Male</Label>
                                </div>
                                <div className="flex items-center space-x-2 p-2 rounded hover:bg-zinc-900">
                                  <RadioGroupItem value="female" id="r-female" className="border-zinc-600 text-orange-500" />
                                  <Label htmlFor="r-female" className="flex-grow cursor-pointer text-zinc-200">Female</Label>
                                </div>
                                <div className="flex items-center space-x-2 p-2 rounded hover:bg-zinc-900">
                                  <RadioGroupItem value="other" id="r-other" className="border-zinc-600 text-orange-500" />
                                  <Label htmlFor="r-other" className="flex-grow cursor-pointer text-zinc-200">Other</Label>
                                </div>
                              </RadioGroup>
                            </div>
                            <DialogFooter><Button className="bg-orange-500 hover:bg-orange-600 text-white">Save Changes</Button></DialogFooter>
                          </DialogContent>
                       </Dialog>
                    </div>
                  </div>
                  <Separator className="bg-zinc-800" />
                  <div className="space-y-1.5">
                    <Label className="text-xs text-zinc-500 uppercase">Email</Label>
                    <div className="text-sm font-medium text-white">test@shpritz.ai</div>
                  </div>
                  <Separator className="bg-zinc-800" />
                  <div className="space-y-1.5">
                    <Label className="text-xs text-zinc-500 uppercase">Phone</Label>
                    <div className="flex justify-between items-center group">
                       <div className="text-sm font-medium text-zinc-500 italic">Not set</div>
                       <Dialog>
                          <DialogTrigger asChild><Button size="icon" variant="ghost" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"><Pencil className="w-3 h-3 text-zinc-500" /></Button></DialogTrigger>
                          <DialogContent className="bg-zinc-950 border-zinc-800 text-white"><DialogHeader><DialogTitle>Edit Phone</DialogTitle></DialogHeader><div className="py-2"><Input className="bg-zinc-900 border-zinc-700" placeholder="+1..." /></div><DialogFooter><Button className="bg-orange-500">Save</Button></DialogFooter></DialogContent>
                       </Dialog>
                    </div>
                  </div>
               </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-zinc-900/30 border-zinc-800/50">
               <CardHeader><CardTitle className="text-base font-medium">Preferences</CardTitle></CardHeader>
               <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                     <div className="space-y-0.5">
                        <Label className="text-sm text-zinc-200">Email Updates</Label>
                        <p className="text-xs text-zinc-500">Weekly digests & offers</p>
                     </div>
                     <Switch defaultChecked className="data-[state=checked]:bg-orange-500" />
                  </div>
                  <div className="flex items-center justify-between">
                     <div className="space-y-0.5">
                        <Label className="text-sm text-zinc-200">Security Alerts</Label>
                        <p className="text-xs text-zinc-500">Login attempts & changes</p>
                     </div>
                     <Switch defaultChecked disabled className="data-[state=checked]:bg-zinc-700" />
                  </div>
               </CardContent>
            </Card>

            {/* Danger Zone */}
            <div className="pt-4">
               <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start text-red-500/60 hover:text-red-500 hover:bg-red-950/10 gap-2 pl-0">
                       <TriangleAlert className="w-4 h-4" />
                       Delete Account
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-zinc-950 border-zinc-800 text-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-red-500">Delete Account</AlertDialogTitle>
                        <AlertDialogDescription className="text-zinc-400">
                           Permanent action. Data cannot be recovered.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                         <AlertDialogCancel className="bg-zinc-900 text-white border-zinc-800">Cancel</AlertDialogCancel>
                         <AlertDialogAction className="bg-red-600 hover:bg-red-700 border-0">Delete</AlertDialogAction>
                      </AlertDialogFooter>
                  </AlertDialogContent>
               </AlertDialog>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
