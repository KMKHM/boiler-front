import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const categories = [
  { label: "보일러", items: ["보일러 교체 설치", "보일러 수리", "보일러 부품"] },
  { label: "온수기", items: ["가스 온수기", "전기 온수기", "온수기 부품"] },
  { label: "배관/자재", items: ["분배기", "연통", "가스관", "부자재"] },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>

      {/* 유틸리티 바 */}
      <div className={styles.utilBar}>
        <div className={styles.utilLeft}>
          <span>적립금 <strong>0원</strong></span>
          <span>쿠폰 <strong>0개</strong></span>
          <span>관심상품 <strong>0개</strong></span>
          <span>장바구니 <strong>0개 (0원)</strong></span>
        </div>
        <div className={styles.utilRight}>
          <Link href="#">내정보수정</Link>
          <Link href="#">로그아웃</Link>
          <Link href="#">주문조회</Link>
          <Link href="#">마이페이지</Link>
          <Link href="#">최근본상품</Link>
          <Link href="#">고객센터</Link>
        </div>
      </div>

      {/* 메인 nav */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          OO<span>보일러</span>
        </Link>

        <div className={styles.menuList}>
          {categories.map((cat) => (
            <div
              key={cat.label}
              className={styles.menuItem}
              onMouseEnter={() => setOpenMenu(cat.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span className={styles.menuLabel}>{cat.label}</span>
              {openMenu === cat.label && (
                <div className={styles.dropdown}>
                  {cat.items.map((item) => (
                    <Link href="#" key={item} className={styles.dropdownItem}>
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="#" className={styles.menuLabel}>기획전</Link>
          <Link href="#" className={styles.menuLabel}>고객센터</Link>
        </div>

        <div className={styles.iconGroup}>
          <button className={styles.iconBtn} title="검색">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button className={styles.iconBtn} title="마이페이지">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <div className={styles.cartWrap}>
            <button className={styles.iconBtn} title="장바구니">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className={styles.cartBadge}>0</span>
            </button>
          </div>
          <Link href="#consult" className={styles.navCta}>무료 상담</Link>
        </div>
      </nav>

    </header>
  );
}
