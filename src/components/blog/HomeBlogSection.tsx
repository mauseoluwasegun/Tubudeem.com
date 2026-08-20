"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Sparkles, BookOpen, ChevronRight } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blogData";

export default function HomeBlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <section id="insights" className="py-24 bg-[#0A090D] relative overflow-hidden text-white border-t border-[#C7A45B]/15">
      {/* Background Lighting Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#42124F]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#C7A45B]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#42124F]/40 border border-[#C7A45B]/30 rounded-full text-[#C7A45B] text-[11px] font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Investment Intelligence & Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white leading-tight">
              MARKET PERSPECTIVES & <br />
              <span className="bg-gradient-to-r from-[#C7A45B] via-[#E6CA85] to-[#F7F4EE] bg-clip-text text-transparent">
                STRATEGIC ANALYSIS
              </span>
            </h2>
            <p className="mt-4 text-[#F7F4EE]/70 text-base sm:text-lg font-light leading-relaxed">
              In-depth research on real estate growth corridors, capital allocation, agribusiness infrastructure, and emerging market dynamics in Nigeria.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-[#C7A45B]/40 hover:border-[#C7A45B] text-[#C7A45B] hover:text-white hover:bg-[#42124F]/50 transition-all duration-300 rounded-sm font-mono text-xs uppercase tracking-widest group shadow-md"
          >
            <span>View All Insights</span>
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {BLOG_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-[#C7A45B] text-[#0A090D] font-bold shadow-lg shadow-[#C7A45B]/20"
                  : "bg-[#18161D] text-[#F7F4EE]/70 hover:text-white hover:bg-[#42124F]/40 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Insight Banner */}
        {selectedCategory === "All" && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 group relative bg-[#14121A] border border-[#C7A45B]/20 rounded-2xl overflow-hidden shadow-2xl hover:border-[#C7A45B]/50 transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[320px] overflow-hidden">
                <Image
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14121A] via-[#14121A]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#14121A]" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-[#42124F] text-[#C7A45B] font-mono text-[10px] uppercase font-bold tracking-widest rounded-md border border-[#C7A45B]/30 shadow-md">
                    Featured Insight
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

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#C7A45B] transition-colors leading-snug mb-4 font-heading">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <p className="text-[#F7F4EE]/70 text-sm leading-relaxed line-clamp-3 mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#42124F] border border-[#C7A45B]/40 flex items-center justify-center text-[#C7A45B] text-xs font-bold font-mono">
                      TI
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{featuredPost.author.name}</div>
                      <div className="text-[10px] text-[#F7F4EE]/50 font-mono">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[#C7A45B] hover:text-white transition-colors"
                  >
                    <span>Read Full</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#14121A] border border-white/10 hover:border-[#C7A45B]/40 rounded-xl overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-[#42124F]/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-[#18161D]">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14121A] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#0A090D]/80 backdrop-blur-md text-[#C7A45B] text-[10px] font-mono uppercase tracking-wider font-semibold rounded-xs border border-[#C7A45B]/20">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-[11px] font-mono text-[#F7F4EE]/60 mb-2">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#C7A45B] transition-colors leading-snug mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-[#F7F4EE]/70 text-xs leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-2">
                  <span className="text-[11px] text-[#F7F4EE]/50 font-mono">
                    {post.tags[0]}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-mono text-[#C7A45B] hover:text-white font-semibold transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
