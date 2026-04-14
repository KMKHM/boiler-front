import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";

const IMG = "/images/art_17017535310114_547734.jpg";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>OO보일러 | 경동나비엔 공식 대리점</title>
        <meta name="description" content="경동나비엔 공식 대리점. 보일러 교체·수리·온수기 설치. 당일 출장, 2년 무상 AS 보장." />
        <meta name="keywords" content="보일러 설치, 보일러 교체, 보일러 수리, 온수기 설치, 경동나비엔, 당일출장" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.wrapper}>

        <HeroCarousel />

        {/* SERVICES */}
        <section className={styles.section} id="services">
          <div className={styles.sectionLabel}>서비스</div>
          <h2>어떤 서비스가 필요하세요?</h2>
          <div className={styles.serviceGrid}>
            {[
              { title: "보일러 교체 설치", desc: "노후 보일러 철거 후 신제품 설치까지 일괄 진행. 당일 시공 가능.", tag: "가장 많이 찾아요" },
              { title: "보일러 수리", desc: "에러코드, 누수, 점화 불량 등 보일러 전반 수리 서비스.", tag: "긴급 출장 가능" },
              { title: "온수기 설치", desc: "가스 온수기, 전기 온수기 신규 설치 및 교체.", tag: "당일 설치" },
              { title: "분배기 교체", desc: "난방 분배기 노후화로 인한 누수, 난방 불균형 문제 해결.", tag: "견적 무료" },
            ].map((s, i) => (
              <div className={styles.serviceCard} key={i}>
                <div className={styles.serviceCardImg}>
                  <Image
                    src={IMG}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.serviceCardBody}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className={styles.serviceTag}>{s.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionLabel}>선택 이유</div>
          <h2>믿고 맡길 수 있는 이유</h2>
          <div className={styles.whyGrid}>
            {[
              { num: "01", title: "당일 출장", desc: "오전 접수 시 당일 방문 가능. 빠른 처리로 불편을 최소화합니다." },
              { num: "02", title: "투명한 가격", desc: "방문 전 정확한 견적 안내. 추가 비용 없이 처음 안내된 금액만 청구합니다." },
              { num: "03", title: "공식 대리점", desc: "경동나비엔 공식 대리점으로 정품 부품 사용 및 공식 AS 연계." },
              { num: "04", title: "2년 무상 AS", desc: "설치 후 2년간 무상 AS 제공. 문제 발생 시 즉시 재방문." },
            ].map((w, i) => (
              <div className={styles.whyItem} key={i}>
                <div className={styles.whyNum}>{w.num}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICE */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionLabel}>가격 안내</div>
          <h2>기본 요금표</h2>
          <div className={styles.priceTable}>
            {[
              { label: "보일러 교체 설치 (기본형)", value: "공임 15만원~" },
              { label: "보일러 수리 출장", value: "출장비 3만원 + 부품" },
              { label: "온수기 설치", value: "공임 8만원~" },
              { label: "분배기 교체", value: "공임 10만원~" },
            ].map((r, i) => (
              <div className={styles.priceRow} key={i}>
                <span className={styles.priceLabel}>{r.label}</span>
                <span className={styles.priceValue}>{r.value}</span>
              </div>
            ))}
          </div>
          <p className={styles.priceNote}>
            ※ 실제 금액은 현장 상황에 따라 달라질 수 있습니다. 방문 전 정확한 견적을 안내드립니다.
          </p>
        </section>

        {/* CONSULT FORM */}
        <section className={`${styles.section} ${styles.sectionDark}`} id="consult">
          <div className={styles.formInner}>
            <div className={styles.sectionLabel}>상담 신청</div>
            <h2>무료로 견적 받아보세요</h2>
            <p className={styles.formSubtitle}>평균 30분 내 연락드립니다</p>
            {submitted ? (
              <div className={styles.formSuccess}>
                접수가 완료됐습니다. 곧 연락드리겠습니다!
              </div>
            ) : (
              <form className={styles.formGrid} onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="이름 / 상호명" value={formData.name} onChange={handleChange} required />
                <input name="phone" type="tel" placeholder="연락처 (숫자만)" value={formData.phone} onChange={handleChange} required />
                <input name="address" type="text" placeholder="주소 (시 / 구 / 동까지)" value={formData.address} onChange={handleChange} className={styles.formFull} required />
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="" disabled>서비스 종류</option>
                  <option>보일러 교체 설치</option>
                  <option>보일러 수리</option>
                  <option>온수기 설치</option>
                  <option>분배기 교체</option>
                </select>
                <select name="contact" value={formData.contact} onChange={handleChange} required>
                  <option value="" disabled>연락 방법</option>
                  <option>전화</option>
                  <option>문자</option>
                  <option>카카오톡</option>
                </select>
                <textarea name="message" placeholder="문의 내용을 간략히 적어주세요 (선택)" value={formData.message} onChange={handleChange} className={styles.formFull} />
                <button type="submit" className={styles.formSubmit}>상담 신청하기</button>
                <p className={styles.formNote}>개인정보는 상담 목적으로만 사용됩니다</p>
              </form>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>OO<span>보일러</span></div>
              <div className={styles.footerLinks}>
                <a href="#">회사소개</a>
                <a href="#">이용약관</a>
                <a href="#">개인정보처리방침</a>
                <a href="#">이용안내</a>
              </div>
              <div className={styles.footerBiz}>
                <p className={styles.footerBizTitle}>쇼핑몰 기본정보</p>
                <p><strong>상호명</strong> OO보일러&nbsp;&nbsp;<strong>대표자명</strong> 홍길동</p>
                <p><strong>사업장 주소</strong> 서울특별시 ○○구 ○○동 000-00&nbsp;&nbsp;<strong>대표 전화</strong> 000-0000-0000</p>
                <p><strong>사업자 등록번호</strong> 000-00-00000&nbsp;&nbsp;<strong>통신판매업 신고번호</strong> 0000-서울○○-0000</p>
                <p><strong>개인정보보호책임자</strong> 홍길동</p>
              </div>
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerColTitle}>고객센터 정보</p>
              <p className={styles.footerColItem}>상담/주문 전화&nbsp;&nbsp;<strong>000-0000-0000</strong></p>
              <p className={styles.footerColLabel}>상담/주문 이메일</p>
              <p className={styles.footerColValue}>ooboiler@naver.com</p>
              <p className={styles.footerColLabel}>CS운영시간</p>
              <p className={styles.footerColValue}>월요일~토요일 09:00~18:00</p>
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerColTitle}>결제정보</p>
              <p className={styles.footerColLabel}>무통장 계좌정보</p>
              <p className={styles.footerColValue}>국민은행&nbsp;&nbsp;000000-00-000000</p>
              <p className={styles.footerColValue}>예금주 홍길동</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2026 OO보일러. All rights reserved.</p>
            <p>경동나비엔 공식 대리점</p>
          </div>
        </footer>

      </div>
    </>
  );
}
