---
name: gsap-animation-patterns
description: GSAP animation patterns for scroll effects, hover interactions, and page transitions.
---

# GSAP Animation Patterns

## Installation

```bash
npm install gsap
```

## Basic Setup (Next.js)

```typescript
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

## Pattern 1: Fade-In on Scroll

```typescript
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
}
```

## Pattern 2: Staggered List Animation

```typescript
export function StaggeredList({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(el.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,  // 0.1s delay between each item
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <ul ref={containerRef}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
```

## Pattern 3: Magnetic Button

```typescript
export function MagneticButton({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <button ref={buttonRef}>{children}</button>;
}
```

## Pattern 4: Parallax Section

```typescript
export function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    gsap.to(image, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: image.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,  // Smooth scroll-linked animation
      },
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <img ref={imageRef} src={src} alt={alt} className="scale-125" />
    </div>
  );
}
```

## Pattern 5: Text Reveal

```typescript
export function TextReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Split text into words
    const words = text.split(' ').map((word, i) =>
      `<span class="word" style="display:inline-block">${word}</span>`
    ).join(' ');

    el.innerHTML = words;

    gsap.fromTo(el.querySelectorAll('.word'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );
  }, [text]);

  return <div ref={containerRef} />;
}
```

## Easing Cheat Sheet

| Ease | Use For |
|------|---------|
| `power2.out` | Most UI animations (natural deceleration) |
| `power2.inOut` | Section transitions |
| `elastic.out` | Bouncy, playful effects |
| `back.out` | Slight overshoot |
| `none` | Scroll-linked (scrub) animations |

## Duration Guidelines

| Type | Duration |
|------|----------|
| Hover states | 0.2s - 0.3s |
| Page elements | 0.4s - 0.6s |
| Full sections | 0.8s - 1.2s |
| Scroll-linked | Use `scrub: true` |

## Best Practices

1. **Always use refs** — Don't query DOM directly
2. **Cleanup in useEffect** — Return cleanup function
3. **Register plugins** — ScrollTrigger needs registration
4. **Use will-change sparingly** — Only for heavy animations
5. **Test on mobile** — Reduce complexity for performance
