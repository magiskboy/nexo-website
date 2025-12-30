import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-chat.jpg"
            alt="Chat Interface Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/85"></div>
        </div>
        
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* Badge */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-white">Đã có sẵn cho Desktop & Mobile</span>
              </div>
            </div>

            {/* Logo & Title */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-3xl"></div>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Nexo
              </h1>
              <p className="mt-6 text-2xl leading-9 text-gray-300 sm:text-3xl">
                AI Assistant cho Desktop & Mobile
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-400 sm:text-xl">
                Ứng dụng mạnh mẽ được xây dựng bằng Rust cho tương tác với Large Language Models.
                <br />
                <span className="font-semibold text-white">
                  Hiệu năng cao, đa nền tảng, trải nghiệm mượt mà.
                </span>
              </p>
              
              {/* Rust Badge */}
              <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-lg border border-orange-500/30 bg-orange-500/10 px-4 py-2 backdrop-blur-sm">
                  <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.13 0C5.396 0 .029 5.367.029 12.092c0 5.344 3.274 9.923 7.933 11.774-.11-.984-.197-2.49.041-3.566.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.13 24c6.624 0 11.99-5.367 11.99-11.991C24.12 5.367 18.754.001 12.13.001z"/>
                  </svg>
                  <span className="text-sm font-medium text-orange-300">Powered by Rust</span>
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                    <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Nhiều LLM Provider</h3>
                  <p className="mt-2 text-sm text-gray-400">OpenAI, Anthropic, Ollama và nhiều hơn nữa</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                    <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Workflow & Multi-Agent</h3>
                  <p className="mt-2 text-sm text-gray-400">Thiết kế workflow với giao diện kéo-thả</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                    <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Prompt Templates</h3>
                  <p className="mt-2 text-sm text-gray-400">Tạo và tái sử dụng prompt templates</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                    <svg className="h-6 w-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.13 0C5.396 0 .029 5.367.029 12.092c0 5.344 3.274 9.923 7.933 11.774-.11-.984-.197-2.49.041-3.566.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.13 24c6.624 0 11.99-5.367 11.99-11.991C24.12 5.367 18.754.001 12.13.001z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Powered by Rust</h3>
                  <p className="mt-2 text-sm text-gray-400">Hiệu năng cao, an toàn bộ nhớ, đa nền tảng</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <a
                  href="https://github.com/magiskboy/nexo/releases"
                  className="group relative w-full overflow-hidden rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl sm:w-auto"
                >
                  <span className="relative z-10">Tải xuống ngay</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-10"></div>
                </a>
                <a
                  href="#features"
                  className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto"
                >
                  Tìm hiểu thêm
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 sm:grid-cols-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white sm:text-4xl">10+</div>
                  <div className="mt-2 text-sm text-gray-400">LLM Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white sm:text-4xl">100%</div>
                  <div className="mt-2 text-sm text-gray-400">Open Source</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white sm:text-4xl">∞</div>
                  <div className="mt-2 text-sm text-gray-400">Workflows</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white sm:text-4xl">5+</div>
                  <div className="mt-2 text-sm text-gray-400">Platforms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="relative overflow-hidden bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Giao diện hiện đại, trải nghiệm tuyệt vời
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Nexo được xây dựng bằng Rust, mang lại hiệu năng cao và trải nghiệm mượt mà trên cả desktop và mobile. Giao diện tối giản nhưng mạnh mẽ, giúp bạn tập trung vào công việc mà không bị phân tâm. Quản lý workspace, tùy chỉnh cài đặt, và tương tác với AI một cách trực quan và hiệu quả.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#features"
                  className="text-base font-semibold leading-6 text-white hover:text-gray-300"
                >
                  Xem tính năng <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:h-[500px]">
              <Image
                src="/chat-interface.jpg"
                alt="Giao diện chat với Nexo"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Tính năng nổi bật
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Tất cả sức mạnh bạn cần, trong một giao diện đơn giản
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1: Multiple LLM Providers */}
              <div className="group relative rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-sm transition-all hover:border-gray-600 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                  <svg
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Nhiều LLM Provider
                </h3>
                <p className="mt-3 text-gray-400">
                  Tích hợp với nhiều nhà cung cấp LLM hàng đầu. Kết nối với OpenAI, Anthropic, Ollama và nhiều hơn nữa với cấu hình linh hoạt.
                </p>
              </div>

              {/* Feature 2: Workflow & Multi-Agent */}
              <div className="group relative rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-sm transition-all hover:border-gray-600 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                  <svg
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Workflow & Multi-Agent
                </h3>
                <p className="mt-3 text-gray-400">
                  Thiết kế và tự động hóa các workflow phức tạp với giao diện kéo-thả trực quan. Tích hợp MCP rộng rãi để mở rộng khả năng AI.
                </p>
              </div>

              {/* Feature 3: Prompting & Templating */}
              <div className="group relative rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-sm transition-all hover:border-gray-600 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                  <svg
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Prompting & Templating
                </h3>
                <p className="mt-3 text-gray-400">
                  Tạo, lưu và tái sử dụng các prompt template với biến số cho các workflow hiệu quả. Tối đa hóa năng suất với hệ thống template mạnh mẽ.
                </p>
              </div>

              {/* Feature 4: Data Connector */}
              <div className="group relative rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-sm transition-all hover:border-gray-600 hover:shadow-lg sm:col-span-2 lg:col-span-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                  <svg
                    className="h-6 w-6 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Data Connector
                </h3>
                <p className="mt-3 text-gray-400">
                  Kết nối với các nguồn dữ liệu và cơ sở dữ liệu bên ngoài để nâng cao tương tác AI. Tích hợp dữ liệu thời gian thực vào cuộc trò chuyện của bạn.
                </p>
              </div>

              {/* Feature 5: Easy to Use */}
              <div className="group relative rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-700 p-8 shadow-sm transition-all hover:border-gray-600 hover:shadow-lg sm:col-span-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Cực kỳ dễ sử dụng
                </h3>
                <p className="mt-3 text-lg text-gray-300">
                  Tất cả các tính năng mạnh mẽ trên được thiết kế với giao diện trực quan và dễ sử dụng. Không cần kiến thức kỹ thuật phức tạp, chỉ cần bắt đầu và sáng tạo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Interaction Showcase */}
      <section className="relative overflow-hidden bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:order-2 lg:h-[500px]">
              <Image
                src="/ai-conversation.jpg"
                alt="Giao diện conversation với AI"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Tương tác thông minh với AI
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Trải nghiệm cuộc trò chuyện tự nhiên và mạnh mẽ với các mô hình ngôn ngữ lớn. Từ coding, toán học đến các công cụ chuyên biệt - Nexo giúp bạn làm việc hiệu quả hơn với AI.
              </p>
              <ul className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Hỗ trợ đa dạng các loại nội dung: code, diagram, rich content</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Tích hợp MCP servers để mở rộng khả năng AI</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Quản lý workspace và tùy chỉnh theo nhu cầu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/chat-dark.jpg"
            alt="Chat Interface Dark Mode"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Sẵn sàng bắt đầu?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Tải xuống ngay và trải nghiệm sức mạnh của Nexo
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://github.com/magiskboy/nexo/releases"
                className="rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Tải xuống miễn phí
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm leading-5 text-gray-400">
              © 2026 Nexo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
