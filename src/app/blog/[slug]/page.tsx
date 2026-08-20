import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft as ArrowLeftIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Share2 as Share2Icon,
  ShieldCheck as ShieldCheckIcon,
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogData";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Article Not Found | Tubudeem Investment",
    };
  }

  return {
    title: `${post.title} | Tubudeem Market Briefings`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.featuredImage }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A090D] pt-32 pb-20 text-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold mb-4 font-heading">Insight Briefing Not Found</h1>
        <p className="text-[#F7F4EE]/60 mb-8 max-w-md">
          The requested investment briefing could not be retrieved or may have been archived.
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 bg-[#C7A45B] text-[#0A090D] font-mono text-xs font-bold uppercase tracking-widest rounded-sm"
        >
          Return to All Insights
        </Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <article className="pt-28 pb-24 bg-[#0A090D] min-h-screen text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#42124F]/25 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[#C7A45B] hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Insights</span>
        </Link>

        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#C7A45B] mb-4">
          <span className="px-3 py-1 bg-[#42124F]/80 border border-[#C7A45B]/40 rounded-full font-bold uppercase tracking-widest text-[10px]">
            {post.category}
          </span>
          <span>•</span>
          <span className="flex items-center text-[#F7F4EE]/70">
            <CalendarIcon className="w-3.5 h-3.5 mr-1" />
            {post.publishedAt}
          </span>
          <span>•</span>
          <span className="flex items-center text-[#F7F4EE]/70">
            <ClockIcon className="w-3.5 h-3.5 mr-1" />
            {post.readTime}
          </span>
        </div>

        {/* Article Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Author Metadata Bar */}
        <div className="flex items-center justify-between py-5 border-y border-white/10 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#42124F] border border-[#C7A45B] flex items-center justify-center text-[#C7A45B] font-mono font-bold text-xs">
              TI
            </div>
            <div>
              <div className="text-sm font-bold text-white">{post.author.name}</div>
              <div className="text-xs text-[#C7A45B] font-mono">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-[10px] font-mono text-[#F7F4EE]/50 uppercase tracking-widest hidden sm:inline">
              CONFIDENTIAL BRIEFING
            </span>
            <div className="w-8 h-8 rounded-full bg-[#18161D] border border-white/10 flex items-center justify-center text-[#C7A45B]">
              <ShieldCheckIcon className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[320px] sm:h-[450px] w-full rounded-2xl overflow-hidden mb-12 border border-[#C7A45B]/20 shadow-2xl">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A090D] via-transparent to-transparent opacity-40" />
        </div>

        {/* Article Body Content */}
        <div
          className="prose prose-invert prose-purple max-w-none text-[#F7F4EE]/90 leading-relaxed font-light text-base sm:text-lg mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/10 mb-12">
          <span className="text-xs font-mono text-[#C7A45B] mr-2">TOPICS:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#18161D] border border-white/10 rounded-full text-xs font-mono text-[#F7F4EE]/70"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Direct Conversion Callout Box */}
        <div className="bg-gradient-to-r from-[#2B0A35] via-[#42124F] to-[#18161D] border border-[#C7A45B]/40 rounded-2xl p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[10px] font-mono text-[#C7A45B] uppercase tracking-widest block mb-2 font-bold">
                CAPITAL ALLOCATION DIRECTIVE
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                HAVE AN OPPORTUNITY MATCHING THIS CRITERIA?
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F4EE]/80 leading-relaxed">
                Tubudeem Investment is actively evaluating high-yield real estate acquisitions, venture debt proposals, and agribusiness expansions.
              </p>
            </div>

            <Link
              href="/submit-opportunity"
              className="px-6 py-3.5 bg-[#C7A45B] hover:bg-white text-[#0A090D] font-mono text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg gold-glow flex items-center justify-center whitespace-nowrap"
            >
              <span>Submit Deal Proposal</span>
              <ArrowUpRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="pt-8 border-t border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 font-heading tracking-wide">
              RELATED MARKET INSIGHTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-[#14121A] border border-white/10 hover:border-[#C7A45B]/40 rounded-xl p-5 flex flex-col justify-between group transition-all"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#C7A45B] uppercase tracking-wider block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-[#C7A45B] transition-colors leading-snug mb-2">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-[#F7F4EE]/60 line-clamp-2 mb-4 font-light">
                      {rel.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="inline-flex items-center text-xs font-mono text-[#C7A45B] hover:text-white"
                  >
                    <span>Read Article</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
