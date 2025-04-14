"use client";
import React, { useEffect, useState, use } from 'react';
import { useRouter, notFound } from 'next/navigation';
import Image from 'next/image';
import { blogs } from '@/utils/BlogsData';
import Form from '@/components/Form';

export default function BlogPost({ params }) {
  const router = useRouter();
  const { slug } = use(params);
  const blog = blogs.find((blog) => blog.slug === slug);

  const [showForm, setShowForm] = useState(false);
  const [formShown, setFormShown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  if (!blog) {
    notFound();
  }

  const description = typeof blog.description === 'string'
    ? blog.description
    : String(blog.description || '');

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": description.substring(0, 160),
      "author": {
        "@type": "Organization",
        "name": "Your Eye Care Center"
      },
      "datePublished": blog.datePublished || "2024-01-01T00:00:00Z",
      "image": blog.image?.src || ''
    };

    if (['lasik', 'cataract', 'glaucoma'].some(term => slug.includes(term))) {
      baseSchema["@type"] = "MedicalWebPage";
      baseSchema["medicalAudience"] = {
        "@type": "MedicalAudience",
        "audienceType": "Patients"
      };
    }

    script.innerHTML = JSON.stringify(baseSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [slug, blog.title, description, blog.image]);

  useEffect(() => {
    if (formShown) return;

    const formTriggers = {
      lasik: { time: 7000, scroll: 0.6 },
      cataract: { time: 10000, scroll: 0.5 },
      glaucoma: { time: 10000, scroll: 0.5 },
      default: { time: 15000, scroll: 0.7 }
    };

    const settings = formTriggers[slug.split('-')[0]] || formTriggers.default;

    const timer = setTimeout(() => {
      setShowForm(true);
      setFormShown(true);
    }, settings.time);

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      if (position > document.body.scrollHeight * settings.scroll) {
        setShowForm(true);
        setFormShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [slug, formShown]);

  const handleFormClose = () => {
    setShowForm(false);
    setFormShown(true);
  };

  const formatContent = (content) => {
    const safeContent = typeof content === 'string' ? content : String(content || '');
    return safeContent
      .split('\n\n')
      .map((paragraph) => {
        if (!paragraph.trim()) return '';

        if (paragraph.match(/^[A-Z][a-z]+(\s[A-Z][a-z]+)*:/)) {
          return `<h2 class="text-2xl font-semibold my-4">${paragraph}</h2>`;
        }

        if (paragraph.startsWith('- ') || paragraph.startsWith('• ')) {
          const items = paragraph.split('\n')
            .filter(item => item.trim())
            .map(item => item.replace(/^[-•]\s/, '').trim());
          return `<ul class="list-disc pl-5 mb-4">${
            items.map(item => `<li class="mb-2">${item}</li>`).join('')
          }</ul>`;
        }

        return `<p class="mb-4 leading-relaxed">${paragraph}</p>`;
      })
      .join('');
  };

  const renderTopicCTA = () => {
    const topic = slug.split('-')[0];
    const ctas = {
      lasik: "Book Free LASIK Consultation",
      cataract: "Schedule Cataract Evaluation",
      glaucoma: "Get Glaucoma Screening",
      default: "Book Eye Consultation"
    };

    return (
      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">
          {topic === 'lasik' ? 'Considering Vision Correction?' : 'Need Expert Advice?'}
        </h3>
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200"
          aria-label={ctas[topic] || ctas.default}
        >
          {ctas[topic] || ctas.default}
        </button>
      </div>
    );
  };

  const handleBlogClick = (e, slug) => {
    e.preventDefault();
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-8">
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
          <div className="relative z-50 bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 rounded-full px-2 py-1 text-lg"
              onClick={handleFormClose}
              aria-label="Close consultation form"
            >
              ✕
            </button>
            <Form context={slug.split('-')[0]} />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-4xl">
        <article className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={blog.image}
              alt={`${blog.title} | Your Eye Care Center`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {slug.split('-')[0].toUpperCase()}
              </span>
              <span className="text-sm text-gray-500">
                {Math.ceil(description.split(' ').length / 200)} min read
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-4 text-gray-900">{blog.title}</h1>

            <div
              className="prose max-w-none text-gray-700 mb-8"
              dangerouslySetInnerHTML={{ __html: formatContent(description) }}
            />

            {renderTopicCTA()}
          </div>
        </article>
      </div>
    </div>
  );
}
