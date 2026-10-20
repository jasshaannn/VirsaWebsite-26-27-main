"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/app/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  category?: string;
  date?: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Signature Celebrations",
  description = "Discover our vibrant cultural celebrations that showcase the rich heritage of Punjab.",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Living Traditions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous event slide"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-zinc-900 border border-white/10 text-zinc-300 hover:text-amber-300 hover:border-amber-400/50 disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-zinc-300 transition-all shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next event slide"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-zinc-900 border border-white/10 text-zinc-300 hover:text-amber-300 hover:border-amber-400/50 disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-zinc-300 transition-all shadow-md"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <Carousel
        setApi={setCarouselApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 sm:-ml-6">
          {items.map((item, index) => (
            <CarouselItem
              key={item.id || index}
              className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Link href={item.href} className="group block h-full">
                <div className="relative h-[440px] rounded-2xl overflow-hidden glass-panel border border-white/10 group-hover:border-amber-400/50 transition-all duration-500 flex flex-col justify-between p-6 shadow-xl group-hover:shadow-2xl group-hover:shadow-amber-500/10">
                  {/* Background Image with Zoom */}
                  <Image
                    src={`/${item.image}`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 -z-10"
                  />

                  {/* Dark Multi-stop Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 -z-10 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Top Meta Chips */}
                  <div className="flex items-center justify-between gap-2 z-10">
                    {item.category && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                        {item.category}
                      </span>
                    )}
                    {item.date && (
                      <span className="text-[11px] font-medium text-zinc-300 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                        {item.date}
                      </span>
                    )}
                  </div>

                  {/* Bottom Content Area */}
                  <div className="z-10 pt-6">
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors">
                      <span>Explore Event Details</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => carouselApi?.scrollTo(idx)}
            aria-label={`Jump to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === idx
                ? "w-8 bg-amber-400"
                : "w-2 bg-zinc-700 hover:bg-zinc-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export { Gallery4 };
