import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./HeroCarousel.module.css";

const slides = [
  {
    id: 1,
    badge: "경동나비엔 공식 대리점",
    title: "보일러 교체,",
    titleEm: "빠르고 확실하게",
    desc: "당일 출장 가능, 설치 후 AS까지 책임집니다.\n10년 경력 전문 기사가 직접 방문합니다.",
    btn1: { label: "무료 견적 받기", href: "#consult" },
    btn2: { label: "서비스 보기", href: "#services" },
    stats: [
      { num: "1,200+", label: "누적 시공 건수" },
      { num: "당일", label: "출장 가능" },
      { num: "2년", label: "무상 AS 보장" },
    ],
    tag: { title: "전문 기사 직접 시공", desc: "설치부터 마감까지 책임집니다" },
    img: "/images/art_17017535310114_547734.jpg",
    bg: "#fff",
    type: "photo",
  },
  {
    id: 2,
    badge: "온라인 보일러 쇼핑몰",
    title: "쉽고 간편하게,",
    titleEm: "클릭 한 번으로 주문",
    desc: "경동나비엔 정품 보일러·온수기·자재를\n최저가로 직접 구매하세요.",
    btn1: { label: "상품 보러가기", href: "#shop" },
    btn2: { label: "기획전 보기", href: "#promo" },
    stats: [
      { num: "정품", label: "공식 인증 제품" },
      { num: "최저가", label: "365일 특가" },
      { num: "무료", label: "배송 이벤트" },
    ],
    img: "/images/81a76c4090fa69700d05af5aeb8467fea01458883d1d13f78d925a005360.jpg",
    bg: "#EEF3F8",
    type: "banner",
  },
];

function BannerRight({ img }) {
  return (
    <div className={styles.bannerRight}>
      <div className={styles.bannerBg}>
        <div className={styles.bannerCircle1} />
        <div className={styles.bannerCircle2} />
        <div className={styles.bannerLabel}>
          <span className={styles.bannerLabelBadge}>NAVIEN 정품</span>
          <p className={styles.bannerLabelTitle}>경동나비엔 NGB554</p>
          <p className={styles.bannerLabelPrice}><s>527,273원</s>&nbsp;&nbsp;<strong>436,000원</strong></p>
        </div>
        <div className={styles.bannerImgWrap}>
          <Image
            src={img}
            alt="경동나비엔 보일러"
            fill
            sizes="40vw"
            style={{ objectFit: "contain", objectPosition: "center bottom" }}
          />
        </div>
        <div className={styles.bannerTag}>365일 특가 진행 中</div>
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className={styles.carousel} style={{ background: slide.bg }}>
      <div className={styles.left}>
        <div className={styles.badge}>{slide.badge}</div>
        <h1>
          {slide.title}<br />
          <em>{slide.titleEm}</em>
        </h1>
        <p className={styles.desc}>
          {slide.desc.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
        <div className={styles.btns}>
          <a className={styles.btnPrimary} href={slide.btn1.href}>{slide.btn1.label}</a>
          <a className={styles.btnSecondary} href={slide.btn2.href}>{slide.btn2.label}</a>
        </div>
        <div className={styles.stats}>
          {slide.stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {slide.type === "banner" ? (
        <BannerRight img={slide.img} />
      ) : (
        <div className={styles.right}>
          <Image
            src={slide.img}
            alt={slide.badge}
            fill
            sizes="(max-width: 768px) 100vw, 62vw"
            priority
            style={{ objectFit: "cover" }}
          />
          {slide.tag && (
            <div className={styles.tag}>
              <strong>{slide.tag.title}</strong>
              {slide.tag.desc}
            </div>
          )}
        </div>
      )}

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}
