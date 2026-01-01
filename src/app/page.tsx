"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Bot, 
  Cpu, 
  Database, 
  Workflow, 
  Code2, 
  ArrowRight, 
  Zap, 
  Globe, 
  Layers, 
  Sparkles,
  Terminal,
  CheckCircle2,
  Play
} from "lucide-react";
import { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Components
const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white backdrop-blur-md", className)}>
    {children}
  </div>
);

const Button = ({ children, variant = "primary", className, href, ...props }: any) => {
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:scale-105",
    secondary: "bg-white/10 text-white border border-white/10 hover:bg-white/20 backdrop-blur-md",
    outline: "border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white"
  };

  const Component = href ? "a" : "button";

  return (
    <Component 
      href={href}
      className={cn("inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300", variants[variant as keyof typeof variants], className)} 
      {...props}
    >
      {children}
    </Component>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="relative min-h-screen bg-[#05050A] text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#05050A]/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Nexo</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#features" className="hover:text-white transition-colors">Tính năng</a>
              <a href="#workflows" className="hover:text-white transition-colors">Workflow</a>
              <a href="#integrations" className="hover:text-white transition-colors">Integrations</a>
              <a href="https://nexo-docs.nkthanh.dev" target="_blank" className="hover:text-white transition-colors">Docs</a>
              <a href="https://github.com/magiskboy/nexo" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="secondary" className="hidden sm:flex h-9 px-4 py-0 text-sm rounded-lg">Sign In</Button>
              <Button 
                variant="primary" 
                className="h-9 px-4 py-0 text-sm rounded-lg"
                href="https://github.com/magiskboy/nexo/releases/tag/0.1.0"
                target="_blank"
              >
                Download
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge className="mb-6 border-blue-500/30 bg-blue-500/10 text-blue-300">
                    <Sparkles className="h-3 w-3 mr-1" />
                    AI Assistant Thế Hệ Mới
                  </Badge>
                  <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                    Trợ lý AI <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
                      Đa Năng & Mạnh Mẽ
                    </span>
                  </h1>
                  <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Nexo không chỉ là chat bot. Đó là một không gian làm việc AI hoàn chỉnh với Workflows, Data Connectors và khả năng thực thi code trực tiếp. Dành cho người sáng tạo và chuyên gia.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <Button 
                      className="w-full sm:w-auto"
                      href="https://github.com/magiskboy/nexo/releases/tag/0.1.0"
                      target="_blank"
                    >
                      Tải Xuống Ngay <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                    <Button variant="secondary" className="w-full sm:w-auto">
                      Xem Demo
                    </Button>
                  </div>

                  <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="h-4 w-4 text-blue-500" /> macOS
                    </div>
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="h-4 w-4 text-blue-500" /> Windows
                    </div>
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="h-4 w-4 text-blue-500" /> Linux
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Hero Visual */}
              <motion.div 
                className="flex-1 w-full max-w-[600px] lg:max-w-none perspective-1000"
                style={{ y: y1 }}
                initial={{ opacity: 0, rotateX: 10, scale: 0.9 }}
                animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative rounded-2xl border border-white/10 bg-[#0A0A12] shadow-2xl overflow-hidden aspect-[4/3] group">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 group-hover:opacity-100 transition-opacity opacity-50" />
                   
                   {/* Fake UI Header */}
                   <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
                     <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                     <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                     <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
                   </div>

                   {/* Fake UI Body */}
                   <div className="p-6 flex flex-col h-full relative">
                      {/* Chat Bubble 1 */}
                      <div className="flex gap-4 mb-6">
                        <div className="h-8 w-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                           <Bot className="h-4 w-4 text-blue-400" />
                        </div>
                        <div className="space-y-2 max-w-[80%]">
                           <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 text-sm text-gray-300 border border-white/5">
                              Chào bạn! Tôi có thể giúp gì cho bạn hôm nay? Tôi có thể phân tích dữ liệu, viết code, hay tạo một workflow tự động hóa.
                           </div>
                           {/* Quick Actions */}
                           <div className="flex gap-2">
                              <span className="text-xs bg-white/5 border border-white/5 px-2 py-1 rounded-md text-gray-400 hover:text-white cursor-pointer transition">Phân tích CSV</span>
                              <span className="text-xs bg-white/5 border border-white/5 px-2 py-1 rounded-md text-gray-400 hover:text-white cursor-pointer transition">Tạo React Component</span>
                           </div>
                        </div>
                      </div>

                      {/* Chat Bubble 2 (User) */}
                      <div className="flex gap-4 mb-6 flex-row-reverse">
                         <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0">
                            <span className="text-xs font-bold text-purple-400">ME</span>
                         </div>
                         <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-4 text-sm shadow-lg shadow-blue-900/20">
                            Hãy tạo một biểu đồ doanh thu từ dữ liệu connector Sales_DB nhé.
                         </div>
                      </div>

                      {/* Interactive Chart Placeholder */}
                      <div className="ml-12 bg-[#0F0F16] border border-white/10 rounded-xl p-4 animate-pulse">
                         <div className="h-32 flex items-end gap-2 justify-between px-2">
                            {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                               <motion.div 
                                 key={i}
                                 initial={{ height: 0 }}
                                 animate={{ height: `${h}%` }}
                                 transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                 className="w-full bg-gradient-to-t from-blue-600/50 to-cyan-400 rounded-t-sm" 
                               />
                            ))}
                         </div>
                         <div className="mt-2 h-4 w-1/3 bg-white/5 rounded mx-auto" />
                      </div>

                      {/* Floating Elements */}
                      <motion.div 
                        className="absolute -right-12 top-20 bg-[#1A1A24] border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      >
                         <div className="flex items-center gap-3 mb-2">
                            <Workflow className="h-5 w-5 text-green-400" />
                            <span className="font-semibold text-sm">Auto-Workflow</span>
                         </div>
                         <div className="space-y-2">
                            <div className="h-2 w-24 bg-white/10 rounded-full" />
                            <div className="h-2 w-16 bg-white/10 rounded-full" />
                         </div>
                      </motion.div>

                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section id="features" className="py-24 px-6 relative">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold mb-4">Sức Mạnh Của Sự Đơn Giản</h2>
               <p className="text-gray-400 max-w-2xl mx-auto">
                 Tất cả công cụ bạn cần để làm việc với LLM, được tích hợp trong một giao diện duy nhất.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
               {/* Feature 1: Large */}
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="md:col-span-2 row-span-1 rounded-3xl border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden group"
               >
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="relative z-10">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                       <Database className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Data Connectors</h3>
                    <p className="text-gray-400 max-w-sm">Kết nối trực tiếp kiến thức của bạn. Support PDF, Notion, Google Drive và SQL Databases.</p>
                 </div>
                 {/* Decorative */}
                 <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-50">
                    <div className="w-full h-full relative">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className={`absolute right-${i * 8} bottom-${i * 8} w-32 h-32 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transform rotate-6 translate-x-${i * 10} translate-y-${i * 4}`} />
                        ))}
                    </div>
                 </div>
               </motion.div>

               {/* Feature 2 */}
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden group"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                       <Cpu className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Multi-LLM</h3>
                    <p className="text-sm text-gray-400">Switch giữa GPT-4, Claude 3, và Llama 3 local chỉ với 1 click.</p>
                  </div>
               </motion.div>

               {/* Feature 3 */}
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden group"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                       <Layers className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Prompt Templates</h3>
                    <p className="text-sm text-gray-400">Lưu trữ và tái sử dụng các prompt kỹ thuật cao một cách có tổ chức.</p>
                  </div>
               </motion.div>

               {/* Feature 4: Large */}
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="md:col-span-2 row-span-1 rounded-3xl border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden group"
               >
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="h-10 w-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                         <Workflow className="h-6 w-6 text-orange-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Visual Workflow Builder</h3>
                      <p className="text-gray-400 max-w-md">Thiết kế agent pipelines bằng cách kéo thả. Tự động hóa công việc phức tạp chưa bao giờ dễ dàng hơn.</p>
                    </div>
                    <div className="w-full h-24 bg-white/5 rounded-xl border border-white/10 mt-4 flex items-center justify-center gap-8 overflow-hidden">
                       <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded border border-white/10 text-xs">Input</div>
                       <ArrowRight className="h-4 w-4 text-gray-600" />
                       <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30 text-xs">Process</div>
                       <ArrowRight className="h-4 w-4 text-gray-600" />
                       <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 rounded border border-green-500/30 text-xs">Output</div>
                    </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Code/Chart Config Section */}
        <section className="py-24 px-6 bg-[#030305] border-y border-white/5">
           <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl font-bold">Code & Visualize <br /> <span className="text-gray-500">Ngay trên giao diện</span></h2>
                <div className="space-y-6">
                   <div 
                     onMouseEnter={() => setActiveTab('code')}
                     className={cn("p-6 rounded-2xl border transition-all cursor-pointer", activeTab === 'code' ? "bg-white/5 border-blue-500/50" : "border-transparent opacity-50 hover:opacity-100")}
                   >
                      <h3 className="text-xl font-bold flex items-center gap-2"><Terminal className="h-5 w-5" /> Thực thi Code Python/JS</h3>
                      <p className="text-gray-400 mt-2 text-sm">Chạy code trực tiếp trong sandbox an toàn. Xử lý dữ liệu, crawl web, hoặc tính toán phức tạp.</p>
                   </div>
                   
                   <div 
                     onMouseEnter={() => setActiveTab('chart')}
                     className={cn("p-6 rounded-2xl border transition-all cursor-pointer", activeTab === 'chart' ? "bg-white/5 border-purple-500/50" : "border-transparent opacity-50 hover:opacity-100")}
                   >
                      <h3 className="text-xl font-bold flex items-center gap-2"><Sparkles className="h-5 w-5" /> Interactive Charts</h3>
                      <p className="text-gray-400 mt-2 text-sm">Biến dữ liệu thô thành biểu đồ tương tác. Zoom, pan, và export báo cáo.</p>
                   </div>
                </div>
              </div>

              <div className="flex-1 w-full">
                 <div className="bg-[#0A0A10] rounded-2xl border border-white/10 overflow-hidden shadow-2xl h-[400px] flex flex-col">
                    <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-white/[0.02]">
                       <span className="text-xs text-gray-500 font-mono">demo_script.py</span>
                       <Play className="h-3 w-3 text-green-500" />
                    </div>
                    <div className="flex-1 p-6 font-mono text-sm overflow-hidden relative">
                       {activeTab === 'code' ? (
                         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                            <div className="text-pink-400">import <span className="text-white">pandas</span> as <span className="text-white">pd</span></div>
                            <div className="text-pink-400">import <span className="text-white">matplotlib.pyplot</span> as <span className="text-white">plt</span></div>
                            <br />
                            <div className="text-gray-500"># Load data</div>
                            <div>df = pd.read_csv(<span className="text-green-400">sales_2025.csv</span>)</div>
                            <div>summary = df.groupby(<span className="text-green-400">category</span>).sum()</div>
                            <br />
                            <div className="text-blue-400">{`print(summary.to_markdown())`}</div>
                         </motion.div>
                       ) : (
                         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex items-center justify-center">
                            <div className="flex items-end gap-4 h-48 w-full max-w-sm px-4 border-l border-b border-white/20">
                               <motion.div initial={{ height: 0 }} animate={{ height: "60%" }} className="flex-1 bg-purple-500/50 rounded-t" />
                               <motion.div initial={{ height: 0 }} animate={{ height: "80%" }} className="flex-1 bg-blue-500/50 rounded-t" />
                               <motion.div initial={{ height: 0 }} animate={{ height: "40%" }} className="flex-1 bg-cyan-500/50 rounded-t" />
                               <motion.div initial={{ height: 0 }} animate={{ height: "90%" }} className="flex-1 bg-pink-500/50 rounded-t" />
                            </div>
                         </motion.div>
                       )}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Integration Marquee (Simulated) */}
        <section id="integrations" className="py-20 overflow-hidden">
           <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-300">Kết nối với công cụ yêu thích của bạn</h2>
           </div>
           
           <div className="flex gap-12 justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap px-6">
              {/* Simple Text Placeholders for Logos */}
              <span className="text-xl font-bold flex items-center gap-2"><Globe className="h-5 w-5" /> Notion</span>
              <span className="text-xl font-bold flex items-center gap-2"><Database className="h-5 w-5" /> PostgreSQL</span>
              <span className="text-xl font-bold flex items-center gap-2"><Code2 className="h-5 w-5" /> GitHub</span>
              <span className="text-xl font-bold flex items-center gap-2"><Bot className="h-5 w-5" /> OpenAI</span>
              <span className="text-xl font-bold flex items-center gap-2"><Zap className="h-5 w-5" /> Claude</span>
              <span className="text-xl font-bold flex items-center gap-2"><Layers className="h-5 w-5" /> Slack</span>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative px-6">
           <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
           <div className="mx-auto max-w-4xl text-center relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Sẵn sàng nâng cấp <br/> quy trình làm việc?</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                 Trải nghiệm trợ lý AI mạnh mẽ nhất ngay trên máy tính của bạn. Mã nguồn mở, riêng tư và hoàn toàn miễn phí cho cá nhân.
              </p>
              <Button 
                className="h-14 px-8 text-lg rounded-2xl shadow-blue-500/25"
                href="https://github.com/magiskboy/nexo/releases/tag/0.1.0"
                target="_blank"
              >
                 Tải Nexo v0.1.0 <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <p className="mt-6 text-sm text-gray-500">
                Available for macOS, Windows and Linux.
              </p>
           </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-[#020205] py-12 px-6">
           <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                 <div className="h-6 w-6 rounded bg-white/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                 </div>
                 <span className="font-bold">Nexo</span>
              </div>
              <div className="text-sm text-gray-500">
                 © 2025 Nexo Project. Open Source under MIT License.
              </div>
              <div className="flex gap-6 text-gray-400">
                 <a href="#" className="hover:text-white">Privacy</a>
                 <a href="#" className="hover:text-white">Terms</a>
                 <a href="#" className="hover:text-white">Twitter</a>
              </div>
           </div>
        </footer>

      </div>
    </div>
  );
}
