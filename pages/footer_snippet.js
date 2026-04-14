        {/* FOOTER */}
        <footer className={styles.footer}>
          <div className={styles.footerTop}>
            {/* 로고 + 기본정보 */}
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>OO<span>보일러</span></div>
              <div className={styles.footerLinks}>
                <a href="#">회사소개</a>
                <a href="#">이용약관</a>
                <a href="#">개인정보처리방침</a>
                <a href="#">이용안내</a>
              </div>
              <div className={styles.footerBiz}>
                <p><strong>쇼핑몰 기본정보</strong></p>
                <p><strong>상호명</strong> OO보일러&nbsp;&nbsp;<strong>대표자명</strong> 홍길동</p>
                <p><strong>사업장 주소</strong> 서울특별시 ○○구 ○○동 000-00&nbsp;&nbsp;<strong>대표 전화</strong> 000-0000-0000</p>
                <p><strong>사업자 등록번호</strong> 000-00-00000&nbsp;&nbsp;<strong>통신판매업 신고번호</strong> 0000-서울○○-0000</p>
                <p><strong>개인정보보호책임자</strong> 홍길동</p>
              </div>
            </div>

            {/* 고객센터 */}
            <div className={styles.footerCs}>
              <p className={styles.footerColTitle}>고객센터 정보</p>
              <p className={styles.footerCsTel}>상담/주문 전화&nbsp;&nbsp;<strong>000-0000-0000</strong></p>
              <p className={styles.footerCsItem}>상담/주문 이메일</p>
              <p className={styles.footerCsValue}>ooboiler@naver.com</p>
              <p className={styles.footerCsItem}>CS운영시간</p>
              <p className={styles.footerCsValue}>월요일~토요일 09:00~18:00</p>
            </div>

            {/* 결제정보 */}
            <div className={styles.footerPay}>
              <p className={styles.footerColTitle}>결제정보</p>
              <p className={styles.footerCsItem}>무통장 계좌정보</p>
              <p className={styles.footerCsValue}>국민은행&nbsp;&nbsp;000000-00-000000</p>
              <p className={styles.footerCsValue}>예금주 홍길동</p>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2026 OO보일러. All rights reserved.</p>
            <p>경동나비엔 공식 대리점</p>
          </div>
        </footer>
