"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  ArrowUpRight,
  Sparkles,
  Mail,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from "@/lib/blogData";

export default function BlogListClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#0A090D] min-h-screen text-white relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#42124F]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C7A45B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#42124F]/50 border border-[#C7A45B]/30 rounded-full text-[#C7A45B] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-[#C7A45B]" />
            <span>Tubudeem Market Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white leading-tight mb-4">
            INSIGHTS & <br />
            <span className="bg-gradient-to-r from-[#C7A45B] via-[#E6CA85] to-[#F7F4EE] bg-clip-text text-transparent">
              CAPITAL PERSPECTIVES
            </span>
          </h1>

          <p className="text-[#F7F4EE]/75 text-base sm:text-lg font-light leading-relaxed">
            Rigorous analysis, market commentary, and strategic briefings on real estate, business growth, agriculture infrastructure, and West African markets.
          </p>
        </div>

        {/* Search & Category Filter Control Bar */}
        <div className="bg-[#14121A] border border-[#C7A45B]/20 rounded-2xl p-4 sm:p-6 mb-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7A45B]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, keywords..."
                className="w-full bg-[#18161D] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C7A45B] transition-colors font-mono"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              <SlidersHorizontal className="w-4 h-4 text-[#C7A45B] hidden md:block mr-2" />
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#C7A45B] text-[#0A090D] font-bold shadow-md"
                      : "bg-[#18161D] text-[#F7F4EE]/70 hover:text-white hover:bg-[#42124F]/30 border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post Card (if no search filter applied) */}
        {!searchQuery && selectedCategory === "All" && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-[#14121A] border border-[#C7A45B]/30 rounded-2xl overflow-hidden shadow-2xl group hover:border-[#C7A45B]/60 transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                <Image
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14121A] via-[#14121A]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#14121A]" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#42124F] text-[#C7A45B] font-mono text-[10px] uppercase font-bold tracking-widest rounded-md border border-[#C7A45B]/40 shadow-lg">
                    Featured Briefing
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 text-xs font-mono text-[#C7A45B] mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {featuredPost.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center text-[#F7F4EE]/60">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#C7A45B] transition-colors leading-tight mb-4 font-heading">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-[#F7F4EE]/75 text-sm leading-relaxed mb-6 font-light">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-[#42124F] border border-[#C7A45B]/50 flex items-center justify-center text-[#C7A45B] text-xs font-bold font-mono">
                      TI
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{featuredPost.author.name}</div>
                      <div className="text-[10px] text-[#F7F4EE]/50 font-mono">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-[#C7A45B] text-[#0A090D] hover:bg-white text-xs font-mono font-bold uppercase tracking-widest rounded-sm transition-all"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Article Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#14121A] border border-white/10 hover:border-[#C7A45B]/40 rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-[#42124F]/30 transition-all duration-300"
              >
                <div className="relative h-52 w-full overflow-hidden bg-[#18161D]">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14121A] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-[#0A090D]/80 backdrop-blur-md text-[#C7A45B] text-[10px] font-mono uppercase tracking-wider font-semibold rounded-md border border-[#C7A45B]/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 text-[11px] font-mono text-[#F7F4EE]/60 mb-2">
                      <span>{post.publishedAt}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#C7A45B] transition-colors leading-snug mb-3">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-[#F7F4EE]/70 text-xs leading-relaxed line-clamp-3 mb-4 font-light">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-2">
                    <span className="text-[10px] font-mono text-[#C7A45B]">
                      #{post.tags[0]}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-mono text-white group-hover:text-[#C7A45B] font-semibold transition-colors"
                    >
                      <span>Read</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#14121A] rounded-2xl border border-white/10 mb-20">
            <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
            <p className="text-[#F7F4EE]/60 text-sm mb-6">
              No market briefings match your current search query or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-5 py-2.5 bg-[#C7A45B] text-[#0A090D] font-mono text-xs font-bold uppercase tracking-widest rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Strategic Intelligence Newsletter Banner */}
        <div className="bg-gradient-to-r from-[#2B0A35] via-[#42124F] to-[#14121A] border border-[#C7A45B]/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#C7A45B]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C7A45B]/20 border border-[#C7A45B]/30 rounded-full text-[#C7A45B] text-[10px] font-mono uppercase tracking-widest mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>Institutional Dispatch</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 font-heading">
              SUBSCRIBE TO EXECUTIVE MARKET BRIEFINGS
            </h3>

            <p className="text-[#F7F4EE]/80 text-sm sm:text-base font-light mb-8 leading-relaxed">
              Receive confidential quarterly perspectives on African real estate development, venture capital debt, and macroeconomic asset allocation strategies.
            </p>

            {subscribed ? (
              <div className="flex items-center space-x-3 p-4 bg-[#C7A45B]/20 border border-[#C7A45B] rounded-xl text-white font-mono text-xs">
                <CheckCircle2 className="w-5 h-5 text-[#C7A45B]" />
                <span>You are now subscribed to Tubudeem Market Briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter institutional email address..."
                  className="flex-1 bg-[#0A090D]/80 border border-white/20 rounded-xl px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C7A45B] font-mono"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C7A45B] hover:bg-white text-[#0A090D] font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg gold-glow flex items-center justify-center whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
